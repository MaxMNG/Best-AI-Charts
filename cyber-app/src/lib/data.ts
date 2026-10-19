import { FALLBACK_DATA } from '../fallback-data';

/** Типы снимка window.AI_DATA (см. fetch-data.mjs и index.html). */

export interface AiModel {
  name: string;
  creator?: string;
  color?: string;
  intelligence?: number | null;
  reliability?: number | null;
  visual?: number | null;
  aesthetics?: number | null;
  costPerTask?: number | null;
  valueScore?: number | null;
  efficiency?: number | null;
  inGo?: boolean;
  freeInOc?: boolean;
  status?: string;
  aaSlug?: string;
  visualParts?: unknown;
}

export interface AiMeta {
  generatedAt?: string;
  counts?: { inGo?: number; extraFromAA?: number; unmatched?: number };
  sources?: { goDocs?: string; aa?: string };
  value?: { weight?: number; iqFloor?: number; iqCeil?: number; limitFloor?: number; limitCeil?: number };
  visual?: { arena?: { asOf?: string } };
  aesthetics?: { arena?: { asOf?: string } };
  notes?: Record<string, string>;
}

export interface AiData {
  meta: AiMeta;
  models: AiModel[];
}

export type MetricId = 'intelligence' | 'visual' | 'reliability' | 'costPerTask' | 'valueScore';

export interface MetricDef {
  id: MetricId;
  section: 'aa' | 'oc';
  label: string;
  hint: string;
  note: string;
  dir: -1 | 1; // -1: больше лучше, 1: меньше лучше
}

const nf1 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1, minimumFractionDigits: 1 });
const nf0 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
const nfMoney2 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const nfMoney3 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 3, minimumFractionDigits: 3 });
const nfMoney4 = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 4, minimumFractionDigits: 4 });

export const fmtInt = (v: number | null | undefined): string =>
  v === null || v === undefined || Number.isNaN(v) ? '—' : nf1.format(v);
export const fmtScore = (v: number | null | undefined): string =>
  v === null || v === undefined || Number.isNaN(v) ? '—' : nf0.format(v);

export function money(v: number | null | undefined): string {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  if (v === Infinity) return '∞';
  if (v < 0.01) return '$' + nfMoney4.format(v);
  if (v < 1) return '$' + nfMoney3.format(v);
  return '$' + nfMoney2.format(v);
}

export function limitShort(m: AiModel): string {
  if (m.status === 'unlimited') return 'без лимита';
  return fmtScore(m.efficiency);
}

export function formatDate(iso?: string): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function shortTime(iso?: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

/** Значение метрики; visual↔aesthetics взаимозаменяемы (старые снимки). */
export function metricValue(m: AiModel, id: MetricId): number | null {
  if (id === 'visual') {
    const v = m.visual ?? m.aesthetics;
    return v === undefined ? null : v;
  }
  if (id === 'valueScore') return modelValue(m);
  const v = m[id];
  return v === undefined ? null : (v as number | null);
}

const VALUE_DEFAULTS = { weight: 0.5, iqFloor: 15, iqCeil: 55, limitFloor: 100, limitCeil: 45000 };

function clamp01(x: number): number {
  return Math.min(1, Math.max(0, x));
}

/** Запасной расчёт OpenCode Go Эффективности, если в снимке нет valueScore. */
export function computeValueScore(m: AiModel, meta: AiMeta): number | null {
  const cfg = meta.value ?? VALUE_DEFAULTS;
  const w = cfg.weight ?? 0.5;
  if (m.intelligence === null || m.intelligence === undefined) return null;
  const iq = clamp01((m.intelligence - cfg.iqFloor!) / (cfg.iqCeil! - cfg.iqFloor!));
  let generosity: number | null = null;
  if (m.status === 'unlimited') generosity = 1;
  else if (m.efficiency !== null && m.efficiency !== undefined && m.efficiency > 0)
    generosity = clamp01(
      (Math.log10(m.efficiency) - Math.log10(cfg.limitFloor!)) /
        (Math.log10(cfg.limitCeil!) - Math.log10(cfg.limitFloor!)),
    );
  if (generosity === null) return null;
  return Math.round(100 * Math.pow(iq, w) * Math.pow(generosity, 1 - w) * 10) / 10;
}

export function modelValue(m: AiModel, meta?: AiMeta): number | null {
  if (m.valueScore !== null && m.valueScore !== undefined) return m.valueScore;
  if (!meta) return null;
  return computeValueScore(m, meta);
}

export function buildMetrics(data: AiData): MetricDef[] {
  const notes = data.meta.notes ?? {};
  const hasVisual = Boolean(data.meta.visual || (data.meta as AiMeta).aesthetics);
  const visualNote = notes.visual || notes.aesthetics || '';
  const list: MetricDef[] = [
    {
      id: 'intelligence',
      section: 'aa',
      label: 'Intelligence',
      hint: 'общий IQ',
      note: notes.intelligence ?? '',
    },
  ];
  if (hasVisual && visualNote)
    list.push({
      id: 'visual',
      section: 'aa',
      label: 'Визуал',
      hint: 'зрение, скриншоты, UI',
      note: visualNote,
    });
  if (notes.reliability)
    list.push({
      id: 'reliability',
      section: 'aa',
      label: 'Надёжность',
      hint: 'сложные задачи и ревью',
      note: notes.reliability,
    });
  list.push(
    {
      id: 'costPerTask',
      section: 'aa',
      label: 'Cost per Intelligence',
      hint: 'эффективность',
      note: notes.costPerTask ?? '',
    },
    {
      id: 'valueScore',
      section: 'oc',
      label: 'OpenCode Go Эффективность',
      hint: 'эффективность по подписке',
      note: notes.efficiency ?? '',
    },
  );
  return list;
}

export function formatMetric(m: AiModel, id: MetricId, meta: AiMeta): string {
  const v = id === 'valueScore' ? modelValue(m, meta) : metricValue(m, id);
  if (v === Infinity) return 'без лимита';
  if (id === 'costPerTask') return money(v);
  if (id === 'intelligence') return fmtInt(v);
  return fmtScore(v);
}

/** Диапазон для нормировки бара текущей метрики. */
function scoreRange(models: AiModel[], id: MetricId, meta: AiMeta): { min: number; max: number } {
  let min = Infinity;
  let max = -Infinity;
  for (const m of models) {
    const v = id === 'valueScore' ? modelValue(m, meta) : metricValue(m, id);
    if (v === null || v === undefined || Number.isNaN(v) || v === Infinity) continue;
    if (id === 'costPerTask' && v <= 0) continue;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max };
}

/** Длина бара 0…100 (в оригинале clamp снизу 1.2 — здесь честный 0, min-width даёт CSS). */
export function barScore(m: AiModel, id: MetricId, models: AiModel[], meta: AiMeta): number {
  const v = id === 'valueScore' ? modelValue(m, meta) : metricValue(m, id);
  if (v === Infinity) return 100;
  if (v === null || v === undefined || Number.isNaN(v) || (v as number) <= 0) return 0;
  if (id === 'costPerTask') {
    const { min } = scoreRange(models, id, meta);
    if (!Number.isFinite(min) || min <= 0) return 0;
    return Math.min(100, Math.max(0, (100 * min) / (v as number)));
  }
  if (id === 'valueScore' || id === 'reliability' || id === 'visual')
    return Math.min(100, Math.max(0, v as number));
  const { max } = scoreRange(models, id, meta);
  if (!Number.isFinite(max) || max <= 0) return 0;
  return Math.min(100, Math.max(0, (100 * (v as number)) / max));
}

export function sortModels(models: AiModel[], id: MetricId, meta: AiMeta): AiModel[] {
  const dir: -1 | 1 = id === 'costPerTask' ? 1 : -1;
  const val = (m: AiModel): number | null =>
    id === 'valueScore' ? modelValue(m, meta) : metricValue(m, id);
  return [...models].sort((a, b) => {
    const va = val(a);
    const vb = val(b);
    const fa = va === null || va === undefined || Number.isNaN(va);
    const fb = vb === null || vb === undefined || Number.isNaN(vb);
    if (fa && fb) return (b.intelligence ?? -Infinity) - (a.intelligence ?? -Infinity);
    if (fa) return 1;
    if (fb) return -1;
    if (va === vb) return (b.intelligence ?? -Infinity) - (a.intelligence ?? -Infinity);
    return dir === 1 ? (va as number) - (vb as number) : (vb as number) - (va as number);
  });
}

export interface StatusInfo {
  text: string;
  kind: 'hidden' | 'free' | 'promo' | 'plain' | 'muted';
}

export function statusOf(m: AiModel): StatusInfo {
  switch (m.status) {
    case 'active':
      return { text: '', kind: 'hidden' };
    case 'unlimited':
      return { text: 'без лимита', kind: 'free' };
    case 'promo-4x':
      return { text: '×4 на время', kind: 'promo' };
    case 'promo-2x':
      return { text: '×2 на время', kind: 'promo' };
    case 'limited':
      return { text: 'временно', kind: 'promo' };
    case 'no-limit-data':
      return { text: 'нет данных', kind: 'muted' };
    case 'not-in-go':
      return { text: 'вне подписки', kind: 'plain' };
    default:
      return { text: '', kind: 'hidden' };
  }
}

export interface NoteBlock {
  title: string;
  html: string;
}

/** Примечания внизу — тот же порядок и состав, что в index.html. */
export function buildNotes(data: AiData): NoteBlock[] {
  const notes = data.meta.notes ?? {};
  const out: NoteBlock[] = [];
  if (notes.intelligence) out.push({ title: 'Intelligence', html: notes.intelligence });
  if (notes.reliability) out.push({ title: 'Надёжность', html: notes.reliability });
  if (notes.costPerTask) out.push({ title: 'Cost per Intelligence', html: notes.costPerTask });
  const visualNote = notes.visual || notes.aesthetics;
  if (visualNote) {
    const asOf = data.meta.visual?.arena?.asOf ?? data.meta.aesthetics?.arena?.asOf;
    out.push({
      title: 'Визуал',
      html: visualNote + (asOf ? ` Данные арен на ${asOf}.` : ''),
    });
  }
  if (notes.efficiency)
    out.push({ title: 'OpenCode Go Эффективность', html: notes.efficiency });
  if (notes.free) out.push({ title: 'Бесплатно в OpenCode', html: notes.free });
  const unmatched = data.meta.counts?.unmatched ?? 0;
  if (unmatched > 0)
    out.push({
      title: 'Без данных',
      html:
        `У ${unmatched} моделей из подписки пока нет карточки на Artificial Analysis — ` +
        'у них прочерк. Если название разошлось, допишите пару в models.config.js.',
    });
  return out;
}

/* ---------- Загрузка ---------- */

/** Кандидаты URL свежего снимка: рядом с собранной страницей лежит ../data.js. */
const CANDIDATES = [
  '../data.js',
  './data.js',
  '/Best-AI-Charts/data.js',
  'data.js',
];

function parseWindowJs(text: string): AiData {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('bad snapshot');
  return JSON.parse(text.slice(start, end + 1)) as AiData;
}

/** Свежий снимок с обходом кэша; при неудаче — null (используем встроенный). */
export async function fetchFresh(signal?: AbortSignal): Promise<AiData | null> {
  for (const base of CANDIDATES) {
    try {
      const res = await fetch(`${base}?t=${Date.now()}`, { cache: 'no-store', signal });
      if (!res.ok) continue;
      const text = await res.text();
      if (!text.includes('AI_DATA')) continue;
      return parseWindowJs(text);
    } catch {
      continue;
    }
  }
  return null;
}

export function getFallback(): AiData {
  return FALLBACK_DATA as AiData;
}
