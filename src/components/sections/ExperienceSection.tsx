import { publishedExperience } from "@/data/experience";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function ExperienceSection() {
  const hasExperience = publishedExperience.length > 0;

  return (
    <SectionContainer id="experience" ariaLabelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Professional journey"
        description="A timeline of roles, ownership, and technical contributions. Employer details are managed in the portfolio data files."
      />

      {hasExperience ? (
        <div className="relative space-y-6">
          <div
            className="absolute bottom-2 left-[0.9rem] top-2 w-px bg-border sm:left-[1.05rem]"
            aria-hidden="true"
          />
          {publishedExperience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-8">
          <h3 className="font-display text-lg font-semibold text-ink">
            Experience details ready to configure
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Placeholder employer entries are intentionally hidden from the live site.
            Update <code className="text-accent">src/data/experience.ts</code> with
            your real company names, dates, responsibilities, and technologies, then
            set <code className="text-accent">isPlaceholder: false</code> to publish
            each role.
          </p>
        </div>
      )}
    </SectionContainer>
  );
}
