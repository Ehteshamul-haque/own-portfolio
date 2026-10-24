import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/constants";
import { isConfiguredUrl } from "@/lib/utils";

export function JsonLd() {
  const sameAs = profile.socialLinks
    .filter(
      (link) =>
        link.platform !== "email" &&
        isConfiguredUrl(link.href) &&
        !link.href.includes("example.com"),
    )
    .map((link) => link.href);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: SITE_URL,
    description: profile.summary,
    email: profile.email.includes("example.com")
      ? undefined
      : `mailto:${profile.email}`,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "Next.js",
      "Node.js",
      "Shopify Development",
      "API Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
