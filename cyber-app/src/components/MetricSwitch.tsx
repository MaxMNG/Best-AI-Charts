import { motion } from 'framer-motion';
import type { AiData, MetricDef, MetricId } from '../lib/data';
import { cn } from '../lib/cn';

export function MetricSwitch({
  metrics,
  current,
  onPick,
}: {
  metrics: MetricDef[];
  current: MetricId;
  onPick: (id: MetricId) => void;
}) {
  const aa = metrics.filter((m) => m.section === 'aa');
  const oc = metrics.filter((m) => m.section === 'oc');
  const group = (list: MetricDef[]) => (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Метрика">
      {list.map((m) => {
        const active = m.id === current;
        return (
          <motion.button
            key={m.id}
            type="button"
            title={m.note || `${m.label} — ${m.hint}`}
            aria-pressed={active}
            onClick={() => onPick(m.id)}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'rounded-md border px-3 py-1.5 font-display text-[13px] font-semibold tracking-wide transition-all duration-150 hover:scale-105 active:scale-95',
              active
                ? 'border-transparent text-on-accent'
                : 'glass text-muted hover:text-foreground',
            )}
            style={
              active
                ? { background: 'var(--accent)', boxShadow: 'var(--glow)' }
                : undefined
            }
          >
            {m.label}
          </motion.button>
        );
      })}
    </div>
  );
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {group(aa)}
      {oc.length > 0 && (
        <>
          <span aria-hidden className="hidden h-6 w-px bg-rule sm:block" />
          {group(oc)}
        </>
      )}
    </div>
  );
}

export function PlotLabel({ data, metric }: { data: AiData; metric: MetricDef }) {
  return (
    <div className="mt-4 mb-1 flex items-baseline justify-between">
      <span className="font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-accent neon-text">
        {metric.label}
      </span>
      <span className="font-mono2 text-[11px] text-muted">
        Обновлено {formatGen(data)}
      </span>
    </div>
  );
}

import { formatDate } from '../lib/data';
function formatGen(data: AiData): string {
  return formatDate(data.meta.generatedAt);
}
