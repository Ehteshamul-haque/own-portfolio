import { platformItems, techStackItems } from "@/data/marquee";
import { MarqueeRow } from "@/components/ui/MarqueeRow";
import { PlatformStrip } from "@/components/ui/PlatformStrip";

export function TechBannerSection() {
  return (
    <section
      id="stack-banner"
      aria-labelledby="stack-banner-heading"
      className="relative border-y border-border bg-surface/50 py-8 sm:py-10"
    >
      <div className="mx-auto mb-6 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="stack-banner-heading"
          className="text-xs font-medium tracking-[0.18em] text-accent uppercase"
        >
          Platforms & stack
        </h2>
      </div>

      <div className="space-y-6">
        <PlatformStrip items={platformItems} />
        <MarqueeRow
          items={techStackItems}
          direction="right"
          duration={48}
          label="Technologies and tools"
        />
      </div>
    </section>
  );
}
