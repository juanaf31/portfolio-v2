# UI Concept — Portfolio V2

## Design Philosophy
> **"Engineered elegance"** — Clean enough to feel reliable. Technical enough to feel impressive. Not a template.

3D elements are the personality. Typography and layout are the professionalism.

---

## Color System

### Dark Mode (Primary)
| Token              | Color     | Usage                          |
|--------------------|-----------|--------------------------------|
| `bg-primary`       | `#050510` | Deep space — main background   |
| `bg-surface`       | `#0f0f1a` | Cards, elevated surfaces       |
| `bg-surface-hover` | `#1a1a2e` | Hover states                   |
| `text-primary`     | `#f0f0f3` | Headlines, primary text        |
| `text-secondary`   | `#8888a0` | Body text, descriptions        |
| `accent`           | `#6366f1` | Indigo — CTAs, links, active   |
| `accent-glow`      | `#818cf8` | 3D glow effects, emissive      |
| `accent-secondary` | `#22d3ee` | Cyan — highlights, hover       |
| `border`           | `#1e1e3a` | Subtle borders                 |

### Light Mode
| Token              | Color     | Usage                          |
|--------------------|-----------|--------------------------------|
| `bg-primary`       | `#fafaf9` | Warm white background          |
| `bg-surface`       | `#ffffff` | Cards with subtle shadow       |
| `bg-surface-hover` | `#f5f5f0` | Hover states                   |
| `text-primary`     | `#1a1a2e` | Deep navy headlines            |
| `text-secondary`   | `#64648a` | Body text                      |
| `accent`           | `#4f46e5` | Deeper indigo for contrast     |
| `accent-glow`      | `#6366f1` | Softer 3D effects              |
| `accent-secondary` | `#0891b2` | Teal — links, highlights       |
| `border`           | `#e5e5e0` | Light borders                  |

### Color Rationale
- **Indigo** = trust, professionalism, tech (Linear, Stripe, Vercel use it)
- **Cyan** = energy, modernity — makes 3D pop
- Together: premium without being corporate

---

## Typography
| Level            | Font          | Weight | Size (Desktop) |
|------------------|---------------|--------|----------------|
| Display / Hero   | Geist         | 700    | 64-80px        |
| Section Headings | Geist         | 600    | 36-48px        |
| Subheadings      | Geist         | 500    | 20-24px        |
| Body             | Geist         | 400    | 16-18px        |
| Code / Mono      | Geist Mono    | 400    | 14-16px        |

Single font family — clean, consistent, fast to load. 3D provides all visual variety needed.

---

## Layout Grid
```
Desktop:  12-column grid, 1280px max-width, 24px gutter
Tablet:   8-column, fluid
Mobile:   4-column, 16px padding

Sections: Full-viewport height for hero, auto-height for content
Spacing:  Section gap = 120px (desktop), 80px (mobile)
```

---

## 3D Visual Concepts

### Hero: Morphing Icosahedron
- Wireframe icosahedron with glowing edges (indigo/cyan dark, soft blue light)
- Vertices subtly float and breathe
- Mouse proximity distorts nearby vertices
- On scroll: geometry disperses into particles transitioning to next section

### Metrics: Floating 3D Icons
- Small code bracket, users, building, briefcase icons
- Float with subtle bobbing animation
- Count-up numbers on scroll into view

### Skills: 3D Orbital System
- Inner orbit = primary skills (React, Next.js, TypeScript)
- Outer orbit = supporting tools (Redux, Tailwind, Vue, Ant Design)
- Click node → info panel with years + linked projects
- Drag to rotate entire system

### Timeline: 3D Scroll Path
- Glowing line in 3D space (circuit board aesthetic)
- Camera moves along path on scroll
- Nodes expand on approach with role details

### Testimonials: Floating Parallax Cards
- Cards float in 3D space with slight rotation
- Auto-carousel with manual navigation
- Subtle depth parallax on mouse move

### Contact: Particle Reassembly
- Scattered particles drift throughout page
- At contact section, converge back into geometric shape
- Full circle moment connecting back to hero

---

## Component Styles

### Project Cards
- Subtle gradient border
- Lifts with 3D tilt on hover (perspective transform)
- Border glows accent color on hover
- Key metrics displayed prominently

### Testimonial Cards
- Floating with slight rotation in 3D
- Quote, attribution, country flag
- Auto-carousel with manual override

### Navbar
- Glassmorphism (frosted glass backdrop-blur)
- Shrinks on scroll
- Active section indicator (glowing dot or underline)
- JUAN wordmark (no logo)

---

## Theme Switching
- Sun/moon toggle in navbar
- System preference detection on first load
- Smooth CSS transition between themes
- 3D materials and lighting adapt per theme
