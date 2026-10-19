import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { ROW_GRID } from "./grid";
import {
  STATUS,
  barScore,
  formatMetric,
  limitShort,
  metricValue,
  modelValue,
  type MetricRange,
} from "@/lib/metrics";
import type { MetricConfig, Model, ValueConfig } from "@/lib/types";

/** Локальные конфиги только для форматирования чисел в столбцах. */
const INTELLIGENCE: MetricConfig = { id: "intelligence", section: "aa", label: "Intelligence", hint: "", note: "" };
const VALUE: MetricConfig = { id: "valueScore", section: "oc", label: "OpenCode Go Эффективность", hint: "", note: "" };

interface Props {
  model: Model;
  rank: number;
  metric: MetricConfig;
  ranges: Record<string, MetricRange>;
  cfg?: ValueConfig;
  expanded: boolean;
  onToggle: () => void;
  onHover: (key: string | null) => void;
  detail?: ReactNode;
}

function Cell({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="min-w-0">
      <span className="block font-mono text-[9.5px] tracking-wide text-ink-3 uppercase lg:hidden">{label}</span>
      <span
        className={cn(
          "block font-mono text-[12.5px] tabular-nums lg:text-right",
          emphasis ? "font-medium text-ink" : "text-ink-2",
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function ModelRow({ model, rank, metric, ranges, cfg, expanded, onToggle, onHover, detail }: Props) {
  const dim = !model.inGo;
  const status = STATUS[model.status] ?? STATUS.active;
  const score = barScore(model, metric, ranges, cfg);
  const value = metricValue(model, metric, cfg);
  const valueText = value === Infinity ? "без лимита" : formatMetric(value, metric);
  const numericValue = typeof value === "number" && isFinite(value) ? value : undefined;

  return (
    <li
      className="group border-t border-line first:border-t-0"
      onMouseEnter={() => onHover(model.aaSlug || model.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className={cn(
          ROW_GRID,
          "relative px-3 py-2.5 transition-colors duration-200 lg:min-h-11 lg:py-0",
          dim ? "text-ink-3" : "text-ink",
          expanded ? "bg-brand-soft/50" : "hover:bg-surface-2",
        )}
      >
        <span className="hidden font-mono text-[11px] tabular-nums text-ink-3 lg:block lg:text-right">{rank}</span>

        <div className="flex min-w-0 items-center gap-2 pr-8 lg:pr-0">
          <span className="font-mono text-[11px] tabular-nums text-ink-3 lg:hidden">{rank}</span>
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full"
            style={{ background: model.color, opacity: dim ? 0.45 : 1 }}
          />
          <span className={cn("truncate text-[13.5px] font-medium", dim && "font-normal text-ink-2")} title={`${model.name} · ${model.creator}`}>
            {model.name}
          </span>
          {status.badge ? <Badge tone={status.tone}>{status.text}</Badge> : null}
          {model.freeInOc ? (
            <Badge tone="free" title="Доступна в OpenCode бесплатно — без подписки Go">
              Free
            </Badge>
          ) : null}
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-x-3 gap-y-1 lg:contents lg:mt-0">
          <Cell label="Int" value={formatMetric(model.intelligence, INTELLIGENCE)} emphasis={!dim} />
          <Cell label="Go Profit" value={formatMetric(modelValue(model, cfg), VALUE)} />
          <Cell label="Go Limit" value={limitShort(model)} />
        </div>

        <div className="mt-2.5 flex items-center gap-3 lg:mt-0">
          <div
            className="relative h-2 flex-1 overflow-hidden rounded-[2px] bg-track lg:h-[7px]"
            role="img"
            aria-label={`${metric.label} модели ${model.name}: ${valueText}`}
          >
            <div
              className="h-full rounded-[2px] bg-bar transition-[width] duration-500 ease-out motion-reduce:transition-none"
              style={{ width: `${score}%`, opacity: dim ? 0.4 : 1 }}
            />
          </div>
          <span className="shrink-0 font-mono text-[12.5px] tabular-nums text-ink-2 lg:hidden">{valueText}</span>
        </div>

        <span
          className={cn(
            "hidden font-mono text-[12.5px] tabular-nums lg:block lg:text-right",
            numericValue == null ? "text-ink-3" : dim ? "text-ink-2" : "font-medium text-ink",
          )}
        >
          {valueText}
        </span>

        <button
          type="button"
          onClick={onToggle}
          aria-pressed={expanded}
          aria-label={expanded ? `Скрыть подробности: ${model.name}` : `Подробности: ${model.name}`}
          title="Подробности о модели"
          className={cn(
            "absolute top-3 right-2 inline-flex size-6 items-center justify-center rounded-[3px] border border-line text-ink-3",
            "transition-all duration-200 ease-out hover:scale-105 hover:border-line-strong hover:text-ink active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-page",
            "lg:static lg:size-6 lg:border-transparent",
            expanded
              ? "text-ink opacity-100"
              : "text-ink-3 opacity-100 lg:can-hover:opacity-0 lg:can-hover:group-hover:opacity-100 lg:can-hover:group-focus-within:opacity-100",
          )}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className={cn("size-3 transition-transform duration-200", expanded && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5L8 10.5l4-4" />
          </svg>
        </button>
      </div>

      {detail}
    </li>
  );
}
