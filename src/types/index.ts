export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  context: string;
  role: string;
  challenges: { title: string; description: string }[];
  decisions: { title: string; description: string }[];
  results: ProjectMetric[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  period: string;
  metrics: ProjectMetric[];
  role: string;
  caseStudy: CaseStudy;
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
