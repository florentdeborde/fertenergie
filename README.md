# 🌞 Fertenergie

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React: 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite: 7.3.1](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)

**A modern React SPA for a citizen collective dedicated to renewable energy development.**
This project showcases local photovoltaic installations and collective actions

## 📑 Table of Contents

- [💻 Installation](#-installation)
- [📂 Project Structure](#️-project-structure)
- [🪄 Customization Guide](#-customization-guide-for-cloning-or-adapting)
- [🚢 Deployment](#-deployment)
- [🧱 Tech Stack](#-tech-stack)
- [📜 License](#-license)

## 💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/florentdeborde/fertenergie.git
   cd fertenergie
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run application:**
   ```bash
   npm run dev
   ```
The site will be available at http://localhost:5173

## 📂 Project Structure

| Folder / File      | Description                               |
| ------------------ | ----------------------------------------- |
| `/public/`         | Static assets (sitemap, favicon, images)  |
| `/src/components/` | Reusable UI components                    |
| `/src/locales/`    | Language translations (i18n)              |
| `/src/pages/`      | Page-level components                     |
| `/src/utils/`      | Helper and utility functions              |
| `/src/config.js`   | Centralized configuration file            |

## 🪄 Customization Guide (for cloning or adapting)
When duplicating this project for another practitioner or website, you’ll mainly need to update:

| File / Folder                               | What to update                                               |
| ------------------------------------------- | ------------------------------------------------------------ |
| `/public/favicon.ico`, `.svg`, `-96x96.png` | Update all favicon formats to match the new logo             |
| `/public/apple-touch-icon.png`              | Update the high-resolution icon (180x180) for iOS devices    |
| `/public/web-app-manifest-*.png`            | Update the PWA icons (192px and 512px) for mobile install    |
| `/public/site.webmanifest`                  | Update site name, short_name, and paths to manifest icons    |
| `/public/index.html`                        | Update metadata (title, description), and icon link tags     |
| `/public/og-image.png`                      | Update image and social sharing in index.html                |
| `/public/images/`                           | Update site images (logo, ...)                               |
| `/public/sitemap.xml` & `robots.txt`        | Update domain URL and crawl rules for SEO                    |
| `/src/locales/`                             | Update translations for other languages (i18n)               |
| `/src/pages/`                               | Customize page content, layouts, and components              |
| `/src/config.js`                            | Update global parameters and API endpoints                   |
| `/package.json`                             | Update project identity (name, version, author)              |
| `/README.md`                                | Project-specific documentation and badges                    |

🌳 Menu structure is defined in translation files

## 🚢 Deployment
This project is optimized for static deployment.  
You can preview or host it using Vercel, Netlify, or any static hosting provider.

## 🧱 Tech Stack
- **React 19** (`react`, `react-dom`) — Core framework
- **React Router 7** (`react-router-dom`) — Routing
- **Vite 7** — Next-generation frontend build tool & dev server
- **Material UI v6** — UI components & styling
- **i18next** — Internationalization
- **Lucide React** — Icon library

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.