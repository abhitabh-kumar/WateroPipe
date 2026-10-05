# Marmilix Website (Next.js Clone)

Front-end replica of [marmilix.com](https://marmilix.com/) built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. All page content and product catalogs are loaded from JSON files under `src/data/` (no backend).

## Requirements

- **Node.js 20+** (recommended). If you use nvm:

```bash
nvm use 20
```

## Run locally

```bash
cd marmilix-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data layer

| File | Purpose |
|------|---------|
| `src/data/site.json` | Navigation, footer, contact, social links |
| `src/data/home.json` | Homepage sections (hero, trust, featured, blog preview, testimonials) |
| `src/data/marble.json` | Marble product grid + modal descriptions |
| `src/data/granite.json` | Granite product grid + modal descriptions |
| `src/data/tiles.json` / `quartz.json` | Coming-soon category pages |
| `src/data/blogs.json` | Blog listing (37 posts) |
| `src/data/gallery.json` | Gallery images |
| `src/data/about.json` | About Us copy |
| `src/data/contact.json` | Contact / Get Quote page |

Product images and hero video are loaded from the live Marmilix CDN (`https://marmilix.com/...`) via `src/lib/images.ts`.

## Routes

- `/` — Home
- `/about-us` — About
- `/marble`, `/granite`, `/tiles`, `/quartz` — Product categories
- `/our-blogs` — Blog
- `/our-gallery` — Gallery
- `/contact-us` — Get Quote / contact form (client-side submit only)

## Build

```bash
npm run build
```

Static files are written to **`out/`** (required for Firebase Hosting).

## Deploy to Firebase Hosting

After `firebase init`, hosting must use **`out`**, not `dist`. `npm run build` does not update `dist` — that folder was only Firebase’s default welcome page.

```bash
nvm use 20
npm run deploy
```

Or manually: `npm run build` then `firebase deploy --only hosting`. You should see hundreds of files uploaded, not “found 2 files”.
