import type { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "somo-media",
    company: "Somo Media",
    title: "Senior Full Stack Developer",
    employmentType: "Full-time",
    location: "Delhi",
    startDate: "Dec 2024",
    endDate: "Jul 2026",
    responsibilities: [
      "Architected a campaign management & analytics platform (Next.js, React.js, TypeScript, Redux, Node.js, MongoDB) with a 5-member engineering team.",
      "Designed an event-driven microservice backend with Kafka, Redis and BullMQ for async processing, caching and API rate limiting, reducing latency by 35%.",
      "Built a notification system using Node.js, Express.js, MongoDB, and Kafka, serving 10K+ subscribers across 150+ domains via Firebase Cloud Messaging API and browser push notifications.",
      "Built a keyword planner using Next.js, Express.js, and PostgreSQL with Prisma, generating short- and long-tail keywords for campaign articles by region, language, and length using GenAI.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Kafka",
      "Redis",
      "BullMQ",
      "Firebase Cloud Messaging",
      "GenAI",
    ],
    isPlaceholder: false,
  },
  {
    id: "seventh-triangle",
    company: "Seventh Triangle Consulting",
    title: "Full Stack Developer",
    employmentType: "Full-time",
    location: "Noida",
    startDate: "Jan 2023",
    endDate: "Dec 2024",
    responsibilities: [
      "Developed custom Shopify apps and Hydrogen headless storefronts with React.js, Node.js, MongoDB and GraphQL, integrating third-party services for e-commerce clients.",
      "Built secure REST and GraphQL backend services and APIs for high-traffic applications.",
      "Optimized MongoDB indexes and queries to speed up search, filtering and product allocation.",
      "Deployed and maintained production releases on AWS.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Shopify",
      "Hydrogen",
      "REST APIs",
      "AWS",
    ],
    isPlaceholder: false,
  },
];

export const publishedExperience = experience.filter((item) => !item.isPlaceholder);
