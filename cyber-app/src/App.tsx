import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { AiData, MetricId } from './lib/data';
import {
  buildMetrics,
  buildNotes,
  fetchFresh,
  formatDate,
  getFallback,
  shortTime,
  sortModels,
} from './lib/data';
import { ThemeProvider, useTheme } from './lib/theme';
import { MetricSwitch, PlotLabel } from './components/MetricSwitch';
import { ModelRow } from './components/ModelRow';
import { Notes } from './components/Notes';
import { cn } from './lib/cn';

function Shell() {
  const { theme, toggle } = useTheme();
  const [data, setData] = useState<AiData>(() => getFallback());
  const [metricId, setMetricId] = useState<MetricId>('intelligence');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const statusTimer = useRef<number | undefined>(undefined);

  const metrics = useMemo(() => buildMetrics(data), [data]);
  const metric = metrics.find((m) => m.id === metricId) ?? metrics[0];
  const rows = useMemo(() => sortModels(data.models, metric.id, data.meta), [data, metric]);
  const notes = useMemo(() => buildNotes(data), [data]);
  const counts = data.meta.counts ?? {};
  const sources = data.meta.sources ?? {};

  const flash = useCallback((text: string) => {
    setStatus(text);
    window.clearTimeout(statusTimer.current);
    statusTimer.current = window.setTimeout(() => setStatus(''), 6000);
  }, []);

  const refresh = useCallback(
    async (silent: boolean) => {
      if (busy) return;
      setBusy(true);
      try {
        const fresh = await fetchFresh();
        if (!fresh?.meta) {
          if (!silent) flash('Не удалось прочитать data.js');
          return;
        }
        if (fresh.meta.generatedAt === data.meta.generatedAt) {
          if (!silent) flash('Уже актуально');
          return;
        }
        setData(fresh);
        setMetricId((cur) => (buildMetrics(fresh).some((m) => m.id === cur) ? cur : 'intelligence'));
        if (!silent) flash(`Обновлено ${shortTime(fresh.meta.generatedAt)}`);
      } catch {
        if (!silent) flash('Не удалось прочитать data.js');
      } finally {
        setBusy(false);
      }
    },
    [busy, data.meta.generatedAt, flash],
  );

  useEffect(() => {
    const t = window.setTimeout(() => void refresh(true), 500);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative z-[1] mx-auto w-full max-w-6xl px-3 pb-10 pt-5 sm:px-5">
      <header className="glass rounded-xl p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="neon-text font-display text-[22px] font-bold leading-tight sm:text-[26px]">
              Лучшие AI модели <span className="text-accent2">// cyber</span>
            </h1>
            <p className="mt-1 text-[12.5px] text-muted">
              {counts.inGo ?? '—'} моделей по подписке{' '}
              {sources.goDocs ? (
                <a className="underline decoration-accent/60 underline-offset-2" href={sources.goDocs} target="_blank" rel="noreferrer">
                  OpenCode Go
                </a>
              ) : (
                'OpenCode Go'
              )}{' '}
              и {counts.extraFromAA ?? '—'} сильнейших моделей с{' '}
              {sources.aa ? (
                <a className="underline decoration-accent/60 underline-offset-2" href={sources.aa} target="_blank" rel="noreferrer">
                  Artificial Analysis
                </a>
              ) : (
                'Artificial Analysis'
              )}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={toggle}
                title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-md px-3 py-1.5 font-display text-[13px] font-semibold transition-all duration-150 hover:scale-105 active:scale-95"
              >
                {theme === 'dark' ? '☀' : '☾'}
              </motion.button>
              <motion.button
                type="button"
                disabled={busy}
                onClick={() => void refresh(false)}
                title="Перечитать data.js и обновить цифры на странице. Чтобы подтянуть свежие данные с сайтов — запустите update.cmd."
                whileTap={{ scale: 0.95 }}
                className="glass rounded-md px-3 py-1.5 font-display text-[13px] font-semibold transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                ↻ Обновить
              </motion.button>
            </div>
            <div className="font-mono2 text-[11px] text-muted" aria-live="polite">
              {status || (
                <>
                  Данные обновлены <strong className="text-muted">{formatDate(data.meta.generatedAt)}</strong>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 border-t border-rule pt-3">
          <MetricSwitch metrics={metrics} current={metric.id} onPick={setMetricId} />
        </div>
      </header>

      <main>
        <PlotLabel data={data} metric={metric} />
        <div className="mb-2 hidden grid-cols-[minmax(0,300px)_58px_76px_96px_minmax(0,1fr)] gap-x-3 px-3 font-mono2 text-[10.5px] uppercase tracking-wider text-muted sm:grid">
          <span>Модель</span>
          <span title={data.meta.notes?.intelligence ?? ''}>Int</span>
          <span title={data.meta.notes?.efficiency ?? ''}>Go Profit</span>
          <span title="Запросов на 5 ч по подписке Go — официальные данные из документации OpenCode.">
            Go Limit
          </span>
          <span />
        </div>
        <div className={cn('grid gap-1.5')}>
          {rows.map((m, i) => (
            <ModelRow
              key={m.aaSlug || m.name}
              model={m}
              rank={i + 1}
              metric={metric.id}
              models={data.models}
              data={data}
              index={i}
            />
          ))}
        </div>
        <Notes notes={notes} />
      </main>

      <footer className="mt-6 font-mono2 text-[11px] text-muted">
        <a className="underline underline-offset-2 hover:text-muted" href="../index.html">
          ← обычная версия
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
