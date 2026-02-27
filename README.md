# Dirafrost Landing Replica (Next.js)

Landing implementation in Next.js + TypeScript + App Router, with GSAP animations and Swiper sliders.

## Routes

- `/` -> Citrus landing (existing)
- `/lp/cacao-fruit` -> New product landing (hidden from internal navigation, `noindex`)
- `/lp/cacao-fruit-v2` -> Static HTML landing (served from `public/lp/cacao-fruit-v2/index.html`)
- `/lp/cacao-fruit-v3` -> Cacao variant with v2 typography

## Implemented Scope

- Shared visual chrome reused across landings:
  - Header
  - Fullscreen navigation menu
  - Language side panel
  - Overlay + side buttons
- Citrus landing remains intact.
- New cacao landing includes:
  - Hero + internal CTA anchors
  - 3-image strip with deterministic fallback cards if image files are missing
  - Meet section
  - Benefits section
  - Product + specs section
  - Sample request form (UI-only, no backend)
  - Footer copy and external link

## Stack

- Next.js 15 (App Router)
- TypeScript
- GSAP
- Swiper
- Tailwind/PostCSS pipeline configured

## Assets

### Existing shared assets

- `public/assets/uploads/...`
- `public/assets/fonts/...`

### Cacao asset intake

1. Drop source files in:
- `content/incoming/cacao-fruit/images`

2. Copy final files to:
- `public/assets/cacao-fruit/`

3. Canonical filenames expected by data mapping:
- `hero-cacao-pod.jpg`
- `hero-cacao-arrangement.jpg`
- `hero-cacao-exotic.jpg`
- `product-cacao-puree.jpg`

If these files are missing, the cacao landing renders styled fallback placeholders without breaking layout.

## Run

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run build
```

## GitHub Pages (Public URL)

This repo is configured to deploy automatically to GitHub Pages via `.github/workflows/deploy-pages.yml`.

### What gets published

Only these routes are published in the final static artifact:

- `/lp/cacao-fruit`
- `/lp/cacao-fruit-v2`

`/` and other routes are removed from the Pages artifact and root (`/`) redirects to `/lp/cacao-fruit/`.

### Build command used by CI

```bash
npm run build:pages
```

This command:

1. Runs `next build` with static export (`out/`).
2. Filters output using `scripts/prepare-pages.mjs` so only the two landing routes remain.
