"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { PROJECT_FILTERS } from "@/lib/constants";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/portfolio";

export function ProjectsSection() {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");

  const filtered =
    projectFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(projectFilter),
        );

  return (
    <SectionContainer
      id="projects"
      ariaLabelledBy="projects-heading"
      className="bg-surface/40"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="Featured engineering work"
        description="Real product and systems work across full stack delivery, backend architecture, Shopify, and AI-assisted workflows."
      />

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {PROJECT_FILTERS.map((filter) => {
          const selected = projectFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                selected
                  ? "border-accent/40 bg-accent/15 text-accent"
                  : "border-border bg-canvas/50 text-ink-muted hover:border-border-strong hover:text-ink",
              )}
              onClick={() => setProjectFilter(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-canvas/50 p-8 text-sm text-ink-muted">
          No projects in this category yet. Try another filter.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
