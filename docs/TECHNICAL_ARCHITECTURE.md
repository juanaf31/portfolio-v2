# Technical Architecture — Portfolio V2

## Tech Stack

| Layer           | Technology                       | Why                                                       |
|-----------------|----------------------------------|-----------------------------------------------------------|
| Framework       | Next.js 14 (App Router)          | SSG for performance + SEO, file-based routing             |
| Language        | TypeScript                       | Type safety, senior-level signal                          |
| 3D Engine       | React Three Fiber + Drei         | Declarative Three.js in React                             |
| Shaders         | Custom GLSL via `shaderMaterial` | Morphing geometry, glow effects, particles                |
| Styling         | Tailwind CSS v4                  | Utility-first, fast to build, easy theme switching        |
| Animation       | Framer Motion + Lenis            | Page transitions, scroll animations, smooth scroll        |
| Theme           | next-themes                      | Light/dark with system preference detection               |
| Deployment      | Vercel                           | Zero-config Next.js, free tier                            |
| Analytics       | Vercel Analytics (optional)      | Track recruiter engagement                                |

## Project Structure

```
portfolio-v2/
├── public/
│   ├── resume.pdf
│   └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout + fonts + theme provider
│   │   ├── page.tsx                    # Home — assembles all sections
│   │   ├── project/
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Case study template
│   │   └── globals.css                 # Tailwind base + custom properties
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Metrics.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── three/                      # All 3D components
│   │   │   ├── HeroScene.tsx           # Morphing icosahedron
│   │   │   ├── MetricsIcons.tsx        # Floating 3D stat icons
│   │   │   ├── SkillsOrbit.tsx         # Orbital tech visualization
│   │   │   ├── TimelinePath.tsx        # Scroll-driven 3D path
│   │   │   ├── TestimonialCards3D.tsx   # Floating cards in 3D
│   │   │   ├── ContactParticles.tsx    # Particle reassembly
│   │   │   ├── SceneContainer.tsx      # Shared Canvas wrapper
│   │   │   └── shaders/
│   │   │       ├── morphing.vert       # Vertex shader
│   │   │       ├── morphing.frag       # Fragment shader
│   │   │       ├── particles.vert      # Particle positioning
│   │   │       └── particles.frag      # Particle appearance
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── MetricCounter.tsx
│   │       ├── TechBadge.tsx
│   │       ├── Button.tsx
│   │       └── SectionHeading.tsx
│   │
│   ├── data/
│   │   ├── projects.ts                 # Project/case study content
│   │   ├── skills.ts                   # Skills with metadata
│   │   ├── experience.ts               # Timeline data
│   │   └── testimonials.ts             # Testimonial quotes
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts        # Scroll position 0-1 per section
│   │   ├── useReducedMotion.ts         # Respect prefers-reduced-motion
│   │   ├── useDeviceCapability.ts      # Detect GPU/CPU for 3D fallback
│   │   └── useTheme.ts                 # Theme context wrapper
│   │
│   ├── lib/
│   │   ├── three-utils.ts              # Shared Three.js helpers
│   │   └── constants.ts                # Colors, breakpoints, config
│   │
│   └── types/
│       └── index.ts                    # Shared TypeScript interfaces
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Key Architecture Decisions

### 1. Static Site Generation (SSG)
Every page pre-rendered at build time. No server runtime.
- **Why:** Fastest possible load, perfect Lighthouse scores, free Vercel hosting.

### 2. Multiple Isolated Canvases (Not One Full-Page Canvas)
Each section owns its own `<Canvas>`.
- **Why:** Each scene only renders when in viewport. Easier to debug. Sections are independent — if one 3D scene fails, others survive. Mobile can disable specific sections.

### 3. Progressive 3D Loading
```
1. HTML + CSS (instant — SSG)
2. Fonts + critical JS
3. Hero 3D scene (lazy — visible first)
4. Below-fold 3D scenes (intersection observer — load when approaching)
```
Three.js is dynamically imported and never blocks initial render.

### 4. Device Capability Detection
```
high   → All 3D scenes, full particles
medium → Simplified geometry, fewer particles
low    → CSS-only fallbacks, no WebGL
```
Detected via `navigator.hardwareConcurrency`, GPU renderer string, and device memory.

### 5. Theme-Aware 3D
3D materials and lighting adapt to light/dark mode. Emissive intensity, colors, and ambient light change per theme.

### 6. Content Separated from Components
All content lives in `src/data/` as typed TypeScript objects. Easy to update without touching components. Could migrate to CMS later if needed.

## Performance Budget

| Metric          | Target     | Strategy                                      |
|-----------------|------------|-----------------------------------------------|
| LCP             | < 1.5s     | SSG + font preload + lazy 3D                  |
| FCP             | < 0.8s     | Static HTML renders instantly                  |
| CLS             | 0          | Reserved space for 3D canvases                 |
| TTI             | < 3s       | Code-split Three.js per section                |
| Initial Bundle  | < 100KB gz | Three.js loaded async, not in main bundle      |
| 3D FPS          | 60fps      | Adaptive quality + viewport culling            |

## SEO Strategy

| Element          | Implementation                              |
|------------------|---------------------------------------------|
| Meta tags        | Per-page title, description, OG image       |
| Structured data  | JSON-LD `Person` schema                     |
| Semantic HTML    | Proper heading hierarchy, landmarks         |
| OG Image         | Static designed image — name + title        |
| Sitemap          | Auto-generated via `next-sitemap`           |
| robots.txt       | Allow all                                   |

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.2",
    "react": "^18.3",
    "react-dom": "^18.3",
    "@react-three/fiber": "^8.15",
    "@react-three/drei": "^9.88",
    "three": "^0.160",
    "framer-motion": "^11",
    "lenis": "^1.0",
    "next-themes": "^0.3",
    "clsx": "^2.1",
    "tailwind-merge": "^2.2"
  },
  "devDependencies": {
    "typescript": "^5.3",
    "tailwindcss": "^4.0",
    "@types/three": "^0.160",
    "eslint": "^8",
    "eslint-config-next": "^14"
  }
}
```
