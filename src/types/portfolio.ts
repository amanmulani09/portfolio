export type ProjectId =
  | "thg-commerce"
  | "push-provisioning"
  | "hmx-interactive"
  | "chitra-ai"
  | "rag-architectures"
  | "codo"
  | "pgkhata"
  | "shodh";

export type PortfolioIconName =
  | "bot"
  | "boxes"
  | "building"
  | "chart"
  | "code"
  | "credit-card"
  | "gauge"
  | "globe"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "quote"
  | "rocket"
  | "sparkles"
  | "users"
  | "workflow";

export type Profile = {
  name: string;
  role: string;
  headline: string;
  introduction: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  availability: string;
  currently: Array<{
    label: string;
    value: string;
  }>;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: PortfolioIconName;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectDecision = {
  index: string;
  title: string;
  body: string;
  signal: string;
};

export type Project = {
  id: ProjectId;
  title: string;
  eyebrow: string;
  short: string;
  thesis: string;
  outcome: string;
  role: string;
  timeline: string;
  team: string;
  status: string;
  sourceUrl: string;
  sourceLabel: string;
  sourceKind: "github" | "public";
  additionalSources?: Array<{
    label: string;
    url: string;
  }>;
  problem: string;
  solution: string;
  impact: string;
  constraints: string[];
  decisions: ProjectDecision[];
  workflow: string[];
  architecture: string[];
  results: ProjectMetric[];
  tech: string[];
  accent: string;
  icon: PortfolioIconName;
  confidentiality: string;
  learning: string;
  next: string;
};

export type Experience = {
  kind: "work" | "education";
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  icon: PortfolioIconName;
  skills: string[];
};

export type Principle = {
  index: string;
  title: string;
  body: string;
};

export type FieldNote = {
  index: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type LinkedInPost = {
  slug: string;
  category: "AI" | "Engineering";
  title: string;
  excerpt: string;
  readTime: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  takeaways: string[];
  url: string;
  linkedInReactions: number | null;
  linkedInComments: number | null;
  engagementAsOf: string;
};
