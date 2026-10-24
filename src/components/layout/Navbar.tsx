"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active === item.id
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
                {active === item.id ? (
                  <span
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    aria-hidden="true"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton href="#contact" size="sm" variant="primary">
            Let&apos;s Talk
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id={menuId}
        className={cn(
          "border-t border-border bg-canvas/95 backdrop-blur-xl md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={close}
                className={cn(
                  "block rounded-lg px-3 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active === item.id
                    ? "bg-surface-elevated text-ink"
                    : "text-ink-muted hover:bg-surface-hover hover:text-ink",
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <LinkButton href="#contact" className="w-full" onClick={close}>
              Contact Me
            </LinkButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
