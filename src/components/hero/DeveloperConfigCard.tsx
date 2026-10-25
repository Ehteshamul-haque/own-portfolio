"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const developer = {
  name: "Ehteshamul Haque",
  role: "Full Stack Developer",
  experience: "3.5+ Years",
  stack: ["MERN", "Next.js", "Node.js"] as const,
  focus: "Scalable Web Applications",
  status: "Open to Opportunities",
} as const;

export function DeveloperConfigCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanTilt(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!canTilt || reduced || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const x = px - 0.5;
    const y = py - 0.5;

    wrapRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 7}deg)`;

    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
      glowRef.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgba(56,189,248,0.22), transparent 42%)`;
    }
  };

  const onLeave = () => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transform = "";
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={canTilt ? onMove : undefined}
      onMouseLeave={canTilt ? onLeave : undefined}
      className="mx-auto w-full max-w-md"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface text-left shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow] duration-200 hover:border-accent/35 dark:bg-surface-elevated dark:shadow-[0_8px_28px_color-mix(in_srgb,var(--accent)_12%,transparent)] dark:hover:shadow-[0_8px_40px_color-mix(in_srgb,var(--accent)_20%,transparent)]">
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
        />
        <div className="relative flex items-center gap-2 border-b border-border bg-surface-elevated/80 px-3 py-2 dark:bg-transparent">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="mx-auto font-mono text-[10px] text-ink-subtle sm:text-[11px]">
            developer.config.ts
          </span>
        </div>
        <pre className="relative overflow-x-auto overscroll-x-contain px-3 py-3 font-mono text-[11px] leading-5 antialiased sm:px-4 sm:text-[13px] sm:leading-6">
          <code className="[text-rendering:geometricPrecision]">
            <span style={{ color: "var(--code-keyword)" }}>interface</span>
            <span style={{ color: "var(--code-type)" }}> Developer </span>
            {"{\n  "}
            <span style={{ color: "var(--code-key)" }}>name</span>
            {": "}
            <span style={{ color: "var(--code-string)" }}>
              &quot;{developer.name}&quot;
            </span>
            {";\n  "}
            <span style={{ color: "var(--code-key)" }}>role</span>
            {": "}
            <span style={{ color: "var(--code-string)" }}>
              &quot;{developer.role}&quot;
            </span>
            {";\n  "}
            <span style={{ color: "var(--code-key)" }}>experience</span>
            {": "}
            <span style={{ color: "var(--code-string)" }}>
              &quot;{developer.experience}&quot;
            </span>
            {";\n  "}
            <span style={{ color: "var(--code-key)" }}>stack</span>
            {": ["}
            {developer.stack.map((item, i) => (
              <span key={item}>
                {i > 0 ? ", " : ""}
                <span style={{ color: "var(--code-string)" }}>
                  &quot;{item}&quot;
                </span>
              </span>
            ))}
            {"];\n  "}
            <span style={{ color: "var(--code-key)" }}>focus</span>
            {": "}
            <span style={{ color: "var(--code-string)" }}>
              &quot;{developer.focus}&quot;
            </span>
            {";\n  "}
            <span style={{ color: "var(--code-key)" }}>status</span>
            {": "}
            <span style={{ color: "var(--code-string)" }}>
              &quot;{developer.status}&quot;
            </span>
            {";\n}"}
          </code>
        </pre>
      </div>
    </div>
  );
}
