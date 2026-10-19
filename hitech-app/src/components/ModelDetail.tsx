import type { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  RELIABILITY_SHORT,
  STATUS,
  VISUAL_PART_LABELS,
  formatCount,
  formatMetric,
  formatRating,
  keyOf,
  limitShort,
  metricValue,
  money,
  tokensShort,
  visualPartsOf,
} from "@/lib/metrics";
import type { MetricConfig, Model, SnapshotMeta } from "@/lib/types";

interface Props {
  model: Model;
  meta: SnapshotMeta;
  metrics: MetricConfig[];
  ranks: Record<string, Map<string, number>>;
  className?: string;
}

function Section({ title, children, note }: { title: string; children: ReactNode; note?: string }) {
  return (
    <section className="border-t border-line pt-3 first:border-t-0 first:pt-0">
      <h3 className="font-mono text-[9.5px] tracking-[0.12em] text-ink-3 uppercase">{title}</h3>
      <div className="mt-1.5">{children}</div>
      {note ? <p className="mt-1.5 text-[11px] leading-snug text-ink-3">{note}</p> : null}
    </section>
  );
}

function Row({ label, value, hint, title }: { label: string; value: ReactNode; hint?: string; title?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-[3px]" title={title}>
      <span className="min-w-0 text-[12px] text-ink-2">{label}</span>
      <span className="flex shrink-0 items-baseline gap-1.5 font-mono text-[12.5px] tabular-nums text-ink">
        <span>{value}</span>
        {hint ? <span className="text-[10px] text-ink-3">{hint}</span> : null}
      </span>
    </div>
  );
}

/**
 * Карточка-спецификация модели: и в боковой панели на широком экране,
 * и в раскрытии строки на узком.
 */
export function ModelDetail({ model, meta, metrics, ranks, className }: Props) {
  const rankOf = (id: MetricConfig["id"]) => {
    const rank = ranks[id]?.get(keyOf(model));
    return rank ? `№${rank}` : undefined;
  };

  const status = STATUS[model.status] ?? STATUS.active;
  const parts = visualPartsOf(model);
  const visualComponents = meta.visual?.components ?? meta.aesthetics?.components ?? [];
  const reliabilityComponents = meta.reliability?.components ?? [];
  const go = model.go;

  /** Конфиг метрики из снимка; если её в снимке нет — подставляем синтетический. */
  const resolve = (id: MetricConfig["id"]): MetricConfig =>
    metrics.find((m) => m.id === id) ?? { id, section: "aa", label: id, hint: "", note: "" };

  const intMetric = resolve("intelligence");
  const visualMetric = resolve("visual");
  const relMetric = resolve("reliability");
  const costMetric = resolve("costPerTask");
  const valueMetric = resolve("valueScore");

  const valueOf = (metric: MetricConfig) => metricValue(model, metric, meta.value);

  return (
    <div className={cn("rounded-[4px] border border-line bg-surface p-4", className)}>
      <div className="flex items-start gap-2">
        <span aria-hidden="true" className="mt-[6px] size-2.5 shrink-0 rounded-full" style={{ background: model.color }} />
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-[15px] leading-snug font-semibold break-words">{model.name}</h2>
          <p className="mt-0.5 text-[12px] text-ink-2">
            {model.creator}
            {model.aaName && model.aaName !== model.name ? ` · на AA: ${model.aaName}` : ""}
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
        {model.freeInOc ? (
          <Badge tone="free" title="Доступна в OpenCode бесплатно — без подписки Go">
            Free
          </Badge>
        ) : null}
        {status.badge ? <Badge tone={status.tone}>{status.text}</Badge> : null}
        {model.aaUrl ? (
          <a
            className="font-mono text-[10.5px] text-ink-3 underline decoration-line decoration-1 underline-offset-2 transition-colors hover:text-ink-2"
            href={model.aaUrl}
            target="_blank"
            rel="noreferrer"
          >
            карточка на AA
          </a>
        ) : (
          <Badge tone="plain">нет карточки на AA</Badge>
        )}
      </div>

      <div className="mt-3.5 space-y-3.5">
        <Section title="Метрики" note={model.intelligenceEstimated ? "Intelligence оценён по ближайшим моделям." : undefined}>
          <Row label="Intelligence" value={formatMetric(model.intelligence, intMetric)} hint={rankOf("intelligence")} />
          {valueOf(visualMetric) != null ? (
            <Row label="Визуал" value={formatMetric(valueOf(visualMetric), visualMetric)} hint={rankOf(visualMetric.id)} />
          ) : null}
          {valueOf(relMetric) != null ? (
            <Row label="Надёжность" value={formatMetric(valueOf(relMetric), relMetric)} hint={rankOf("reliability")} />
          ) : null}
          <Row label="Cost per Intelligence" value={formatMetric(model.costPerTask, costMetric)} hint={rankOf("costPerTask")} />
          <Row
            label="OpenCode Go Эффективность"
            value={formatMetric(valueOf(valueMetric), valueMetric)}
            hint={rankOf("valueScore")}
          />
          <Row label="Лимит подписки" value={limitShort(model)} hint="запросов / 5 ч" />
        </Section>

        <Section
          title="Визуал: из чего складывается"
          note={
            parts
              ? "Голоса людей в аренах LMArena, приведённые к баллу 0–100."
              : "В снимке нет данных арен: у модели нет карточки на AA или не нашлось имя. Балл «Визуала» — прочерк."
          }
        >
          {visualComponents.length && parts ? (
            visualComponents.map((component) => {
              const part = parts[component.key];
              return (
                <Row
                  key={component.key}
                  label={`${VISUAL_PART_LABELS[component.key] ?? component.key} · ${Math.round(component.weight * 100)}%`}
                  value={formatRating(part?.value)}
                  hint={part?.rank ? `№${part.rank}` : undefined}
                  title={part?.n ? `${formatCount(part.n)} голосов` : undefined}
                />
              );
            })
          ) : (
            <Row label="Ареновые данные" value="—" />
          )}
        </Section>

        <Section
          title="Надёжность: состав"
          note="Веса заданы в models.config.js; значения компонентов считаются при сборке снимка и в data.js не сохраняются."
        >
          {reliabilityComponents.length ? (
            <p className="font-mono text-[11px] leading-relaxed text-ink-2">
              {reliabilityComponents.map((component, index) => (
                <span key={component.key} title={`якоря ${component.floor}…${component.ceil}`}>
                  {index > 0 ? <span className="text-ink-3"> · </span> : null}
                  {RELIABILITY_SHORT[component.key] ?? component.key}{" "}
                  <span className="text-ink">{Math.round(component.weight * 100)}%</span>
                </span>
              ))}
            </p>
          ) : (
            <Row label="Компоненты" value="—" />
          )}
        </Section>

        <Section title="Подписка OpenCode Go" note={model.inGo ? undefined : "Модель не входит в подписку Go — добавлена для сравнения."}>
          {go ? (
            <>
              <Row label="Цена за 1M токенов" value={`${money(go.input)} / ${money(go.output)}`} hint="вход / выход" />
              {go.cachedRead != null ? <Row label="Кэш-чтение за 1M" value={money(go.cachedRead)} /> : null}
              <Row label="Запросов в 5 ч" value={limitShort(model)} />
              <Row label="Запросов: неделя / месяц" value={`${formatCount(go.requestsWeek)} / ${formatCount(go.requestsMonth)}`} />
              {go.limitRaw ? <Row label="Месячный лимит расходов" value={go.limitRaw} /> : null}
              {go.costPerRequest != null ? <Row label="Стоимость одного запроса" value={money(go.costPerRequest, 4)} /> : null}
            </>
          ) : (
            <Row label="Тариф подписки" value="—" />
          )}
        </Section>

        <Section title="Прочее">
          <Row label="Контекст" value={tokensShort(model.contextWindow)} hint="токенов" />
          <Row label="Рассуждающая модель" value={model.isReasoning ? "да" : "нет"} />
          <Row label="Открытые веса" value={model.isOpenWeights ? "да" : "нет"} />
        </Section>
      </div>
    </div>
  );
}
