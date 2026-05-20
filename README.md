# Micheal Obianwu Ifeatu — Portfolio

Personal portfolio website. Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**,
and **Motion**, with a light/dark theme toggle. Deploys as a static site to **GitHub Pages**.

## Getting started

You need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Open <http://localhost:3000> in your browser. The page reloads as you edit files.

## Editing your content

Almost everything you'll want to change lives in **one file**: [`lib/data.ts`](lib/data.ts).

- **Your name, role, intro** → the `profile` object
- **Email / LinkedIn / GitHub** → the `social` object
- **About me paragraphs** → the `about` object
- **Tech stack tags** → the `techStack` list
- **Projects** → the `projects` list (copy the commented example to add one)
- **Certifications** → the `certifications` list (copy the commented example to add one)

Until you add projects/certifications, the site shows friendly "coming soon" messages —
they vanish automatically once you add real entries.

### Adding your photo (optional)

The hero and header currently show your initials (`MO`). To use a real photo, drop an
image in `public/` (e.g. `public/avatar.jpg`) and update `components/hero.tsx` to render
an `<img>` instead of the initials block.

## Build & preview

```bash
npm run build    # creates the static site in ./out
npm run serve    # preview that build locally
```

## Deploying to GitHub Pages

This project is already connected to GitHub and hosted at:

**https://shosho-net.github.io/software-developer-portfolio/**

To publish your latest changes after editing `lib/data.ts` (or anything else),
run **one command**:

```bash
npm run deploy
```

That builds the site and pushes it to the `gh-pages` branch, which GitHub Pages
serves from. Your changes go live in a minute or two.

> First-time Pages setup (already done for this repo): **Settings → Pages →
> Build and deployment → Source: "Deploy from a branch" → Branch: `gh-pages` / `(root)`**.

### Optional: automatic deploys

If you'd rather have the site rebuild automatically on every `git push` (no
`npm run deploy` needed), see [`github-actions-deploy.yml.example`](github-actions-deploy.yml.example)
for instructions.

## Project structure

```
app/            Next.js App Router (layout, page, global styles, favicon)
components/     UI sections (hero, about, tech-stack, projects, etc.)
lib/data.ts     ← your editable content
public/         static assets
.github/        deployment workflow
```
