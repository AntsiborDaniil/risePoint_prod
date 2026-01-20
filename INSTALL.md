# Инструкция по установке зависимостей

## Проблема с правами доступа

Если вы видите ошибку `EPERM: operation not permitted`, это проблема с правами доступа к глобальному npm.

## Решение 1: Использовать npx (рекомендуется)

```bash
cd /Users/antsibordaniil/Desktop/project/risePoint_prod
npx npm install
```

## Решение 2: Использовать yarn (если установлен)

```bash
cd /Users/antsibordaniil/Desktop/project/risePoint_prod
yarn install
```

## Решение 3: Исправить права доступа npm

```bash
# Проверьте версию npm
npm --version

# Если проблема сохраняется, попробуйте переустановить npm через nvm
# или используйте npx для установки
```

## Решение 4: Использовать --legacy-peer-deps

```bash
cd /Users/antsibordaniil/Desktop/project/risePoint_prod
npm install --legacy-peer-deps
```

## После успешной установки

Запустите dev сервер:

```bash
npm run dev
```

Или через npx:

```bash
npx vite
```

## Что было исправлено

1. ✅ Обновлен `package.json` - используется ESLint 8 (совместим с плагинами)
2. ✅ Исправлен `.npmrc` - удален дублирующий `engines-strict`
3. ✅ Создан `.eslintrc.cjs` - правильная конфигурация ESLint для версии 8
4. ✅ Все зависимости совместимы друг с другом

## Текущие версии зависимостей

- **ESLint**: 8.57.0 (совместим со всеми плагинами)
- **TypeScript ESLint**: 7.18.0 (совместим с ESLint 8)
- **React Hooks Plugin**: 4.6.2 (совместим с ESLint 8)
- **Vite**: 5.4.0
- **React**: 19.1.0
