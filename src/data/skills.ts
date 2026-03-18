import { Skill } from "@/types";

export const skills: Skill[] = [
  // Inner orbit — primary
  { name: "React", orbit: "inner", years: "5 years", projects: ["Siswamedia", "Pepy", "Vitaport", "Beyondrun"] },
  { name: "Next.js", orbit: "inner", years: "3+ years", projects: ["Telkomsel MyAds", "Beyondrun", "Vitaport"] },
  { name: "TypeScript", orbit: "inner", years: "3+ years", projects: ["Beyondrun", "Vitaport", "MyAds"] },

  // Outer orbit — secondary
  { name: "Vue.js", orbit: "outer", projects: ["SuperPath"] },
  { name: "Nuxt.js", orbit: "outer", projects: ["SuperPath"] },
  { name: "Redux", orbit: "outer", projects: ["Siswamedia"] },
  { name: "React Query", orbit: "outer", projects: ["Pepy", "Beyondrun", "Vitaport"] },
  { name: "Tailwind CSS", orbit: "outer", projects: ["Vitaport"] },
  { name: "Ant Design", orbit: "outer", projects: ["Siswamedia"] },
  { name: "Material UI", orbit: "outer", projects: ["Pepy"] },
  { name: "Framer Motion", orbit: "outer" },
  { name: "Three.js", orbit: "outer" },
];
