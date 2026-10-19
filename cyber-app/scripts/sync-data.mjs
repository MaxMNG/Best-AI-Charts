/**
 * Копирует корневой ../data.js в src/fallback-data.ts как встроенный снимок.
 * Рантайм всё равно тянет свежий ../data.js — fallback нужен только для
 * офлайна/первой отрисовки. Запускается перед vite build (см. scripts.build).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.resolve(root, '../../data.js'), 'utf8');
const start = src.indexOf('{');
const end = src.lastIndexOf('}');
if (start < 0 || end <= start) {
  console.error('sync-data: не нашёл JSON в ../data.js');
  process.exit(1);
}
const json = src.slice(start, end + 1);
JSON.parse(json); // проверка, что это валидный JSON
fs.writeFileSync(
  path.resolve(root, '../src/fallback-data.ts'),
  `// Сгенерировано из ../data.js скриптом scripts/sync-data.mjs. Руками не править.\n` +
    `export const FALLBACK_DATA = ${json} as unknown as import('./lib/data').AiData;\n`,
);
console.log('sync-data: ok');
