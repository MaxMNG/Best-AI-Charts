import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { MetricConfig, MetricId } from "@/lib/types";

interface Props {
  metrics: MetricConfig[];
  current: MetricId;
  onChange: (id: MetricId) => void;
  className?: string;
}

/**
 * Переключатель метрик: группа radio с «скользящим» таб-стопом — стрелки
 * двигают выбор, Tab входит и выходит из группы целиком.
 */
export function MetricSwitcher({ metrics, current, onChange, className }: Props) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = metrics.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next == null) return;
    event.preventDefault();
    refs.current[next]?.focus();
    onChange(metrics[next].id);
  }

  let section: MetricConfig["section"] | null = null;

  return (
    <div
      role="radiogroup"
      aria-label="Сортировка по метрике"
      className={cn("hi-scroll flex items-stretch gap-1.5 overflow-x-auto pb-0.5", className)}
    >
      {metrics.map((metric, index) => {
        const active = metric.id === current;
        const startsGroup = section !== null && metric.section !== section;
        section = metric.section;

        return (
          <div key={metric.id} role="presentation" className="flex items-stretch">
            {startsGroup ? (
              <span aria-hidden="true" className="mx-1.5 w-px shrink-0 self-stretch bg-line" />
            ) : null}
            <button
              ref={(el) => {
                refs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              title={metric.note}
              onClick={() => onChange(metric.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "flex min-w-0 shrink-0 flex-col items-start rounded-[3px] border px-3 py-1.5 text-left",
                "transition-all duration-200 ease-out hover:scale-105 active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                active
                  ? "border-ink bg-ink text-page"
                  : "border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-2",
              )}
            >
              <span className="text-[13px] leading-5 font-medium whitespace-nowrap">{metric.label}</span>
              <span className={cn("text-[10.5px] leading-4 whitespace-nowrap", active ? "text-page/70" : "text-ink-3")}>
                {metric.hint}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
