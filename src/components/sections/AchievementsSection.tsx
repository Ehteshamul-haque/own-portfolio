import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";

export function AchievementsSection() {
  return (
    <SectionContainer id="achievements" ariaLabelledBy="achievements-heading">
      <SectionHeading
        id="achievements-heading"
        eyebrow="Achievements"
        title="Engineering outcomes that matter"
        description="Concise highlights focused on performance, reliability, automation, integrations, and production delivery."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-border bg-surface/60 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              {!item.verified ? (
                <Badge variant="warning" className="shrink-0">
                  Pending validation
                </Badge>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
            {item.impact ? (
              <p className="mt-3 text-sm text-ink">
                <span className="text-ink-subtle">Outcome: </span>
                {item.impact}
              </p>
            ) : null}
            {item.technologies && item.technologies.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="muted">
                    {tech}
                  </Badge>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
