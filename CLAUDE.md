# Portfolio V2 — Project Context

## What This Is
Personal portfolio website for Muhammad Juan Al Firdaus, a Frontend Developer (React/Next.js) with 5+ years experience. Features a full code-generated 3D interactive experience.

## Documentation
All planning docs are in `/docs/`:
- `PRODUCT_BRIEF.md` — Positioning, goals, target users
- `UX_STRATEGY.md` — Site structure, user journey, section breakdown
- `UI_CONCEPT.md` — Colors, typography, 3D concepts, component styles
- `TECHNICAL_ARCHITECTURE.md` — Tech stack, project structure, architecture decisions
- `IMPLEMENTATION_PLAN.md` — 4-phase build plan with checklists
- `CASE_STUDIES.md` — Full case study content for 3 featured projects
- `CONTENT.md` — All copy, data, and content for the site

## Tech Stack
- Next.js 14 (App Router, SSG)
- TypeScript
- React Three Fiber + Drei + Custom GLSL shaders
- Tailwind CSS v4
- Framer Motion + Lenis
- next-themes (light/dark)
- Deployed on Vercel

## Key Principles
- 3D is code-generated only (no external .glb/.gltf assets)
- Content lives in `src/data/` as typed objects, separated from components
- Each section has its own isolated `<Canvas>` for 3D
- Progressive 3D loading — lazy load per section via intersection observer
- Device capability detection with graceful CSS fallbacks
- All pages are statically generated (SSG)
- Performance budget: LCP < 1.5s, 60fps 3D on mid-range devices
