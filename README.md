# WebStudio - Веб-студия полного цикла

Современный веб-сайт для веб-студии, разработанный на React + Vite.

## 🚀 Технологии

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev сервер
- **React Router** - маршрутизация
- **CSS Modules** - стилизация компонентов

## 📦 Установка

```bash
npm install
```

## 🛠️ Разработка

Запуск dev сервера:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Сборка

Сборка для production:

```bash
npm run build
```

Просмотр production сборки:

```bash
npm run preview
```

## 📁 Структура проекта

```
src/
  ├── index.tsx          # Точка входа
  ├── App.tsx            # Главный компонент с роутингом
  ├── pages/             # Страницы приложения
  │   ├── Home.tsx
  │   ├── Privacy.tsx
  │   └── Terms.tsx
  ├── components/        # React компоненты
  │   ├── sections/     # Секции страницы
  │   └── ui/           # UI компоненты
  ├── contexts/         # React контексты
  └── globals.css       # Глобальные стили
```

## 🎨 Адаптивный дизайн

Сайт полностью адаптирован для всех устройств:
- **Desktop** (> 1024px)
- **Tablet** (768px - 1024px)
- **Mobile** (480px - 768px)
- **Small Mobile** (< 480px)
