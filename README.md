# Tanish Gol — Portfolio

A personal portfolio built with React + Vite and styled with TailwindCSS. Component-driven and data-driven — content lives in `src/data` and UI is composed from `src/Components`.

## Quick overview

- Responsive single-page portfolio showcasing: hero, about, skills, experience, projects, testimonials, and contact.
- Dark / Light theme with persisted preference.
- Data-driven: update `src/data/*` to change content without touching components.
- Deployed-ready (GitHub Pages configured in package.json).

## Features

- Hero / developer info
- About & skills sections
- Experience timeline
- Projects / work gallery with links
- Testimonials
- Contact form (client-side, uses local storage / toasts)
- Theme toggle (dark/light)
- Mobile-friendly navigation and animations

## Tech stack

- React (Vite)
- TailwindCSS
- Framer Motion, react-icons
- react-hot-toast (notifications)
- Optional: gh-pages for deployment

## Project structure (important)

- index.html
- package.json
- vite.config.js
- tailwind.config.cjs
- src/
  - main.jsx — entry, theme init
  - App.jsx — app composition
  - index.css — global styles
  - Components/ — Navbar, ThemeToggle, DevInfo, About, Skills, Experience, Work, Testimonials, GetInTouch, Footer
  - data/ — nav, devinfo, about, skills, experience, work, testimonials, contact
  - Assets/ — images and static media
- public/
  - Tanish_CV.pdf (CV download)

## Setup

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

5. Deploy (if configured)

```bash
npm run deploy
```

## How to update content

- Edit data files in `src/data/` (e.g. `work.js`, `about.js`) to change text, projects, and links.
- Replace images in `src/Assets/` and reference them from data files.
- CV: replace `public/Tanish_CV.pdf`.

## Theming

- Theme preference saved in `localStorage`.
- Theme toggle component updates `document.documentElement.classList` for Tailwind dark mode.

## Notes & tips

- Keep content changes in `src/data/` for minimal risk.
- Check `vite.config.js` base path if deploying to a subpath.
- Add a LICENSE file (MIT recommended) if you want explicit licensing.

## Contact

- Update contact and social links in `src/data/contact.js`.

## License

This project is owned by Tanish Gol. Add a LICENSE file for explicit licensing (MIT recommended).
