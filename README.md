# My Portfolio

A personal portfolio website for Mahmoud Osama (mahmoud25osama) built with Next.js and Tailwind CSS. The site showcases projects, skills, and provides an easy way for visitors to contact me.

## Live demo
[mahmoud-osama.com](https://mahmoudosama.netlify.app/)

## Overview

This repository contains a modern, responsive portfolio application using the Next.js App Router and TypeScript. It uses Tailwind CSS v4 and a custom theming approach to centralize design tokens. The project is organized with reusable components and utilities to make adding new sections or projects straightforward.

## Key Features

- Next.js App Router (src/app) with layouts and route-level organization
- TypeScript for safer, self-documenting code
- Tailwind CSS v4 with a custom @theme setup for design tokens
- Reusable components in src/components for consistent UI
- Responsive design optimized for desktop, tablet, and mobile
- Project gallery with descriptions and links to demos / repositories
- Easy-to-update theming and styles via CSS variables in globals.css

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4 (custom theming; @theme at-rule)
- pnpm (recommended) — but npm/yarn supported
- Optional: Vercel / Netlify for deployment

## Project structure

- src/app/ — App directory (routing, layouts, global styles)
- src/components/ — Reusable UI components (Hero, Projects, Footer, etc.)
- src/lib/ — Utilities, constants, types
- public/ — Static assets (images, icons)
- README.md — Project documentation

## Getting started

Prerequisites:
- Node.js (16+ recommended)
- pnpm (or npm / yarn)

Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to view locally.

Build for production:
```bash
pnpm build
# or
npm run build
# or
yarn build
```

Preview the production build:
```bash
pnpm start
# or
npm start
# or
yarn start
```

## Theming / Styles

The project uses a theming system defined in src/app/globals.css with CSS variables inside an `@theme` block. Example:
```css
@theme {
  --color-slate-950: #020618;
  --color-indigo-500: #615fff;
  /* ...other variables... */
}
```
Use the variables directly or with Tailwind's arbitrary value syntax:
```html
<div class="bg-[var(--color-slate-900)] text-[var(--color-indigo-500)]">...</div>
```

## Add or update projects

Projects are typically declared in a central data file (e.g., src/lib/projects or similar). To add a project:
1. Add a new entry with title, description, tech, image, and links.
2. Update the Projects component or ensure it reads the new entry.
3. Commit and push.

## Deployment

This app deploys easily to Vercel (recommended for Next.js), Netlify, or other static hosts supporting Next.js. For Vercel:
1. Connect the GitHub repository to Vercel.
2. Set build command to `pnpm build` and output to the default Next.js settings.
3. Deploy.

## Contributing

Contributions and improvements are welcome:
1. Fork the repository.
2. Create a feature branch: git checkout -b feature/my-change
3. Commit your changes and open a pull request.

Please run linters and tests (if present) before opening a PR.

## Contact

- GitHub: https://github.com/mahmoud25osama
- Email: mahmoud4h5@gmail.com


