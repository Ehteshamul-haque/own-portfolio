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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label={label}>
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <span className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-canvas">
                <BrandIcon
                  icon={item.icon}
                  label={item.label}
                  mark={item.mark}
                  size={20}
                  colored
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
