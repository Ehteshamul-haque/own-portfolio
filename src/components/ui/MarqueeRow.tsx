import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";
import type { MarqueeDirection, MarqueeItem } from "@/types/portfolio";

interface MarqueeRowProps {
  items: MarqueeItem[];
  direction?: MarqueeDirection;
  duration?: number;
  label: string;
}

function MarqueeBadge({ item }: { item: MarqueeItem }) {
  return (
    <li className="mx-2 inline-flex shrink-0 items-center gap-3 rounded-xl border border-border bg-surface-elevated/90 px-4 py-2.5">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas" aria-hidden="true">
        <BrandIcon
          icon={item.icon}
          label={item.label}
          mark={item.mark}
          size={18}
          colored
          decorative
        />
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-ink">
        {item.label}
      </span>
    </li>
  );
}

export function MarqueeRow({
  items,
  direction = "left",
  duration = 40,
  label,
}: MarqueeRowProps) {
  const loopItems = [...items, ...items];

  return (
    <div role="region" aria-label={label}>
      <ul className="hidden flex-wrap justify-center gap-2 px-4 py-2 motion-reduce:flex">
        {items.map((item) => (
          <MarqueeBadge key={item.id} item={item} />
        ))}
      </ul>

      <div className="group relative overflow-hidden motion-reduce:hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent sm:w-24"
          aria-hidden="true"
        />

        <ul
          className={cn(
            "flex w-max items-center py-2",
            direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
            "group-hover:[animation-play-state:paused]",
          )}
          style={{ animationDuration: `${duration}s` }}
          aria-hidden="true"
        >
          {loopItems.map((item, index) => (
            <MarqueeBadge key={`${item.id}-${index}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
