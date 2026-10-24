"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent/80"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
