/**
 * Собирает данные с Artificial Analysis, из документации OpenCode Go и из арен
 * LMArena (метрика «Визуал») и записывает снимок в data.js (window.AI_DATA).
 *
 * Запуск:  node fetch-data.mjs      или двойной клик по update.cmd
 *
 * Зависимостей нет, нужен только Node 18+ (используется встроенный fetch).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONFIG } from './models.config.js';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const AA_ORIGIN = 'https://artificialanalysis.ai';
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

/**
 * Сетевые сбои бывают разовыми: прокси и антивирусы с собственным сертификатом
 * роняют первую попытку (SELF_SIGNED_CERT_IN_CHAIN), а следующая проходит.
 * Поэтому повторяем — но не на 4xx: там ответ не изменится.
 */
async function fetchText(url, accept = 'text/html,application/xhtml+xml', attempts = 6) {
  let lastError = null;
  let lastStatus = 0;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    if (attempt > 1) {
      // 429 — ограничение частоты: ждём заметно дольше, чем при разовом сбое сети.
      await new Promise((resolve) => setTimeout(resolve, (lastStatus === 429 ? 3000 : 500) * attempt));
    }
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA, accept, 'accept-language': 'ru,en;q=0.8' } });
      if (res.ok) return await res.text();
      lastStatus = res.status;
      lastError = new Error(`HTTP ${res.status} ${res.statusText} — ${url}`);
      if (res.status < 500 && res.status !== 429) break;
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}

/* ─────────────────────────── Artificial Analysis ─────────────────────────── */

/**
 * На странице лидерборда данные лежат внутри JS-строки как экранированный JSON.
 * Находим массив после маркера, идём по нему с учётом строк и экранирования,
 * затем снимаем экранирование и парсим.
 */
function extractEscapedJsonArray(html, marker) {
  const at = html.indexOf(marker);
  if (at < 0) throw new Error(`Не найден маркер "${marker}" — разметка сайта изменилась`);
  const start = html.indexOf('[', at);
  let depth = 0;
  let inString = false;
  let escaped = false;
  let end = -1;

  for (let i = start; i < html.length; i++) {
    const ch = html[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end < 0) throw new Error('Не удалось найти конец массива данных AA');

  const raw = html.slice(start, end);
  try {
    return JSON.parse(JSON.parse(`"${raw}"`));
  } catch {
    return JSON.parse(raw.replace(/\\"/g, '"'));
  }
}

const num = (v) => (Number.isFinite(v) ? v : null);

/** AA помечает актуальный вариант приписками «Default Fallback» — для витрины они лишние. */
const cleanAaName = (name) =>
  String(name)
    .replace(/,\s*default fallback(?=\s*\))/gi, "")
    .replace(/,\s*default fallback\s*$/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

async function loadArtificialAnalysis() {
  const html = await fetchText(CONFIG.urls.aa);
  const raw = extractEscapedJsonArray(html, 'initialModels');

  return raw
    .filter((m) => !m.deprecated)
    .map((m) => ({
      slug: m.slug,
      name: m.name,
      displayName: cleanAaName(m.name),
      creator: m.modelCreatorName || '—',
      color: m.modelCreatorColor || '#8A8A93',
      logo: m.modelCreatorLogo ? AA_ORIGIN + m.modelCreatorLogo : null,
      url: `${AA_ORIGIN}/models/${m.slug}`,
      intelligence: num(m.intelligenceIndex),
      intelligenceEstimated: !!m.intelligenceIndexIsEstimated,
      costPerTask: num(m.intelligenceIndexCostPerTask),
      priceIn: num(m.price1mInputTokens),
      priceOut: num(m.price1mOutputTokens),
      contextWindow: num(m.contextWindowTokens),
      isReasoning: !!m.isReasoning,
      isOpenWeights: !!m.isOpenWeights,
      // Компоненты метрики «Надёжность» (см. CONFIG.reliability).
      gdpval: num(m.gdpvalNormalized),
      nonHallucination: num(m.omniscienceNonHallucination),
      itbenchSre: num(m.itbenchSre),
    }));
}

/**
 * Добивка оценок со страницы модели AA. Лидерборд (loadArtificialAnalysis)
 * отдаёт intelligenceIndex только актуальных вариантов; deprecated-карточки
 * (Kimi K3, Muse Spark 1.3, GPT-5.6 Luna и т.п.) из него выпадают, хотя баллы
 * на сайте есть. Страница любой модели встраивает глобальный датасет оценок
 * всех вариантов (~500 записей), поэтому хватает одного пробного запроса.
 * deprecated здесь НЕ фильтруем — в этом и смысл добивки; дубли вариантов
 * схлопывает buildAaIndex по максимуму Intelligence (как в основном индексе).
 * Компонентов «Надёжности» (gdpval/itbench) в этом датасете нет — reliability
 * у таких моделей останется прочерком.
 */
/**
 * Парсинг датасета оценок со страницы модели AA. На странице несколько массивов
 * с записями вида {"slug":"...","name":"..."}: компактные (оценка рядом) и
 * детальные (внутри есть вложенный "release":{"slug":"..."} — алиас релиза).
 * Вложенные алиасы пропускаем: чужой intelligenceIndex им приписывать нельзя
 * (так «DeepSeek V4.1 Flash» получал чужие 24.67/39.46). Окно записи тянем до
 * следующей НЕ вложенной записи — оценка детальной записи лежит за её release.
 */
function parseModelPageDataset(html) {
  const text = html.replace(/\\"/g, '"');
  const re = /"slug":"([a-z0-9][a-z0-9-]*)","name":"([^"]*)"/g;
  const hits = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    const prev = text.slice(Math.max(0, m.index - 32), m.index);
    hits.push({ slug: m[1], name: m[2], index: m.index, nested: /"release":\{\s*$/.test(prev) });
  }
  const records = [];
  for (let i = 0; i < hits.length; i++) {
    if (hits[i].nested) continue;
    let j = i + 1;
    while (j < hits.length && hits[j].nested) j++;
    const window = text.slice(hits[i].index, j < hits.length ? hits[j].index : hits[i].index + 20000);
    const intel = window.match(/"intelligenceIndex":(null|[\d.]+)/);
    if (!intel || intel[1] === 'null') continue;
    const field = (key) => {
      const hit = window.match(new RegExp(`"${key}":(null|true|false|[\\d.]+)`));
      return hit ? hit[1] : null;
    };
    const asNum = (v) => (v == null || v === 'null' ? null : Number(v));
    const asBool = (v) => v === 'true';
    const boolOrNull = (v) => (v == null ? null : asBool(v));
    records.push({
      slug: hits[i].slug,
      name: hits[i].name,
      displayName: cleanAaName(hits[i].name),
      creator: '—',
      color: '#8A8A93',
      logo: null,
      url: `${AA_ORIGIN}/models/${hits[i].slug}`,
      intelligence: Number(intel[1]),
      intelligenceEstimated: asBool(field('intelligenceIndexIsEstimated')),
      costPerTask: asNum(field('intelligenceIndexCostPerTask')),
      priceIn: asNum(field('price1mInputTokens')),
      priceOut: asNum(field('price1mOutputTokens')),
      contextWindow: asNum(field('contextWindowTokens')),
      isReasoning: boolOrNull(field('isReasoning')),
      isOpenWeights: boolOrNull(field('isOpenWeights')),
      gdpval: null,
      nonHallucination: null,
      itbenchSre: null,
    });
  }
  return records;
}

async function loadAaFallbackEval() {
  const html = await fetchText(`${AA_ORIGIN}/models/${CONFIG.aaFallbackProbeSlug}`);
  return parseModelPageDataset(html);
}

/**
 * Добивка со страницы самой модели: для override-slug'ов, которых нет ни
 * в лидерборде, ни в пробном датасете (снятые с публикации карточки вроде
 * deepseek-v4-1-flash — ревизии 20260910). Берём только запись с совпадающим
 * slug, имя проверяем каноникой против названия в Go. Вызывать только для
 * несопоставленных моделей: плюс один запрос на slug, сбой — warn-only.
 */
async function loadAaOwnPage(slug) {
  const html = await fetchText(`${AA_ORIGIN}/models/${slug}`);
  return parseModelPageDataset(html).filter((r) => r.slug === slug);
}

/* ────────────────────────────── Документация Go ───────────────────────────── */

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/**
 * В ячейке может быть перечёркнутая старая цена и актуальная в <strong>:
 * "<del>$15</del> <strong>$60</strong><br/><small>4x · Limited time</small>".
 * Берём значение из <strong>, если оно есть, иначе — весь текст ячейки.
 */
function cellText(html) {
  const strong = html.match(/<strong>([\s\S]*?)<\/strong>/);
  return stripTags(strong ? strong[1] : html);
}

function cellNote(html) {
  const small = html.match(/<small>([\s\S]*?)<\/small>/);
  return small ? stripTags(small[1]) : null;
}

function parseRows(tableHtml) {
  const rows = [];
  for (const tr of tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = [...tr[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((c) => c[1]);
    if (cells.length) rows.push(cells);
  }
  return rows;
}

/** Вырезает HTML одной вкладки (Go / Go Plus) по id её панели. */
function panelRows(html, panelId) {
  const at = html.indexOf(`id="${panelId}"`);
  if (at < 0) throw new Error(`Не найдена панель ${panelId} в документации Go`);
  const next = html.indexOf('role="tabpanel"', at + 10);
  const slice = html.slice(at, next > 0 ? next : at + 80000);
  const table = slice.match(/<table[\s\S]*?<\/table>/);
  if (!table) throw new Error(`Не найдена таблица в панели ${panelId}`);
  return parseRows(table[0]);
}

function toNumber(text) {
  if (text == null) return null;
  const cleaned = String(text).replace(/[^0-9.\-]/g, '');
  if (!cleaned || cleaned === '-' || cleaned === '.') return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

/** В таблице цен бесплатные модели помечены словом Free, а не нулём. */
function toPrice(text) {
  return /free|бесплат/i.test(String(text || '')) ? 0 : toNumber(text);
}

/** "Qwen3.7 Plus (≤ 256K tokens)" -> { base: "Qwen3.7 Plus", tier: "≤ 256K tokens" } */
function splitTier(rawName) {
  const base = rawName.replace(/\s*\([^()]*\)\s*$/, '').trim();
  const tier = rawName.slice(base.length).replace(/^[\s(]+|[)\s]+$/g, '').trim();
  return { base, tier: tier || null };
}

async function loadGoDocs() {
  const html = await fetchText(CONFIG.urls.goDocs);

  const pricingRows = panelRows(html, 'go-pricing-panel-go').slice(1); // без строки заголовка
  const requestRows = panelRows(html, 'go-requests-panel-go').slice(1);

  // Цены: у части моделей несколько строк на разные объёмы контекста или часы.
  // Собираем их в одну запись модели, первый тир считаем основным.
  const pricing = new Map();
  for (const cells of pricingRows) {
    const { base, tier } = splitTier(stripTags(cells[0]));
    const entry = {
      label: tier,
      input: toPrice(cellText(cells[1])),
      output: toPrice(cellText(cells[2])),
      cachedRead: toPrice(cellText(cells[3])),
      cachedWrite: toPrice(cellText(cells[4])),
      monthlyLimit: toNumber(cellText(cells[5])),
      limitRaw: cellText(cells[5]),
      limitNote: cellNote(cells[5]),
    };
    if (!pricing.has(base)) pricing.set(base, []);
    pricing.get(base).push(entry);
  }

  const requests = new Map();
  for (const cells of requestRows) {
    const name = stripTags(cells[0].replace(/<small>[\s\S]*?<\/small>/g, ''));
    const raw = cellText(cells[1]);
    requests.set(name, {
      fiveHour: /unlimited/i.test(raw) ? Infinity : toNumber(raw),
      unlimited: /unlimited/i.test(raw),
      week: toNumber(cellText(cells[2])),
      month: toNumber(cellText(cells[3])),
      promoNote: cellNote(cells[1]),
    });
  }

  const modelIds = new Map();
  const endpointsTable = [...html.matchAll(/<table[\s\S]*?<\/table>/g)]
    .map((m) => parseRows(m[0]))
    .find((rows) => (rows[0] || []).join('|').includes('Model ID'));
  for (const cells of (endpointsTable || []).slice(1)) {
    const name = stripTags(cells[0]);
    const id = stripTags(cells[1]);
    if (name && id) modelIds.set(name, id);
  }

  // Официальные миксы токенов на запрос: идут в тултипы и в резервный расчёт.
  const mixes = new Map();
  const listStart = html.indexOf('The estimates use the following');
  if (listStart > 0) {
    const listEnd = html.indexOf('</ul>', listStart);
    const listHtml = html.slice(listStart, listEnd > 0 ? listEnd : listStart + 20000);
    for (const li of listHtml.matchAll(/<li>([\s\S]*?)<\/li>/g)) {
      const text = stripTags(li[1]);
      const m = text.match(/^(.*?)\s*[—–]\s*([\d,]+)\s+input,\s*([\d,]+)\s+cached,\s*([\d,]+)\s+output/i);
      if (!m) continue;
      const mix = { input: toNumber(m[2]), cached: toNumber(m[3]), output: toNumber(m[4]) };
      for (const name of m[1].split('/').map((s) => s.trim())) mixes.set(name, mix);
    }
  }

  return { pricing, requests, modelIds, mixes };
}

async function loadGoModelIds() {
  try {
    const text = await fetchText(CONFIG.urls.goModels, 'application/json');
    const json = JSON.parse(text);
    return new Set((json.data || []).map((m) => m.id));
  } catch (err) {
    console.warn(`  ! Не удалось получить список моделей Go: ${err.message}`);
    return new Set();
  }
}

/**
 * Бесплатные модели OpenCode: в прайс-листе Console/Zen это строки таблицы
 * «Model | Input | Output | …», у которых в колонке Input стоит «Free».
 * Возвращает названия моделей как их пишет OpenCode (например «Beam Free»).
 */
async function loadFreeModelNames() {
  const html = await fetchText(CONFIG.urls.ocModels);

  const table = [...html.matchAll(/<table[\s\S]*?<\/table>/g)]
    .map((m) => parseRows(m[0]))
    .find((rows) => {
      const h = (rows[0] || []).map((c) => stripTags(c).toLowerCase());
      return h[0] === 'model' && h[1] === 'input' && h[2] === 'output';
    });
  if (!table) {
    throw new Error('Не найдена таблица цен OpenCode (Console/Zen) — разметка сайта изменилась');
  }

  return table
    .slice(1)
    .filter((cells) => /^free$/i.test(stripTags(cells[1])))
    .map((cells) => stripTags(String(cells[0]).replace(/<small>[\s\S]*?<\/small>/g, '')))
    .filter(Boolean);
}

/* ─────────────────────────── Сопоставление моделей ────────────────────────── */

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-z0-9]/g, '');

const baseName = (s) =>
  String(s)
    .replace(/\s*\([^()]*\)\s*$/, '')
    .trim();

/**
 * Ядро имени для сопоставления арен: нормализованное имя без варианта в скобках
 * и без хвостового суффикса варианта через дефис (-high, -max, -lite и т.д.).
 * Арены пишут вариант по-разному: WebDev — «Muse Spark 1.3 (Max)»,
 * Vision — «muse-spark-1.3-max». Ядро у обоих — «musespark13».
 * Суффиксы размеров и содержательные слова (27b, plus, flash, preview) не трогаем.
 */
const coreKey = (s) =>
  norm(baseName(s)).replace(/(xhigh|high|max|medium|low|lite)$/, '');

/**
 * Канонический ключ для сопоставления с Artificial Analysis (CONFIG.aaMatching):
 * значимые токены имени без вендорного префикса, мусорных слов и дат ревизий.
 * «Xiaomi MiMo-V2.5» -> «mimov25», «Muse Spark 1.3 Contributor» -> «musespark13».
 * Тиры (pro/flash, max/lite) — значимые и не стираются: разные модели не смешаются.
 */
const tokensOf = (s) =>
  String(s)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

function canonKey(s) {
  const vendors = CONFIG.aaMatching?.vendorPrefixes || [];
  const noise = new Set(CONFIG.aaMatching?.noiseTokens || []);
  // Вариант в скобках — та же модель («DeepSeek V4.1 Flash 1017 (Max)»),
  // в отличие от дефисного тира («Flash-Next» — уже другая).
  let tokens = tokensOf(baseName(s));
  while (tokens.length > 1 && vendors.includes(tokens[0])) tokens = tokens.slice(1);
  tokens = tokens.filter((t) => !noise.has(t) && !/^\d{3,8}$/.test(t));
  return tokens.join('');
}

function buildAaIndex(models) {
  const bySlug = new Map();
  const byFull = new Map();
  const byBase = new Map();
  const byCanon = new Map();

  const keep = (map, key, m) => {
    const prev = map.get(key);
    // Оставляем вариант с наибольшим Intelligence: на графике это привычный «max».
    if (!prev || (m.intelligence ?? -1) > (prev.intelligence ?? -1)) map.set(key, m);
  };

  for (const m of models) {
    bySlug.set(m.slug, m);
    keep(byFull, norm(m.name), m);
    keep(byBase, norm(baseName(m.name)), m);
    keep(byCanon, canonKey(m.name), m);
  }
  return { bySlug, byFull, byBase, byCanon };
}

/**
 * Сопоставление строгое, но многослойное: сначала полное имя, затем имя
 * без варианта в скобках («Kimi K3» найдёт «Kimi K3 (Max)»), затем
 * канонический ключ без вендора/мусора/дат («Xiaomi MiMo-V2.5» найдёт «MiMo-V2.5»).
 * Нечёткий поиск по схожести строк намеренно не используется: он уже однажды
 * подставил «Qwen3.8 Flash» метрики соседней «Qwen3.8-Flash-Next».
 * Возвращает { m, method } для аудита автоподхвата или null.
 */
function matchAaByName(goName, index) {
  const key = norm(goName);
  const full = index.byFull.get(key);
  if (full) return { m: full, method: 'exact' };
  const base = index.byBase.get(norm(baseName(goName)));
  if (base) return { m: base, method: 'base' };
  const canon = index.byCanon.get(canonKey(goName));
  if (canon) return { m: canon, method: 'canon' };
  return null;
}

function matchAa(goName, index, quiet = false) {
  const override = CONFIG.aaSlugOverrides[goName];
  if (override) {
    const hit = index.bySlug.get(override);
    if (hit) return { m: hit, method: 'override' };
    if (!quiet) console.warn(`  ! override «${goName}» -> slug «${override}» не найден ни в лидерборде, ни в добивке, пробую поиск по имени`);
  }

  return matchAaByName(goName, index);
}

/**
 * Подсказки для ручной доводки: топ-N карточек AA, похожих на имя модели Go,
 * по коэффициенту Жаккара множеств токенов. Это не автоподхват (см. matchAa),
 * а готовая строка для aaSlugOverrides — выводится в лог и в meta.needsAaFix.
 */
function aaSuggestions(goName, index, limit = 3) {
  const noise = new Set(CONFIG.aaMatching?.noiseTokens || []);
  const clean = (s) => new Set(tokensOf(s).filter((t) => !noise.has(t)));
  const goTokens = clean(goName);
  if (!goTokens.size) return [];
  const scored = [];
  for (const m of index.bySlug.values()) {
    const aaTokens = clean(m.name);
    let inter = 0;
    for (const t of goTokens) if (aaTokens.has(t)) inter++;
    if (!inter) continue;
    scored.push({ m, score: inter / (goTokens.size + aaTokens.size - inter) });
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ m, score }) => ({ slug: m.slug, name: m.displayName, score: Math.round(score * 100) / 100 }));
}

/* ──────────────────────────── Арены (LMArena) ─────────────────────────────── */

/**
 * Арены LMArena через публичный datasets-server Hugging Face: обычный JSON,
 * без ключа и регистрации. Нужны только для метрики «Визуал» — у Artificial
 * Analysis дизайна, UI и зрения в Intelligence Index нет вообще.
 *
 * Даёт { components: { ключ: { byFull, byBase, count } }, asOf }.
 * Каждый источник может указать свою категорию (source.category):
 * overall, image_to_webdev и т.д. По умолчанию — overall.
 * Ошибку не глотаем: решение, что делать при недоступности, принимает вызывающий.
 */
async function loadArenaData() {
  const { dataset, split, sources } = CONFIG.arena;
  const components = {};
  let asOf = null;

  for (const [key, source] of Object.entries(sources)) {
    const category = source.category || 'overall';
    const rows = [];
    let offset = 0;
    let total = Infinity;

    // datasets-server отдаёт не больше 100 строк за раз, идём страницами.
    while (offset < total) {
      const url =
        `${CONFIG.urls.arenaRows}?dataset=${encodeURIComponent(dataset)}` +
        `&config=${encodeURIComponent(source.config)}` +
        `&split=${encodeURIComponent(split)}&offset=${offset}&length=100`;
      const page = JSON.parse(await fetchText(url, 'application/json'));
      const raw = page.rows || [];
      total = Number.isFinite(page.num_rows_total) ? page.num_rows_total : 0;

      rows.push(
        ...raw
          .map((r) => r.row)
          .filter((r) => r.category === category)
          .map((r) => ({
            name: r.model_name,
            value: num(r[source.field]),
            rank: num(r.rank),
            // В аренах это vote_count, в agent-таблицах — observation_count.
            votes: num(r.vote_count ?? r.observation_count),
            date: r.leaderboard_publish_date || null,
          }))
          .filter((r) => r.name && r.value != null)
      );

      if (!raw.length) break;
      offset += raw.length;
    }

    for (const row of rows) if (row.date && (!asOf || row.date > asOf)) asOf = row.date;

    const byFull = new Map();
    const byBase = new Map();
    const byCore = new Map();
    const ambiguous = new Set();

    for (const row of rows) {
      const full = norm(row.name);
      const prev = byFull.get(full);
      if (!prev || (row.votes ?? 0) > (prev.votes ?? 0)) byFull.set(full, row);

      // Ядро без суффикса варианта: из вариантов одной модели берём самый
      // голосовавший (варианты -high/-max/-lite — та же модель, а не чужая).
      const core = coreKey(row.name);
      const prevCore = byCore.get(core);
      if (!prevCore || (row.votes ?? 0) > (prevCore.votes ?? 0)) byCore.set(core, row);

      // Имя без варианта в скобках: «Step 5 Preview» -> «Step 5 Preview (High)».
      // Если под такое имя подходит несколько разных строк, оно не используется —
      // лучше прочерк, чем чужая цифра.
      const base = norm(baseName(row.name));
      const prevBase = byBase.get(base);
      if (!prevBase) byBase.set(base, row);
      else if (prevBase.name !== row.name) ambiguous.add(base);
    }
    for (const base of ambiguous) byBase.delete(base);

    components[key] = { byFull, byBase, byCore, count: rows.length, ambiguous: ambiguous.size };
  }

  return { components, asOf };
}

/** Строка арены для модели: сопоставляем по имени на Artificial Analysis. */
function arenaValue(arena, component, aaName) {
  const index = arena && arena.components[component];
  if (!index || !aaName) return null;

  const override = CONFIG.arena.overrides[aaName];
  return (
    (override ? index.byFull.get(norm(override)) : null) ||
    index.byFull.get(norm(aaName)) ||
    index.byBase.get(norm(baseName(aaName))) ||
    (index.byCore ? index.byCore.get(coreKey(aaName)) : null) ||
    null
  );
}

/* ────────────────────────────── Расчёты ─────────────────────────── */

function requestCost(prices, mix) {
  if (!prices || !mix) return null;
  const input = (mix.input || 0) * (prices.input || 0);
  const cached = (mix.cached || 0) * (prices.cachedRead ?? prices.input ?? 0);
  const output = (mix.output || 0) * (prices.output || 0);
  const total = (input + cached + output) / 1e6;
  return Number.isFinite(total) && total > 0 ? total : null;
}

/**
 * «OpenCode Go Эффективность» — умность модели × щедрость лимита.
 * 100 · IQ^weight · Лимит^(1 - weight); настройки в CONFIG.value.
 * Возвращает null, если нет данных ни об Intelligence, ни о лимите.
 */
function valueScore(intelligence, requests5h) {
  const { weight, iqFloor, iqCeil, limitFloor, limitCeil } = CONFIG.value;
  if (intelligence == null) return null;

  const iq = Math.min(1, Math.max(0, (intelligence - iqFloor) / (iqCeil - iqFloor)));

  let generosity;
  if (requests5h === Infinity) generosity = 1;
  else if (!Number.isFinite(requests5h) || requests5h <= 0) return null;
  else {
    const lo = Math.log10(limitFloor);
    const hi = Math.log10(limitCeil);
    generosity = Math.min(1, Math.max(0, (Math.log10(requests5h) - lo) / (hi - lo)));
  }

  return Math.round(100 * Math.pow(iq, weight) * Math.pow(generosity, 1 - weight) * 10) / 10;
}

/** Компонент метрики «Надёжность», приведённый к 0…1 по фиксированным якорям. */
function normalizeComponent(value, { floor, ceil }) {
  if (value == null || ceil === floor) return null;
  return Math.min(1, Math.max(0, (value - floor) / (ceil - floor)));
}

/**
 * «Надёжность» — большие и сложные задачи × отсутствие галлюцинаций × самопроверка.
 * Средневзвешенное компонентов Artificial Analysis; настройки в CONFIG.reliability.
 * Пропущенные компоненты не участвуют: веса оставшихся нормируются.
 * Возвращает балл 0…100 или null, если у модели нет ни одного компонента.
 */
function reliabilityScore(model) {
  let sum = 0;
  let weight = 0;

  for (const component of CONFIG.reliability.components) {
    const part = normalizeComponent(model[component.key], component);
    if (part == null) continue;
    sum += part * component.weight;
    weight += component.weight;
  }

  return weight ? Math.round((100 * sum) / weight * 10) / 10 : null;
}

/**
 * «Визуал» — насколько модель в целом хорошо работает с визуалом: смотрит
 * скриншоты (зрение), понимает, что такое красиво, собирает UI/UX.
 * Средневзвешенное компонентов арен LMArena по фиксированным якорям
 * (настройки в CONFIG.visual).
 *
 * Балла нет без верстки (webdev overall / image_to_webdev): модель,
 * не тестировавшаяся на UI, в топ «Визуала» попасть не должна.
 *
 * «Глаза» (eyeFactor) — обязательный множитель поверх базы: зрения нет —
 * балл режется до noVisionPenalty; зрение слабое — множитель растёт от
 * eyeWeakBase до 1 вместе с качеством; зрение отличное (норма не ниже
 * eyeBonusThreshold) — бонус eyeBonusFactor. Безглазые тонут вниз списка,
 * но из него не пропадают.
 * Возвращает { score, parts, eyeFactor }; parts — сырые строки арен
 * (для тултипов и отладки).
 */
function visualScore(arena, aaName) {
  const parts = {};
  for (const component of CONFIG.visual.components) {
    parts[component.key] = arenaValue(arena, component.key, aaName);
  }

  const { requireWeb, components, noVisionPenalty, eyeWeakBase, eyeBonusThreshold, eyeBonusFactor } = CONFIG.visual;
  if (requireWeb && !requireWeb.some((key) => parts[key] != null)) return { score: null, parts, eyeFactor: null };

  let sum = 0;
  let weight = 0;
  for (const component of components) {
    const row = parts[component.key];
    const part = normalizeComponent(row ? row.value : null, component);
    if (part == null) continue;
    sum += part * component.weight;
    weight += component.weight;
  }
  if (!weight) return { score: null, parts, eyeFactor: null };

  const base = sum / weight;
  const visionComp = components.find((c) => c.key === 'vision');
  const visionRow = parts.vision;
  const normVision = visionRow && visionComp ? normalizeComponent(visionRow.value, visionComp) : null;

  let eyeFactor;
  if (normVision == null) eyeFactor = noVisionPenalty;
  else if (normVision >= eyeBonusThreshold) eyeFactor = eyeBonusFactor;
  else eyeFactor = eyeWeakBase + (1 - eyeWeakBase) * normVision;

  const score = Math.round(Math.min(100, 100 * base * eyeFactor) * 10) / 10;
  return { score, parts, eyeFactor: Math.round(eyeFactor * 1000) / 1000 };
}

/** Сырые компоненты «Визуала» для data.js — без пустых значений. */
function visualParts(parts) {
  if (!parts) return null;
  const out = {};
  for (const [key, row] of Object.entries(parts)) {
    if (row) out[key] = { value: row.value, rank: row.rank, n: row.votes };
  }
  return Object.keys(out).length ? out : null;
}

function statusOf({ unlimited, limitNote, promoNote, monthlyLimit, requests5h }) {
  const note = `${limitNote || ''} ${promoNote || ''}`;
  if (unlimited) return 'unlimited';
  if (/4x/i.test(note)) return 'promo-4x';
  if (/2x/i.test(note)) return 'promo-2x';
  if (/limited time/i.test(note)) return 'limited';
  if (monthlyLimit == null) return 'no-limit-data';
  if (!Number.isFinite(requests5h)) return 'limited';
  return 'active';
}

/* ──────────────── Тексты примечаний (meta.notes) ────────────────
 *
 * ЕДИНСТВЕННОЕ МЕСТО ПРАВКИ ТЕКСТОВ: все шесть примечаний — функции ниже.
 * Их пишет вручную владелец проекта. Агентам: не менять тексты
 * без явного разрешения (см. AGENTS.md).
 *
 * Порядок функций = порядок на странице (кнопки фильтров сверху и футер).
 */

/** Примечание про метрику Intelligence. */
function intelligenceNote() {
  return (
    'Artificial Analysis Intelligence Index — сводный балл по 10 независимым тестам: ' +
    'знания, математика, код, агентные задачи, следование инструкциям. Показывает, насколько ' +
    'модель умна в целом и наколько она широко смотрит на вещи при решении задач'
  );
}

/** Примечание про метрику «Надёжность». */
function reliabilityNote() {
  return (
    'Показатель того, насколько модель хорошо справляется с большими и сложными задачами, ' +
    'не галлюцинирует, не придумывает лишнего, делает точно именно то что попросили, и насколько хорошо проверяет работу других моделей.'
  );
}

/**
 * Примечание про метрику «Визуал».
 *
 * Веса компонентов в тексте ниже: повтор по скриншотам image_to_webdev — 40%,
 * общее качество UI webdev overall — 30%, зрение vision overall — 30%
 * (CONFIG.visual.components в models.config.js). Если веса в конфиге
 * поменяются — поправьте цифры в тексте вручную.
 */
function visualNote() {
  return (
    'Насколько модель хорошо работает с визуалом: смотрит скриншоты, понимает, ' +
    'что такое красиво, собирает качественный UI/UX, пишет хорошие визуальные промпты.'
  );
}

/** Примечание про метрику Cost per Intelligence. */
function costPerTaskNote() {
  return (
    'Сколько совокупного IQ вы получаете за потраченные токены модели. ' +
    'Чем лучше параметр - тем более экономически выгода модель.'
  );
}

/** Примечание про метрику OpenCode Go Эффективность. */
function efficiencyNote() {
  return (
    'Показатель того насколько модель имеет большой IQ и при этом насколько щедрые лимиты под нее выделяет ' +
    'подписка OpenCode Go. Чем выше показатель — тем целесообразнее использовать модель для постоянной работы.'
  );
}

/**
 * Примечание про бесплатные модели. Текст описывает правило их показа,
 * а не перечисляет имена: перечисление может разойтись с составом строк
 * при следующем обновлении.
 */
function freeNote() {
  return (
    'Помимо подписки OpenCode Go часть моделей доступна бесплатно, без подписки. Все они ' +
    'показаны в списке отдельными строками с зелёным бейджем «Free» '
  );
}

/* ─────────────────────────────── Сборка ─────────────────────────────── */

async function main() {
  console.log('Обновление данных для страницы «Лучшие AI модели»');
  console.log('Источники: artificialanalysis.ai, opencode.ai/docs/go, opencode.ai/docs/zen, арены LMArena (HF)\n');

  console.log('Artificial Analysis — тянем лидерборд…');
  const aa = await loadArtificialAnalysis();
  console.log(`  ✓ записей: ${aa.length}, из них с Intelligence: ${aa.filter((m) => m.intelligence != null).length}`);

  console.log('OpenCode — тянем документацию Go…');
  const { pricing, requests, modelIds, mixes } = await loadGoDocs();
  console.log(`  ✓ моделей в тарифной таблице: ${pricing.size}, миксов запроса: ${mixes.size}`);

  console.log('OpenCode — сверяем список моделей API…');
  const apiIds = await loadGoModelIds();
  console.log(`  ✓ моделей в API: ${apiIds.size}`);

  console.log('OpenCode — ищем бесплатные модели…');
  const freeNames = await loadFreeModelNames();
  console.log(`  ✓ бесплатных моделей: ${freeNames.length}`);

  console.log('LMArena — тянем арены для метрики «Визуал»…');
  let arena = null;
  try {
    arena = await loadArenaData();
    const coverage = Object.entries(arena.components)
      .map(([key, value]) => `${key}: ${value.count}`)
      .join(', ');
    console.log(`  ✓ строк: ${coverage}${arena.asOf ? `, снимок ${arena.asOf}` : ''}`);
  } catch (err) {
    const why = err.message === 'fetch failed' && err.cause ? `${err.message} (${err.cause.code || err.cause.message})` : err.message;
    console.warn(`  ! Арены LMArena недоступны: ${why}`);
    console.warn('    «Визуал» останется с прочерками, остальные данные соберутся как есть.');
  }

  const index = buildAaIndex(aa);
  const usedSlugs = new Set();
  const items = [];
  const unmatched = [];
  // Аудит автоподхвата: сколько моделей сопоставилось каждым методом.
  const matchStats = {};
  // Модели, закрытые добивкой со страницы модели (для итогового лога).
  const resolvedViaFallback = [];

  // Предпроход: какие подписочные и бесплатные имена не закрыл лидерборд.
  // Только для них тянем добивку со страницы модели: один запрос, и только
  // если красные вообще есть. Любой сбой здесь — предупреждение, сборка идёт
  // дальше на данных лидерборда.
  const needFallback = new Set();
  for (const [goName] of pricing) if (!matchAa(goName, index, true)) needFallback.add(goName);
  for (const name of freeNames) {
    const base = name.replace(/\s+free$/i, '').trim();
    if (!matchAa(name, index, true) && !matchAa(base, index, true)) needFallback.add(name);
  }
  let fallbackIndex = null;
  if (needFallback.size) {
    console.log(`Artificial Analysis — добивка ${needFallback.size} несопоставленных со страницы модели…`);
    try {
      const fb = await loadAaFallbackEval();
      console.log(`  ✓ записей в датасете страницы: ${fb.length}`);
      fallbackIndex = buildAaIndex(fb);
    } catch (err) {
      console.warn(`  ! Добивка недоступна: ${err.message}`);
      console.warn('    Несопоставленные модели останутся с прочерками, остальные данные соберутся как есть.');
    }
  }

  // Второй слой добивки — страницы самих моделей: для override-slug'ов,
  // которых нет ни в лидерборде, ни в пробном датасете (снятые с публикации
  // карточки: deepseek-v4-1-flash — ревизия 20260910). Проверка идёт по slug,
  // а не по несопоставленности модели: явный override важнее совпадения
  // по имени (каноника нашла бы 1017, а нужен 0910). Плюс один запрос
  // на slug, сбой — warn-only.
  let ownIndex = null;
  const needOwn = new Map();
  for (const [goName, slug] of Object.entries(CONFIG.aaSlugOverrides)) {
    const referenced = pricing.has(goName) || freeNames.includes(goName) ||
      freeNames.some((n) => n.replace(/\s+free$/i, '').trim() === goName);
    if (!referenced) continue;
    if (index.bySlug.has(slug)) continue;
    if (fallbackIndex && fallbackIndex.bySlug.has(slug)) continue;
    if (!needOwn.has(slug)) needOwn.set(slug, goName);
  }
  if (needOwn.size) {
    console.log(`Artificial Analysis — добивка ${needOwn.size} override-slug со страниц моделей…`);
    const ownRecords = [];
    for (const [slug, goName] of needOwn) {
      try {
        const recs = await loadAaOwnPage(slug);
        if (!recs.length) {
          console.warn(`  ! ${goName}: на странице модели «${slug}» оценок нет`);
          continue;
        }
        console.log(`  ✓ ${goName} -> ${slug}: записей ${recs.length}`);
        ownRecords.push(...recs);
      } catch (err) {
        console.warn(`  ! ${goName}: страница модели «${slug}» недоступна: ${err.message}`);
      }
    }
    if (ownRecords.length) ownIndex = buildAaIndex(ownRecords);
  }

  // Полное сопоставление: лидерборд, затем пробный датасет, затем страницы
  // моделей. Явный override ищется по slug СНАЧАЛА во всех слоях: он важнее
  // совпадения по имени (иначе каноника подсунула бы 1017 вместо 0910).
  // Затем — поиск по имени по слоям. Метод пишется с префиксом слоя
  // для аудита в meta.matchMethods.
  function matchAaFull(goName) {
    const layers = [[index, ''], [fallbackIndex, 'fallback:'], [ownIndex, 'ownpage:']]
      .filter(([layer]) => layer);
    const slug = CONFIG.aaSlugOverrides[goName];
    if (slug) {
      for (const [layer, tag] of layers) {
        const hit = layer.bySlug.get(slug);
        if (hit) return { m: hit, method: `${tag}override` };
      }
      console.warn(`  ! override «${goName}» -> slug «${slug}» не найден ни в лидерборде, ни в добивке, пробую поиск по имени`);
    }
    for (const [layer, tag] of layers) {
      const hit = matchAaByName(goName, layer);
      if (hit) return { m: hit.m, method: `${tag}${hit.method}` };
    }
    return null;
  }

  // Цвета разработчиков, которые уже встречаются на AA, — чтобы модели без данных
  // всё равно были окрашены привычным цветом своего вендора.
  const creatorColors = new Map();
  for (const m of aa) if (!creatorColors.has(m.creator)) creatorColors.set(m.creator, m.color);

  function guessCreator(modelName) {
    let best = null;
    let bestLen = 0;
    for (const [prefix, creator] of Object.entries(CONFIG.creatorHints)) {
      if (modelName.toLowerCase().startsWith(prefix.toLowerCase()) && prefix.length > bestLen) {
        best = creator;
        bestLen = prefix.length;
      }
    }
    return best;
  }

  for (const [goName, tiers] of pricing) {
    const primary = tiers[0];
    const hit = matchAaFull(goName);
    const aaModel = hit ? hit.m : null;
    if (!hit) unmatched.push(goName);
    else {
      usedSlugs.add(hit.m.slug);
      matchStats[hit.method] = (matchStats[hit.method] || 0) + 1;
      if (hit.method.includes(':')) {
        resolvedViaFallback.push({
          name: goName,
          slug: hit.m.slug,
          intelligence: hit.m.intelligence,
          via: hit.method.startsWith('ownpage:') ? 'страница модели' : 'пробный датасет',
        });
      }
    }

    const guessedCreator = aaModel ? null : guessCreator(goName);

    const req = requests.get(goName) || {};
    const mix = mixes.get(goName) || null;
    const unlimited = primary.limitRaw === 'Unlimited' || req.unlimited === true;
    const limit5hUsd = primary.monthlyLimit != null ? primary.monthlyLimit * CONFIG.fiveHourShare : null;

    let requests5h;
    let provisional = false;
    if (req.unlimited) requests5h = Infinity;
    else if (Number.isFinite(req.fiveHour)) requests5h = req.fiveHour;
    else {
      const cost = requestCost(primary, mix);
      requests5h = cost && limit5hUsd ? Math.floor(limit5hUsd / cost) : null;
      provisional = true;
    }

    const tokensPerRequest = mix ? mix.input + mix.cached + mix.output : null;
    let costPerRequest = requestCost(primary, mix);
    if (costPerRequest == null && limit5hUsd && Number.isFinite(requests5h)) {
      costPerRequest = limit5hUsd / requests5h;
    }

    const goModelId = modelIds.get(goName) || null;
    const visual = visualScore(arena, aaModel?.displayName ?? null);

    items.push({
      name: goName,
      inGo: true,
      goModelId,
      inGoApi: goModelId ? apiIds.has(goModelId) : false,
      creator: aaModel?.creator ?? guessedCreator ?? '—',
      color: aaModel?.color ?? (guessedCreator ? creatorColors.get(guessedCreator) : null) ?? '#8A8A93',
      logo: aaModel?.logo ?? null,
      aaSlug: aaModel?.slug ?? null,
      aaName: aaModel?.displayName ?? null,
      aaUrl: aaModel?.url ?? null,
      // Каким методом сопоставилось: override/exact/base/canon (аудит автоподхвата).
      aaMatch: hit ? hit.method : null,
      // Красная метка «нет AA»: ставится ниже, после разметки бесплатных моделей.
      needsAaFix: false,
      intelligence: aaModel?.intelligence ?? null,
      intelligenceEstimated: aaModel?.intelligenceEstimated ?? false,
      costPerTask: aaModel?.costPerTask ?? null,
      contextWindow: aaModel?.contextWindow ?? null,
      isReasoning: aaModel?.isReasoning ?? null,
      isOpenWeights: aaModel?.isOpenWeights ?? null,
      go: {
        input: primary.input,
        output: primary.output,
        cachedRead: primary.cachedRead,
        cachedWrite: primary.cachedWrite,
        monthlyLimit: primary.monthlyLimit,
        limitRaw: primary.limitRaw,
        limitNote: primary.limitNote || req.promoNote || null,
        tiers: tiers.map((t) => ({
          label: t.label,
          input: t.input,
          output: t.output,
          cachedRead: t.cachedRead,
          monthlyLimit: t.monthlyLimit,
        })),
        requests5h: Number.isFinite(requests5h) ? requests5h : null,
        requestsWeek: req.week ?? null,
        requestsMonth: req.month ?? null,
        unlimited,
        mix,
        tokensPerRequest,
        costPerRequest,
        limit5hUsd,
        tokensPer5h: tokensPerRequest && Number.isFinite(requests5h) ? tokensPerRequest * requests5h : null,
      },
      efficiency: Number.isFinite(requests5h) ? requests5h : null,
      efficiencyProvisional: provisional,
      valueScore: valueScore(aaModel?.intelligence ?? null, requests5h),
      reliability: aaModel ? reliabilityScore(aaModel) : null,
      visual: visual.score,
      visualParts: visualParts(visual.parts),
      visualEye: visual.eyeFactor,
      freeInOc: false,
      status: statusOf({
        unlimited,
        limitNote: primary.limitNote,
        promoNote: req.promoNote,
        monthlyLimit: primary.monthlyLimit,
        requests5h,
      }),
    });
  }

  // Добираем лучшие модели AA, которых нет в подписке Go: по одной на семейство.
  const seenBase = new Set();
  for (const item of items) if (item.aaName) seenBase.add(norm(baseName(item.aaName)));

  // Закреплённые строки (CONFIG.pinExtraAaSlugs): всегда на странице,
  // даже если выпали из топ-20. Из общего отбора их исключаем, чтобы не двоились.
  const pinnedSlugs = new Map(Object.entries(CONFIG.pinExtraAaSlugs || {}));

  const extras = [];
  for (const m of [...aa].sort((a, b) => (b.intelligence ?? -1) - (a.intelligence ?? -1))) {
    if (m.intelligence == null || usedSlugs.has(m.slug) || pinnedSlugs.has(m.slug)) continue;
    const base = norm(baseName(m.name));
    if (seenBase.has(base)) continue;
    seenBase.add(base);
    extras.push(m);
    if (extras.length >= CONFIG.topFromAA) break;
  }
  for (const [slug, label] of pinnedSlugs) {
    const m = index.bySlug.get(slug)
      || (fallbackIndex && fallbackIndex.bySlug.get(slug))
      || (ownIndex && ownIndex.bySlug.get(slug));
    if (!m || m.intelligence == null) {
      console.warn(`  ! закреплённая строка «${label}»: slug «${slug}» не найден на AA — строка пропущена`);
      continue;
    }
    extras.push({ ...m, _pinName: label });
  }
  extras.sort((a, b) => (b.intelligence ?? -1) - (a.intelligence ?? -1));

  const extraItems = extras.map((m) => {
    const visual = visualScore(arena, m.displayName);
    return {
      name: m._pinName || m.displayName,
      inGo: false,
      goModelId: null,
      inGoApi: false,
      creator: m.creator,
      color: m.color,
      logo: m.logo,
      aaSlug: m.slug,
      aaName: m.name,
      aaUrl: m.url,
      intelligence: m.intelligence,
      intelligenceEstimated: m.intelligenceEstimated,
      costPerTask: m.costPerTask,
      contextWindow: m.contextWindow,
      isReasoning: m.isReasoning,
      isOpenWeights: m.isOpenWeights,
      go: null,
      efficiency: null,
      efficiencyProvisional: false,
      valueScore: null,
      reliability: reliabilityScore(m),
      visual: visual.score,
      visualParts: visualParts(visual.parts),
      visualEye: visual.eyeFactor,
      aaMatch: m._pinName ? 'pinned' : 'aa-direct',
      needsAaFix: false,
      freeInOc: false,
      status: 'not-in-go',
    };
  });

  const all = [...items, ...extraItems];

  // Бесплатные модели OpenCode: самые умные помечаем бейджем «Free» на уже
  // существующих строках, остальные добавляем отдельными строками.
  const freeResolved = freeNames.map((name) => {
    // «GLM-5.3-Flash Free» -> «GLM-5.3-Flash»; «Beam Free» остаётся как есть,
    // поэтому пробуем и полное имя, и имя без суффикса Free.
    const base = name.replace(/\s+free$/i, '').trim();
    const hit = matchAaFull(name) || matchAaFull(base);
    const aaModel = hit ? hit.m : null;
    return { name, base, aaModel, aaMatch: hit ? hit.method : null, intelligence: aaModel ? aaModel.intelligence : null };
  });

  const freeRanked = freeResolved
    .filter((f) => f.intelligence != null)
    .sort((a, b) => b.intelligence - a.intelligence);

  const freeTop = CONFIG.freeTopN > 0 ? freeRanked.slice(0, CONFIG.freeTopN) : freeRanked;

  const freeSlugs = new Set(freeTop.filter((f) => f.aaModel).map((f) => f.aaModel.slug));
  const freeNameKeys = new Set();
  for (const f of freeTop) {
    freeNameKeys.add(norm(f.name));
    freeNameKeys.add(norm(f.base));
  }

  const freeBadged = [];
  for (const m of all) {
    if ((m.aaSlug && freeSlugs.has(m.aaSlug)) || freeNameKeys.has(norm(m.name))) {
      m.freeInOc = true;
      freeBadged.push(m.name);
    }
  }

  // Отдельные строки для бесплатных моделей, которых в списке ещё нет:
  // ни по подписке (тот же aaSlug или то же имя), ни среди добавленных ранее.
  const presentSlugs = new Set(all.filter((m) => m.aaSlug).map((m) => m.aaSlug));
  const presentNames = new Set();
  for (const m of all) {
    presentNames.add(norm(m.name));
    if (m.aaName) presentNames.add(norm(baseName(m.aaName)));
  }

  const freeOnlyItems = [];
  const freeSkipped = [];

  for (const f of freeResolved) {
    const alreadyListed =
      (f.aaModel && presentSlugs.has(f.aaModel.slug)) ||
      presentNames.has(norm(f.name)) ||
      presentNames.has(norm(f.base));
    if (alreadyListed) continue;
    if (!f.aaModel && !CONFIG.showFreeWithoutAa) {
      freeSkipped.push(f.name);
      continue;
    }

    const m = f.aaModel;
    const guessedCreator = m ? null : guessCreator(f.base || f.name);
    const visual = m ? visualScore(arena, m.displayName) : { score: null, parts: null };

    freeOnlyItems.push({
      // Показываем имя без суффикса «Free» — бесплатность и так видна по бейджу.
      name: f.base || f.name,
      inGo: false,
      goModelId: null,
      inGoApi: false,
      creator: m?.creator ?? guessedCreator ?? '—',
      color: m?.color ?? (guessedCreator ? creatorColors.get(guessedCreator) : null) ?? '#8A8A93',
      logo: m?.logo ?? null,
      aaSlug: m?.slug ?? null,
      aaName: m?.name ?? null,
      aaUrl: m?.url ?? null,
      intelligence: m?.intelligence ?? null,
      intelligenceEstimated: m?.intelligenceEstimated ?? false,
      costPerTask: m?.costPerTask ?? null,
      contextWindow: m?.contextWindow ?? null,
      isReasoning: m?.isReasoning ?? null,
      isOpenWeights: m?.isOpenWeights ?? null,
      go: null,
      efficiency: null,
      efficiencyProvisional: false,
      valueScore: null,
      reliability: m ? reliabilityScore(m) : null,
      visual: visual.score,
      visualParts: visualParts(visual.parts),
      visualEye: visual.eyeFactor ?? null,
      aaMatch: f.aaMatch,
      needsAaFix: false,
      freeInOc: true,
      // Отдельный статус: не «вне подписки» и не активная подписочная модель.
      status: 'free',
    });
  }

  all.push(...freeOnlyItems);

  // Красная метка «нет AA»: подписочная модель, не бесплатная и без карточки
  // на Artificial Analysis (не нашлась ни в лидерборде, ни в добивке со
  // страницы модели). Имя вида «… Free» — тоже бесплатная, не красим.
  // На сайте такие строки подсвечиваются красным — это сигнал владельцу
  // дописать пару в aaSlugOverrides.
  const needsAaFix = [];
  for (const m of items) {
    if (!m.aaSlug && !m.freeInOc && !/\sfree$/i.test(m.name)) {
      m.needsAaFix = true;
      needsAaFix.push({ name: m.name, suggestions: aaSuggestions(m.name, index) });
    }
  }

  const visualCount = all.filter((m) => m.visual != null).length;

  const data = {
    meta: {
      generatedAt: new Date().toISOString(),
      plan: { id: CONFIG.plan, label: 'OpenCode Go', price: '$10/мес' },
      fiveHourShare: CONFIG.fiveHourShare,
      value: CONFIG.value,
      reliability: CONFIG.reliability,
      visual: {
        ...CONFIG.visual,
        arena: {
          dataset: CONFIG.arena.dataset,
          split: CONFIG.arena.split,
          sources: CONFIG.arena.sources,
          asOf: arena ? arena.asOf : null,
        },
      },
      counts: {
        total: all.length,
        inGo: items.length,
        extraFromAA: extraItems.length,
        freeOnly: freeOnlyItems.length,
        unmatched: unmatched.length,
        withoutIntelligence: items.filter((i) => i.intelligence == null).length,
        withVisual: all.filter((m) => m.visual != null).length,
        freeInOc: freeBadged.length,
        freeAvailable: freeRanked.length,
        needsAaFix: needsAaFix.length,
      },
      // Аудит автоподхвата: каким методом сопоставилась каждая подписочная модель.
      matchMethods: matchStats,
      // Подписочные модели без карточки AA: имена + кандидаты для aaSlugOverrides.
      needsAaFix,
      // Бесплатные модели OpenCode: сколько всего, что попало в отбор и какие.
      free: {
        topN: CONFIG.freeTopN,
        top: freeTop.map((f) => ({
          name: f.name,
          base: f.base,
          intelligence: f.intelligence,
          aaSlug: f.aaModel ? f.aaModel.slug : null,
        })),
      },
      sources: CONFIG.urls,
      notes: {
        intelligence: intelligenceNote(),
        reliability: reliabilityNote(),
        visual: visualNote(),
        costPerTask: costPerTaskNote(),
        efficiency: efficiencyNote(),
        free: freeNote(),
      },
    },
    models: all,
  };

  const out = path.join(DIR, 'data.js');
  const header =
    '/* Файл создан автоматически скриптом fetch-data.mjs.\n' +
    '   Ручные правки будут перезаписаны. Настройки — в models.config.js. */\n';
  await fs.writeFile(out, `${header}window.AI_DATA = ${JSON.stringify(data, null, 2)};\n`, 'utf8');

  console.log(`\n✓ Записано: ${path.basename(out)}`);
  console.log(`  моделей всего: ${all.length}`);
  console.log(
    `  в подписке Go: ${items.length}, добавлено с AA: ${extraItems.length}, ` +
      `бесплатных строк: ${freeOnlyItems.length}`
  );
  console.log(
    `  «Визуал»: есть у ${visualCount} из ${all.length} моделей` +
      (arena ? `, снимок арен ${arena.asOf}` : ' — арены недоступны')
  );
  const noVisual = items.filter((i) => i.visual == null);
  if (noVisual.length) {
    console.log(`  в подписке Go без «Визуала» (${noVisual.length}):`);
    for (const m of noVisual) {
      console.log(`    · ${m.name}${m.aaName ? '' : ' — нет карточки на Artificial Analysis'}`);
    }
  }
  if (unmatched.length) {
    console.log(`\n  Модели Go без данных на Artificial Analysis (${unmatched.length}):`);
    for (const n of unmatched) console.log(`    · ${n}`);
  }
  if (resolvedViaFallback.length) {
    console.log(`\n  Закрыто добивкой со страниц моделей (${resolvedViaFallback.length}):`);
    for (const r of resolvedViaFallback) {
      console.log(`    · ${r.name} -> ${r.slug} (Intelligence ${r.intelligence}, ${r.via})`);
    }
  }
  const methodSummary = Object.entries(matchStats)
    .map(([method, n]) => `${method}: ${n}`)
    .join(', ');
  if (methodSummary) console.log(`  сопоставление с AA: ${methodSummary}`);
  if (needsAaFix.length) {
    console.log(`\n  ВНИМАНИЕ: подписочных моделей без карточки AA (${needsAaFix.length}) — на сайте они красные:`);
    for (const n of needsAaFix) {
      console.log(`    · ${n.name}`);
      for (const s of n.suggestions) {
        console.log(`      → '${n.name}': '${s.slug}',   # на AA «${s.name}»`);
      }
      if (!n.suggestions.length) console.log('      (похожих карточек на AA не нашлось)');
    }
  }
  const free = all.filter((m) => m.status === 'unlimited');
  if (free.length) console.log(`  без лимита: ${free.map((m) => m.name).join(', ')}`);
  if (freeBadged.length) console.log(`  бесплатно в OpenCode — бейдж «Free»: ${freeBadged.join(', ')}`);
  const freeNoAa = freeResolved.filter((f) => f.intelligence == null);
  if (freeNoAa.length) {
    console.log(`  бесплатные без данных на Artificial Analysis (${freeNoAa.length}):`);
    for (const f of freeNoAa) console.log(`    · ${f.name}`);
  }
  if (CONFIG.freeTopN > 0 && freeRanked.length > freeTop.length) {
    console.log(
      `  бесплатных с данными AA всего ${freeRanked.length} — показаны ${freeTop.length} ` +
        '(поднять лимит: models.config.js → freeTopN)'
    );
  }
}

main().catch((err) => {
  console.error('\n✗ Не удалось обновить данные.');
  console.error(`  ${err.message}`);
  console.error('  Старый data.js оставлен без изменений.');
  process.exitCode = 1;
});
