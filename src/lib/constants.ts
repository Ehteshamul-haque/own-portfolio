import type { NavItem, ProjectCategory } from "@/types/portfolio";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ehteshamul-dev.netlify.app";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "shopify", label: "Shopify" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "ai", label: "AI" },
];

export const SECTION_IDS = {
  home: "home",
  about: "about",
  impact: "impact",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  services: "services",
  clients: "clients",
  education: "education",
  achievements: "achievements",
  contact: "contact",
} as const;
