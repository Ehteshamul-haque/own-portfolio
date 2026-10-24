"use client";

import { useEffect } from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastTone = "success" | "error" | "info";

export interface ToastState {
  open: boolean;
  tone: ToastTone;
  title: string;
  message?: string;
}

interface ToastProps {
  toast: ToastState;
  onClose: () => void;
  durationMs?: number;
}

export function Toast({ toast, onClose, durationMs = 4200 }: ToastProps) {
  useEffect(() => {
    if (!toast.open) return;
    const timer = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(timer);
  }, [toast.open, toast.title, toast.message, durationMs, onClose]);

  if (!toast.open) return null;

  const Icon = toast.tone === "error" ? XCircle : CheckCircle2;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-[80] w-[min(92vw,360px)]"
    >
      <div
        className={cn(
          "flex items-start gap-3 rounded-xl border px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md",
          toast.tone === "error"
            ? "border-red-400/30 bg-red-950/90 text-red-100"
            : toast.tone === "success"
              ? "border-emerald-400/30 bg-emerald-950/90 text-emerald-100"
              : "border-accent/30 bg-slate-950/90 text-ink",
        )}
      >
        <Icon
          size={18}
          className={cn(
            "mt-0.5 shrink-0",
            toast.tone === "error"
              ? "text-red-300"
              : toast.tone === "success"
                ? "text-emerald-300"
                : "text-accent",
          )}
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{toast.title}</p>
          {toast.message ? (
            <p className="mt-1 text-xs leading-relaxed opacity-90">
              {toast.message}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Dismiss notification"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
