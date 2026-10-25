"use client";

import { useRef, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";
  const busyRef = useRef(false);

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = event.clientX || (rect ? rect.left + rect.width / 2 : window.innerWidth / 2);
    const y = event.clientY || (rect ? rect.top + rect.height / 2 : 0);

    try {
      await toggleTheme({ x, y });
    } finally {
      // Small buffer so rapid double-clicks don't stack transitions
      window.setTimeout(() => {
        busyRef.current = false;
      }, 80);
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-elevated/80 text-ink-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
    >
      <span className="relative grid size-full place-items-center">
        <Sun
          size={18}
          aria-hidden="true"
          className={cn(
            "absolute transition-all duration-300",
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-50 rotate-90 opacity-0",
          )}
        />
        <Moon
          size={18}
          aria-hidden="true"
          className={cn(
            "absolute transition-all duration-300",
            isDark
              ? "scale-50 -rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100",
          )}
        />
      </span>
    </button>
  );
}
