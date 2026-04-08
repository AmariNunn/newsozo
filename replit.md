# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Sozo Cannabis Website (`artifacts/sozo-cannabis`)
- **Type**: react-vite (frontend-only, no backend)
- **Preview path**: `/`
- **Stack**: React, Vite, TypeScript, Tailwind CSS, Framer Motion, Three.js, Wouter
- **Fonts**: Cormorant Garamond, DM Sans, DM Serif Display (Google Fonts)
- **Theme**: "Botanical Luxe" — dark forest greens, gold accents, warm parchment
- **Pages**: Home, Products, Locations, HighMiles, About, 404
- **Features**:
  - Age gate with Sozo logo, botanical vine decorations, 30-day cookie
  - Cinematic hero with Three.js particle system (200 floating spores)
  - Live deals ticker with CSS marquee animation
  - Editorial asymmetric specials grid using real product photography
  - HighMiles loyalty tier cards with hover animations
  - Category product rail (6 categories)
  - Location cards with live open/closed status
  - Social proof / review cards
  - Custom circular cursor
  - Scroll-triggered IntersectionObserver animations
  - Sozo logo as favicon (PNG)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/sozo-cannabis run dev` — run Sozo Cannabis site locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Assets

Product photography from `attached_assets/` is referenced via `@assets/` import alias in the Sozo Cannabis frontend.
Sozo logo: `attached_assets/b39mHJlikfR8JFHpA-UOgc_1775664457835.png`
