# Архитектура

- Nx workspace: `client` (Angular SPA), `api` (NestJS REST), библиотеки `client-shared` (общие UI, утилиты) и `client-features` (фичи/экраны), e2e проекты для клиента и сервера.
- Фича-ориентированная структура: новые возможности выносить в отдельные библиотеки/папки `client-features`, переиспользуемые атомы/молекулы и инфраструктуру складывать в `client-shared`.
- Контракты: фронт ↔ бэк через REST; типы запросов/ответов по возможности выносить в общие интерфейсы/модели (shared package) и импортировать с обеих сторон.
- Навигация: Angular standalone компоненты, маршруты в `client/src/app/app.routes.ts`, хедер/футер — из `client-shared`.
- Сборка: использовать Nx таргеты (`nx build/serve/lint/test <project>`), общие алиасы в `tsconfig.base.json` (`@daonik-blog/...`).
