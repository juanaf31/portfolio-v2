# Implementation Plan — Portfolio V2

## Overview
4 phases, each producing a working, deployable version. No phase depends on a later one.

---

## Phase 1: Foundation + Hero (Days 1-3)
> **Goal:** Live site with working hero, nav, and theme toggle

### 1.1 — Project Setup
- [ ] Initialize Next.js 14 with App Router + TypeScript
- [ ] Install all dependencies
- [ ] Configure Tailwind v4 with custom color tokens (dark/light)
- [ ] Set up folder structure per TECHNICAL_ARCHITECTURE.md
- [ ] Configure next-themes for dark/light mode
- [ ] Set up Geist font
- [ ] Deploy empty shell to Vercel

### 1.2 — Layout Shell
- [ ] Build Navbar — glassmorphism, section links, theme toggle
- [ ] Build Footer — minimal, social links
- [ ] Set up Lenis smooth scroll
- [ ] Create globals.css with design tokens

### 1.3 — Hero Section
- [ ] Build Hero.tsx — name, title, value prop, CTA buttons
- [ ] Build HeroScene.tsx — morphing wireframe icosahedron
  - Custom vertex shader for breathing/morphing vertices
  - Custom fragment shader for glow edges
  - Mouse proximity distortion
  - Theme-aware materials
- [ ] Build SceneContainer.tsx — shared Canvas wrapper with device detection
- [ ] Build CSS fallback for low-end devices

### 1.4 — First Deploy
- [ ] Verify on desktop + mobile
- [ ] Test theme toggle
- [ ] Test 3D performance on mid-range device

---

## Phase 2: Content Sections (Days 4-7)
> **Goal:** All homepage sections working with 3D

### 2.1 — Metrics Bar
- [ ] Build Metrics.tsx with count-up animation on scroll
- [ ] Build MetricsIcons.tsx — floating 3D icons
- [ ] Wire up useScrollProgress hook

### 2.2 — Projects Section
- [ ] Build ProjectCard.tsx — 3D tilt on hover
- [ ] Build Projects.tsx — 3 featured cards grid
- [ ] Create data/projects.ts with all content
- [ ] Implement gradient border glow on hover

### 2.3 — Skills Orbital
- [ ] Build SkillsOrbit.tsx — 3D orbital visualization
  - Inner orbit: React, Next.js, TypeScript
  - Outer orbit: Redux, Tailwind, Vue, Ant Design, etc.
  - Click interaction → detail panel
  - Drag to rotate
- [ ] Build 2D fallback grid for mobile
- [ ] Create data/skills.ts

### 2.4 — Experience Timeline
- [ ] Build Experience.tsx — timeline layout
- [ ] Build TimelinePath.tsx — 3D scroll-driven path
  - Glowing line with nodes
  - Camera moves along path on scroll
  - Nodes expand with role details
- [ ] Create data/experience.ts
- [ ] Build mobile fallback (vertical timeline, CSS only)

### 2.5 — Testimonials
- [ ] Build TestimonialCard.tsx
- [ ] Build TestimonialCards3D.tsx — floating parallax cards
- [ ] Auto-rotate carousel with manual nav
- [ ] Create data/testimonials.ts

### 2.6 — Contact
- [ ] Build Contact.tsx — CTA, email, GitHub, LinkedIn, resume download
- [ ] Build ContactParticles.tsx — particle reassembly effect
- [ ] Wire up mailto: and external links

---

## Phase 3: Case Studies + Polish (Days 8-10)
> **Goal:** Deep case study pages, page transitions, final content

### 3.1 — Case Study Template
- [ ] Build /project/[slug]/page.tsx
- [ ] Sections: Context → Role → Challenges → Decisions → Results → Tech Stack
- [ ] Project navigation (prev/next)
- [ ] Back to home link
- [ ] Generate static params for all 3 projects

### 3.2 — Case Study Content
- [ ] Write full content for Siswamedia
- [ ] Write full content for SuperPath
- [ ] Write full content for Pepy

### 3.3 — Page Transitions
- [ ] Smooth crossfade between home ↔ case study pages
- [ ] Scroll restoration on navigation

### 3.4 — Scroll Animations
- [ ] Section fade-in/slide-up on scroll entry
- [ ] Staggered animations for card grids
- [ ] Parallax effects on text sections

---

## Phase 4: Optimization + SEO + Ship (Days 11-13)
> **Goal:** Production-ready, performance-optimized, SEO-complete

### 4.1 — Performance
- [ ] Audit with Lighthouse — target 95+ all categories
- [ ] Optimize Three.js bundles (tree-shake, dynamic import)
- [ ] Verify lazy loading of below-fold 3D scenes
- [ ] Test on throttled connection (3G)
- [ ] Verify mobile 3D fallbacks

### 4.2 — SEO
- [ ] Add meta tags per page (title, description, OG)
- [ ] Add JSON-LD structured data (Person schema)
- [ ] Generate sitemap via next-sitemap
- [ ] Create OG image
- [ ] Add robots.txt

### 4.3 — Accessibility
- [ ] Keyboard navigation for all interactive elements
- [ ] prefers-reduced-motion — disable 3D, use static fallbacks
- [ ] ARIA labels on 3D interactive elements
- [ ] Color contrast verification (both themes)
- [ ] Screen reader testing

### 4.4 — Final QA
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Cross-device: Desktop, tablet, mobile (iOS + Android)
- [ ] Test resume download
- [ ] Test all external links
- [ ] Final content review

### 4.5 — Launch
- [ ] Connect custom domain (when ready)
- [ ] Verify Vercel deployment
- [ ] Submit to Google Search Console

---

## Responsibility Split

| AI Builds                          | Juan Provides                          |
|------------------------------------|----------------------------------------|
| All code — components, 3D, shaders | Review & feedback at each phase        |
| Case study copy (first draft)      | Corrections / personal details         |
| SEO meta content                   | Resume PDF file                        |
| 3D scenes and interactions         | Final approval before each deploy      |
| Performance optimization           | Testing on real devices                |
