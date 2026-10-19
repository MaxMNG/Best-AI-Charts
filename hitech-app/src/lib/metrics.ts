import type { MetricConfig, MetricId, Model, SnapshotMeta, ValueConfig, VisualPart } from "./types";

/**
 * Правила метрик — порт логики index.html, чтобы обе страницы показывали
 * одинаковые числа при одинаковом data.js.
 */

export const VALUE_DEFAULTS: ValueConfig = { weight: 0.5, iqFloor: 15, iqCeil: 55, limitFloor: 100, limitCeil: 45000 };

export type BadgeTone = "neutral" | "free" | "promo" | "plain";

export interface StatusStyle {
  text: string;
  tone: BadgeTone;
  badge: boolean;
}

export const STATUS: Record<string, StatusStyle> = {
  active: { text: "", tone: "neutral", badge: false },
  unlimited: { text: "без лимита", tone: "free", badge: true },
  "promo-4x": { text: "×4 на время", tone: "promo", badge: true },
  "promo-2x": { text: "×2 на время", tone: "promo", badge: true },
  limited: { text: "временно", tone: "promo", badge: true },
  "no-limit-data": { text: "нет данных", tone: "neutral", badge: false },
  "not-in-go": { text: "вне подписки", tone: "plain", badge: true },
};

const nf1 = new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const nf0 = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

/** Деньги: у дешёвых значений больше знаков, чтобы цифры не вырождались в $0.00. */
export function money(v: number | null | undefined, digits?: number): string {
  if (v == null || !isFinite(v)) return "—";
  const d = digits == null ? (v < 0.01 ? 4 : v < 1 ? 3 : 2) : digits;
  return `$${v.toLocaleString("ru-RU", { minimumFractionDigits: d, maximumFractionDigits: d })}`;
}

export function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/** Нижняя граница длины полосы: даже у замыкающих видно, что полоса есть. */
function clampBar(v: number): number {
  return Math.max(1.2, Math.min(100, v));
}

export function keyOf(m: Model): string {
  return String(m.aaSlug || m.name);
}

/** Тот же расчёт, что и в fetch-data.mjs — для старых снимков без valueScore. */
export function computeValueScore(m: Model, cfg: ValueConfig = VALUE_DEFAULTS): number | null {
  if (m.intelligence == null) return null;
  const iq = clamp01((m.intelligence - cfg.iqFloor) / (cfg.iqCeil - cfg.iqFloor));

  let generosity: number;
  if (m.status === "unlimited") generosity = 1;
  else if (m.efficiency == null || !isFinite(m.efficiency) || m.efficiency <= 0) return null;
  else {
    const lo = Math.log10(cfg.limitFloor);
    const hi = Math.log10(cfg.limitCeil);
    generosity = clamp01((Math.log10(m.efficiency) - lo) / (hi - lo));
  }

  return Math.round(100 * Math.pow(iq, cfg.weight) * Math.pow(generosity, 1 - cfg.weight) * 10) / 10;
}

/** Значение метрики из снимка; если поля нет (старый data.js) — считаем на месте. */
export function modelValue(m: Model, cfg: ValueConfig = VALUE_DEFAULTS): number | null {
  if (Object.prototype.hasOwnProperty.call(m, "valueScore")) return m.valueScore;
  return computeValueScore(m, cfg);
}

export function metricValue(model: Model, metric: MetricConfig, cfg: ValueConfig = VALUE_DEFAULTS): number | null {
  switch (metric.id) {
    case "visual":
      return model.visual ?? model.aesthetics ?? null;
    case "aesthetics":
      return model.aesthetics ?? model.visual ?? null;
    case "valueScore":
      return modelValue(model, cfg);
    default:
      return (model[metric.id as keyof Model] as number | null | undefined) ?? null;
  }
}

export function formatMetric(v: number | null | undefined, metric: MetricConfig): string {
  if (v === Infinity) return "∞";
  if (v == null || !isFinite(v)) return "—";
  if (metric.id === "intelligence") return nf1.format(v);
  if (metric.id === "costPerTask") return money(v);
  return nf0.format(v);
}

export interface MetricRange {
  max: number;
  min: number;
}

export function scoreRange(models: Model[], metric: MetricConfig, cfg: ValueConfig = VALUE_DEFAULTS): MetricRange {
  const finite: number[] = [];
  models.forEach((m) => {
    const v = metricValue(m, metric, cfg);
    if (v != null && isFinite(v)) finite.push(v);
  });
  const positive = finite.filter((v) => v > 0);
  return {
    max: finite.length ? Math.max(...finite) : 1,
    min: positive.length ? Math.min(...positive) : 1,
  };
}

/**
 * Длина полосы в процентах: 100% — лучшая модель списка.
 * Intelligence и цена — линейно (цена обратной пропорцией),
 * баллы 0…100 — как есть.
 */
export function barScore(model: Model, metric: MetricConfig, ranges: Record<string, MetricRange>, cfg: ValueConfig = VALUE_DEFAULTS): number {
  const v = metricValue(model, metric, cfg);
  if (v === Infinity) return 100;
  if (v == null || !isFinite(v) || v <= 0) return 0;
  if (metric.id === "costPerTask") return clampBar((100 * ranges.costPerTask.min) / v);
  if (metric.id === "valueScore" || metric.id === "reliability" || metric.id === "aesthetics" || metric.id === "visual") {
    return clampBar(v);
  }
  return clampBar((100 * v) / ranges.intelligence.max);
}

export function sortModels(models: Model[], metric: MetricConfig, cfg: ValueConfig = VALUE_DEFAULTS): Model[] {
  const dir = metric.id === "costPerTask" ? 1 : -1;
  return models.slice().sort((a, b) => {
    const av = metricValue(a, metric, cfg);
    const bv = metricValue(b, metric, cfg);
    const aOk = av != null && isFinite(av);
    const bOk = bv != null && isFinite(bv);
    if (!aOk && !bOk) return (b.intelligence || 0) - (a.intelligence || 0);
    if (!aOk) return 1;
    if (!bOk) return -1;
    if (av === bv) return (b.intelligence || 0) - (a.intelligence || 0);
    return (av - bv) * dir;
  });
}

/** Числовой столбец «Go Limit»: официальные лимиты подписки на 5-часовое окно. */
export function limitShort(m: Model): string {
  if (m.status === "unlimited") return "без лимита";
  const v = m.efficiency;
  if (v == null || !isFinite(v)) return "—";
  return nf0.format(v);
}

/** Место модели по метрике среди всего списка (только по измеренным значениям). */
export function rankMaps(models: Model[], metrics: MetricConfig[], cfg: ValueConfig = VALUE_DEFAULTS): Record<string, Map<string, number>> {
  const result: Record<string, Map<string, number>> = {};
  metrics.forEach((metric) => {
    const measured = models
      .map((m) => ({ key: keyOf(m), value: metricValue(m, metric, cfg) }))
      .filter((row) => row.value != null && isFinite(row.value));
    measured.sort((a, b) => {
      const diff = metric.id === "costPerTask" ? (a.value as number) - (b.value as number) : (b.value as number) - (a.value as number);
      return diff || a.key.localeCompare(b.key);
    });
    const map = new Map<string, number>();
    measured.forEach((row, i) => map.set(row.key, i + 1));
    result[metric.id] = map;
  });
  return result;
}

export const VISUAL_PART_LABELS: Record<string, string> = {
  img2web: "По скриншотам",
  webdev: "UI (WebDev)",
  vision: "Зрение (Vision)",
};

/** Короткие подписи компонентов «Надёжности» для строки-состава в карточке. */
export const RELIABILITY_SHORT: Record<string, string> = {
  intelligence: "Intelligence",
  gdpval: "GDPval",
  contextWindow: "Контекст",
  nonHallucination: "Omniscience",
  itbenchSre: "ITBench-SRE",
};

export const RELIABILITY_LABELS: Record<string, string> = {
  intelligence: "Сила модели (Intelligence)",
  gdpval: "Рабочие задачи (GDPval)",
  contextWindow: "Объём контекста",
  nonHallucination: "Без галлюцинаций (Omniscience)",
  itbenchSre: "Диагностика сбоев (ITBench-SRE)",
};

export function visualPartsOf(m: Model): Record<string, VisualPart> | null {
  return m.visualParts ?? m.aestheticsParts ?? null;
}

/**
 * Кнопки сортировки. «Визуал» идёт сразу после Intelligence: оба про «насколько
 * модель хороша», только Intelligence — про ум, а «Визуал» — про зрение, скриншоты
 * и UI. «Надёжность» появляется только если она есть в снимке.
 */
export function buildMetrics(meta: SnapshotMeta): MetricConfig[] {
  const notes = meta.notes;
  const list: MetricConfig[] = [
    {
      id: "intelligence",
      section: "aa",
      label: "Intelligence",
      hint: "Индекс AA",
      note: notes.intelligence ?? "",
    },
  ];

  const visualNote = notes.visual ?? notes.aesthetics;
  if ((meta.visual || meta.aesthetics) && visualNote) {
    list.push({
      id: meta.visual ? "visual" : "aesthetics",
      section: "aa",
      label: "Визуал",
      hint: "зрение, скриншоты, UI",
      note: visualNote,
    });
  }

  if (notes.reliability) {
    list.push({ id: "reliability", section: "aa", label: "Надёжность", hint: "сложные задачи", note: notes.reliability });
  }

  list.push(
    {
      id: "costPerTask",
      section: "aa",
      label: "Cost per Intelligence",
      hint: "цена задачи",
      note: notes.costPerTask ?? "",
    },
    {
      id: "valueScore",
      section: "oc",
      label: "OpenCode Go Эффективность",
      hint: "выгода подписки",
      note: notes.efficiency ?? "",
    },
  );

  return list;
}

export function metricById(metrics: MetricConfig[], id: MetricId | null | undefined): MetricConfig {
  return metrics.find((m) => m.id === id) ?? metrics[0];
}

export function updatedAt(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return "—";
  return date.toLocaleString("ru-RU", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function shortDate(iso: string | undefined | null): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function shortDateTime(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return "—";
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Контекстное окно: 1 000 000 → «1M», 128 000 → «128K». */
export function tokensShort(v: number | null | undefined): string {
  if (v == null || !isFinite(v)) return "—";
  if (v >= 1_000_000) return `${nf0.format(v / 1_000_000)}M`;
  if (v >= 1_000) return `${nf0.format(v / 1_000)}K`;
  return nf0.format(v);
}

export function formatCount(v: number | null | undefined): string {
  if (v == null || !isFinite(v)) return "—";
  return nf0.format(v);
}

export function formatRating(v: number | null | undefined): string {
  if (v == null || !isFinite(v)) return "—";
  return nf1.format(v);
}
