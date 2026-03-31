# 🚀 Haron Portfolio

Персональное портфолио веб-разработчика с современными 3D-анимациями и интерактивным дизайном.

![Portfolio Preview](./public/preview.png)

## 🌐 Live Demo

[https://h4r0nn.github.io/my-portfolio/](https://h4r0nn.github.io/my-portfolio/)

---

## ✨ Особенности

- 🎨 **Холодный минимализм** — современный дизайн в серо-синих тонах
- 🌌 **3D фон на Three.js** — частицы, кольца Сатурна, плавающие кристаллы
- 🖱️ **Интерактивный шлейф** — частицы следуют за курсором мыши
- 📜 **Scroll-анимации** — плавное появление контента при прокрутке
- 🎯 **Авто-подсветка меню** — активная секция выделяется автоматически
- 💼 **Интерактивные навыки** — клик для просмотра подробного описания
- 📱 **Полная адаптивность** — корректное отображение на всех устройствах
- ⚡ **Оптимизация** — быстрая загрузка и плавная работа

---

## 🛠️ Технологический стек

| Категория | Технологии |
|-----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS v4 |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | Framer Motion |
| **Post-processing** | Bloom эффект |
| **Deployment** | GitHub Pages |
| **Version Control** | Git, GitHub |

---

## 📦 Установка и запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/h4r0nn/my-portfolio.git
cd my-portfolio


2. Установка зависимостей
npm install


3. Запуск локального сервера
npm run dev

4. Открыть в браузере
http://localhost:3000

🚀 Сборка и деплой
Локальная сборка
npm run build

Деплой на GitHub Pages
Проект настроен на автоматический деплой через GitHub Actions.

    1. Запуш изменения в репозиторий:

git add .
git commit -m "feat: описание изменений"
git push

2. GitHub Actions автоматически задеплоит сайт
3. Сайт доступен по:

https://h4r0nn.github.io/my-portfolio/

📁 Структура проекта

my-portfolio/
├── app/
│   ├── page.js              # Главная страница
│   ├── layout.js            # Основной лейаут
│   └── globals.css          # Глобальные стили
├── components/
│   └── ThreeBackground.js   # 3D фон (частицы, кольца)
├── public/
│   ├── avatar.jpg           # Фото профиля
│   ├── ebay-parody.html     # Проект: Ebay пародия
│   └── jewelry-store.html   # Проект: Магазин ювелирии
├── next.config.mjs          # Конфигурация Next.js
├── package.json             # Зависимости проекта
└── README.md                # Документация


<div align="center">

Создано с ❤️ используя Next.js и Three.js
</div>
```