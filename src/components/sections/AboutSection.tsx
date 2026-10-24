import Image from "next/image";
import { Briefcase, Check, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { publishedExperience } from "@/data/experience";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutSection() {
  return (
    <SectionContainer id="about" ariaLabelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="Practical engineering with production in mind"
        description="A concise look at how I work across frontend, backend, and deployment."
      />

      <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-10 xl:grid-cols-[260px_1fr]">
        <aside className="mx-auto w-full max-w-[240px] lg:mx-0 lg:max-w-none">
          {profile.imageSrc ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative mx-auto aspect-square w-full max-h-[240px] bg-surface-elevated">
                <Image
                  src={profile.imageSrc}
                  alt={profile.imageAlt ?? profile.name}
                  fill
                  priority
                  quality={100}
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>

              <div className="border-t border-border px-3.5 py-3">
                <p className="font-display text-base font-semibold text-ink">
                  {profile.name}
                </p>
                <p className="mt-1 text-sm text-accent">{profile.title}</p>
                {profile.location ? (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-subtle">
                    <MapPin size={12} aria-hidden="true" />
                    {profile.location}
                  </p>
                ) : null}
              </div>

              {publishedExperience.length > 0 ? (
                <div className="border-t border-border px-3.5 py-3">
                  <p className="mb-2.5 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle">
                    <Briefcase size={12} aria-hidden="true" />
                    Roles
                  </p>
                  <ul className="space-y-2.5">
                    {publishedExperience.map((role) => (
                      <li key={role.id} className="text-left">
                        <p className="text-sm font-semibold text-ink">
                          {role.title}
                        </p>
                        <p className="mt-0.5 text-xs text-accent">{role.company}</p>
                        <p className="mt-0.5 text-[11px] text-ink-subtle">
                          {role.startDate} — {role.endDate}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="border-t border-border bg-accent/5 px-3.5 py-3 text-center">
                <p className="font-display text-xl font-semibold text-ink">
                  3.5+ Years
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                  Overall Experience
                </p>
              </div>
            </div>
          ) : null}
        </aside>

        <div className="space-y-8">
          <div className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              Hi, I&apos;m {profile.shortName} — a Full Stack / MERN Developer based
              in {profile.location ?? "India"} with 3.5+ years building scalable web
              apps, APIs, and cloud-ready systems.
            </p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              How I approach engineering
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {profile.about.approach.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-muted"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={12} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
