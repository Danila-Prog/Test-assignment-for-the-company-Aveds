# Project Name

Тестовое задание на стажировку в компанию Aveds

## Overview

Этот проект организован таким образом, чтобы облегчить навигацию и понимание его компонентов. Ниже приведено подробное описание структуры каталогов и назначения каждой папки.

## Directory Structure

- **public**: Содержит статические файлы, такие как значки SVG. Это ресурсы, которые предоставляются непосредственно клиенту.

- **app**: Эта папка включает в себя:
  - **authentication**: Управляет логикой аутентификации.
  - **routing**: Управляет маршрутизацией приложения.
  - **global styles**: Содержит глобальные файлы CSS или стилей.
  - **root component**: Основной компонент точки входа в приложение.

- **features**: Содержит функции, связанные с управлением учетными записями пользователей, такие как функции входа и выхода из системы.

- **pages**: Здесь расположены все страницы приложения.

- **shared**:
  - **ui**: Содержит визуальную состовляющую переиспользуемых компонентов.
  - **types**: Содержит типы TypeScript, относящиеся к компонентам пользовательского интерфейса.
  - **utils**: Вспомогательные утилиты для компонентов.

- **widgets**: Эта папка содержит компоненты, из которой состоит страница
  - **ui**: Визуальные аспекты компонентов.
  - **model**: (Если присутствует) Содержит логику для компонентов.

## Installation

Инструкция, как локально установить проект на пк:

```bash
#Открываем консоль и заходим в папку, куда хотим поместить наш проект
cd yourPath

# Клонируем репозиторий с GigHub
git clone https://github.com/Danila-Prog/Test-assignment-for-the-company-Aveds.git

# Устанавливаем зависимости
npm install

# Запустить локально
npm run dev

# Забилдить для production
npm run build


