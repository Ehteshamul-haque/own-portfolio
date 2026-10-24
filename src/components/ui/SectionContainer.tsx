import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function SectionContainer({
  id,
  children,
  className,
  ariaLabelledBy,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
