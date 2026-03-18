export const COLORS = {
  dark: {
    accent: "#6366f1",
    accentGlow: "#818cf8",
    accentSecondary: "#22d3ee",
    bgPrimary: "#050510",
  },
  light: {
    accent: "#4f46e5",
    accentGlow: "#6366f1",
    accentSecondary: "#0891b2",
    bgPrimary: "#fafaf9",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/juanaf31",
  linkedin: "https://www.linkedin.com/in/muhammad-juan/",
  email: "muhammadjuan31@gmail.com",
} as const;
