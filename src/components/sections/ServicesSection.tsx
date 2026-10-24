import {
  Cloud,
  Code2,
  Gauge,
  Server,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { ServiceItem } from "@/types/portfolio";

const icons: Record<ServiceItem["icon"], typeof Code2> = {
  code: Code2,
  server: Server,
  shopping: ShoppingBag,
  gauge: Gauge,
  cloud: Cloud,
  wrench: Wrench,
};

export function ServicesSection() {
  return (
    <SectionContainer
      id="services"
      ariaLabelledBy="services-heading"
      className="bg-surface/40"
    >
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="How I can contribute"
        description="Capabilities aligned to Full Stack, MERN, Next.js, and Shopify opportunities — framed as engineering value, not agency packaging."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <article
              key={service.id}
              className="rounded-2xl border border-border bg-canvas/55 p-5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <p className="mt-4 text-sm text-ink-subtle">
                <span className="font-medium text-ink">Value: </span>
                {service.value}
              </p>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
