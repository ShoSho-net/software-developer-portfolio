# CLAUDE.md

Guidance for Claude Code (and any developer) working in this repository.

## Project

Personal portfolio website for **Micheal Obianwu Ifeatu** — a Theatre Art student at
the University of Ibadan who is becoming a software developer. Single-page, content-driven
site with light/dark themes, deployed as a static site to GitHub Pages.

Design inspiration: minimalist, developer-focused, single-page vertical scroll
(reference: santifer.io).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** — CSS-first config (no `tailwind.config.ts`); theme tokens and the
  dark variant live in [`app/globals.css`](app/globals.css)
- **motion** (`motion/react`) for scroll/entrance animations
- **next-themes** for the light/dark toggle (`.dark` class on `<html>`)
- **lucide-react** for icons
- Static export (`output: "export"`) → GitHub Pages

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:3000
npm run build    # static export → ./out
npm run serve    # preview the exported ./out build locally
npm run lint     # eslint
```

## Where things live

- **All editable content** → [`lib/data.ts`](lib/data.ts). Name, tagline, about text,
  tech stack, projects, certifications, and social links. **Edit content here, not in JSX.**
- App shell → [`app/layout.tsx`](app/layout.tsx), [`app/page.tsx`](app/page.tsx)
- Styling tokens & dark mode → [`app/globals.css`](app/globals.css)
- Sections → [`components/`](components/): `header`, `hero`, `about`, `tech-stack`,
  `projects`, `certifications`, `contact`, plus shared `section` and `theme-*`.

### Styling conventions
Tailwind v4 generates color utilities from the `--color-*` tokens defined in
`@theme` (globals.css): use `bg-bg`, `text-fg`, `text-muted`, `bg-card`,
`border-border`, `text-accent`, `bg-accent`, `bg-accent-hover`. Dark mode works
automatically because `.dark` overrides those CSS variables.

## How to update content (for Micheal)

Open [`lib/data.ts`](lib/data.ts):
- **Add a project**: copy the commented example block inside the `projects` array,
  uncomment it, and fill in the fields. The empty-state message disappears automatically.
- **Add a certification**: same idea, in the `certifications` array.
- **Edit tech stack / about / links**: change the strings in `techStack`, `about`, `social`.

## Deployment (GitHub Pages)

- **Repo**: `ShoSho-net/software-developer-portfolio`
- **Live URL**: https://shosho-net.github.io/software-developer-portfolio/
- **Method**: deploy-from-branch. `npm run deploy` builds and pushes the static
  export to the `gh-pages` branch (via the `gh-pages` package), which Pages serves.
  The `predeploy` script runs the build and writes `out/.nojekyll` (so `_next/`
  assets are served).

`basePath` is configured in [`next.config.mjs`](next.config.mjs) via the `REPO_NAME`
constant (`"software-developer-portfolio"`), applied only in production builds so the
sub-path `/software-developer-portfolio/` resolves. Local `next dev` stays at root. If
the repo is renamed, update `REPO_NAME`.

An optional GitHub Actions auto-deploy workflow is preserved at
[`github-actions-deploy.yml.example`](github-actions-deploy.yml.example) (requires the
`workflow` git scope to enable).

Because it's a static export: no server-side features, and `next/image` optimization is
disabled (`images.unoptimized`). Use plain `<img>` or imported assets.

## Conventions

- Components default to Server Components; add `"use client"` only when a component uses
  hooks, state, or browser APIs (`header`, `hero`, `section`, `theme-*`).
- Keep content out of components — it belongs in `lib/data.ts`.
