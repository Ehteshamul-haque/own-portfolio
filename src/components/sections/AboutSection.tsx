import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { publishedExperience } from "@/data/experience";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";

const highlights = [
  { value: "3.5+", label: "Years experience" },
  { value: "99.99%", label: "Uptime" },
  { value: "5+", label: "Projects Delivered" },
];

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
        className="mb-10 sm:mb-12"
      />

      <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
        {/* Portrait + identity */}
        <aside className="mx-auto w-full max-w-sm min-w-0 lg:mx-0 lg:max-w-none">
          {profile.imageSrc ? (
            <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:shadow-none">
              <div className="relative aspect-[4/5] w-full bg-surface-hover">
                <Image
                  src={profile.imageSrc}
                  alt={profile.imageAlt ?? profile.name}
                  fill
                  quality={75}
                  sizes="(max-width: 1023px) 24rem, 304px"
                  className="object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface via-surface/55 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="space-y-1.5 border-t border-border bg-surface-elevated/70 px-5 py-4 dark:bg-transparent">
                <p className="font-display text-lg font-semibold tracking-tight text-ink">
                  {profile.name}
                </p>
                <p className="text-sm font-medium text-accent">{profile.title}</p>
                {profile.location ? (
                  <p className="inline-flex items-center gap-1.5 pt-0.5 text-xs text-ink-subtle">
                    <MapPin size={12} aria-hidden="true" />
                    {profile.location}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ) : null}
        </aside>

        {/* Narrative + metrics */}
        <div className="flex min-w-0 flex-col justify-between gap-8">
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted sm:text-base lg:text-[1.05rem] lg:leading-relaxed">
            <p className="font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">
             Hi, I'm Ehteshamul — building scalable web applications and high-performance backend systems.
            </p>
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-3 border-y border-border py-5 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="min-w-0 text-center sm:text-left">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.14em] text-ink-subtle uppercase sm:text-[11px]">
                    {item.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Roles band */}
      {publishedExperience.length > 0 ? (
        <div className="mt-12 border-t border-border pt-10 sm:mt-14 sm:pt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Career
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Recent roles
              </h3>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {publishedExperience.map((role, index) => (
              <li
                key={role.id}
                className="relative min-w-0 border-l-2 border-accent/40 pl-4 sm:pl-5"
              >
                <p className="font-mono text-[11px] tracking-wide text-ink-subtle">
                  {String(index + 1).padStart(2, "0")}
                  <span className="mx-2 text-border-strong">/</span>
                  {role.startDate} — {role.endDate}
                </p>
                <p className="mt-2 font-display text-base font-semibold text-ink sm:text-lg">
                  {role.title}
                </p>
                <p className="mt-1 text-sm text-accent">{role.company}</p>
                {role.location ? (
                  <p className="mt-1 text-xs text-ink-subtle">{role.location}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Approach band */}
      <div className="mt-12 border-t border-border pt-10 sm:mt-14 sm:pt-12">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
            Approach
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            How I approach engineering
          </h3>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-5">
          {profile.about.approach.map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                aria-hidden="true"
              >
                <Check size={12} strokeWidth={2.5} />
              </span>
              <span className="min-w-0 text-sm leading-snug text-ink-muted sm:text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
