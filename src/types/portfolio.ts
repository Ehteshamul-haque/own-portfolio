export type SocialPlatform =
  | "github"
  | "linkedin"
  | "email"
  | "twitter"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface HeroHighlight {
  label: string;
  description?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  title: string;
  availabilityLabel: string;
  headline: string;
  summary: string;
  techSummary: string;
  email: string;
  phone?: string;
  location?: string;
  portfolioUrl: string;
  resumeUrl?: string;
  /** Public path to profile photo, e.g. /images/profile.jpg */
  imageSrc?: string;
  imageAlt?: string;
  socialLinks: SocialLink[];
  heroHighlights: HeroHighlight[];
  about: {
    paragraphs: string[];
    approach: string[];
  };
}

export type MarqueeDirection = "left" | "right";

export type SkillPriority = "primary" | "secondary";

/** Maps to a known Simple Icons export; omit when no accurate logo exists. */
export type SkillBrandIcon =
  | "javascript"
  | "typescript"
  | "react"
  | "nextdotjs"
  | "redux"
  | "tailwindcss"
  | "html5"
  | "css"
  | "nodedotjs"
  | "express"
  | "graphql"
  | "mongodb"
  | "postgresql"
  | "redis"
  | "prisma"
  | "apachekafka"
  | "shopify"
  | "docker"
  | "githubactions"
  | "nginx"
  | "cursor"
  | "python"
  | "antdesign"
  | "socketdotio"
  | "git"
  | "github"
  | "googleads"
  | "googleadsense"
  | "meta"
  | "razorpay";

export interface MarqueeItem {
  id: string;
  label: string;
  /** Official Simple Icons brand key when available */
  icon?: SkillBrandIcon;
  /** Fallback initials only when no official logo exists */
  mark?: string;
  accent?: string;
}

export type SkillCategoryIcon =
  | "frontend"
  | "backend"
  | "database"
  | "messaging"
  | "shopify"
  | "cloud"
  | "ai";

export interface Skill {
  name: string;
  /** Simple Icons brand key; text-only badge when undefined */
  icon?: SkillBrandIcon;
  priority?: SkillPriority;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  icon: SkillCategoryIcon;
  skills: Skill[];
  /** Visually emphasize categories central to experience */
  featured?: boolean;
}

export type ProjectCategory =
  | "all"
  | "full-stack"
  | "backend"
  | "shopify"
  | "infrastructure"
  | "ai";

export interface ProjectOutcome {
  label: string;
  verified: boolean;
  note?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  contributions: string[];
  technicalDecisions: string[];
  features: string[];
  technologies: string[];
  categories: Exclude<ProjectCategory, "all">[];
  outcomes?: ProjectOutcome[];
  githubUrl?: string;
  liveUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  title: string;
  employmentType: string;
  location?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  /** When true, item is a placeholder and should not render publicly */
  isPlaceholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: "code" | "server" | "shopping" | "gauge" | "cloud" | "wrench";
}

export interface ClientItem {
  id: string;
  name: string;
  description: string;
  website?: string;
  logoSrc?: string;
  category?: string;
  /** When true, hide from public rendering */
  isPlaceholder?: boolean;
}

export interface CollaborationFocus {
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  details?: string[];
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  impact?: string;
  technologies?: string[];
  /** Mark unverified metrics so UI can qualify them */
  verified: boolean;
}

export interface ImpactHighlight {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  verified: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
