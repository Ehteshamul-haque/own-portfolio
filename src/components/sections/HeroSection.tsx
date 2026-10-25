import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { DeveloperConfigCard } from "@/components/hero/DeveloperConfigCard";
import { SpiderWebBackground } from "@/components/hero/SpiderWebBackground";
import { LinkButton } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { isConfiguredUrl } from "@/lib/utils";

const stats = [
  { value: "3.5+", label: "Years Exp." },
  { value: "5+", label: "Key Projects" },
  { value: "99.99%", label: "Uptime" },
];

export function HeroSection() {
  const hasResume = isConfiguredUrl(profile.resumeUrl);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-x-hidden px-4 pb-8 pt-[4.5rem] sm:px-6 sm:pb-10 sm:pt-20 lg:px-8"
    >
      <SpiderWebBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center py-2 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-700/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-emerald-800 uppercase dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300 sm:text-[11px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" />
          Available for work
        </p>

        <h1
          id="hero-heading"
          className="mt-2 bg-gradient-to-r from-slate-800 via-ink to-sky-800 bg-clip-text font-display text-[clamp(1.75rem,5.8vw,3.25rem)] font-bold tracking-tight text-transparent dark:from-sky-300 dark:via-ink dark:to-sky-200 sm:mt-3"
        >
          {profile.name}
        </h1>

        <p className="mt-1.5 font-mono text-xs text-accent sm:mt-2 sm:text-sm">
          {profile.title}
          <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-accent align-middle sm:h-4" />
        </p>

        <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-ink-muted sm:mt-3 sm:text-sm">
          Engineering high-performance, scalable applications with MERN, Next.js, Microservices, PostgreSQL,
          Shopify, Google Ads, Adtech, and cloud-native systems.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3">
          <LinkButton href="#projects" size="sm" className="sm:h-11 sm:px-5 sm:text-sm">
            View Projects
            <ArrowRight size={15} aria-hidden="true" />
          </LinkButton>
          {hasResume ? (
            <LinkButton
              href={profile.resumeUrl!}
              variant="outline"
              size="sm"
              className="sm:h-11 sm:px-5 sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </LinkButton>
          ) : (
            <LinkButton
              href="#contact"
              variant="outline"
              size="sm"
              className="sm:h-11 sm:px-5 sm:text-sm"
            >
              <Mail size={15} aria-hidden="true" />
              Contact Me
            </LinkButton>
          )}
          <SocialLinks links={profile.socialLinks} size="sm" />
        </div>

        <ul className="mt-4 grid w-full max-w-sm grid-cols-3 gap-1.5 sm:mt-5 sm:max-w-md sm:gap-4">
          {stats.map((stat) => (
            <li key={stat.label} className="min-w-0 px-0.5">
              <p className="font-display text-lg font-semibold text-ink sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] leading-tight tracking-wider text-ink-subtle uppercase sm:text-[11px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-4 w-full max-w-md sm:mt-5 md:mt-6">
          <DeveloperConfigCard />
        </div>
      </div>
    </section>
  );
}
