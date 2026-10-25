"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SHOW_AFTER_PX = 420;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed right-4 bottom-5 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6 sm:bottom-6",
        "hover:border-accent/50 hover:text-accent",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
