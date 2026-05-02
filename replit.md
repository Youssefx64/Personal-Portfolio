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

### Portfolio (`artifacts/portfolio/`)
- **Owner**: Youssef Taha Badawi — AI Engineer & GenAI Developer
- React + Vite + TypeScript frontend (frontend-only, no backend)
- Tailwind CSS v3 with custom theme (warm parchment palette: #fbf7ea bg, #272217 ink, #c06c35 orange accent, #587a63 green)
- Fonts: Inter (sans), Lora (serif), JetBrains Mono (mono) via Google Fonts
- React Router DOM v6 with BrowserRouter + BASE_URL basename
- Dark mode via Tailwind `class` strategy + `useDarkMode` hook
- `react-helmet-async` for per-page SEO

### Pages
- `/` — Home: hero with photo, stats strip, 4 featured projects, CTA section
- `/about` — Bio, quick-info card, 6 skill category grids
- `/projects` — Filterable grid of 12 projects (All / Generative AI / NLP / Computer Vision / Data Science / Other)
- `/experience` — Work experience (GenAI Engineer), Education (B.Sc. AI & Data Science), 9 Certifications
- `/contact` — Direct contact (email, phone, location) + 6 social platform cards

### Key Data Files
- `src/config/site.ts` — all personal info, social URLs, contact details
- `src/content/projects.ts` — 12 GitHub project definitions with category, tech stack, stars
- `src/content/resume.ts` — experience bullets, education, certifications, skill groups

### Social Profiles
- GitHub: https://github.com/Youssefx64
- LinkedIn: https://www.linkedin.com/in/yousseftahaai/
- Kaggle: https://www.kaggle.com/yousseftaha98
- HuggingFace: https://huggingface.co/yousseftaha98
- LeetCode: https://leetcode.com/u/Youssef_Taha1/
- YouTube: https://www.youtube.com/@SirYoussefx64
- Email: ytaha8586@gmail.com

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
