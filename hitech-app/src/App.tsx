import { useCallback, useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { ModelDetail } from "@/components/ModelDetail";
import { ModelTable } from "@/components/ModelTable";
import { Notes } from "@/components/Notes";
import { bundledSnapshot, canFetchLive, fetchSnapshot } from "@/lib/data";
import {
  VALUE_DEFAULTS,
  buildMetrics,
  keyOf,
  metricById,
  rankMaps,
  scoreRange,
  sortModels,
} from "@/lib/metrics";
import type { MetricId, Snapshot } from "@/lib/types";

type Theme = "light" | "dark";

const THEME_KEY = "hitech-theme";

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* приватный режим */
  }
  return "light";
}

export default function App() {
  const [data, setData] = useState<Snapshot>(bundledSnapshot);
  const [status, setStatus] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [metricId, setMetricId] = useState<MetricId>("intelligence");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const metrics = useMemo(() => buildMetrics(data.meta), [data.meta]);
  const metric = useMemo(() => metricById(metrics, metricId), [metrics, metricId]);
  const cfg = data.meta.value ?? VALUE_DEFAULTS;

  const sorted = useMemo(() => sortModels(data.models, metric, cfg), [data.models, metric, cfg]);
  const ranges = useMemo(
    () => Object.fromEntries(metrics.map((item) => [item.id, scoreRange(data.models, item, cfg)])),
    [data.models, metrics, cfg],
  );
  const ranks = useMemo(() => rankMaps(data.models, metrics, cfg), [data.models, metrics, cfg]);

  /* ── тема ────────────────────────────────────────────────── */

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    /* Цвет панели браузера на мобильных — под текущую тему. */
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0c0e" : "#ffffff");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* приватный режим */
    }
  }, [theme]);

  /* ── обновление данных ───────────────────────────────────── */

  const generatedAt = data.meta?.generatedAt;

  const runRefresh = useCallback(
    async (silent: boolean) => {
      if (!canFetchLive()) {
        if (!silent) setStatus("Живое чтение доступно только по http(s)");
        return;
      }

      setRefreshing(true);
      if (!silent) setStatus("Обновляю…");

      try {
        const fresh = await fetchSnapshot();
        setRefreshing(false);
        if (fresh.meta?.generatedAt === generatedAt) {
          if (!silent) setStatus("Уже актуально");
          return;
        }
        setData(fresh);
        setStatus(
          `Обновлено ${new Date(fresh.meta.generatedAt).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}`,
        );
      } catch {
        setRefreshing(false);
        if (!silent) setStatus("Не удалось прочитать data.js");
      }
    },
    [generatedAt],
  );

  // Тихо подтягиваем свежий снимок при открытии: data.js мог обновиться после публикации.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      void runRefresh(true);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [runRefresh]);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(""), 6000);
    return () => window.clearTimeout(timer);
  }, [status]);

  /* ── выбор строки ────────────────────────────────────────── */

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleSelect = useCallback((key: string) => {
    setSelected((prev) => (prev === key ? null : key));
  }, []);

  const byKey = useCallback(
    (key: string | null) => (key ? (data.models.find((model) => keyOf(model) === key) ?? null) : null),
    [data.models],
  );

  const detailModel = byKey(hovered) ?? byKey(selected) ?? sorted[0] ?? null;

  /* ── отрисовка ───────────────────────────────────────────── */

  if (!data.models?.length) {
    return (
      <div className="mx-auto max-w-[60ch] px-6 py-24 text-center">
        <h1 className="font-display text-[22px] font-semibold">Нет данных для отображения</h1>
        <p className="mt-3 text-[13.5px] text-ink-2">
          Собранный снимок пуст. Запустите <code className="rounded-[2px] bg-track px-1.5 py-0.5 font-mono">update.cmd</code> в
          корне проекта — скрипт соберёт data.js — и пересоберите страницу командой{" "}
          <code className="rounded-[2px] bg-track px-1.5 py-0.5 font-mono">npm run build</code> в папке hitech-app.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <AppHeader
        meta={data.meta}
        status={status}
        refreshing={refreshing}
        onRefresh={() => void runRefresh(false)}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_21.5rem] xl:items-start xl:gap-10">
          <div className="min-w-0 pt-2">
            <ModelTable
              models={sorted}
              metric={metric}
              metrics={metrics}
              onSelectMetric={setMetricId}
              ranges={ranges}
              cfg={cfg}
              meta={data.meta}
              ranks={ranks}
              hovered={hovered}
              onHover={setHovered}
              selected={selected}
              onToggleSelect={toggleSelect}
            />
          </div>

          <aside
            className="sticky top-6 hidden max-h-[calc(100vh-3rem)] hi-scroll overflow-y-auto overscroll-contain pt-2 xl:block"
            aria-label="Подробности о выбранной модели"
          >
            {detailModel ? (
              <>
                <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-ink-3 uppercase">Подробности</p>
                <ModelDetail model={detailModel} meta={data.meta} metrics={metrics} ranks={ranks} />
                <p className="mt-2 text-[11px] leading-snug text-ink-3">
                  Панель следует за курсором: наведите его на строку или нажмите ⌄, чтобы закрепить модель.
                </p>
              </>
            ) : null}
          </aside>
        </div>

        <Notes meta={data.meta} />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 font-mono text-[11px] text-ink-3 sm:px-6 lg:px-8">
          <span>Эксперимент hi-tech · данные: Artificial Analysis, OpenCode и арены LMArena</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <a className="transition-colors hover:text-ink-2" href="../">
              обычная версия
            </a>
            <a className="transition-colors hover:text-ink-2" href={data.meta.sources?.aa} target="_blank" rel="noreferrer">
              Artificial Analysis
            </a>
            <a className="transition-colors hover:text-ink-2" href={data.meta.sources?.goDocs} target="_blank" rel="noreferrer">
              OpenCode Go
            </a>
            <a className="transition-colors hover:text-ink-2" href={data.meta.sources?.ocModels} target="_blank" rel="noreferrer">
              Console/Zen
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
