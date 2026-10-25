import { applyTheme, storeTheme, type Theme } from "@/lib/theme";

export interface ThemeTransitionOrigin {
  x: number;
  y: number;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function endRadius(x: number, y: number) {
  const maxX = Math.max(x, window.innerWidth - x);
  const maxY = Math.max(y, window.innerHeight - y);
  return Math.hypot(maxX, maxY);
}

function runCssCircleFallback(next: Theme, origin: ThemeTransitionOrigin) {
  const radius = endRadius(origin.x, origin.y);
  const overlay = document.createElement("div");
  const nextCanvas = next === "light" ? "#e6ebf2" : "#070b12";

  overlay.setAttribute("aria-hidden", "true");
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    zIndex: "9999",
    pointerEvents: "none",
    background: nextCanvas,
    clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
    transition: "clip-path 520ms cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "clip-path",
  });

  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.style.clipPath = `circle(${radius}px at ${origin.x}px ${origin.y}px)`;
  });

  const finish = () => {
    storeTheme(next);
    applyTheme(next);
    window.dispatchEvent(new Event("portfolio-theme"));
    overlay.remove();
  };

  overlay.addEventListener("transitionend", finish, { once: true });
  window.setTimeout(finish, 600);
}

export async function transitionTheme(
  next: Theme,
  origin?: ThemeTransitionOrigin,
) {
  const apply = () => {
    storeTheme(next);
    applyTheme(next);
    window.dispatchEvent(new Event("portfolio-theme"));
  };

  if (prefersReducedMotion() || !origin) {
    apply();
    return;
  }

  const doc = document as Document & {
    startViewTransition?: (update: () => void) => {
      ready: Promise<void>;
      finished: Promise<void>;
    };
  };

  if (typeof doc.startViewTransition !== "function") {
    runCssCircleFallback(next, origin);
    return;
  }

  const radius = endRadius(origin.x, origin.y);
  const goingDark = next === "dark";

  document.documentElement.classList.add("theme-transitioning");

  try {
    const transition = doc.startViewTransition(apply);
    await transition.ready;

    const clip = goingDark
      ? [
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          `circle(0px at ${origin.x}px ${origin.y}px)`,
        ]
      : [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
        ];

    document.documentElement.animate(
      { clipPath: clip },
      {
        duration: 520,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: goingDark
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      },
    );

    await transition.finished;
  } catch {
    apply();
  } finally {
    document.documentElement.classList.remove("theme-transitioning");
  }
}
