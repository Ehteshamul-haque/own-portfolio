import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { cn, externalRel, externalTarget, isConfiguredUrl } from "@/lib/utils";
import type { SocialLink, SocialPlatform } from "@/types/portfolio";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const icons: Record<SocialPlatform, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  twitter: Globe,
  website: Globe,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  size?: "sm" | "md";
}

export function SocialLinks({ links, className, size = "md" }: SocialLinksProps) {
  const configured = links.filter((link) => isConfiguredUrl(link.href));

  if (configured.length === 0) return null;

  const iconSize = size === "sm" ? 18 : 20;

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {configured.map((link) => {
        const Icon = icons[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target={externalTarget(link.href)}
              rel={externalRel(link.href)}
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-ink-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Icon size={iconSize} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
