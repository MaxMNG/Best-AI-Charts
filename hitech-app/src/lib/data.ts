import bundled from "@/data/snapshot.json";
import type { Snapshot } from "./types";

/**
 * Снимок данных берётся из двух источников:
 *   1) snapshot.json — вшит в бандл при сборке (страница рисуется сразу, работает
 *      из файла и без сети);
 *   2) родительский ../data.js — тот же файл, что читает основная страница; на
 *      Pages он обновляется ежедневно, поэтому hi-tech остаётся живым без пересборки.
 */
export const bundledSnapshot = bundled as unknown as Snapshot;

/** В dev-сервере корневой data.js отдаёт middleware из vite.config.ts. */
export const DATA_URL = import.meta.env.DEV ? "/data.js" : "../data.js";

/** data.js — это `window.AI_DATA = {…}`: выполняем его в песочнице. */
export function parseDataJs(text: string): Snapshot | null {
  try {
    const sandbox: { AI_DATA?: Snapshot } = {};
    new Function("window", text)(sandbox);
    return sandbox.AI_DATA ?? null;
  } catch {
    return null;
  }
}

/** Читает свежий снимок с обходом кэша CDN. */
export async function fetchSnapshot(): Promise<Snapshot> {
  const response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const snapshot = parseDataJs(await response.text());
  if (!snapshot || !Array.isArray(snapshot.models)) throw new Error("в data.js нет window.AI_DATA");
  return snapshot;
}

/** Живое чтение возможно только по http(s): из файла fetch заблокирован. */
export function canFetchLive(): boolean {
  return typeof window !== "undefined" && /^https?:$/.test(window.location.protocol);
}
