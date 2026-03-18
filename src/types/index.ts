export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  period: string;
  metrics: { label: string; value: string }[];
  role: string;
}

export interface Skill {
  name: string;
  orbit: "inner" | "outer";
  years?: string;
  projects?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  type: "fulltime" | "freelance" | "dedicated";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}
