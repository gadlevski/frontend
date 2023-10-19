# Документация

Проект представляет собой блог о программировании.

<br>

## Стек технологий

Фронтенд написан на `React 18`, `TypeScript`. Бекенд на `json-server`.

Дополнительные библитеки:

- `react-router-dom`, `headlessui/react`
- `i18next` для мультиязычности (русский и английский языки)
- Сайт имеет цветовые схемы (светлая и темная) через хук [useTheme](/src/shared/lib/hooks/useTheme.ts)

<br>

### Работа с данными

- `reduxjs/toolkit` Взаимодействие с данными
- `EntityAdapter` позволяет нормализовать данные 
- `RTK query` для запросов на сервер 

<br>

## Запуск проекта

```bash
npm run dev 

# на vite
npm run dev:vite 
```

<br>

## Архитектура проекта

Проект написан в соответствии с методологией [Feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

<br>

### Пример использования FSD в проекте

- [ArticleDetailsPage](/src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx) и [ProfilePage](/src/pages/ProfilePage/ui/ProfilePage.tsx) - это слой `pages`.
  Страницы для отображения статьи и профиля пользователя
- [ArticleRating](/src/features/articleRating/ui/ArticleRating/ArticleRating.tsx) и [ProfileRating](/src/features/ProfileRating/ui/ProfileRating/ProfileRating.tsx) - это слой `features`.
  Фичи, внутри которых есть бизнес логика, запросы на бекенд.
  Оперируют сущностями, например, определяют какой текст будет внутри сущности карточки с рейтингом. Фичи предназначены для решения конкретных задач, он менее переиспользуемые.
- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) - это слой `entitity`.
  Cкелет карточки с рейтингом. Сущность, которая не привязана к бизнес логике.
- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) - это переиспользуемый `shared` компонент.
  Интерактивный элемент звездочек, который можно использовать где угодно.

<br>

[ArticleDetailsPage](/src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx) (`pages`)<br>
|<br>
|---- [ArticleRating](/src/features/articleRating/ui/ArticleRating/ArticleRating.tsx) (`features`)<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) (`entities`)<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) (`shared`)<br>
|<br>
|<br>
[ProfilePage](/src/pages/ProfilePage/ui/ProfilePage/ProfilePage.tsx) (`pages`)<br>
|<br>
|---- [ProfileRating](/src/features/ProfileRating/ui/ProfileRating/ProfileRating.tsx) (`features`)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) (`entities`)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) (`shared`)<br>

<br>

## Оптимизация производительности

- `useCallback` предотвращает создание новой функции при каждом рендере [Пример](/src/entities/Article/ui/ArticleDetails/ArticleDetails.tsx)
- `useMemo` предотвращает создание нового массива при каждом рендере [Пример](/src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.tsx)
- `memo` компонент будет перерендериваться только если его пропсы изменились [Пример](/src/features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector.tsx)
- `createSelector` для мемоизации селекторов [Пример](/src/pages/ArticleDetailsPage/model/selectors/article.ts)
- `lazy` для динамической загрузки компонента [Пример](/src/features/ArticleRating/ui/ArticleRating/ArticleRating.async.tsx)
- `Suspense` для отображения Skeleton, пока идет загрузка основного компонента [Пример](/src/features/ArticleRating/ui/ArticleRating/ArticleRating.async.tsx)
- `IntersectionObserver` для бесконечного скролла в хуке [useInfiniteScroll](/src/shared/lib/hooks/useInfiniteScroll.ts)
- [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) для асинхронного подключения редюсеров 
- [useThrottle](/src/shared/lib/hooks/useThrottle.ts) позволяет вызвать переданный callback не чаще, чем один раз в заданный промежуток времени. Используется в при скролле в [Page](/src/widgets/Page/ui/Page/Page.tsx)
- [useDebounce](/src/shared/lib/hooks/useDebounce.ts) позволяет отложить выполнение переданного callback на заданный промежуток времени. Используется для оптимизации поискового запроса в [ArticlesPageFilters](/src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx)
- Различные среды для транспиляции и тестирования сборок в [.browserslistrc](.browserslistrc)
- `eval-cheap-module-source-map` опция в Webpack, которая позволяет ускорить генерацию source map [Пример](/config/build/buildWebpackConfig.ts)
- `cacheDirectory` опция в babel-loader для кеширования частей сборки [Пример](/config/build/buildWebpackConfig.ts)

<br>

## Линтинг

`Stylelint` для проверки css и scss файлов

Команды для запуска

```bash
npm run l:scss

# Исправление scss файлов
npm run l:scss:fix
```

<br>

`Eslint` для проверки ts и tsx файлов

Команды для запуска

```bash
npm run l:ts

# Исправление ts и tsx файлов
npm run l:ts:fix
```

<br>

Для контроля архитектурных принципов, используется собственный [eslint-plugin-ga-plugin](https://www.npmjs.com/package/eslint-plugin-ga-plugin), который содержит 3 правила

- `path-checker` - запрещает использовать абсолютные импорты в рамках одного модуля
- `layer-imports` - проверяет корректность использования слоев с точки зрения FSD
  (например widgets нельзя использовать в features и entitites)
- `public-api-imports` - разрешает импорт из других модулей только из public api. Имеет auto fix

<br>

## Storybook

Дополнительные плангины

- `storybook-addon-mock` позволяет имитировать HTTP-запросы
- `storybook/addon-essentials` для документирования компонентов
- `storybook/addon-interactions` позволяет создавать и тестировать интерактивные компоненты
- `storybook/addon-styling` предназначен для работы со стилями
- `storybook-addon-themes` позволяет добавить класс (изменение темы из панели) 

<br>

Команда для запуска

```bash
npm run story
```

<br>

## Тестирование

-  `jest` - Unit тесты

-  `React testing library` - Тесты на компоненты

<br>

Команда для запуска

```bash
npm run t:unit
```

<br>

### Скриншотное тестирование

-  `Storycap` - Cоздание скриншотов
-  `reg-cli` - Cравнение скриншотов и генерация отчета в report.html

<br>

Команды для запуска

```bash
# Создание скриншотов текщего состояния компонентов
npm run cur

# Запуск скриншотного тестирования
npm run t:ui

# Утверждение скриншотов как эталонных 
npm run ref
```

<br>

## Сборщики

`Webpack` и `vite`

Дополнительные плагины

- `react-refresh-webpack-plugin` Быстрое обновление страницы без перезагрузки  
- `babel/plugin-transform-runtime` Уменьшение дублирования кода
- `babel/plugin-transform-typescript` Транспиляция TypeScript
- `ForkTsCheckerWebpackPlugin` Проверка типов в отдельный процесс

<br>

Конфигурация находится в [/config](/config)

- [/config/babel](/config/babel) - babel
- [/config/build](/config/build) - конфигурация webpack
- [/config/jest](/config/jest) - конфигурация тестовой среды
- [/config/storybook](/config/storybook) - конфигурация storybook

<br>

## Инструменты для поиска ошибок

- `Redux DevTools` для отладки стейта приложения
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) для анализа размера банда
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) позволяет перехватывать ошибки, которые происходят в дочерних компонентах и обрабатать их

<br>

## CI pipeline и pre commit хуки

- Конфигурация `github actions` в [main.yml](/.github/workflows/main.yml)
- Конфигурация пре коммит хуков в [pre-commit](/.husky/pre-commit)

