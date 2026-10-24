# Ehteshamul Haque — Full Stack Developer Portfolio

Premium single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Zustand, and a lazy-loaded React Three Fiber hero scene.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Zustand (project filter state)
- Motion for React
- Three.js / React Three Fiber / Drei
- Lucide React
- React Hook Form + Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Update portfolio content

All public content lives in typed data files under `src/data/`:

| File | Purpose |
| --- | --- |
| `profile.ts` | Name, headline, email, social links, resume path, about copy |
| `skills.ts` | Skill categories and priorities |
| `projects.ts` | Featured projects, outcomes, technologies |
| `experience.ts` | Career timeline (set `isPlaceholder: false` to publish) |
| `education.ts` | Education and certifications |
| `services.ts` | Services offered |
| `impact.ts` | Impact highlights |
| `achievements.ts` | Engineering achievements |
| `clients.ts` | Clients or collaboration fallback |

Placeholder employer/education/client entries stay hidden until you mark them as published.

Metrics marked `verified: false` render with a “pending validation” label so unverified claims are not presented as facts.

## Configure contact details

1. Edit `src/data/profile.ts`
2. Replace the email address (anything with `example.com` is treated as unconfigured)
3. Set real GitHub and LinkedIn URLs
4. Optional: copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Formspree or your API)

Without a form endpoint, the contact form opens a `mailto:` draft after client-side validation.

## Add your resume

1. Put the PDF at `public/resume/Ehteshamul_Haque_Resume.pdf`
2. Set `resumeUrl: "/resume/Ehteshamul_Haque_Resume.pdf"` in `src/data/profile.ts`

## Project structure

```text
src/
  app/                 # layout, page, SEO, icons
  components/
    layout/            # Navbar, Footer, headings, scroll progress
    sections/          # page sections
    three/             # lazy-loaded 3D hero
    ui/                # shared UI primitives
  data/                # editable portfolio content
  store/               # Zustand store
  types/               # shared TypeScript models
```

## Notes

- The 3D hero is dynamically imported, respects `prefers-reduced-motion`, and falls back to a CSS visual on low-power devices or missing WebGL.
- Experience, education, and client sections intentionally hide unpublished placeholders.
- Validate pending impact metrics before treating them as interview-ready claims.
# own-portfolio
# own-portfolio
# own-portfolio
