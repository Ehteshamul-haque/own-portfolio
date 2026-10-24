import type { ImpactHighlight } from "@/types/portfolio";

export const impactHighlights: ImpactHighlight[] = [
  {
    id: "campaign-platform",
    title: "Campaign platform architecture",
    description:
      "Architected a campaign management & analytics platform with a 5-member engineering team using Next.js, React, TypeScript, Redux, Node.js, and MongoDB.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redux"],
    impact: "Unified campaign creation, approval, scheduling, monitoring, and analytics.",
    verified: true,
  },
  {
    id: "latency",
    title: "35% latency reduction",
    description:
      "Designed an event-driven microservice backend with Kafka, Redis, and BullMQ for async processing, caching, and API rate limiting.",
    technologies: ["Kafka", "Redis", "BullMQ", "Node.js"],
    impact: "Reduced system latency by 35%.",
    verified: true,
  },
  {
    id: "notifications",
    title: "Notification infrastructure at scale",
    description:
      "Built a notification system serving 10K+ subscribers across 150+ domains via FCM and browser push.",
    technologies: ["Node.js", "Kafka", "MongoDB", "FCM"],
    impact: "Reliable multi-domain notification delivery.",
    verified: true,
  },
  {
    id: "keyword-genai",
    title: "AI-assisted keyword planning",
    description:
      "Built a keyword planner with Next.js, Express, PostgreSQL, and Prisma that generates short- and long-tail keywords by region, language, and length using GenAI.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "GenAI"],
    impact: "Faster campaign content keyword discovery.",
    verified: true,
  },
  {
    id: "shopify",
    title: "Shopify & Hydrogen delivery",
    description:
      "Developed custom Shopify apps and Hydrogen headless storefronts with React, Node.js, MongoDB, and GraphQL for e-commerce clients.",
    technologies: ["Shopify", "Hydrogen", "GraphQL", "React.js"],
    impact: "Custom commerce workflows beyond standard storefront tooling.",
    verified: true,
  },
  {
    id: "mongo-perf",
    title: "MongoDB query optimization",
    description:
      "Optimized MongoDB indexes and queries to speed up search, filtering, and product allocation in high-traffic applications.",
    technologies: ["MongoDB", "Node.js"],
    impact: "Faster search and product allocation paths.",
    verified: true,
  },
];
