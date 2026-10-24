import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "muted" | "warning";
  className?: string;
}

const variants = {
  default: "border-border bg-surface-elevated text-ink-muted",
  accent: "border-accent/30 bg-accent/10 text-accent",
  muted: "border-transparent bg-surface text-ink-subtle",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-200",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
