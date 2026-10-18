# Дизайн-скилы (проектные)

Скачаны с открытых репозиториев и лежат в проекте, чтобы ехать вместе с ним.
Используются при работе над экспериментальной страницей `cyber/`
(см. `../AGENTS.md` и `../ROADMAP.md`).

Категории ниже — только для навигации по этому файлу: сами скилы лежат плоско в этой
папке (`.opencode/skills/<имя>/SKILL.md`) и загружаются все сразу.

## Скилы Антропика

• **brand-guidelines** : применяет официальные фирменные цвета и шрифты Anthropic к любому артефакту. Нужен, когда важна строгая дисциплина бренда — пример того, как выглядит выдержанная айдентика.
• **theme-factory** : набор из 10 готовых тем (цвета + шрифты) плюс генерация новой темы на лету для страниц и документов. Нужен, чтобы быстро получить цельный визуальный стиль вместо набора случайных цветов.
• **web-artifacts-builder** : обвязка для сборки сложных многосоставных HTML-страниц на React + Tailwind + shadcn/ui — состояние, роутинг, компоненты. Нужен, когда одной страницы с инлайн-скриптом уже не хватает.
• **webapp-testing** : работа с локальным приложением через Playwright — проверка поведения, скриншоты, логи браузера. Нужен, чтобы проверять результат в браузере, а не «на глаз по коду».

## Скилы Web Design

• **shadcn-ui** : установка и настройка компонентов shadcn/ui в React-проекте: порядок установки, зависимости, кастомизация через семантические токены, частые рецепты (формы, таблицы, навигация, модалки). Нужен для качественной и предсказуемой компонентной базы.
• **tailwind-theme-builder** : настройка Tailwind v4 + темы shadcn/ui с тёмной темой: CSS-переменные через `@theme inline`, переключатель темы, починка типичных проблем (цвета не работают, конфликты `@apply`, миграция v3 → v4). Нужен, чтобы цвета и тёмная тема работали стабильно.
• **landing-page** : генерация цельной адаптивной страницы на Tailwind (через CDN): hero с кнопкой, фичи, социальные доказательства, FAQ, футер, тёмный режим, OG-теги. Нужен для быстрых одностраничников.
• **product-showcase** : маркетинговый многостраничный сайт с реальными скриншотами и анимированными прохождениями по приложению. Нужен, чтобы наглядно объяснить, что делает продукт.
• **design-loop** : автономная сборка сайта «по эстафете»: каждая итерация делает следующую страницу, проверяет её визуально и записывает задание на следующую. Нужен для сайта из многих страниц без ручного управления.
• **responsiveness-check** : прогон по брейкпоинтам через браузер со скриншотами и поиском поломок вёрстки (переполнения, переключения навигации, смена колонок). Нужен, чтобы ловить адаптивные баги.
• **color-palette** : генерация полной доступной палитры из одного брендового цвета — 11 оттенков, семантические токены, вариант для тёмной темы, вывод в Tailwind v4, проверка контраста по WCAG. Нужен для аккуратной цветовой системы.

## Скилы UI/UX (общий дизайн)

• **design-system** : извлекает готовую дизайн-систему из существующего сайта или скриншота в `DESIGN.md` — цвета, типографика, стили компонентов, отступы, атмосфера. Нужен, чтобы держать единый стиль и переиспользовать его.
• **design-review** : разбор визуального качества — сетка, типографика, отступы, цвет, иерархия, консистентность, адаптивность — с отчётом и скриншотами. Нужен, чтобы страница выглядела профессионально, а не «примерно».
• **refactoring-ui** : свод правил из книги Refactoring UI (151 правило): визуальная иерархия, отступы и сетка, типографика, цвет и контраст, тени, токены — с привязкой к Tailwind. Нужен как диагностика «почему выглядит любительски» и как справочник при проектировании.
• **styleseed** : единая точка входа в дизайн-метод: настройка, макеты, токены, ревью, проверка в рендере и обновления; сохраняет уже принятые в проекте решения. Нужен, чтобы не переизобретать подход к стилю на каждой задаче.
• **ux-audit** : проход по живому приложению «как пользователь» — взаимодействия, стресс-матрицы, доступность (axe-core), бюджет производительности (LCP/CLS/INP). Нужен, чтобы находить реальные баги удобства, невидимые при чтении кода.
• **ux-ui-premium-direction-style-selector** : 8 радикально разных визуальных направлений в виде демо-страниц для сравнения, затем генерация токенов, конфига Tailwind и базовых компонентов под выбранное направление. Нужен, чтобы выбрать стиль до того, как всё переделано.

## Источники

| Скил | Источник | Файлов |
| --- | --- | --- |
| `shadcn-ui` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/shadcn-ui` | 3 |
| `tailwind-theme-builder` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/tailwind-theme-builder` | 8 |
| `design-system` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/design-system` | 1 |
| `design-review` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/design-review` | 1 |
| `design-loop` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/design-loop` | 1 |
| `product-showcase` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/product-showcase` | 1 |
| `landing-page` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/frontend/skills/landing-page` | 1 |
| `ux-audit` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/dev-tools/skills/ux-audit` | 23 |
| `responsiveness-check` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/dev-tools/skills/responsiveness-check` | 3 |
| `color-palette` | [jezweb/claude-skills](https://github.com/jezweb/claude-skills) — `plugins/design-assets/skills/color-palette` | 2 |
| `theme-factory` | [anthropics/skills](https://github.com/anthropics/skills) — `skills/theme-factory` | 13 |
| `web-artifacts-builder` | [anthropics/skills](https://github.com/anthropics/skills) — `skills/web-artifacts-builder` | 5 |
| `webapp-testing` | [anthropics/skills](https://github.com/anthropics/skills) — `skills/webapp-testing` | 6 |
| `brand-guidelines` | [anthropics/skills](https://github.com/anthropics/skills) — `skills/brand-guidelines` | 2 |
| `refactoring-ui` | [edisonmbli/refactoring-ui-skill](https://github.com/edisonmbli/refactoring-ui-skill) — `skills/refactoring-ui` | 26 |
| `ux-ui-premium-direction-style-selector` | [Luispitik/ux-ui-premium-direction-style-selector](https://github.com/Luispitik/ux-ui-premium-direction-style-selector) — `ux-ui-premium-direction-style-selector` | 2 |
| `styleseed` | [bitjaru/styleseed](https://github.com/bitjaru/styleseed) — `skills/styleseed` | 69 |

Лицензии — в самих репозиториях-источниках; при распространении соблюдайте их условия.
