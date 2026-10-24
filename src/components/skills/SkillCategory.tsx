"use client";

import {
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { Badge } from "@/components/ui/Badge";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { SkillCategory as SkillCategoryData, SkillCategoryIcon } from "@/types/portfolio";

const categoryIcons: Record<SkillCategoryIcon, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  messaging: Layers,
  shopify: ShoppingBag,
  cloud: Cloud,
  ai: Sparkles,
};

interface SkillCategoryProps {
  category: SkillCategoryData;
  index: number;
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const reducedMotion = useReducedMotion();
  const Icon = categoryIcons[category.icon];

  const content = (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border bg-surface/70 p-5 sm:p-6",
        "transition-colors duration-200 hover:bg-surface-elevated/80",
        category.featured
          ? "border-accent/30 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.12)]"
          : "border-border hover:border-border-strong",
      )}
    >
      <header className="flex items-start justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
              category.featured
                ? "border-accent/35 bg-accent/10 text-accent"
                : "border-border bg-canvas text-ink-muted",
            )}
            aria-hidden="true"
          >
            <Icon size={16} strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              {category.title}
            </h3>
            {category.description ? (
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {category.description}
              </p>
            ) : null}
          </div>
        </div>
        {category.featured ? <Badge variant="accent">Core</Badge> : null}
      </header>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );

  if (reducedMotion) return content;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
    >
      {content}
    </motion.div>
  );
}
