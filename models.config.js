/**
 * Настройки обновления данных.
 *
 * Если модель не сопоставилась с Artificial Analysis, скрипт напишет об этом
 * в консоль. Тогда достаточно дописать пару в aaSlugOverrides.
 * Актуальные slug'и видны в адресе страницы модели, например:
 * https://artificialanalysis.ai/models/kimi-k3 -> kimi-k3
 */
export const CONFIG = {
  // Тариф, по которому считаем. Сейчас поддерживается только "go".
  plan: 'go',

  // Сколько лучших моделей по Intelligence с Artificial Analysis добавлять,
  // если их нет в подписке Go.
  topFromAA: 20,

  urls: {
    aa: 'https://artificialanalysis.ai/leaderboards/models',
    goDocs: 'https://opencode.ai/docs/go/',
    goModels: 'https://opencode.ai/inference/go/v1/models',
    // Прайс-лист OpenCode (Console/Zen): модели со словом Free в колонке Input
    // доступны бесплатно, без подписки.
    ocModels: 'https://opencode.ai/docs/zen/',
    // Арены LMArena через публичный datasets-server Hugging Face: голоса людей
    // на фронтенд-задачах и оценка того, насколько удобно работать с моделью.
    // JSON, без ключа и регистрации. Нужен только для метрики «Эстетика».
    arenaRows: 'https://datasets-server.huggingface.co/rows',
  },

  /**
   * Ручное сопоставление: "название модели в документации OpenCode" -> "slug на Artificial Analysis".
   * Нужно там, где названия расходятся: сокращения, приписки вроде "Contributor",
   * другие ревизии модели или полностью другое имя.
   *
   * Заполнять осторожно: если у модели на AA нет данных, честнее оставить прочерк,
   * чем подставить цифры похожей модели.
   */
  aaSlugOverrides: {
    'DeepSeek V4 Pro': 'deepseek-v4-pro', // на AA это "DeepSeek V4 Pro 0813"
    'Gemini 4 Argon Contributor': 'gemini-4-argon',
    'Muse Spark 1.3 Contributor': 'muse-spark-1-3',
    'Beam Free': 'reflection-beam', // на AA релиз называется "Beam 1.0"
  },

  // Доля месячного лимита, доступная в 5-часовом окне (правило OpenCode).
  fiveHourShare: 0.2,

  /**
   * Сколько самых умных бесплатных моделей OpenCode пометить бейджем «Free».
   *
   * Бесплатные модели — те, что в прайс-листе OpenCode (urls.ocModels) помечены
   * «Free»: они доступны без подписки Go. В отбор попадают только те, у которых
   * есть Intelligence на Artificial Analysis (иначе их не с чем сравнивать).
   * Новые строки не добавляются: бейдж встаёт на уже существующую модель, чтобы
   * было видно, что она доступна и по подписке, и бесплатно.
   * 0 или null — пометить все бесплатные модели с данными.
   */
  freeTopN: 3,

  /**
   * Настройки метрики «OpenCode Go Эффективность» (valueScore).
   *
   * Показатель = 100 · IQ^weight · Лимит^(1 - weight), где
   *   IQ    — Intelligence модели, приведённый к 0…1 между iqFloor и iqCeil;
   *   Лимит — log10(запросов на 5 ч), приведённый к 0…1 между limitFloor и limitCeil;
   *           «без лимита» считается как limitCeil (норма 1).
   *
   * weight = 0.5 — равный баланс умности и щедрости лимита. Больше — сильнее
   * ценится умность модели, меньше — объём лимита под неё.
   * Якоря фиксированные, а не min/max по списку: иначе оценка «плыла» бы
   * при каждом обновлении состава моделей.
   */
  value: {
    weight: 0.5,
    iqFloor: 15,
    iqCeil: 55,
    limitFloor: 100,
    limitCeil: 45000,
  },

  /**
   * Настройки метрики «Надёжность» (reliabilityScore).
   *
   * Совокупный показатель того, насколько модель хорошо справляется с большими
   * и сложными задачами, не галлюцинирует и хорошо проверяет себя и других агентов.
   *
   * Каждый компонент — это поле Artificial Analysis, приведённое к 0…1 между
   * floor и ceil. Итог — средневзвешенное компонентов, умноженное на 100.
   * Если у модели нет какого-то компонента, он просто не участвует, а веса
   * оставшихся нормируются (поэтому «Надёжность» есть почти у всех моделей,
   * хотя диагностика сбоев ITBench-SRE измерена лишь у части из них).
   *
   * Якоря фиксированные, а не min/max по списку: иначе оценка «плыла» бы
   * при каждом обновлении состава моделей.
   *
   * Ключи — имена полей из loadArtificialAnalysis() в fetch-data.mjs.
   */
  reliability: {
    components: [
      // Большие и сложные задачи: сила модели, реальные рабочие задачи
      // (GDPval) и объём контекста, который она удерживает.
      { key: 'intelligence', weight: 0.3, floor: 15, ceil: 55 },
      { key: 'gdpval', weight: 0.2, floor: 0.05, ceil: 0.75 },
      { key: 'contextWindow', weight: 0.1, floor: 128000, ceil: 1000000 },
      // Не галлюцинирует: доля ответов без выдуманных фактов. С IQ почти
      // не связана, поэтому и делает метрику отличной от Intelligence.
      { key: 'nonHallucination', weight: 0.25, floor: 0, ceil: 0.9 },
      // Проверяет себя и других агентов: диагностика сбоев в системах.
      { key: 'itbenchSre', weight: 0.15, floor: 0.3, ceil: 0.6 },
    ],
  },

  /**
   * Арены LMArena — источник метрики «Эстетика».
   *
   * У Artificial Analysis таких бенчмарков нет вообще: в их лидерборде только
   * знания, математика, код, агенты, длинный контекст и галлюцинации, и почти
   * все эти поля дублируют Intelligence (Spearman 0.78…0.97). Поэтому «Эстетика»
   * берёт данные людей из арен LMArena через публичный datasets-server Hugging Face.
   *
   * sources: компонент «Эстетики» -> пара (config, field) в датасете.
   *   webdev       — Code Arena: голоса людей на фронтенд-задачах, ELO (rating).
   *   steerability — Agent Arena: насколько модель слушается правок (score).
   *   praise       — Agent Arena: хвалят модель или жалуются на неё (score).
   *
   * Сопоставление с моделью идёт по имени на Artificial Analysis (aaName):
   * сначала полное совпадение, затем — имя без варианта в скобках
   * («Step 5 Preview» -> «Step 5 Preview (High)»), но только если такой
   * вариант один. Неоднозначные имена пропускаются, а не угадываются.
   * Для ручных случаев есть overrides (по образцу aaSlugOverrides).
   */
  arena: {
    dataset: 'lmarena-ai/leaderboard-dataset',
    split: 'latest',
    sources: {
      webdev: { config: 'webdev', field: 'rating' },
      steerability: { config: 'agent_steerability', field: 'score' },
      praise: { config: 'agent_praise_complaint', field: 'score' },
    },
    // 'Имя модели на AA': 'Имя в арене' — только для реальных расхождений в названии.
    overrides: {},
  },

  /**
   * Настройки метрики «Эстетика» (aestheticsScore).
   *
   * Насколько модель хороша в визуальных и дизайнерских задачах: UI, UX,
   * «удобно» и «приятно». 0…100, как «Надёжность»: каждый компонент приводится
   * к 0…1 по фиксированным якорям, итог — средневзвешенное, умноженное на 100.
   *
   * require — компонент, без которого балла нет. Это webdev: метрика в первую
   * очередь про интерфейсы, и считать её по одной «приятности» было бы
   * искажением. Остальные компоненты добавляются к нему, если есть.
   *
   * Якоря фиксированные (не min/max по снимку): иначе оценка «плыла» бы при
   * каждом обновлении состава моделей. Ориентиры по датасету LMArena:
   * webdev — медиана 1447, p95 1682, максимум 1807; steerability — медиана 0.011,
   * максимум 0.164; praise — медиана 0.012, максимум 0.399.
   *
   * Веса подобраны так, чтобы метрика оставалась про интерфейсы, а «удобство
   * работы» её лишь уточняло: при 0.2/0.2 агентные компоненты перебивали
   * разницу по Code Arena (у Muse Spark и Gemini 4 Argon почти равный webdev,
   * но 25 баллов разницы).
   */
  aesthetics: {
    require: 'webdev',
    components: [
      { key: 'webdev', weight: 0.7, floor: 1400, ceil: 1720 },
      { key: 'steerability', weight: 0.15, floor: -0.05, ceil: 0.16 },
      { key: 'praise', weight: 0.15, floor: -0.05, ceil: 0.4 },
    ],
  },

  /**
   * Модели из подписки Go, у которых нет карточки на Artificial Analysis, остаются
   * без Intelligence и без фирменного цвета. Здесь можно подсказать провайдера
   * по началу названия модели — тогда полоса и подпись будут того же цвета,
   * что у остальных моделей этого разработчика.
   * Берётся самое длинное совпадение.
   */
  creatorHints: {
    'GLM': 'Z AI',
    'Qwen': 'Alibaba',
    'MiMo': 'Xiaomi',
    'Kimi': 'Kimi',
    'DeepSeek': 'DeepSeek',
    'LongCat': 'Meituan',
    'MiniMax': 'MiniMax',
    'Muse Spark': 'Meta',
    'Hy4': 'Tencent',
    'Hy3': 'Tencent',
    'Step': 'StepFun',
    'GPT': 'OpenAI',
    'Claude': 'Anthropic',
    'Gemini': 'Google',
    'Grok': 'SpaceXAI',
  },
};
