import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "nexus-campaign",
    name: "Nexus Campaign Management Platform",
    tagline: "Microservices campaign platform with Kafka, BullMQ, and real-time updates.",
    description:
      "A microservices-based campaign management platform for creation, approval, scheduling, monitoring, and analytics — containerized and deployed on AWS EC2.",
    problem:
      "Campaign operations needed a unified system for lifecycle management, async processing, access control, and live operational updates.",
    role: "Senior Full Stack Developer on a 5-member engineering team.",
    contributions: [
      "Engineered 5+ backend services for campaign creation, approval, scheduling, monitoring, and analytics.",
      "Implemented Kafka-based event processing and 10+ BullMQ background workflows for async campaign processing, notifications, and analytics jobs.",
      "Delivered live updates via Socket.IO.",
      "Integrated AI-assisted content generation and RBAC across 4+ user roles with approval workflows.",
      "Containerized and deployed services on AWS EC2 for scalable production deployments.",
    ],
    technicalDecisions: [
      "Microservice boundaries for independent campaign workflows.",
      "Kafka + BullMQ for durable async processing.",
      "Socket.IO for real-time UI updates.",
      "RBAC with multi-role approval flows.",
      "Dockerized AWS EC2 deployments.",
    ],
    features: [
      "Campaign lifecycle management",
      "Event-driven processing",
      "Background job workflows",
      "Real-time Socket.IO updates",
      "AI-assisted content generation",
      "RBAC across 4+ roles",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Kafka",
      "BullMQ",
      "MongoDB",
      "AWS",
      "Socket.IO",
      "Docker",
      "RBAC",
      "GenAI",
    ],
    categories: ["full-stack", "backend", "infrastructure", "ai"],
    outcomes: [
      { label: "Reduced system latency by 35%", verified: true },
      { label: "5+ backend services in production", verified: true },
      { label: "10+ BullMQ background workflows", verified: true },
    ],
    featured: true,
  },
  {
    id: "notification-system",
    name: "Notification System",
    tagline: "Multi-domain push notifications for 10K+ subscribers.",
    description:
      "Notification platform delivering browser push and FCM messages across 150+ domains using Node.js, Kafka, and MongoDB.",
    problem:
      "Needed reliable fan-out notifications across many subscriber domains without per-site infrastructure.",
    role: "Backend / Full Stack Developer owning delivery pipelines and messaging integration.",
    contributions: [
      "Built notification services with Node.js, Express.js, MongoDB, and Kafka.",
      "Integrated Firebase Cloud Messaging API and browser push notifications.",
      "Supported delivery across 10K+ subscribers and 150+ domains.",
    ],
    technicalDecisions: [
      "Kafka for asynchronous notification processing.",
      "FCM + browser push for multi-channel delivery.",
      "MongoDB for subscriber and delivery metadata.",
    ],
    features: [
      "Push and browser notifications",
      "Multi-domain delivery",
      "Kafka-based async processing",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Kafka",
      "Firebase Cloud Messaging",
    ],
    categories: ["backend", "infrastructure"],
    outcomes: [
      { label: "10K+ subscribers", verified: true },
      { label: "150+ domains", verified: true },
    ],
    featured: true,
  },
  {
    id: "keyword-planner",
    name: "Keyword Planning Platform",
    tagline: "Region-aware keyword research with GenAI fallbacks.",
    description:
      "Keyword planner generating short- and long-tail keywords for campaign articles by region, language, and length using PostgreSQL, Prisma, and GenAI.",
    problem:
      "Campaign content teams needed faster keyword discovery with regional and language constraints.",
    role: "Full Stack Developer responsible for UI, APIs, and GenAI-assisted suggestions.",
    contributions: [
      "Built keyword suggestion flows with region, language, and length filters.",
      "Used Next.js, Express.js, PostgreSQL, and Prisma for structured retrieval.",
      "Applied GenAI to generate short- and long-tail keyword suggestions.",
    ],
    technicalDecisions: [
      "PostgreSQL + Prisma for structured keyword data.",
      "GenAI for expandable short- and long-tail coverage.",
    ],
    features: [
      "Keyword suggestions by region",
      "Language and length filters",
      "GenAI-assisted generation",
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "GenAI"],
    categories: ["full-stack", "ai"],
    featured: true,
  },
  {
    id: "equipp-rental",
    name: "Equipp Rental Management Platform",
    tagline: "Full-stack rental lifecycle platform with 10+ modules.",
    description:
      "MERN rental platform covering customer management, products, orders, payments, deliveries, and returns with third-party KYC, payment, and shipment integrations.",
    problem:
      "Rental operations needed an end-to-end digital system for orders, payments, logistics, and access control.",
    role: "Full Stack Developer designing and implementing the platform modules and APIs.",
    contributions: [
      "Designed and implemented 10+ modules across the rental order lifecycle.",
      "Integrated third-party APIs for KYC verification, online payments, delivery, and shipment tracking.",
      "Developed REST APIs, MongoDB data models, and RBAC for complete order flows.",
    ],
    technicalDecisions: [
      "MERN stack for rapid full-stack delivery.",
      "Modular domain boundaries for customers, products, orders, and logistics.",
      "RBAC for secure operational access.",
    ],
    features: [
      "Customer and product management",
      "Orders, payments, deliveries, returns",
      "KYC and payment integrations",
      "Shipment tracking",
      "RBAC",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "RBAC"],
    categories: ["full-stack", "backend"],
    outcomes: [
      { label: "10+ platform modules delivered", verified: true },
    ],
    featured: true,
  },
  {
    id: "shopify-commerce",
    name: "Shopify Apps & Hydrogen Storefronts",
    tagline: "Custom Shopify apps and headless commerce for e-commerce clients.",
    description:
      "Shopify development spanning custom apps, Hydrogen headless storefronts, GraphQL integrations, and third-party service connections.",
    problem:
      "E-commerce clients needed custom commerce workflows beyond standard Shopify tooling.",
    role: "Full Stack Developer delivering Shopify apps, APIs, and Hydrogen storefronts.",
    contributions: [
      "Developed custom Shopify apps and Hydrogen headless storefronts with React.js, Node.js, MongoDB, and GraphQL.",
      "Integrated third-party services for e-commerce clients.",
      "Built secure REST and GraphQL backend services for high-traffic applications.",
    ],
    technicalDecisions: [
      "Shopify GraphQL for merchant data operations.",
      "Hydrogen for headless storefront experiences.",
      "MongoDB-backed app services for custom workflows.",
    ],
    features: [
      "Custom Shopify apps",
      "Hydrogen headless storefronts",
      "GraphQL integrations",
      "Third-party service connections",
    ],
    technologies: [
      "Shopify",
      "Hydrogen",
      "React.js",
      "Node.js",
      "MongoDB",
      "GraphQL",
    ],
    categories: ["shopify", "full-stack"],
    featured: true,
  },
];
