export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "instagram" | "linkedin" | "facebook";
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  format: string;
  href: string;
  icon: "leaf" | "sun" | "heart" | "sparkle" | "wave" | "star";
}

export interface Testimonial {
  quote: string;
  name: string;
  detail?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WorkshopTopic {
  title: string;
  description: string;
  icon: "leaf" | "sun" | "heart" | "sparkle" | "wave" | "star";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ResourceArticle {
  title: string;
  excerpt: string;
  readTime: string;
  tag: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: "leaf" | "sun" | "heart" | "sparkle" | "wave" | "star";
}
