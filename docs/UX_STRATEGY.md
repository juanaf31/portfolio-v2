# UX Strategy — Portfolio V2

## The 60-Second Recruiter Funnel

```
Second 0-5    → "Whoa, this isn't a template" (3D hero grabs attention)
Second 5-15   → "Who is this?" (Name, title, value prop — crystal clear)
Second 15-30  → "Can they actually build things?" (Impact numbers + project previews)
Second 30-60  → "I want to learn more" (Clicks into a case study or scrolls deeper)
Beyond 60s    → "I'm reaching out" (Contact / download resume)
```

## Sitemap

```
/ (Home — single-page scrollable with 3D scenes)
├── #hero
├── #metrics
├── #projects (3 featured cards)
├── #skills
├── #experience
├── #testimonials
└── #contact

/project/siswamedia (Case Study)
/project/superpath (Case Study)
/project/pepy (Case Study)

/blog (Future — not in V1)
```

## Section Breakdown

### 1. Hero — "The First Impression"
- **Content:** Name, title ("Frontend Engineer"), one-liner value prop, CTA buttons (View Work / Download Resume)
- **3D:** Abstract morphing wireframe icosahedron. Reacts to mouse movement. On scroll: disperses into particles.
- **Feeling:** "This person is technical AND has taste"

### 2. Metrics Bar — "The Proof"
- **Content:** 4 key numbers: `5+ Years` / `7,000+ Users` / `30+ Schools` / `20+ Companies`
- **3D:** Numbers count up on scroll. Small floating 3D icons per stat.
- **Feeling:** "Real impact, not just side projects"

### 3. Featured Projects — "The Work"
- **Content:** 3 projects (Siswamedia, SuperPath, Pepy). Each shows: name, one-liner, key metric, tech stack, CTA to case study.
- **3D:** Cards float with depth, tilt on hover with perspective transform.
- **Feeling:** "This person thinks about engineering, not just code"

### 4. Skills — "The Toolkit"
- **Content:** Core skills grouped by proximity to center (most-used = closest). Click for details.
- **3D:** Interactive orbital visualization. Inner orbit = primary (React, Next.js, TS). Outer orbit = supporting tools. Drag to rotate.
- **Feeling:** "Broad toolkit, clearly organized"

### 5. Experience Timeline — "The Journey"
- **Content:** Career timeline: Solusi Teknologi → SSI → Freelance/Telkomsel → SuperPath
- **3D:** Scroll-driven 3D path. Camera moves along a glowing line. Nodes expand on approach.
- **Feeling:** "Consistent growth, reliable trajectory"

### 6. Testimonials — "The Social Proof"
- **Content:** 3 testimonials from PM, SuperPath CEO, Siswamedia context
- **3D:** Cards float with parallax depth. Auto-rotate carousel.
- **Feeling:** "Real people vouch for this person"

### 7. Contact — "The Close"
- **Content:** CTA, email, GitHub, LinkedIn, resume download
- **3D:** Particles from hero reassemble into geometric shape (full circle moment)
- **Feeling:** "Easy to reach, professional"

## Case Study Page Template

```
← Back to Home

PROJECT NAME
Subtitle with key metric

THE CONTEXT — What the product is, who it's for
MY ROLE — What I owned, team structure
TECHNICAL CHALLENGES — Hardest problems solved
KEY DECISIONS — Why certain tech/approach was chosen
RESULTS — Impact numbers
TECH STACK — Technologies used

[← Prev Project]  [Next Project →]
```

## Navigation
- Floating glassmorphism header: JUAN + section links + theme toggle
- Shrinks on scroll
- Active section indicator

## Responsive 3D Strategy
- **Desktop (1024px+):** Full 3D experiences
- **Tablet (768-1024px):** Simplified geometry, fewer particles
- **Mobile (<768px):** Minimal 3D — hero keeps smaller shape, skills falls back to 2D grid, timeline becomes vertical
- **Low-end device:** Detect via GPU/CPU check. Graceful CSS-only fallbacks
