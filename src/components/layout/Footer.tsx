import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { LinkButton } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";
import { isConfiguredUrl } from "@/lib/utils";

export function Footer() {
  const hasResume = isConfiguredUrl(profile.resumeUrl);

  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {profile.title} focused on MERN, Next.js, Shopify, and production-ready
            systems.
          </p>
          <SocialLinks links={profile.socialLinks} className="mt-5 justify-start" size="sm" />
          {hasResume ? (
            <LinkButton
              href={profile.resumeUrl!}
              variant="outline"
              size="sm"
              className="mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </LinkButton>
          ) : null}
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Navigate</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6">
        <p className="text-sm text-ink-subtle">
          © {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
