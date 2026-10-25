import type { Profile } from "@/types/portfolio";

/**
 * Central profile configuration from resume.
 * Confirm LinkedIn/GitHub profile URLs before publishing.
 */
export const profile: Profile = {
  name: "Ehteshamul Haque",
  shortName: "Ehteshamul",
  title: "Full Stack / MERN Developer",
  availabilityLabel: "Full Stack Developer | Open to Opportunities",
  headline: "Building Scalable Web Applications That Solve Real Problems.",
  summary:
    "Senior Full Stack (MERN) Developer with 3.5+ years building scalable, event-driven web applications and microservices with React.js, Next.js, TypeScript, Node.js, MongoDB and PostgreSQL. Designed Kafka, Redis and BullMQ backends that cut system latency by 35%, and shipped real-time, AI-assisted campaign platforms on AWS with Docker.",
  techSummary: "MERN Stack · Next.js · Shopify · Node.js · Microservices · AWS",
  email: "ehtesham000@gmail.com",
  // phone: "+91 8051542244",
  location: "Noida, India",
  portfolioUrl: "https://ehteshamul-dev.netlify.app",
  resumeUrl: "/resume/Ehteshamul_Haque_Resume.pdf",
  imageSrc: "/images/profile.jpg",
  imageAlt: "Ehteshamul Haque — Full Stack Developer",
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/Ehteshamul-haque",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/e-haque",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:ehtesham000@gmail.com",
    },
  ],
  heroHighlights: [
    { label: "3.5+ Years", description: "Professional experience" },
    { label: "Full Stack / MERN", description: "React to production" },
    { label: "35% Latency Cut", description: "Event-driven backends" },
    { label: "AWS + Docker", description: "Production deployment" },
  ],
  about: {
    paragraphs: [
      "I'm a Senior Full Stack Developer with 3.5+ years of experience building scalable, event-driven applications and microservices. From system architecture and API design to troubleshooting production issues, CI/CD, cloud deployment, and performance monitoring, I focus on building reliable, production-ready systems.",
      "My expertise spans React.js, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, Shopify Hydrogen, and AWS. I've engineered event-driven backends using Kafka, Redis, and BullMQ, reduced system latency by 35%, and deployed Dockerized services powering real-time, AI-assisted campaign platforms.",
      "Beyond writing code, I focus on system reliability, performance optimization, security, and maintaining healthy production systems.",
    ],
    approach: [
      "Clean, maintainable TypeScript and React code",
      "Event-driven microservice architecture",
      "Reliable APIs, GraphQL, and third-party integrations",
      "Performance optimization and caching",
      "RBAC and secure authentication flows",
      "Production debugging and AWS deployment",
      "Collaboration across engineering teams",
    ],
  },
};
