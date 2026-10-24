import type { AchievementItem } from "@/types/portfolio";

export const achievements: AchievementItem[] = [
  {
    id: "perf",
    title: "35% system latency reduction",
    description:
      "Designed Kafka, Redis, and BullMQ backends for async processing, caching, and API rate limiting on campaign platforms.",
    impact: "Measurable latency improvement across production campaign workflows.",
    technologies: ["Kafka", "Redis", "BullMQ", "Node.js"],
    verified: true,
  },
  {
    id: "notifications",
    title: "Notification delivery at scale",
    description:
      "Shipped notification infrastructure serving 10K+ subscribers across 150+ domains with FCM and browser push.",
    impact: "Multi-domain subscriber communication without per-site rebuilds.",
    technologies: ["Kafka", "FCM", "Node.js", "MongoDB"],
    verified: true,
  },
  {
    id: "nexus",
    title: "Nexus campaign microservices",
    description:
      "Engineered 5+ backend services and 10+ BullMQ workflows with Socket.IO live updates and AI-assisted content generation.",
    impact: "End-to-end campaign automation with stronger access control.",
    technologies: ["Next.js", "Kafka", "BullMQ", "Socket.IO", "AWS"],
    verified: true,
  },
  {
    id: "equipp",
    title: "Equipp rental platform modules",
    description:
      "Delivered 10+ modules covering customers, products, orders, payments, deliveries, returns, KYC, and shipment tracking.",
    impact: "Complete rental order lifecycle on a MERN stack.",
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    verified: true,
  },
  {
    id: "shopify",
    title: "Shopify apps and Hydrogen storefronts",
    description:
      "Built custom Shopify apps and headless Hydrogen experiences with GraphQL and third-party integrations.",
    impact: "Extended commerce workflows for e-commerce clients.",
    technologies: ["Shopify", "Hydrogen", "GraphQL", "React.js"],
    verified: true,
  },
  {
    id: "aws",
    title: "AWS production operations",
    description:
      "Deployed and maintained production releases on AWS, including Dockerized EC2 services for scalable campaign workloads.",
    impact: "Reliable production delivery and operational ownership.",
    technologies: ["AWS", "Docker", "Nginx", "CI/CD"],
    verified: true,
  },
];
