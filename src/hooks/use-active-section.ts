"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? "home");
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return active;
}
