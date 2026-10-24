import { BrandIcon } from "@/components/ui/BrandIcon";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/portfolio";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <span
        className={cn(
          "group/badge inline-flex max-w-full items-center gap-2 rounded-lg border border-border bg-surface-elevated/80 px-2.5 py-1.5 text-sm text-ink-muted transition-colors duration-200",
          "hover:border-border-strong hover:bg-surface-hover hover:text-ink",
          skill.priority === "primary" && "border-border-strong/80",
        )}
        title={skill.name}
      >
        {skill.icon ? (
          <BrandIcon
            icon={skill.icon}
            label={skill.name}
            size={14}
            colored
            className="opacity-90 transition-opacity duration-200 group-hover/badge:opacity-100"
          />
        ) : null}
        <span className="truncate font-medium tracking-wide">{skill.name}</span>
      </span>
    </li>
  );
}
