"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  applyTheme,
  storeTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";
import {
  transitionTheme,
  type ThemeTransitionOrigin,
} from "@/lib/theme-transition";

const THEME_EVENT = "portfolio-theme";

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback(
    async (next: Theme, origin?: ThemeTransitionOrigin) => {
      if (next === theme) return;
      await transitionTheme(next, origin);
    },
    [theme],
  );

  const toggleTheme = useCallback(
    async (origin?: ThemeTransitionOrigin) => {
      await setTheme(theme === "dark" ? "light" : "dark", origin);
    },
    [setTheme, theme],
  );

  /** Instant theme apply without circle animation (boot / storage sync). */
  const setThemeInstant = useCallback((next: Theme) => {
    storeTheme(next);
    applyTheme(next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  return { theme, setTheme, toggleTheme, setThemeInstant };
}
