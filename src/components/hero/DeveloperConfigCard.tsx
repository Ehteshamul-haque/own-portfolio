"use client";

import { useRef, type MouseEvent } from "react";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function DeveloperConfigCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const x = px - 0.5;
    const y = py - 0.5;

    wrapRef.current.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;

    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
      glowRef.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, rgba(56,189,248,0.22), transparent 42%)`;
    }
  };

  const onLeave = () => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="mx-auto w-full max-w-md origin-center transition-transform duration-150 ease-out will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-[#0b1220] shadow-[0_0_28px_rgba(56,189,248,0.1)] transition-shadow duration-200 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]">
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
        />
        <div className="relative flex items-center gap-2 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="mx-auto font-mono text-[11px] text-ink-subtle">
            developer.config.ts
          </span>
        </div>
        <pre className="relative overflow-x-auto px-4 py-3 font-mono text-[12px] leading-5 sm:text-[13px] sm:leading-6">
          <code>
            <span className="text-ink-subtle">{"// @ts-check"}</span>
            {"\n"}
            <span className="text-sky-300">interface</span>
            <span className="text-amber-200"> Developer </span>
            {"{\n  "}
            <span className="text-sky-200">name</span>
            {": "}
            <span className="text-emerald-300">&quot;{profile.name}&quot;</span>
            {";\n  "}
            <span className="text-sky-200">stack</span>
            {": "}
            <span className="text-emerald-300">&quot;MERN&quot;</span>
            {";\n  "}
            <span className="text-sky-200">focus</span>
            {": "}
            <span className="text-emerald-300">&quot;Scalability&quot;</span>
            {";\n  "}
            <span className="text-sky-200">status</span>
            {": "}
            <span className="text-emerald-300">&quot;Open to work&quot;</span>
            {";\n  "}
            <span className="text-sky-200">level</span>
            {": "}
            <span className="text-violet-300">Senior</span>
            {";\n}"}
          </code>
        </pre>
      </div>
    </div>
  );
}
