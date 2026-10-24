"use client";

import { create } from "zustand";
import type { ProjectCategory } from "@/types/portfolio";

interface PortfolioState {
  projectFilter: ProjectCategory;
  setProjectFilter: (filter: ProjectCategory) => void;
  resetProjectFilter: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  projectFilter: "all",
  setProjectFilter: (filter) => set({ projectFilter: filter }),
  resetProjectFilter: () => set({ projectFilter: "all" }),
}));
