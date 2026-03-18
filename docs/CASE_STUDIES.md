# Case Study Content — Portfolio V2

## 1. Siswamedia

### Overview
**School Management + LMS** | React, Redux, Ant Design | 2021

### The Context
Siswamedia is a comprehensive school management and learning management system built for Indonesian schools. The platform handles the full spectrum of school operations — from class management and student enrollment to assessments, grading, progress tracking, and parent communication. It serves multiple user roles: administrators, teachers, students, and parents — each with distinct dashboards and workflows.

### My Role
**Solo Frontend Engineer — Built the entire frontend from scratch.**
I was the founding frontend developer. There was no existing codebase — I architected and implemented the complete frontend application from zero, making all technical decisions on framework, state management, component architecture, and UI library.

### Technical Challenges
1. **Complex multi-role form systems** — The platform required deeply nested forms with complex data structures. School management involves interconnected entities (classes → subjects → teachers → students → assessments → grades). Building forms that could handle this relational complexity while remaining usable was the hardest challenge.
2. **Multi-role dashboard architecture** — Four distinct user types (admin, teacher, student, parent) each needed different views of the same underlying data, with role-based access control on the frontend.
3. **Scalable state management** — With growing user adoption across 30+ schools, state management needed to handle large datasets (student lists, grade books, assessment records) without performance degradation.
4. **Reusable component system** — Built a component library that could be shared across all four role-based dashboards while maintaining consistency.

### Key Decisions
- **React** — Most popular and mature library in 2021 with the largest ecosystem. Made hiring and onboarding future developers easier.
- **Redux** — The multi-role system required predictable, centralized state management. Multiple dashboards reading from shared data stores made Redux the right choice over local state.
- **Ant Design** — Speed-to-market decision. Building from raw CSS would have added weeks. Ant Design provided a complete, enterprise-grade component library (tables, forms, modals, date pickers) out of the box — critical for a data-heavy LMS.

### Results
| Metric | Value |
|--------|-------|
| Schools adopted | 30+ |
| Teachers on platform | 1,600+ |
| Students & parents | 5,500+ |
| Component reuse | Reduced feature development time by ~25% |

---

## 2. SuperPath

### Overview
**B2B Corporate LMS** | Nuxt.js, Vue.js, Vuex, Bootstrap | Jun 2024 – Dec 2024

### The Context
SuperPath is an Australian B2B learning management system designed for corporate employee development. Companies across various industries use it to create, manage, and deliver learning programs to their workforce. The platform's core value is enabling non-technical content creators to build rich, interactive learning experiences.

### My Role
**First employee of the CEO. Dedicated Frontend Developer.**
The CEO hired me as his very first team member — a signal of deep trust. I had high ownership and autonomy over frontend decisions, working directly with the founder to shape the product.

### Technical Challenges
1. **TipTap rich-text editor** — This was the most critical feature of the entire platform. The learning content editor needed to support rich formatting, embedded media, interactive elements, and collaborative features. Built a custom TipTap-based editor that became the primary tool companies used to create all their learning materials.
2. **Critical bug resolution** — Inherited a codebase that needed stabilization. Identified and fixed critical bugs that were affecting user experience and platform reliability.
3. **Content creation workflow** — Designed the frontend flow for how companies author, preview, and publish learning modules — the core product loop.

### Key Decisions
- **Nuxt.js / Vue.js** — Existing codebase was Vue-based. Rather than rewriting, I contributed within the established architecture while improving code quality.
- **TipTap over alternatives** — TipTap (built on ProseMirror) offered the extensibility needed for custom learning content blocks while maintaining a clean editing experience.

### Results
| Metric | Value |
|--------|-------|
| Companies using platform | 20+ |
| Active users | 1,000+ |
| Role | First employee — highest trust level |
| Key delivery | Core content creation tool (TipTap editor) |

---

## 3. Pepy

### Overview
**Employee Time-Tracking Platform** | React, React Query, Material UI | Aug 2021 – Nov 2023

### The Context
Pepy is an employee work-logging and time-tracking tool. Employees log their daily work activities into the platform, and HR/Operations teams use it to monitor productivity, track project hours, and manage workforce operations across multiple teams.

### My Role
**Led development of the core time-tracking feature** — the central functionality that all users interacted with daily.

### Technical Challenges
1. **Gmail Calendar synchronization** — Built the integration that connects users' Pepy accounts to their Gmail calendars. Calendar events automatically reflect in Pepy as work log entries. This eliminated manual double-entry and improved logging accuracy by ~35%.
2. **Offline-first capability** — Built an offline feature using localStorage with a flag-based sync system integrated into state management. When users go offline, they can continue logging work. When they come back online, the system compares local data against the server, resolves differences, and clears the offline flag. This ensured zero data loss for field workers or users with unreliable connections.
3. **Performance optimization** — Identified and resolved performance bottlenecks across the application, improving responsiveness for teams with large datasets.

### Key Decisions
- **React Query over Redux** — For a data-fetching-heavy app like a time tracker, React Query's server state management (caching, background refetching, optimistic updates) was a better fit than Redux's client state approach.
- **localStorage + flag pattern for offline** — Chose a pragmatic approach over service workers for the offline feature. The flag-based system was simpler to implement and debug while still providing reliable offline→online data synchronization.
- **Material UI** — Provided a clean, professional look appropriate for an HR/operations tool without custom design investment.

### Results
| Metric | Value |
|--------|-------|
| Time logging accuracy improvement | ~35% (via Gmail Calendar sync) |
| Key features delivered | Core time-tracking, offline mode, Gmail sync |
| Scope | Used across multiple teams |
| Beyond UI | Performance optimization, offline architecture |

---

## Social Links
- **LinkedIn:** https://www.linkedin.com/in/muhammad-juan/
- **GitHub:** https://github.com/juanaf31
- **Email:** muhammadjuan31@gmail.com
