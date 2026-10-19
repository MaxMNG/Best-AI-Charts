import { motion, useReducedMotion } from 'framer-motion';
import type { AiData, AiModel, MetricId } from '../lib/data';
import { barScore, fmtInt, fmtScore, formatMetric, limitShort, modelValue, statusOf } from '../lib/data';
import { cn } from '../lib/cn';

function Badge({ text, kind, title }: { text: string; kind: string; title?: string }) {
  if (!text) return null;
  return (
    <span
      title={title}
      className={cn(
        'inline-flex shrink-0 items-center rounded px-1.5 py-px font-body text-[10.5px] font-semibold leading-4',
        kind === 'free' && 'bg-ok/15 text-ok ring-1 ring-ok/40',
        kind === 'promo' && 'bg-promo-bg text-promo-fg ring-1 ring-promo-fg/30',
        kind === 'plain' && 'text-muted ring-1 ring-rule',
        kind === 'muted' && 'text-faint',
      )}
    >
      {text}
    </span>
  );
}

export function ModelRow({
  model,
  rank,
  metric,
  models,
  data,
  index,
}: {
  model: AiModel;
  rank: number;
  metric: MetricId;
  models: AiModel[];
  data: AiData;
  index: number;
}) {
  const reduce = useReducedMotion();
  const out = !model.inGo;
  const st = statusOf(model);
  const score = barScore(model, metric, models, data.meta);
  const val = formatMetric(model, metric, data.meta);
  const color = model.color || 'var(--accent)';
  const profit = modelValue(model, data.meta);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: reduce ? 0 : Math.min(index * 0.012, 0.3) }}
      className={cn(
        'glass grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 rounded-lg px-3 py-2 sm:grid-cols-[minmax(0,300px)_58px_76px_96px_minmax(0,1fr)]',
        out && 'opacity-70 saturate-50',
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="w-6 shrink-0 text-right font-mono2 text-[11px] text-muted">{rank}</span>
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}`, opacity: out ? 0.5 : 1 }}
          title={model.creator ?? ''}
        />
        <span className="truncate font-display text-[13.5px] font-semibold" title={`${model.name} · ${model.creator ?? ''}`}>
          {model.name}
        </span>
        <Badge text={st.text} kind={st.kind} />
        {model.freeInOc && (
          <Badge text="Free" kind="free" title="Доступна в OpenCode бесплатно — без подписки Go" />
        )}
      </div>

      <div className="hidden font-mono2 text-[12px] text-muted sm:block" title="Intelligence модели">
        {fmtInt(model.intelligence)}
      </div>
      <div className="hidden font-mono2 text-[12px] text-muted sm:block" title="Балл OpenCode Go Эффективность">
        {fmtScore(profit)}
      </div>
      <div
        className="hidden font-mono2 text-[12px] text-muted sm:block"
        title="Запросов на 5 ч по подписке Go — официальные данные из документации OpenCode."
      >
        {limitShort(model)}
      </div>

      <div className="col-span-2 sm:col-span-1">
        <div className="h-[22px] overflow-hidden rounded bg-track">
          <motion.div
            className="flex h-full items-center justify-end rounded"
            style={{
              background: `linear-gradient(90deg, ${color}55, ${color})`,
              boxShadow: out ? undefined : `0 0 12px ${color}66`,
              opacity: out ? 0.3 : 1,
            }}
            initial={reduce ? false : { width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.5, delay: reduce ? 0 : Math.min(index * 0.011, 0.24) }}
          >
            {score > 14 && (
              <span className="pr-1.5 font-mono2 text-[11px] font-bold text-[#0a0d16] mix-blend-normal">
                {val}
              </span>
            )}
          </motion.div>
        </div>
        {score <= 14 && (
          <span className="mt-0.5 block font-mono2 text-[11px] text-muted">{val}</span>
        )}
      </div>
    </motion.div>
  );
}
