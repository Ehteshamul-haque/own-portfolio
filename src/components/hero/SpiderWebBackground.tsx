"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Node = { x: number; y: number; vx: number; vy: number };

export function SpiderWebBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, active: false };
    const ripples: { x: number; y: number; r: number; life: number }[] = [];
    let nodes: Node[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(36, Math.floor((w * h) / 14000));
      nodes = Array.from({ length: Math.min(count, 90) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = Math.min(160, w * 0.2);
      const mouseDist = linkDist * 1.6;

      for (const n of nodes) {
        if (!reduced) {
          // Mild attraction toward cursor
          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy) || 1;
            if (d < mouseDist) {
              const force = (1 - d / mouseDist) * 0.045;
              n.vx += (dx / d) * force;
              n.vy += (dy / d) * force;
            }
          }

          n.vx *= 0.99;
          n.vy *= 0.99;
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }

        const nearMouse =
          mouse.active && Math.hypot(n.x - mouse.x, n.y - mouse.y) < mouseDist;
        ctx.beginPath();
        ctx.arc(n.x, n.y, nearMouse ? 2.4 : 1.7, 0, Math.PI * 2);
        ctx.fillStyle = nearMouse
          ? "rgba(125, 211, 252, 0.95)"
          : "rgba(125, 211, 252, 0.5)";
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > linkDist) continue;
          const alpha = (1 - dist / linkDist) * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        if (!mouse.active) continue;
        const dist = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y);
        if (dist > mouseDist) continue;
        const alpha = (1 - dist / mouseDist) * 0.7;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(125, 211, 252, ${alpha})`;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }

      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(186, 230, 253, 0.9)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
        ctx.stroke();
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.r += 3.2;
        ripple.life -= 0.03;
        if (ripple.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(125, 211, 252, ${ripple.life * 0.45})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Push nearby nodes outward on ripple
        if (!reduced) {
          for (const n of nodes) {
            const d = Math.hypot(n.x - ripple.x, n.y - ripple.y) || 1;
            if (Math.abs(d - ripple.r) < 18) {
              n.vx += ((n.x - ripple.x) / d) * 0.08;
              n.vy += ((n.y - ripple.y) / d) * 0.08;
            }
          }
        }
      }

      if (!reduced || ripples.length || mouse.active) {
        raf = requestAnimationFrame(draw);
      }
    };

    const ensureLoop = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
      ensureLoop();
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        r: 4,
        life: 1,
      });
      ensureLoop();
    };

    resize();
    draw();
    const parent = canvas.parentElement;
    window.addEventListener("resize", resize);
    parent?.addEventListener("pointermove", onMove);
    parent?.addEventListener("pointerleave", onLeave);
    parent?.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
      parent?.removeEventListener("pointerdown", onDown);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
