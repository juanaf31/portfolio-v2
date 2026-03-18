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
  },
];
