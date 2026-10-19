import { cn } from "@/lib/utils";
import { MetricSwitcher } from "./MetricSwitcher";
import { ModelDetail } from "./ModelDetail";
import { ModelRow } from "./ModelRow";
import { COLUMN_LABELS, ROW_GRID } from "./grid";
import { keyOf, type MetricRange } from "@/lib/metrics";
import type { MetricConfig, MetricId, Model, SnapshotMeta, ValueConfig } from "@/lib/types";

interface Props {
  models: Model[];
  metric: MetricConfig;
  metrics: MetricConfig[];
  onSelectMetric: (id: MetricId) => void;
  ranges: Record<string, MetricRange>;
  cfg?: ValueConfig;
  meta: SnapshotMeta;
  ranks: Record<string, Map<string, number>>;
  hovered: string | null;
  onHover: (key: string | null) => void;
  selected: string | null;
  onToggleSelect: (key: string) => void;
}

const HEAD_LABEL = "font-mono text-[9.5px] tracking-[0.12em] text-ink-3 uppercase";

/** Полоса инструментов: она же sticky-шапка столбцов. */
function InstrumentBar({ metric, metrics, onSelectMetric }: Pick<Props, "metric" | "metrics" | "onSelectMetric">) {
  return (
    <div className="sticky top-0 z-30 border-b border-line bg-page/90 backdrop-blur-md">
      <MetricSwitcher metrics={metrics} current={metric.id} onChange={onSelectMetric} className="pt-2.5" />

      <div className={cn(ROW_GRID, "hidden px-3 pt-2 pb-1.5 lg:grid")}>
        <span className={cn(HEAD_LABEL, "text-right")}>№</span>
        <span className={HEAD_LABEL}>Модель</span>
        <span className={cn(HEAD_LABEL, "text-right")}>{COLUMN_LABELS.int}</span>
        <span className={cn(HEAD_LABEL, "text-right")}>{COLUMN_LABELS.profit}</span>
        <span className={cn(HEAD_LABEL, "text-right")}>{COLUMN_LABELS.limit}</span>

        {/* Название выбранной метрики и засечки шкалы: 0…100% от лидера списка. */}
        <div className="min-w-0">
          <span className={cn(HEAD_LABEL, "block truncate")} title={metric.note}>
            {metric.label}
          </span>
          <div className="relative h-3.5">
            {[0, 25, 50, 75, 100].map((tick) => (
              <span
                key={tick}
                className="absolute top-0.5 font-mono text-[9px] tabular-nums text-ink-3"
                style={{
                  left: `${tick}%`,
                  transform: tick === 0 ? undefined : tick === 100 ? "translateX(-100%)" : "translateX(-50%)",
                }}
              >
                {tick}
              </span>
            ))}
            <span aria-hidden="true" className="absolute bottom-0 h-1.5 w-px bg-line-strong" style={{ left: 0 }} />
            <span aria-hidden="true" className="absolute bottom-0 h-1.5 w-px bg-line-strong" style={{ left: "100%" }} />
          </div>
        </div>

        <span className={cn(HEAD_LABEL, "text-right")}>{COLUMN_LABELS.value}</span>
        <span />
      </div>
    </div>
  );
}

export function ModelTable(props: Props) {
  const { models, metric, metrics, onSelectMetric, ranges, cfg, meta, ranks, onHover, selected, onToggleSelect } = props;

  return (
    <div>
      <InstrumentBar metric={metric} metrics={metrics} onSelectMetric={onSelectMetric} />

      <p className="px-3 pt-2.5 text-[11px] text-ink-3 xl:hidden">
        Кнопка ⌄ в строке раскрывает состав метрик, лимиты подписки и свойства модели.
      </p>

      <ol className="m-0 list-none p-0">
        {models.map((model, index) => {
          const key = keyOf(model);
          const expanded = selected === key;

          return (
            <ModelRow
              key={key}
              model={model}
              rank={index + 1}
              metric={metric}
              ranges={ranges}
              cfg={cfg}
              expanded={expanded}
              onToggle={() => onToggleSelect(key)}
              onHover={onHover}
              detail={
                expanded ? (
                  <div className="border-t border-line bg-surface-2 px-3 py-3 xl:hidden">
                    <ModelDetail
                      model={model}
                      meta={meta}
                      metrics={metrics}
                      ranks={ranks}
                      className="border-0 bg-transparent p-0"
                    />
                  </div>
                ) : null
              }
            />
          );
        })}
      </ol>
    </div>
  );
}
