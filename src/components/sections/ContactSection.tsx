"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Mail, Phone, Send } from "lucide-react";
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
  message: z.string().min(20, "Please write a message of at least 20 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

function isPlaceholderEmail(email: string) {
  return email.includes("example.com") || email.includes("placeholder");
}

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const emailConfigured = !isPlaceholderEmail(profile.email);
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

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setErrorMessage(null);

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("The contact endpoint returned an error.");
        }

        reset();
        setStatus("success");
        setErrorMessage(null);
        return;
      } catch {
        setStatus("error");
        setErrorMessage(
          "Unable to send through the configured endpoint. Please email me directly instead.",
        );
        return;
      }
    }

    if (!emailConfigured) {
      setStatus("error");
      setErrorMessage(
        "Contact email is not configured yet. Update src/data/profile.ts with your real email address.",
      );
      return;
    }

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      "",
      values.message,
    ].join("\n");

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    const anchor = document.createElement("a");
    anchor.href = mailto;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setStatus("idle");
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
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {emailConfigured ? (
              <LinkButton href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email Me
              </LinkButton>
            ) : (
              <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                Set your real email in <code>src/data/profile.ts</code> to enable
                direct email contact.
              </p>
            )}

            {profile.phone ? (
              <LinkButton href={`tel:${profile.phone.replace(/\s+/g, "")}`} variant="secondary">
                <Phone size={18} aria-hidden="true" />
                {profile.phone}
              </LinkButton>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
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
                Download CV
              </LinkButton>
            ) : (
              <p className="w-full text-sm text-ink-subtle">
                Add your PDF at{" "}
                <code className="text-accent">
                  public/resume/Ehteshamul_Haque_Resume.pdf
                </code>{" "}
                and set <code className="text-accent">resumeUrl</code> in profile
                data.
              </p>
            )}
          </div>

          <p className="pt-2 text-sm leading-relaxed text-ink-muted">
            Prefer email for recruiting conversations. Form submissions open your
            mail client unless{" "}
            <code className="text-accent">NEXT_PUBLIC_CONTACT_FORM_ENDPOINT</code>{" "}
            is configured.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-canvas/55 p-5 sm:p-6"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-ink">
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
              <label htmlFor="contact-email" className="text-sm font-medium text-ink">
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
            <label htmlFor="contact-subject" className="text-sm font-medium text-ink">
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
            <label htmlFor="contact-message" className="text-sm font-medium text-ink">
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

          {status === "success" ? (
            <p className="mt-4 text-sm text-emerald-300" role="status">
              Message sent successfully.
            </p>
          ) : null}

          {errorMessage ? (
            <p className="mt-4 text-sm text-amber-100" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <Button
            type="submit"
            className="mt-5"
            disabled={status === "submitting"}
          >
            <Send size={16} aria-hidden="true" />
            {status === "submitting" ? "Preparing…" : "Send Message"}
          </Button>
        </form>
      </div>
    </SectionContainer>
  );
}
