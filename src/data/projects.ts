import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "siswamedia",
    title: "Siswamedia",
    description:
      "Comprehensive school management and LMS platform serving 30+ Indonesian schools. Built the entire frontend from scratch as the founding frontend engineer.",
    tech: ["React", "Redux", "Ant Design"],
    period: "2021",
    role: "Solo Frontend Engineer",
    metrics: [
      { label: "Schools", value: "30+" },
      { label: "Teachers", value: "1,600+" },
      { label: "Students & Parents", value: "5,500+" },
    ],
    caseStudy: {
      context:
        "Siswamedia is a comprehensive school management and learning management system built for Indonesian schools. The platform handles the full spectrum of school operations — from class management and student enrollment to assessments, grading, progress tracking, and parent communication. It serves multiple user roles: administrators, teachers, students, and parents — each with distinct dashboards and workflows.",
      role: "Solo Frontend Engineer — Built the entire frontend from scratch. I was the founding frontend developer. There was no existing codebase — I architected and implemented the complete frontend application from zero, making all technical decisions on framework, state management, component architecture, and UI library.",
      challenges: [
        {
          title: "Complex multi-role form systems",
          description:
            "The platform required deeply nested forms with complex data structures. School management involves interconnected entities (classes → subjects → teachers → students → assessments → grades). Building forms that could handle this relational complexity while remaining usable was the hardest challenge.",
        },
        {
          title: "Multi-role dashboard architecture",
          description:
            "Four distinct user types (admin, teacher, student, parent) each needed different views of the same underlying data, with role-based access control on the frontend.",
        },
        {
          title: "Scalable state management",
          description:
            "With growing user adoption across 30+ schools, state management needed to handle large datasets (student lists, grade books, assessment records) without performance degradation.",
        },
        {
          title: "Reusable component system",
          description:
            "Built a component library that could be shared across all four role-based dashboards while maintaining consistency.",
        },
      ],
      decisions: [
        {
          title: "React",
          description:
            "Most popular and mature library in 2021 with the largest ecosystem. Made hiring and onboarding future developers easier.",
        },
        {
          title: "Redux",
          description:
            "The multi-role system required predictable, centralized state management. Multiple dashboards reading from shared data stores made Redux the right choice over local state.",
        },
        {
          title: "Ant Design",
          description:
            "Speed-to-market decision. Building from raw CSS would have added weeks. Ant Design provided a complete, enterprise-grade component library (tables, forms, modals, date pickers) out of the box — critical for a data-heavy LMS.",
        },
      ],
      results: [
        { label: "Schools Adopted", value: "30+" },
        { label: "Teachers on Platform", value: "1,600+" },
        { label: "Students & Parents", value: "5,500+" },
        { label: "Component Reuse Impact", value: "~25% faster dev" },
      ],
    },
  },
  {
    slug: "superpath",
    title: "SuperPath",
    description:
      "Australian B2B corporate LMS for employee development. First employee of the CEO — built the core content creation tool using TipTap rich-text editor.",
    tech: ["Nuxt.js", "Vue.js", "Vuex", "Bootstrap"],
    period: "Jun 2024 – Dec 2024",
    role: "Dedicated Frontend Developer",
    metrics: [
      { label: "Companies", value: "20+" },
      { label: "Active Users", value: "1,000+" },
    ],
    caseStudy: {
      context:
        "SuperPath is an Australian B2B learning management system designed for corporate employee development. Companies across various industries use it to create, manage, and deliver learning programs to their workforce. The platform's core value is enabling non-technical content creators to build rich, interactive learning experiences.",
      role: "First employee of the CEO. Dedicated Frontend Developer. The CEO hired me as his very first team member — a signal of deep trust. I had high ownership and autonomy over frontend decisions, working directly with the founder to shape the product.",
      challenges: [
        {
          title: "TipTap rich-text editor",
          description:
            "This was the most critical feature of the entire platform. The learning content editor needed to support rich formatting, embedded media, interactive elements, and collaborative features. Built a custom TipTap-based editor that became the primary tool companies used to create all their learning materials.",
        },
        {
          title: "Critical bug resolution",
          description:
            "Inherited a codebase that needed stabilization. Identified and fixed critical bugs that were affecting user experience and platform reliability.",
        },
        {
          title: "Content creation workflow",
          description:
            "Designed the frontend flow for how companies author, preview, and publish learning modules — the core product loop.",
        },
      ],
      decisions: [
        {
          title: "Nuxt.js / Vue.js",
          description:
            "Existing codebase was Vue-based. Rather than rewriting, I contributed within the established architecture while improving code quality.",
        },
        {
          title: "TipTap over alternatives",
          description:
            "TipTap (built on ProseMirror) offered the extensibility needed for custom learning content blocks while maintaining a clean editing experience.",
        },
      ],
      results: [
        { label: "Companies Using Platform", value: "20+" },
        { label: "Active Users", value: "1,000+" },
        { label: "Role", value: "First Employee" },
        { label: "Key Delivery", value: "Core Editor" },
      ],
    },
  },
  {
    slug: "pepy",
    title: "Pepy",
    description:
      "Employee time-tracking platform with Gmail Calendar sync and offline-first capability. Led development of the core time-tracking feature.",
    tech: ["React", "React Query", "Material UI"],
    period: "Aug 2021 – Nov 2023",
    role: "Lead Frontend Developer",
    metrics: [
      { label: "Accuracy Improvement", value: "~35%" },
      { label: "Key Feature", value: "Offline Mode" },
    ],
    caseStudy: {
      context:
        "Pepy is an employee work-logging and time-tracking tool. Employees log their daily work activities into the platform, and HR/Operations teams use it to monitor productivity, track project hours, and manage workforce operations across multiple teams.",
      role: "Led development of the core time-tracking feature — the central functionality that all users interacted with daily.",
      challenges: [
        {
          title: "Gmail Calendar synchronization",
          description:
            "Built the integration that connects users' Pepy accounts to their Gmail calendars. Calendar events automatically reflect in Pepy as work log entries. This eliminated manual double-entry and improved logging accuracy by ~35%.",
        },
        {
          title: "Offline-first capability",
          description:
            "Built an offline feature using localStorage with a flag-based sync system integrated into state management. When users go offline, they can continue logging work. When they come back online, the system compares local data against the server, resolves differences, and clears the offline flag.",
        },
        {
          title: "Performance optimization",
          description:
            "Identified and resolved performance bottlenecks across the application, improving responsiveness for teams with large datasets.",
        },
      ],
      decisions: [
        {
          title: "React Query over Redux",
          description:
            "For a data-fetching-heavy app like a time tracker, React Query's server state management (caching, background refetching, optimistic updates) was a better fit than Redux's client state approach.",
        },
        {
          title: "localStorage + flag pattern for offline",
          description:
            "Chose a pragmatic approach over service workers for the offline feature. The flag-based system was simpler to implement and debug while still providing reliable offline→online data synchronization.",
        },
        {
          title: "Material UI",
          description:
            "Provided a clean, professional look appropriate for an HR/operations tool without custom design investment.",
        },
      ],
      results: [
        { label: "Accuracy Improvement", value: "~35%" },
        { label: "Key Features", value: "3 Delivered" },
        { label: "Scope", value: "Multi-team" },
        { label: "Beyond UI", value: "Offline Arch" },
      ],
    },
  },
];
