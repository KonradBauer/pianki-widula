# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # dev server (Turbopack, outputs to .next/dev)
pnpm build      # production build (Turbopack)
pnpm start      # production server
eslint          # lint (next lint removed in v16 — use ESLint CLI directly)
```

Package manager: **pnpm**. No test suite configured yet.

## Architecture

Next.js 16 App Router project. Stack: Next.js 16.2.6 · React 19.2 · TypeScript 5 · Tailwind CSS v4 · React Compiler enabled.

### Fonts
- Body: **Plus Jakarta Sans** (`--font-jakarta`) — weight 300–700
- Headings: **Playfair Display** (`--font-playfair-display`) — weight 400–700
- Defined in `layout.tsx`, exposed as CSS vars via `@theme inline` in `globals.css`

### Strona (single-page)
```
src/app/
  layout.tsx                    # root layout, fonts, metadata, JSON-LD LocalBusiness
  page.tsx                      # home page (Server Component) — montuje wszystkie sekcje
  globals.css                   # Tailwind base styles, @theme, animacje CSS
  robots.ts                     # dynamiczny robots.txt
  sitemap.ts                    # dynamiczny sitemap XML
  api/contact/route.ts          # POST — formularz kontaktowy (Resend API)
  polityka-prywatnosci/page.tsx # strona polityki prywatności
```

### Komponenty
```
src/components/
  navbar/Navbar.tsx         # fixed navbar, scroll state, full-screen mobile menu (slide z prawej)
  hero/Hero.tsx             # sekcja hero
  about/About.tsx           # o nas
  offer/Offer.tsx           # 3 karty oferty (fizjoterapia, 7-strefowe, wykroje)
  offer/OfferCard.tsx       # karta z IntersectionObserver + animacja
  products/ProductGalleries.tsx  # 3 sekcje z karuzelami zdjęć
  products/ProductCarousel.tsx   # karuzela z auto-play, thumbnails, progress bar
  products/ProductionVideo.tsx   # wideo proces produkcji
  why-us/WhyUs.tsx          # 6 kart wyróżników
  contact/Contact.tsx       # sekcja kontakt (formularz + mapa + godziny)
  contact/ContactForm.tsx   # formularz z walidacją, Resend API
  contact/Map.tsx / MapInner.tsx  # Google Maps embed
  footer/Footer.tsx         # stopka z nawigacją, danymi firmy, wykonanie
  ui/AnimatedSection.tsx    # wrapper z IntersectionObserver + animacje wejścia
  ui/Lightbox.tsx           # lightbox zdjęć
  ui/ScrollToTop.tsx        # przycisk scroll to top
```

### SEO
- `metadataBase`: `https://pianki-widula.pl`
- JSON-LD: `LocalBusiness` + `hasOfferCatalog` z 3 `Service` (w `layout.tsx`)
- `robots.ts` blokuje `/api/`, wskazuje sitemap
- `public/llms.txt` — opis dla AI crawlerów
- `public/assets/og_image.png` — 1200×630, OG image

### Assets
```
public/
  favicon.png               # ikona kwadratowa (1254×1254)
  logo-v3.png               # logo poziome (537×464) — desktop navbar + footer
  logo.png                  # alternatywne logo
  assets/
    og_image.png            # OG image 1200×630
    7strefowe/01–07.jpeg    # zdjęcia wkładów 7-strefowych
    fizjoterapia/01–08.jpeg # zdjęcia materaców fizjoterapeutycznych
    wykroje/01–14.jpeg      # zdjęcia wykrojów bezpyłowych
    proces-produkcji.mp4    # wideo procesu produkcji
```

Tailwind v4 uses `@tailwindcss/postcss` — no `tailwind.config.*` file, configured via CSS `@theme`.

ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

## Next.js 16 Breaking Changes

**Always read `node_modules/next/dist/docs/` before writing Next.js code.**

Key changes from v15:

| What | How |
|------|-----|
| `params`, `searchParams`, `cookies`, `headers`, `draftMode` | All async — must `await` |
| Middleware | Renamed: `middleware.ts` → `proxy.ts`, export `proxy()` not `middleware()` |
| `next lint` | Removed — run `eslint` directly |
| `revalidateTag(tag)` | Requires second arg: `revalidateTag('tag', 'max')` |
| `unstable_cacheLife` / `unstable_cacheTag` | Stable: `cacheLife`, `cacheTag` from `next/cache` |
| PPR (`experimental.ppr`) | Removed — use `cacheComponents: true` |
| `experimental.dynamicIO` | Removed — use `cacheComponents: true` |
| `serverRuntimeConfig` / `publicRuntimeConfig` | Removed — use `process.env` / `NEXT_PUBLIC_*` |
| `next/legacy/image` | Deprecated — use `next/image` |
| `images.domains` | Deprecated — use `images.remotePatterns` |
| Parallel routes | All slots require explicit `default.js` or build fails |
| `next dev` output | Goes to `.next/dev` (not `.next`) |

**Async params pattern:**
```tsx
// page.tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
```

Run `npx next typegen` to generate `PageProps`, `LayoutProps`, `RouteContext` helpers.

## React Compiler

Enabled (`reactCompiler: true` in `next.config.ts`). Automatically memoizes components — do not manually add `useMemo`/`useCallback` for render optimization unless there's a specific non-compiler reason.

## Available Claude Agents

User-level agents in `~/.claude/agents/`:

- **code-reviewer** — code quality review
- **seo-backlinks**, **seo-cluster**, **seo-content**, **seo-dataforseo**, **seo-drift**, **seo-ecommerce**, **seo-flow**, **seo-geo**, **seo-google**, **seo-image-gen**, **seo-local**, **seo-maps**, **seo-performance**, **seo-schema**, **seo-sitemap**, **seo-sxo**, **seo-technical**, **seo-visual** — SEO specialist agents
