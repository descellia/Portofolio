# Descellia Ng · Portfolio

Personal portfolio website for Descellia Ng, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. The visual direction is a calm coastal palette (cream, sand, sage, and sea teal) with serif display type, arch-shaped frames, and hand-drawn line ornaments.

The site is fully static (`output: "export"`), so it deploys to Vercel with no server configuration.

## Features

- Sections: Hero, About + "How I work", Experience (expandable timeline), Projects (filterable), Research, Skills, Achievements, Contact
- Project detail pages for all 8 projects at `/projects/<slug>/`, pre-rendered at build time
- Sticky navigation with active-section indicator and an accessible mobile menu
- Scroll-reveal animations, hover interactions, animated filters, and skill chips
- Respects `prefers-reduced-motion` across all animations
- SEO: metadata, Open Graph and Twitter cards, JSON-LD (Person), `sitemap.xml`, `robots.txt`, favicon and Apple touch icon
- Contact form that works without a backend (opens the visitor's email app), with optional Formspree delivery
- Downloadable CV at `/Descellia_Ng_CV.pdf`

## Requirements

- Node.js 20.9 or newer (tested with Node 22)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run typecheck   # TypeScript check
npm run lint        # ESLint
npm run build       # Production build, outputs static files to /out
npm run start       # Serve /out locally (uses npx serve)
```

## Project structure

```
app/
  layout.tsx              Root layout, fonts, SEO metadata, JSON-LD
  page.tsx                Home page (composes all sections)
  projects/[slug]/page.tsx  Project detail pages
  not-found.tsx           404 page
  sitemap.ts, robots.ts   SEO files
  icon.png, apple-icon.png, favicon.ico
  globals.css             Tailwind theme tokens and custom utilities
components/               One file per section plus shared pieces
  Decor.tsx               Original SVG ornaments and UI icons
  Reveal.tsx              Scroll-reveal wrapper
lib/
  content.ts              All personal content (profile, experience, research, skills, awards)
  projects.ts             Project data
public/
  images/                 Portrait, project screenshots, Dreamore screens
  Descellia_Ng_CV.pdf     Downloadable CV
  og-image.jpg            Social sharing image (1200×630)
```

## Customizing

- **Text content:** edit `lib/content.ts` and `lib/projects.ts`. Components read everything from these files.
- **Add a project:** add an object to `projects` in `lib/projects.ts`. Put screenshots in `public/images/projects/` and reference them in `cover` and `gallery`. The detail page is generated automatically.
- **Colors and fonts:** edit the `@theme` block in `app/globals.css`. Fonts are self-hosted through `@fontsource` packages, so no request goes to Google Fonts.
- **Photo:** replace `public/images/descellia.webp` (portrait, about 4:5).
- **CV:** replace `public/Descellia_Ng_CV.pdf` with the same file name.
- **Social image:** replace `public/og-image.jpg` (1200×630).

## Environment variables

Copy `.env.example` to `.env.local` for local development.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your final URL, e.g. `https://descellia.vercel.app`. Used for canonical links, the sitemap, and social previews. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form ID. When set, the contact form sends messages directly. When empty, it opens the visitor's email app. |

## Deploy to Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/descellia/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import the repository.
3. Vercel detects Next.js automatically. Keep the defaults (Build command `next build`, no output directory override needed).
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with the URL Vercel will give you (for example `https://descellia.vercel.app`). Optionally add `NEXT_PUBLIC_FORMSPREE_ID`.
5. Click **Deploy**.
6. After the first deploy, if your final URL differs from what you entered, update `NEXT_PUBLIC_SITE_URL` and redeploy so social previews use the right domain.

### Optional: enable direct form delivery with Formspree

1. Create a free form at https://formspree.io and copy its ID (the part after `/f/`).
2. Add it as `NEXT_PUBLIC_FORMSPREE_ID` in Vercel, then redeploy.

## Content sources

All content comes from the CV, the portfolio PDF, and the README files of the GitHub repositories. Items worth reviewing before publishing are listed in the delivery notes.
