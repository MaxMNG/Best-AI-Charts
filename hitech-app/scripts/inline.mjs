/**
 * Собирает собранную страницу в один самодостаточный файл:
 * вшивает JS и CSS прямо в `hi-tech/index.html` и удаляет папку `assets`.
 *
 * Зачем: внешний <script type="module"> Chrome не грузит с `file://` (CORS),
 * поэтому страница не открывалась бы двойным кликом. Инлайновый модуль работает.
 * Так же устроен `cyber/index.html`.
 *
 * Запускается из `npm run build` после `vite build`.
 */
import { readFile, writeFile, rm, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../../hi-tech");
const indexPath = path.join(outDir, "index.html");

const SCRIPT_RE = /<script type="module" crossorigin src="([^"]+)"><\/script>/;
const LINK_RE = /<link rel="stylesheet" crossorigin href="([^"]+)">/;

let html = await readFile(indexPath, "utf8");

const scriptMatch = html.match(SCRIPT_RE);
const linkMatch = html.match(LINK_RE);
if (!scriptMatch || !linkMatch) {
  throw new Error("inline: в hi-tech/index.html нет ссылок на бандлы — изменился формат сборки Vite");
}

const readAsset = (ref) => readFile(path.join(outDir, ref.replace(/^\.\//, "")), "utf8");

/* </script> и </style> внутри кода закрыли бы инлайновый блок раньше времени.
   Подстановка — только функцией: в тексте бандла есть $& и $' (React экранирует HTML),
   а строковая замена трактует их как ссылки на совпадение. */
const js = (await readAsset(scriptMatch[1])).replace(/<\/script/gi, "<\\/script");
const css = (await readAsset(linkMatch[1])).replace(/<\/style/gi, "<\\/style");

html = html.replace(SCRIPT_RE, () => `<script type="module">\n${js}\n</script>`);
html = html.replace(LINK_RE, () => `<style>\n${css}\n</style>`);

await writeFile(indexPath, html, "utf8");
await rm(path.join(outDir, "assets"), { recursive: true, force: true });

const left = await readdir(outDir);
console.log(`inline: hi-tech/index.html — ${Math.round(html.length / 1024)} KB, в папке: ${left.join(", ")}`);
