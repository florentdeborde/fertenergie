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
| File / Folder                               | What to update                               |
| ------------------------------------------- | -------------------------------------------- |
| `/public/images/`                           | Update logos and site images                 |
| `/public/favicon.ico`                       | Update favicons                              |
| `/public/index.html`                        | Update metadata, title, and banner           |
| `/public/manifest.json`                     | Update name and shortname                    |
| `/public/sitemap.xml`                       | Update domain and section anchors            |
| `/src/locales/`                             | Translations for other languages             |
| `/src/pages/`                               | Page content and layouts                     |
| `/src/config.js`                            | Update parameters                            |
| `/package.json`                             | Project identity (name, version)             |
| `/README.md`                                | Project-specific documentation               |

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