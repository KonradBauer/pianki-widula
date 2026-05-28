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

```
src/app/
  layout.tsx     # root layout — Geist fonts, full-height flex body
  page.tsx       # home page (Server Component)
  globals.css    # Tailwind base styles
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
