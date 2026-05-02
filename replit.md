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

### Portfolio — Coming Soon (`artifacts/portfolio/`)
- React + Vite + TypeScript frontend app (frontend-only, no backend)
- Tailwind CSS v3 with custom theme (warm parchment palette: #fbf7ea bg, #272217 ink, #c06c35 orange accent)
- Fonts: Inter (sans), Lora (serif), JetBrains Mono (mono) via Google Fonts
- React Router DOM v6 with BrowserRouter + BASE_URL basename
- Features: "Button Panic" interactive game, dark mode toggle, responsive layout
- No external API calls or auth required

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
