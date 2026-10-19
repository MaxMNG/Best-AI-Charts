/**
 * Переносит снимок из корневого data.js в src/data/snapshot.json.
 *
 * Снимок вшивается в бандл как запасной источник: страница сразу рисуется даже
 * без сети и при открытии из файла. Основной источник при работе с http(s) —
 * родительский ../data.js, поэтому опубликованная страница подхватывает
 * ежедневное обновление без пересборки.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(dir, "../../data.js");
const target = path.resolve(dir, "../src/data/snapshot.json");

const text = await readFile(source, "utf8");

// data.js — это `window.AI_DATA = {…}`: выполняем его в песочнице с подставным window.
const sandbox = {};
new Function("window", text)(sandbox);
const snapshot = sandbox.AI_DATA;

if (!snapshot || !Array.isArray(snapshot.models)) {
  console.error("sync-data: в data.js не найден window.AI_DATA с массивом models");
  process.exit(1);
}

await mkdir(path.dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

console.log(
  `sync-data: снимок от ${snapshot.meta?.generatedAt ?? "—"} — ${snapshot.models.length} моделей → src/data/snapshot.json`,
);
