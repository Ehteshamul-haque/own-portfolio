"use client";

import { useId, useState } from "react";
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { cn, externalRel, externalTarget, isConfiguredUrl } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/35 hover:bg-surface-elevated",
        "focus-within:border-accent/40",
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {project.tagline}
          </p>
        </div>
        {project.featured ? <Badge variant="accent">Featured</Badge> : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-subtle">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies.length > 6 ? (
          <Badge variant="muted">+{project.technologies.length - 6}</Badge>
        ) : null}
      </div>

      {project.outcomes && project.outcomes.length > 0 ? (
        <ul className="mt-5 space-y-2">
          {project.outcomes.map((outcome) => (
            <li
              key={outcome.label}
              className="flex items-start gap-2 text-sm text-ink-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                {outcome.label}
                {!outcome.verified ? (
                  <span className="ml-2 text-xs text-amber-200/90">
                    (pending validation)
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((value) => !value)}
        >
          View Details
          <ChevronDown
            size={16}
            className={cn("transition-transform", expanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        {isConfiguredUrl(project.githubUrl) ? (
          <a
            href={project.githubUrl}
            target={externalTarget(project.githubUrl)}
            rel={externalRel(project.githubUrl)}
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <GithubIcon size={16} aria-hidden="true" />
            Code
          </a>
        ) : null}

        {isConfiguredUrl(project.liveUrl) ? (
          <a
            href={project.liveUrl}
            target={externalTarget(project.liveUrl)}
            rel={externalRel(project.liveUrl)}
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Live
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {expanded ? (
        <div
          id={detailsId}
          className="mt-6 space-y-5 border-t border-border pt-5 text-sm leading-relaxed text-ink-muted"
        >
          <div>
            <h4 className="font-medium text-ink">Problem</h4>
            <p className="mt-1.5">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-medium text-ink">Role</h4>
            <p className="mt-1.5">{project.role}</p>
          </div>
          <div>
            <h4 className="font-medium text-ink">Contributions</h4>
            <ul className="mt-2 space-y-1.5">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-ink">Technical decisions</h4>
            <ul className="mt-2 space-y-1.5">
              {project.technicalDecisions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-ink">Key features</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Badge variant="muted">{feature}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
}
