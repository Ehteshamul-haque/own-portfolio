import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isConfiguredUrl(url?: string | null): url is string {
  if (!url) return false;
  if (url.includes("example.com") || url.includes("placeholder")) return false;
  return url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("/");
}

export function externalRel(href: string): string | undefined {
  if (href.startsWith("http")) return "noopener noreferrer";
  return undefined;
}

export function externalTarget(href: string): "_blank" | undefined {
  if (href.startsWith("http")) return "_blank";
  return undefined;
}
