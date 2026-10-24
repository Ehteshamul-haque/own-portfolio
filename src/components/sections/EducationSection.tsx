import {
  publishedCertifications,
  publishedEducation,
} from "@/data/education";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { externalRel, externalTarget, isConfiguredUrl } from "@/lib/utils";

export function EducationSection() {
  const hasEducation = publishedEducation.length > 0;
  const hasCerts = publishedCertifications.length > 0;

  if (!hasEducation && !hasCerts) {
    return (
      <SectionContainer
        id="education"
        ariaLabelledBy="education-heading"
        className="bg-surface/40"
      >
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Education and certifications"
          description="Academic and credential details are managed in the portfolio data files and only appear once published."
        />
        <div className="rounded-2xl border border-dashed border-border bg-canvas/40 p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            Update <code className="text-accent">src/data/education.ts</code> with
            your institution, degree, dates, and certifications. Set{" "}
            <code className="text-accent">isPlaceholder: false</code> on each entry
            you want shown publicly. Empty fields stay hidden.
          </p>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      id="education"
      ariaLabelledBy="education-heading"
      className="bg-surface/40"
    >
      <SectionHeading
        id="education-heading"
        eyebrow="Education"
        title="Education and certifications"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {hasEducation ? (
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-ink-subtle">
              Education
            </h3>
            {publishedEducation.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-canvas/55 p-5"
              >
                <h4 className="font-display text-lg font-semibold text-ink">
                  {item.institution}
                </h4>
                <p className="mt-1 text-sm text-ink-muted">
                  {item.degree}
                  {item.field ? ` · ${item.field}` : ""}
                </p>
                {item.startDate || item.endDate ? (
                  <p className="mt-2 text-sm text-ink-subtle">
                    {[item.startDate, item.endDate].filter(Boolean).join(" — ")}
                  </p>
                ) : null}
                {item.details && item.details.length > 0 ? (
                  <ul className="mt-3 space-y-1 text-sm text-ink-muted">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {isConfiguredUrl(item.credentialUrl) ? (
                  <a
                    href={item.credentialUrl}
                    target={externalTarget(item.credentialUrl)}
                    rel={externalRel(item.credentialUrl)}
                    className="mt-3 inline-block text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    View credential
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {hasCerts ? (
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-ink-subtle">
              Certifications
            </h3>
            {publishedCertifications.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-canvas/55 p-5"
              >
                <h4 className="font-display text-lg font-semibold text-ink">
                  {item.name}
                </h4>
                <p className="mt-1 text-sm text-ink-muted">{item.issuer}</p>
                {item.date ? (
                  <p className="mt-2 text-sm text-ink-subtle">{item.date}</p>
                ) : null}
                {isConfiguredUrl(item.credentialUrl) ? (
                  <a
                    href={item.credentialUrl}
                    target={externalTarget(item.credentialUrl)}
                    rel={externalRel(item.credentialUrl)}
                    className="mt-3 inline-block text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    View credential
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
