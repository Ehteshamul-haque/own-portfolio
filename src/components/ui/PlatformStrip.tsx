import { BrandIcon } from "@/components/ui/BrandIcon";
import type { MarqueeItem } from "@/types/portfolio";

interface PlatformStripProps {
  items: MarqueeItem[];
  label?: string;
}

export function PlatformStrip({
  items,
  label = "Platforms and integrations",
}: PlatformStripProps) {
  return (
    <div
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      role="region"
      aria-label={label}
    >
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface-elevated px-3 py-2 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover sm:gap-3 sm:px-4 sm:py-2.5">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas sm:h-10 sm:w-10"
                aria-hidden="true"
              >
                <BrandIcon
                  icon={item.icon}
                  label={item.label}
                  mark={item.mark}
                  size={20}
                  colored
                  decorative
                />
              </span>
              <span className="whitespace-nowrap text-sm font-medium text-ink">
                {item.label}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
