# My Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), featuring Tailwind CSS v4 and a custom theming system using the new `@theme` at-rule.

## Features

-   **Next.js App Router**: Uses the `/app` directory for routing and layouts.
-   **Tailwind CSS v4**: Modern utility-first CSS with support for the new `@theme` at-rule.
-   **Custom Theming**: All design tokens (colors, spacing, fonts, etc.) are defined in `src/app/globals.css` using `@theme`.
-   **Reusable Components**: Modular components in `src/components` for layout, sections, and UI features.
-   **TypeScript**: Type-safe codebase for reliability and maintainability.

## Getting Started

First, install dependencies (pnpm is recommended):

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Custom Theming

This project uses Tailwind CSS v4's `@theme` at-rule for design tokens. You can customize colors, spacing, fonts, and more in [`src/app/globals.css`](src/app/globals.css):

```css
@theme {
    --color-slate-950: #020618;
    --color-indigo-500: #615fff;
    /* ...more variables... */
}
```

Use these variables in your CSS or with Tailwind's arbitrary value feature:

```html
<div class="bg-[var(--color-slate-900)] text-[var(--color-pink-500)]">...</div>
```

## Project Structure

-   `src/app/` - App directory (routing, layouts, global styles)
-   `src/components/` - Reusable UI components
-   `src/lib/` - Utilities, constants, and types
-   `public/` - Static assets

## Learn More

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
