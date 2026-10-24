import type { ServiceItem } from "@/types/portfolio";

export const services: ServiceItem[] = [
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    description:
      "Building complete applications using React, Next.js, Node.js, Express, and databases.",
    value:
      "Ship cohesive product experiences from UI through API and data layer with clear ownership.",
    icon: "code",
  },
  {
    id: "backend",
    title: "Backend Development & API Engineering",
    description:
      "Building REST APIs, GraphQL integrations, background workers, and reliable backend services.",
    value:
      "Create durable services that handle auth, integrations, and asynchronous workloads cleanly.",
    icon: "server",
  },
  {
    id: "shopify",
    title: "Shopify Development",
    description:
      "Custom Shopify apps, theme customization, app extensions, webhooks, and third-party integrations.",
    value:
      "Extend commerce workflows beyond standard storefront tooling when merchants need custom systems.",
    icon: "shopping",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Improving rendering performance, API response times, caching, and database query efficiency.",
    value:
      "Reduce latency and operational friction so products feel fast and stay maintainable.",
    icon: "gauge",
  },
  {
    id: "devops",
    title: "Cloud Deployment & DevOps",
    description:
      "Dockerization, CI/CD pipelines, AWS deployment, Nginx configuration, and production troubleshooting.",
    value:
      "Take features from merge to production with repeatable releases and clearer operations.",
    icon: "cloud",
  },
  {
    id: "maintenance",
    title: "Application Maintenance",
    description:
      "Debugging production issues, resolving technical debt, and improving system reliability.",
    value:
      "Stabilize existing systems so teams can iterate with confidence instead of firefighting.",
    icon: "wrench",
  },
];
