import type { CSSProperties } from "react";
import { getSkillBrandIcon } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";
import type { SkillBrandIcon } from "@/types/portfolio";

function isNearBlack(hex: string) {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return false;
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  return (r + g + b) / 3 < 40;
}

interface BrandIconProps {
  icon?: SkillBrandIcon;
  label: string;
  mark?: string;
  size?: number;
  className?: string;
  /** Use official brand color instead of monochrome */
  colored?: boolean;
}

export function BrandIcon({
  icon,
  label,
  mark,
  size = 18,
  className,
  colored = true,
}: BrandIconProps) {
  const brand = getSkillBrandIcon(icon);

  if (brand) {
    // Very dark brand fills (e.g. Express, Next.js, GitHub) stay readable on dark UI
    const readableColor = isNearBlack(brand.hex) ? "#E2E8F0" : `#${brand.hex}`;
    return (
      <svg
        role="img"
        aria-label={`${label} logo`}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn(
          "shrink-0",
          colored ? "fill-[var(--brand)]" : "fill-current",
          className,
        )}
        style={
          colored ? ({ "--brand": readableColor } as CSSProperties) : undefined
        }
      >
        <title>{label}</title>
        <path d={brand.path} />
      </svg>
    );
  }

  if (mark) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-surface text-[0.65rem] font-bold tracking-wide text-accent",
          className,
        )}
        style={{ width: size + 6, height: size + 6 }}
        aria-hidden="true"
      >
        {mark}
      </span>
    );
  }

  return null;
}
