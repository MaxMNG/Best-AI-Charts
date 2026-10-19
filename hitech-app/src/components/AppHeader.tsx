import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { shortDate, shortDateTime, updatedAt } from "@/lib/metrics";
import type { SnapshotMeta } from "@/lib/types";

interface Props {
  meta: SnapshotMeta;
  status: string;
  refreshing: boolean;
  onRefresh: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function AppHeader({ meta, status, refreshing, onRefresh, theme, onToggleTheme }: Props) {
  const counts = meta.counts ?? {};
  const arenaDate = meta.visual?.arena?.asOf ?? meta.aesthetics?.arena?.asOf;

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-start gap-x-8 gap-y-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="font-display text-[20px] leading-tight font-semibold tracking-[-0.02em] sm:text-[26px]">
              Лучшие AI модели
            </h1>
            <Badge tone="brand" title="Экспериментальная версия страницы: hi-tech минимализм">
              hi-tech
            </Badge>
          </div>

          <p className="mt-1.5 max-w-[68ch] text-[13px] text-ink-2 sm:text-[13.5px]">
            {counts.inGo} моделей по подписке{" "}
            <a
              className="underline decoration-line-strong decoration-1 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink"
              href={meta.sources?.goDocs}
              target="_blank"
              rel="noreferrer"
            >
              OpenCode Go
            </a>{" "}
            и {counts.extraFromAA} сильнейших моделей с{" "}
            <a
              className="underline decoration-line-strong decoration-1 underline-offset-2 transition-colors hover:text-ink hover:decoration-ink"
              href={meta.sources?.aa}
              target="_blank"
              rel="noreferrer"
            >
              Artificial Analysis
            </a>{" "}
            — для сравнения.
            <span className="hidden sm:inline"> Пять метрик, сортировка, лимиты подписки и бесплатные модели.</span>
          </p>

          <p className="mt-2 font-mono text-[11px] text-ink-3">
            <span className="hidden sm:inline">Снимок данных: {updatedAt(meta.generatedAt)}</span>
            <span className="sm:hidden">Снимок: {shortDateTime(meta.generatedAt)}</span>
            {arenaDate ? ` · Арены: ${shortDate(arenaDate)}` : ""} ·{" "}
            <a
              className="underline decoration-line decoration-1 underline-offset-2 transition-colors hover:text-ink-2"
              href="../"
            >
              <span className="hidden sm:inline">обычная версия страницы</span>
              <span className="sm:hidden">обычная версия</span>
            </a>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span aria-live="polite" className="mr-1 font-mono text-[11px] text-ink-3">
            {status}
          </span>
          <Button
            variant="outline"
            onClick={onRefresh}
            disabled={refreshing}
            title="Перечитать родительский data.js и перестроить страницу. Свежие данные с сайтов собирает update.cmd."
          >
            {refreshing ? "Читаю…" : "Обновить"}
          </Button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
