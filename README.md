# Документация

Проект представляет собой блог о программировании.

## Стек технологий

Фронтенд написан на `React 18`, `TypeScript`. Бекенд на `json-server`.

Дополнительные библитеки:

- `react-router-dom`, `headlessui/react`
- `i18next` для мультиязычности (русский и английский языки)
- Сайт имеет цветовые схемы (светлая и темная) через хук [useTheme](/src/shared/lib/hooks/useTheme.ts)

### Работа с данными

- `reduxjs/toolkit` Взаимодействие с данными

- `EntityAdapter` позволяет нормализовать данные 

- `RTK query` для запросов на сервер 

- [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader.tsx) для асинхронного подключения редюсеров 

## Запуск проекта

```bash
npm run dev 

# на vite
npm run dev:vite 
```

## Архитектура проекта

Проект написан в соответствии с методологией [Feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

### Пример использования FSD в проекте

- [ArticleDetailsPage](/src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx) и [ProfilePage](/src/pages/ProfilePage/ui/ProfilePage.tsx) - это слой `pages`.
  Страницы для отображения статьи и профиля пользователя
- [ArticleRating](/src/features/articleRating/ui/ArticleRating/ArticleRating.tsx) и [ProfileRating](/src/features/ProfileRating/ui/ProfileRating/ProfileRating.tsx) - это слой `features`.
  Фичи, внутри которых есть бизнес логика, работа с бекендом.
  Оперируют сущностями, например определяют какой текст будет внутри сущности карточки с рейтингом. Фичи предназначены для решения конкретных задач, он менее переиспользуемые.
- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) - это слой `entitity`.
  Cкелет карточки с рейтингом. Сущность, которая не привязана к бизнес логике.
- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) - это переиспользуемый `shared` компонент.
  Интерактивный элемент звездочек, который можно использовать где угодно.



[ArticleDetailsPage](/src/pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.tsx) (`pages`)
|
|---- [ArticleRating](/src/features/articleRating/ui/ArticleRating/ArticleRating.tsx) (`features`)
|     |
|     |---- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) (`entities`)
|           |
|           |---- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) (`shared`)
|
|
[ProfilePage](/src/pages/ProfilePage/ui/ProfilePage.tsx) (`pages`)
|
|---- [ProfileRating](/src/features/ProfileRating/ui/ProfileRating/ProfileRating.tsx) (`features`)
      |
      |---- [RatingCard](/src/entities/Rating/ui/RatingCard/RatingCard.tsx) (`entities`)
            |
            |-- [StarRating](/src/shared/ui/StarRating/StarRating.tsx) (`shared`)



## Линтинг

`Stylelint` для проверки файлов со стилями

Команды для запуска

```bash
npm run l:scss

# Исправление scss файлов
npm run l:scss:fix
```



`Eslint` для проверки ts и tsx файлов

Команды для запуска

```bash
npm run l:ts

# Исправление ts и tsx файлов
npm run l:ts:fix
```



Для контроля архитектурных принципов, используется собственный [eslint-plugin-ga-plugin](https://www.npmjs.com/package/eslint-plugin-ga-plugin), который содержит 3 правила

- `path-checker` - запрещает использовать абсолютные импорты в рамках одного модуля
- `layer-imports` - проверяет корректность использования слоев с точки зрения FSD
  (например widgets нельзя использовать в features и entitites)
- `public-api-imports` - разрешает импорт из других модулей только из public api. Имеет auto fix

## Storybook

Дополнительные плангины

- `storybook-addon-mock` позволяет имитировать HTTP-запросы
- `storybook/addon-essentials` для документирования компонентов
- `storybook/addon-interactions` позволяет создавать и тестировать интерактивные компоненты
- `storybook/addon-styling` предназначен для работы со стилями и CSS



Команда для запуска

```bash
npm run story
```

## Тестирование

-  `jest` - Unit тесты

-  `React testing library` - Тесты на компоненты



Команда для запуска

```bash
npm run t:unit
```

### Скриншотное тестирование

-  `Storycap` - Cоздание скриншотов
-  `reg-cli` - Cравнение скриншотов и генерация отчета в report.html



Команды для запуска

```bash
# Создание скриншотов текщего состояния компонентов
npm run cur

# Запуск скриншотного тестирования
npm run t:ui

# Утверждение скриншотов как эталонных 
npm run ref
```

## Сборщики

`Webpack` и `vite`

Дополнительные плагины

- `react-refresh-webpack-plugin` Быстрое обновление страницы без перезагрузки  
- `babel/plugin-transform-runtime` Уменьшение дублирования кода
- `babel/plugin-transform-typescript` Транспиляция TypeScript
- `ForkTsCheckerWebpackPlugin` Проверка типов в отдельный процесс

## Оптимизация

- `createSelector` для мемоизации селекторов [Пример](/src/pages/ArticleDetailsPage/model/selectors/article.ts)
- `useCallback`, `useMemo` и `memo` для оптимизации лишних рендеров [Пример](/src/entities/Article/ui/ArticleDetails/ArticleDetails.tsx)
- `IntersectionObserver` для бесконечного скролла в хуке [useInfiniteScroll](/src/shared/lib/hooks/useInfiniteScroll.ts)
- [useThrottle](/src/shared/lib/hooks/useThrottle.ts) позволяет вызвать переданный callback не чаще, чем один раз в заданный промежуток времени. Используется в при скролле в [Page](/src/widgets/Page/ui/Page/Page.tsx)
- [useDebounce](/src/shared/lib/hooks/useDebounce.ts) позволяет отложить выполнение переданного callback на заданный промежуток времени. Используется для оптимизации поискового запроса в [ArticlesPageFilters](/src/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.tsx)

## Инструменты для поиска ошибок

- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) анализ размера банда
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) позволяет перехватывать ошибки, которые происходят в дочерних компонентах и обрабатать их

## CI pipeline и pre commit хуки

- Конфигурация `github actions` в [main.yml](/.github/workflows/main.yml)
- Конфигурация пре коммит хуков в [pre-commit](/.husky/pre-commit)

