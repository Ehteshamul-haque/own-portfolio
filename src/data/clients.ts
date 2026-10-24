import type { ClientItem, CollaborationFocus } from "@/types/portfolio";

/**
 * Public client/collaboration entries.
 * Do not invent logos, names, or testimonials.
 * Placeholder clients are hidden from the live site.
 */
export const clients: ClientItem[] = [
  {
    id: "client-placeholder",
    name: "Client or Organization Name",
    description: "Short description of the collaboration once approved for publication.",
    website: undefined,
    logoSrc: undefined,
    category: "Full Stack",
    isPlaceholder: true,
  },
];

export const publishedClients = clients.filter((client) => !client.isPlaceholder);

export const collaborationFocus: CollaborationFocus[] = [
  {
    title: "Engineering teams",
    description:
      "Pairing on architecture, API contracts, code reviews, and release readiness across frontend and backend.",
  },
  {
    title: "Product & design",
    description:
      "Translating requirements into incremental delivery plans with clear technical tradeoffs and UX constraints.",
  },
  {
    title: "Operations & stakeholders",
    description:
      "Supporting deployments, production debugging, and cross-functional communication when systems need attention.",
  },
];
