import Image from "next/image";
import { Briefcase, Check, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { publishedExperience } from "@/data/experience";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function AboutSection() {
  return (
    <SectionContainer
      id="about"
      ariaLabelledBy="about-heading"
      className="py-14 sm:py-20 lg:py-24"
    >
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="Practical engineering with production in mind"
        description="A concise look at how I work across frontend, backend, and deployment."
        className="mb-8 sm:mb-10"
      />

      <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        <aside className="w-full max-w-[260px] justify-self-center lg:justify-self-start">
          {profile.imageSrc ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-square w-full bg-surface-elevated">
                <Image
                  src={profile.imageSrc}
                  alt={profile.imageAlt ?? profile.name}
                  fill
                  priority
                  quality={100}
                  sizes="260px"
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1 border-t border-border px-4 py-3.5">
                <p className="font-display text-base font-semibold text-ink">
                  {profile.name}
                </p>
                <p className="text-sm text-accent">{profile.title}</p>
                {profile.location ? (
                  <p className="inline-flex items-center gap-1.5 pt-0.5 text-xs text-ink-subtle">
                    <MapPin size={12} aria-hidden="true" />
                    {profile.location}
                  </p>
                ) : null}
              </div>

              {publishedExperience.length > 0 ? (
                <div className="border-t border-border px-4 py-3.5">
                  <p className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subtle">
                    <Briefcase size={12} aria-hidden="true" />
                    Roles
                  </p>
                  <ul className="space-y-3">
                    {publishedExperience.map((role) => (
                      <li key={role.id}>
                        <p className="text-sm font-semibold leading-snug text-ink">
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

              <div className="border-t border-border bg-accent/5 px-4 py-3.5 text-center">
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

        <div className="min-w-0 space-y-6 sm:space-y-7">
          <div className="space-y-3.5 text-[15px] leading-relaxed text-ink-muted sm:space-y-4 sm:text-base lg:text-lg">
            <p>
              Hi, I&apos;m {profile.shortName} — a Full Stack / MERN Developer based
              in {profile.location ?? "India"} with 3.5+ years building scalable web
              apps, APIs, and cloud-ready systems.
            </p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-surface/70 p-4 sm:p-5 lg:p-6">
            <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
              How I approach engineering
            </h3>
            <ul className="mt-3.5 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
              {profile.about.approach.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-snug text-ink-muted"
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
