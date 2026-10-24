"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Mail, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button, LinkButton } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import {
  externalRel,
  externalTarget,
  isConfiguredUrl,
} from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a short subject."),
  message: z
    .string()
    .min(20, "Please write a message of at least 20 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ready">("idle");

  const github = profile.socialLinks.find((link) => link.platform === "github");
  const linkedin = profile.socialLinks.find(
    (link) => link.platform === "linkedin",
  );
  const hasResume = isConfiguredUrl(profile.resumeUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setStatus("submitting");

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Portfolio: ${profile.portfolioUrl}`,
      "",
      values.message,
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_self");
    reset();
    setStatus("ready");
  });

  return (
    <SectionContainer
      id="contact"
      ariaLabelledBy="contact-heading"
      className="bg-surface/40"
    >
      <SectionHeading
        id="contact-heading"
        eyebrow="Contact"
        title="Have a Role or Project in Mind?"
        description="I'm open to discussing Full Stack Developer opportunities, interesting engineering challenges, and collaborations."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-canvas/50 p-5">
            <p className="text-sm text-ink-muted">Reach me directly at</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-flex items-center gap-2 break-all text-base font-medium text-accent transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
              Prefer email for recruiting conversations. Use the form to draft a
              message, or email me directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email Me
            </LinkButton>

            {linkedin && isConfiguredUrl(linkedin.href) ? (
              <LinkButton
                href={linkedin.href}
                variant="secondary"
                target={externalTarget(linkedin.href)}
                rel={externalRel(linkedin.href)}
              >
                <LinkedinIcon size={18} aria-hidden="true" />
                LinkedIn
              </LinkButton>
            ) : null}

            {github && isConfiguredUrl(github.href) ? (
              <LinkButton
                href={github.href}
                variant="secondary"
                target={externalTarget(github.href)}
                rel={externalRel(github.href)}
              >
                <GithubIcon size={18} aria-hidden="true" />
                GitHub
              </LinkButton>
            ) : null}

            {hasResume ? (
              <LinkButton
                href={profile.resumeUrl!}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} aria-hidden="true" />
                View CV
              </LinkButton>
            ) : null}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-canvas/55 p-5 sm:p-6"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-medium text-ink"
              >
                Name
              </label>
              <input
                id="contact-name"
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name ? (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="text-sm font-medium text-ink"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="you@company.com"
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-subject"
              className="text-sm font-medium text-ink"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent"
              placeholder="Role, project, or introduction"
              {...register("subject")}
            />
            {errors.subject ? (
              <p className="mt-1.5 text-xs text-red-300" role="alert">
                {errors.subject.message}
              </p>
            ) : null}
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="text-sm font-medium text-ink"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              className="mt-2 w-full resize-y rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-accent focus-visible:ring-2 focus-visible:ring-accent"
              placeholder="Share a bit about the role, team, or problem space."
              {...register("message")}
            />
            {errors.message ? (
              <p className="mt-1.5 text-xs text-red-300" role="alert">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          {status === "ready" ? (
            <p className="mt-4 text-sm text-emerald-300" role="status">
              Opening your email app to send the message to {profile.email}.
            </p>
          ) : null}

          <Button
            type="submit"
            className="mt-5"
            disabled={status === "submitting"}
          >
            <Send size={16} aria-hidden="true" />
            {status === "submitting" ? "Opening email…" : "Send Message"}
          </Button>
        </form>
      </div>
    </SectionContainer>
  );
}
