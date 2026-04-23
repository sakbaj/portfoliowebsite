# 🖤 Saksham — Portfolio

A minimalist, stylish personal portfolio built with **pure HTML, CSS & JavaScript** — no frameworks, no dependencies. Features a smooth **black ↔ white theme toggle**, scroll-reveal animations, and a fully responsive layout.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌗 **Theme Toggle** | One-click switch between dark (black) and light (white) themes, saved to `localStorage` |
| 🎞️ **Scroll Animations** | Elements reveal smoothly as you scroll using `IntersectionObserver` |
| 🔢 **Stat Counters** | Animated number counters in the About section |
| 💡 **Cursor Glow** | Subtle radial glow follows the mouse on desktop |
| 📱 **Fully Responsive** | Adapts to mobile, tablet, and desktop with a hamburger menu |
| ✉️ **Contact Form** | Floating-label form with submit feedback |
| ⚡ **Zero Dependencies** | Pure vanilla — no npm, no build step, no frameworks |

---

## 📂 Project Structure

```
portfolio_Cybernetics/
├── index.html      # Main HTML — all sections & content
├── style.css       # Design system with dark/light CSS variables
├── script.js       # Theme toggle, animations, mobile menu logic
└── README.md       # This file
```

---

## 🚀 Getting Started

No installation required. Just open the file in a browser:

```bash
# Option 1 — Double-click
Open index.html in your file explorer

# Option 2 — Terminal
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

Or use **Live Server** in VS Code for hot-reload during development.

---

## 🎨 Sections

1. **Hero** — Name, title, tagline, and call-to-action buttons
2. **About** — Bio text + animated stat cards (Projects, Technologies, Years, Passion)
3. **Skills & Tools** — 4-column grid covering Frontend, Backend, Design, and Tools
4. **Featured Projects** — Project cards with tags, descriptions, and GitHub/Live links
5. **Contact** — Floating-label form for messages
6. **Footer** — Social links (GitHub, LinkedIn, Email) and copyright

---

## 🌗 Theme System

The theme is controlled via a `data-theme` attribute on `<html>` and CSS custom properties:

```css
[data-theme="dark"]  → Black background, white text
[data-theme="light"] → White background, black text
```

- Defaults to the user's OS preference (`prefers-color-scheme`)
- Persists the user's choice in `localStorage`
- All transitions are smoothly animated (500ms ease)

---

## 🛠️ Technologies

- **HTML5** — Semantic structure with accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, `backdrop-filter`, keyframe animations
- **JavaScript (ES6+)** — IntersectionObserver, localStorage, DOM manipulation
- **Google Fonts** — Inter (body) + Space Mono (accents)

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">Designed & Built by <strong>Saksham</strong> · 2026</p>
