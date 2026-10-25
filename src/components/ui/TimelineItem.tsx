import { Badge } from "@/components/ui/Badge";
import { externalRel, externalTarget, isConfiguredUrl } from "@/lib/utils";
import type { ExperienceItem } from "@/types/portfolio";

interface TimelineItemProps {
  item: ExperienceItem;
  index?: number;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="relative pl-10 sm:pl-12">
      <span
        className="absolute left-[0.55rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-canvas sm:left-[0.7rem]"
        aria-hidden="true"
      />
      <div className="rounded-2xl border border-border bg-surface/70 p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {isConfiguredUrl(item.companyUrl) ? (
                <a
                  href={item.companyUrl}
                  target={externalTarget(item.companyUrl)}
                  rel={externalRel(item.companyUrl)}
                  className="font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.company}
                </a>
              ) : (
                <span className="font-medium text-ink">{item.company}</span>
              )}
              <span className="text-ink-subtle"> · {item.employmentType}</span>
            </p>
          </div>
          <p className="shrink-0 text-sm text-ink-subtle">
            {item.startDate} — {item.endDate}
            {item.location ? ` · ${item.location}` : ""}
          </p>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">
                —
              </span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>

        {item.achievements && item.achievements.length > 0 ? (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  ★
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
