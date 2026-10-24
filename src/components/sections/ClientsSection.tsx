import { collaborationFocus, publishedClients } from "@/data/clients";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { externalRel, externalTarget, isConfiguredUrl } from "@/lib/utils";

export function ClientsSection() {
  const hasClients = publishedClients.length > 0;

  return (
    <SectionContainer id="clients" ariaLabelledBy="clients-heading">
      <SectionHeading
        id="clients-heading"
        eyebrow={hasClients ? "Clients" : "Collaboration"}
        title={
          hasClients
            ? "Clients and collaborations"
            : "Cross-functional collaboration"
        }
        description={
          hasClients
            ? "Selected organizations and collaborations approved for public mention."
            : "How I work with engineers, designers, product managers, and stakeholders to ship reliable software."
        }
      />

      {hasClients ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {publishedClients.map((client) => (
            <li
              key={client.id}
              className="rounded-2xl border border-border bg-surface/60 p-5"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {isConfiguredUrl(client.website) ? (
                  <a
                    href={client.website}
                    target={externalTarget(client.website)}
                    rel={externalRel(client.website)}
                    className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {client.name}
                  </a>
                ) : (
                  client.name
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {client.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {collaborationFocus.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface/60 p-5"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
