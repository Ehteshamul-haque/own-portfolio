"use client";

import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import { InteractiveObject } from "@/components/three/InteractiveObject";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function StaticFallback() {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_70%_75%,rgba(14,165,233,0.12),transparent_40%),linear-gradient(160deg,#0b1220,#071018_60%,#05080f)]"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />
      <div className="absolute left-[28%] top-[32%] h-2.5 w-2.5 rounded-full bg-accent/80" />
      <div className="absolute right-[30%] top-[40%] h-2 w-2 rounded-full bg-cyan-300/70" />
      <div className="absolute bottom-[28%] left-[42%] h-2 w-2 rounded-full bg-sky-400/70" />
    </div>
  );
}

function getWebglSupport() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

function getLowPowerDevice() {
  if (typeof window === "undefined") return true;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  return cores <= 4 || memory <= 4 || window.innerWidth < 768;
}

function subscribeNoop() {
  return () => undefined;
}

export function HeroScene() {
  const reducedMotion = useReducedMotion();
  const webglOk = useSyncExternalStore(
    subscribeNoop,
    getWebglSupport,
    () => false,
  );
  const lowPower = useSyncExternalStore(
    subscribeNoop,
    getLowPowerDevice,
    () => true,
  );

  if (!webglOk || reducedMotion || lowPower) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-surface">
      <Suspense fallback={<StaticFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          <color attach="background" args={["#070b12"]} />
          <ambientLight intensity={0.45} />
          <directionalLight
            position={[4, 3, 2]}
            intensity={1.1}
            color="#e0f2fe"
          />
          <pointLight position={[-3, -2, -2]} intensity={0.55} color="#38bdf8" />
          <InteractiveObject reducedMotion={reducedMotion} />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}
