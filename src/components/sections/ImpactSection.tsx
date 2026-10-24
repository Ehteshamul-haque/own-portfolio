import { impactHighlights } from "@/data/impact";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

export function ImpactSection() {
  return (
    <SectionContainer id="impact" ariaLabelledBy="impact-heading" className="bg-surface/40">
      <SectionHeading
        id="impact-heading"
        eyebrow="Impact"
        title="Experience and engineering highlights"
        description="Selected contributions from campaign platforms, async systems, integrations, and production delivery. Metrics marked pending should be validated before publication."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {impactHighlights.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-border bg-canvas/60 p-5 transition-colors hover:border-accent/30"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              {!item.verified ? (
                <Badge variant="warning">Pending validation</Badge>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
            <p className="mt-4 text-sm text-ink">
              <span className="text-ink-subtle">Impact: </span>
              {item.impact}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
