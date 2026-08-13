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

Single-page marketing site for a foam manufacturer (B2B). Polish language throughout.

### Fonts

One font loaded: **Inter** (imported as `Inter` from `next/font/google`, assigned to CSS var `--font-jakarta`). Both `--font-sans` and `--font-playfair` in `globals.css` resolve to the same `--font-jakarta` variable. Apply with Tailwind class `font-playfair` for headings, `font-sans` for body.

Use normal dash `-` instead of em dash `—` in content.

### Color system

Colors are defined in `globals.css` `:root` and exposed as Tailwind utilities via `@theme inline`:

| Tailwind class | Hex | Usage |
|---|---|---|
| `text-navy` / `bg-navy` | `#2E2E2E` | dark charcoal — headings, dark backgrounds |
| `text-navy-light` / `bg-navy-light` | `#48A02E` | medium green — hover states |
| `text-cream` / `bg-cream` | `#5DBE3D` | primary green — CTA buttons, accents |
| `text-cream-light` / `bg-cream-light` | `#DFF2D4` | light green — subtle backgrounds |
| `text-site-text` | `#1A1A1A` | body text |
| `text-site-text-muted` | `#777777` | secondary text |

### CSS utility vocabulary

Always use these instead of arbitrary Tailwind values:

```css
/* Fluid typography */
.text-fluid-hero   /* clamp(2.5rem, 6vw, 5.5rem) */
.text-fluid-h2     /* clamp(1.75rem, 3.5vw, 3rem) */
.text-fluid-h3     /* clamp(1.2rem, 2vw, 1.75rem) */
.text-fluid-body   /* clamp(0.9375rem, 1.25vw, 1.125rem) */
.text-fluid-sm     /* clamp(0.8125rem, 1vw, 0.9375rem) */

/* Section spacing */
.section-py        /* padding-top/bottom fluid clamp(4rem, 8vw, 7rem) */
.section-px        /* padding-left/right fluid clamp(1.25rem, 5vw, 6rem) */

/* Decorative */
.overlay-navy      /* dark/green diagonal gradient overlay */
.card-lift         /* hover: translateY(-6px) + shadow */
.section-divider   /* short green gradient hr bar */
.scrollbar-hide    /* hides scrollbar (used in carousel thumbnails) */

/* Scroll-trigger animation classes (applied by AnimatedSection) */
.animate-in-up / .animate-in-left / .animate-in-right / .animate-in-fade
```

### Utilities

- `src/lib/cn.ts` — simple classname joiner (no clsx/cn dependency), use for conditional classes
- `src/config/navigation.ts` — `NAV_LINKS` array (href + label) used by Navbar and Footer; single source of truth for nav section IDs

### Section IDs (single-page navigation anchors)

`#o-nas` · `#zastosowania` · `#oferta` · `#realizacje` · `#certyfikaty` · `#kontakt`

### App structure

```
src/app/
  layout.tsx                    # root layout, Inter font, metadata, JSON-LD LocalBusiness
  page.tsx                      # home page (Server Component) — mounts all sections
  not-found.tsx                 # 404 page
  globals.css                   # Tailwind base, @theme tokens, CSS animations
  robots.ts                     # dynamic robots.txt
  sitemap.ts                    # dynamic sitemap XML
  og/route.tsx                  # GET — dynamic OG image generation
  api/contact/route.ts          # POST — contact form (Brevo API)
  polityka-prywatnosci/page.tsx # privacy policy page
```

### Components

```
src/components/
  navbar/Navbar.tsx             # fixed navbar, scroll shadow, full-screen mobile menu
  hero/Hero.tsx                 # hero section
  about/About.tsx               # about section (#o-nas)
  foam/FoamTypes.tsx            # foam types explainer
  applications/Applications.tsx # use cases (#zastosowania)
  offer/Offer.tsx + OfferCard.tsx  # 3 offer cards with IntersectionObserver animation (#oferta)
  products/ProductGalleries.tsx # 3 photo carousel sections (#realizacje)
  products/ProductCarousel.tsx  # carousel with auto-play, thumbnails, progress bar
  products/ProductionVideo.tsx  # production process video
  why-us/WhyUs.tsx              # 6 differentiator cards
  certifications/Certifications.tsx  # certificates (#certyfikaty)
  contact/Contact.tsx           # contact section (#kontakt)
  contact/ContactForm.tsx       # form with validation, calls /api/contact
  contact/Map.tsx + MapInner.tsx   # Google Maps embed (MapInner is "use client")
  footer/Footer.tsx             # footer with nav, company data
  ui/AnimatedSection.tsx        # IntersectionObserver scroll-trigger wrapper
  ui/Lightbox.tsx               # photo lightbox
  ui/ScrollToTop.tsx            # scroll-to-top button
  ui/icons/FacebookIcon.tsx     # Facebook SVG icon
```

### AnimatedSection usage

Wrap any element to animate on scroll entry:

```tsx
<AnimatedSection direction="up" delay={0.1}>
  {/* content */}
</AnimatedSection>
```

`direction`: `"up"` | `"left"` | `"right"` | `"fade"`. `delay` in seconds. Fires once, then disconnects observer.

### Environment variables

```
BREVO_API_KEY       # required for /api/contact — email delivery via Brevo
BREVO_SENDER_EMAIL  # verified sender address in Brevo
```

### SEO

- `metadataBase`: `https://pianki-widula.pl`
- JSON-LD: `LocalBusiness` + `hasOfferCatalog` with 3 `Service` entries (in `layout.tsx`)
- `robots.ts` blocks `/api/`, points to sitemap
- `public/llms.txt` — description for AI crawlers
- `public/assets/og_image.png` — 1200×630 static OG image; dynamic OG via `og/route.tsx`

### Assets

```
public/
  favicon.png               # square icon (1254×1254)
  logo-v3.png               # horizontal logo — navbar + footer
  assets/
    og_image.png            # static OG image 1200×630
    7strefowe/01–07.jpeg    # 7-zone insert photos
    fizjoterapia/01–08.jpeg # physiotherapy mattress photos
    wykroje/01–14.jpeg      # dustless cut-out photos
    proces-produkcji.mp4    # production process video
```

Tailwind v4: configured via CSS `@theme` in `globals.css` — no `tailwind.config.*` file.

ESLint: flat config (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

## Next.js 16 Breaking Changes

**Always read `node_modules/next/dist/docs/` before writing Next.js code.**

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

Async params pattern:

```tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
```

Run `npx next typegen` to generate `PageProps`, `LayoutProps`, `RouteContext` helpers.

## React Compiler

Enabled (`reactCompiler: true` in `next.config.ts`). Do not manually add `useMemo`/`useCallback` for render optimization — the compiler handles it automatically.

## Available Claude Agents

User-level agents in `~/.claude/agents/`:

- **code-reviewer** — code quality review
- **seo-backlinks**, **seo-cluster**, **seo-content**, **seo-dataforseo**, **seo-drift**, **seo-ecommerce**, **seo-flow**, **seo-geo**, **seo-google**, **seo-image-gen**, **seo-local**, **seo-maps**, **seo-performance**, **seo-schema**, **seo-sitemap**, **seo-sxo**, **seo-technical**, **seo-visual** — SEO specialist agents
