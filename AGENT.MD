# AGENTS.md — IQ Integrations

> Project instructions for Codex.
> Read this file before doing any work in this repository.
> Also read `DESIGN.md` before creating or modifying UI, layout, animation, imagery, copy presentation, or components.

---

## 1. Project Summary

Build a custom-coded, premium AI automation company website for **IQ Integrations**.

IQ Integrations sells done-for-you AI systems and automations for service businesses. The website must communicate that this is a serious, high-level technology company through the design itself. The owner expects a “wow” website that competes against top AI builders and design tools.

The website must not look like AI-generated template work. It must avoid generic SaaS minimalism, repeated rounded cards, weak layouts, and decorative AI clichés.

The website will be built in phases. After each phase, stop and wait for explicit greenlight from the owner before continuing.

---

## 2. Repository Context

GitHub repository already exists:

```txt
carlosreynag06/iq-integrations
```

Local folder already exists:

```txt
C:\Users\carlo\OneDrive\Desktop\iq-integrations>
```

Current state:
- The GitHub repo is empty.
- The local folder is empty.
- The repo is not initialized locally.
- The local folder is not connected to GitHub yet.
- Codex may perform the initial repo setup.

---

## 3. First Required Task: Initialize Repo and Scaffold

Before building UI pages, initialize the project correctly.

### Required first phase

1. Verify current working directory is the local folder:
   ```txt
   C:\Users\carlo\OneDrive\Desktop\iq-integrations
   ```

2. Initialize git if not already initialized:
   ```bash
   git init
   ```

3. Connect remote:
   ```bash
   git remote add origin https://github.com/carlosreynag06/iq-integrations.git
   ```

   If remote already exists, verify it points to the correct repo:
   ```bash
   git remote -v
   ```

4. Scaffold a modern Next.js project.

Preferred stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- `src/` directory optional, but be consistent
- App Router required
- Use npm unless the owner specifies another package manager

Recommended create command, adapted as needed:
```bash
npx create-next-app@15.5.6 . --typescript --tailwind --eslint --app --use-npm
```

If that exact version command fails, use the closest stable Next.js 15 setup and document what changed.

5. Install approved design dependencies as needed:
```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

Optional only if used intentionally:
```bash
npm install gsap @gsap/react lenis three @react-three/fiber @react-three/drei
```

6. Create project quality files if missing:
- `DESIGN.md`
- `AGENTS.md`
- `.env.example` if needed later
- sensible README update later

7. Run checks:
```bash
npm run lint
npm run build
```

If build/lint fails, fix before stopping unless the failure is caused by something outside the current phase.

8. Commit the scaffold:
```bash
git add .
git commit -m "Initialize IQ Integrations website scaffold"
```

9. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

If authentication prevents pushing, stop and clearly tell the owner the exact command to run manually. Do not pretend the push succeeded.

### Stop condition

After this setup/scaffold phase, stop and wait for greenlight before building the homepage.

---

## 4. Development Philosophy

You are acting as an elite front-end engineer and award-winning UI designer.

The priority is not just “working code.” The priority is:
1. Premium visual design
2. Strong technical architecture
3. Excellent mobile responsiveness
4. Smooth modern animation
5. Clean maintainable components
6. Strategic conversion-focused copy
7. Fast performance
8. Accessibility

The owner dislikes:
- AI slop
- Minimalist designs
- Generic templates
- Basic rounded cards
- Repeated flat card grids
- Weak visual hierarchy
- Cheap-looking SaaS aesthetics

The owner wants:
- Stunning, impressive, polished UI
- High-tech company feel
- Custom-coded design
- Modern animation
- Strong contrast
- Rich layouts
- Sophisticated imagery
- Premium aesthetics
- Clear business outcomes

---

## 5. Mandatory Design Authority

`DESIGN.md` is the visual design authority.

Before creating UI, read and follow:
- Brand positioning
- Color system
- Typography
- Motion standards
- Shape language
- Image concepts
- Component standards
- Homepage structure
- Page strategy
- Quality bar

If there is any conflict:
1. User’s direct latest instruction wins.
2. `AGENTS.md` workflow/project instructions come next.
3. `DESIGN.md` visual/design instructions come next.
4. Existing code patterns come next.

---

## 6. Required Website Stack

Use this unless the owner explicitly changes it:

- Next.js 16.2.6
- App Router
- TypeScript
- Tailwind CSS
- React Server Components by default
- Client Components only for interactivity/animation
- `next/font` for fonts
- `next/image` where images are used
- SVG/CSS for technical visuals where possible
- Framer Motion for standard animation
- GSAP/Three only for high-value visuals

### Suggested structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  services/
    page.tsx
  process/
    page.tsx
  about/
    page.tsx
  contact/
    page.tsx
  privacy/
    page.tsx
  terms/
    page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileNav.tsx
  sections/
    HeroSection.tsx
    ProblemSection.tsx
    CapabilitiesSection.tsx
    PhilosophySection.tsx
    ProcessSection.tsx
    TestimonialsSection.tsx
    FAQSection.tsx
    FinalCTASection.tsx
  ui/
    Button.tsx
    TechnicalPanel.tsx
    SectionHeader.tsx
    Metric.tsx
    ChatPreview.tsx
  visuals/
    RevenueCommandCore.tsx
    SignalPipeline.tsx
    DocumentScannerVisual.tsx
    DatabaseReactivationVisual.tsx

lib/
  utils.ts
  site-data.ts
  animations.ts

public/
  images/
  icons/
```

Use a different structure only if it is clearly better and explain why.

---

## 7. Phase-Based Workflow

This project must be built by phases. Do not continue into the next phase without explicit approval from the owner.

### Phase 0 — Repo + Scaffold

- Initialize local git
- Connect GitHub remote
- Scaffold Next.js app
- Add base dependencies
- Add `AGENTS.md` and `DESIGN.md`
- Run build/lint
- Commit/push if possible
- Stop

### Phase 1 — Header + Homepage + Footer

Build:
- Global layout
- Header
- Mobile nav
- Footer
- Homepage with all required strategic sections:
  1. Hero
  2. Problem Identification
  3. Services/Capabilities
  4. Why Us/Philosophy
  5. Process/Methodology
  6. Testimonials/Validation
  7. FAQ/Knowledge Base
  8. Final CTA
  9. Chatbot UI preview

Requirements:
- Must be visually stunning.
- Must implement responsive design.
- Must implement premium animations.
- Must follow all homepage copy provided in `DESIGN.md`.
- Run lint/build.
- Commit changes.
- Stop and wait.

Suggested commit:
```bash
git commit -m "Build premium homepage experience"
```

### Phase 2 — Services / Solutions Page

Build a main services or solutions page.

Recommended route:
```txt
/app/services/page.tsx
```

Purpose:
- Explain the automation categories in more depth.
- Show how IQ Integrations diagnoses bottlenecks and builds systems.
- Include services from both homepage copy and uploaded strategy:
  - Missed-Call Text-Back & Revenue Recovery
  - 24/7 AI Voice Receptionist
  - Speed-to-Lead Instant Follow-Up
  - AI Review & Reputation Management
  - No-Show Reduction & Schedule Optimization
  - AI Customer Support & FAQ Agent
  - Document Processing
  - Follow-Up and Nurture Sequences
  - Database Reactivation
  - Internal Reporting and Status Notifications

Design:
- Do not make a boring services grid.
- Use system architecture visuals, flows, and “before/after” operational states.
- Create page-specific copy in the same tone as the homepage.

Run checks, commit, stop.

### Phase 3 — Individual Service Detail Pages

Build detail pages only after owner approval.

Recommended routes:
```txt
/app/services/missed-call-text-back/page.tsx
/app/services/ai-voice-receptionist/page.tsx
/app/services/speed-to-lead/page.tsx
/app/services/document-processing/page.tsx
/app/services/follow-up-nurture/page.tsx
/app/services/database-reactivation/page.tsx
/app/services/reporting-notifications/page.tsx
```

Each page should include:
- Hero
- Problem
- Cost of inaction
- System flow
- What gets automated
- Expected outcomes
- FAQ
- CTA

Run checks, commit, stop.

### Phase 4 — Process Page

Route:
```txt
/app/process/page.tsx
```

Explain:
1. Diagnose Analysis
2. Automate Deploy
3. Optimize Scale

Make it feel like an operating methodology, not a generic process page.

Run checks, commit, stop.

### Phase 5 — About + Contact

Routes:
```txt
/app/about/page.tsx
/app/contact/page.tsx
```

About page:
- Position IQ Integrations as outcome-focused, ROI-first, and done-for-you.
- Avoid fake large-company claims unless provided by owner.

Contact page:
- Build an ROI audit/intake form UI.
- No backend unless explicitly requested.
- Do not claim submission works unless implemented.
- Use a safe placeholder or client-side disabled/demo state until backend is approved.

Run checks, commit, stop.

### Phase 6 — Legal Pages + SEO + Final Polish

Routes:
```txt
/app/privacy/page.tsx
/app/terms/page.tsx
```

Also:
- Metadata
- OpenGraph
- Sitemap if appropriate
- Robots
- Accessibility pass
- Performance pass
- Animation polish
- Mobile polish
- Final build
- Commit and stop

---

## 8. Content Source of Truth

Use the owner-provided homepage copy and services strategy.

### Homepage required copy

Hero:
- Eyebrow: `High-Performance Automation`
- Main headline: `Stop Losing Customers To Silence.`
- Subheadline: `We build AI systems that answer every call, capture every lead, and book every appointment.`
- CTA: `Book Your ROI Audit`
- Metrics:
  - `240x` Faster Response
  - `340%` Avg 90-Day ROI

Problem:
- Eyebrow: `// Problem Identification`
- Headline: `You are bleeding capital.`
- Subheadline: `Every minute an inquiry sits in voicemail, your ad spend is vaporized. Here is the math.`
- Stats:
  - `62%` of inbound calls go unanswered during local business hours
  - `85%` of callers routed to voicemail will immediately call a competitor
  - `$24k` Average annual revenue lost from just 2 missed calls per day
  - `400%` Drop in conversion probability if a lead isn’t contacted within 5 minutes

Capabilities:
- `Systems That Pay For Themselves.`
- Include six homepage capabilities from `DESIGN.md`.

Philosophy:
- `We Don't Sell Software. We Sell Outcomes.`
- ROI-First Architecture
- Zero-Friction, Done-For-You
- Built for Service Businesses

Methodology:
- `Revenue Mechanics`
- Diagnose Analysis
- Automate Deploy
- Optimize Scale

FAQ:
- Use provided FAQ from `DESIGN.md`.

Footer:
- Tagline: `We sell outcomes, not software.`
- Operations: Chicago, IL
- Email: `hello@iqintegrations.com`
- Phone: `(800) 555-0100`

### Additional services strategy

Also incorporate:
- Speed to Lead
- Document Processing
- Follow-Up and Nurture Sequences
- Database Reactivation
- Internal Reporting and Status Notifications

---

## 9. Copywriting Rules

When writing copy for pages not fully provided by the owner:
- Use the same tone as the provided homepage copy.
- Be direct, premium, outcome-focused, and specific.
- Sell outcomes, not software.
- Explain business problems in plain language.
- Tie every service to recovered revenue, saved time, fewer errors, or faster response.
- Avoid generic AI hype.
- Avoid unsupported guarantees.
- Do not invent client names, case studies, certifications, awards, or statistics unless the owner provided them.
- If using example numbers from provided copy, keep them tied to the relevant section.
- For testimonials, only use provided testimonial examples until real testimonials are supplied.

Forbidden phrases unless heavily contextualized:
- “Unlock the power of AI”
- “Revolutionize your business”
- “Seamless solutions”
- “Cutting-edge technology”
- “Harness AI”
- “Transform your workflow” as filler

---

## 10. UI Implementation Rules

### General

- React Server Components by default.
- Use Client Components only for animation/interactivity.
- Keep components small and purposeful.
- Extract reusable UI primitives.
- Use semantic HTML.
- Use accessible buttons, links, forms, and accordions.

### Styling

- Tailwind CSS required.
- Global CSS variables for design tokens.
- Use `clsx` / `tailwind-merge` utility helper.
- Do not hardcode the same values repeatedly when tokens/utilities make sense.
- Keep design consistent with `DESIGN.md`.

### Cards and Panels

The owner does not like rounded cards.

Use:
- `rounded-none`
- `rounded-[4px]`
- `rounded-[6px]`
- clipped corners
- border overlays
- pseudo-element corner markers

Avoid:
- `rounded-xl`
- `rounded-2xl`
- `rounded-3xl`
- pill-like panels
- plain white cards

Exception:
Small badges or buttons may use modest rounding only when it improves usability.

### Images and Visuals

- Use custom visual systems, SVG/CSS, generated imagery, or 3D only where it improves the experience.
- Do not rely on generic stock photos.
- Do not add random AI robot imagery.
- Do not put important readable text inside images.
- Optimize assets.

### Chatbot UI

Build UI only for now.
- Do not connect backend unless explicitly requested.
- Do not claim the bot is live if it is not.
- It can simulate a preview conversation.
- It should look like a high-tech assistant module.

---

## 11. Animation Rules

Use animations to communicate intelligence and system flow.

Required homepage animation ideas:
- Hero data/signal motion
- Section reveal animations
- Capability panel hover states
- Process pipeline progression
- FAQ accordion animation
- Chatbot open/close animation

Accessibility:
- Respect `prefers-reduced-motion`.
- Keep animations smooth and not distracting.
- Avoid heavy motion on mobile if it hurts performance.

Performance:
- Lazy-load heavy animated components.
- Do not ship unnecessary heavy dependencies.
- Run build before each stop.

---

## 12. SEO and Metadata

Set strong default metadata in `app/layout.tsx`.

Suggested:
- Title template: `%s | IQ Integrations`
- Default title: `IQ Integrations | AI Automation Systems for Service Businesses`
- Description: `IQ Integrations builds AI automation systems that capture leads, answer calls, book appointments, process documents, and recover revenue for service businesses.`
- OpenGraph image placeholder can be created later.
- Language: English.

Do not overdo SEO pages until the core design is approved.

---

## 13. Accessibility Requirements

- Use proper landmarks: header, main, section, footer.
- Every interactive element must be keyboard accessible.
- Use visible focus states.
- Ensure sufficient contrast.
- Accordions must be accessible.
- Mobile menu must trap/handle focus if implemented as overlay.
- Images require meaningful alt text or empty alt for decorative images.
- Do not rely on color alone for meaning.

---

## 14. Testing and Quality Commands

Before stopping after each phase, run:

```bash
npm run lint
npm run build
```

If additional tests are added:
```bash
npm test
```

Also manually inspect:
- Desktop
- Tablet
- Mobile
- Header behavior
- Mobile nav
- CTA links
- Animation performance
- No horizontal overflow
- Light/dark consistency if theme support exists

---

## 15. Git Rules

Use clean commits by phase.

Examples:
```bash
git add .
git commit -m "Initialize IQ Integrations website scaffold"
git commit -m "Build premium homepage experience"
git commit -m "Build services architecture page"
git commit -m "Add service detail pages"
git commit -m "Build process page"
git commit -m "Add about and contact pages"
git commit -m "Add legal pages and SEO polish"
```

Push after commits when possible:
```bash
git push
```

If GitHub authentication blocks the push, report the exact issue and give the exact command the owner should run.

---

## 16. Stop-and-Wait Rule

This is mandatory.

After each phase:
1. Finish implementation.
2. Run lint/build.
3. Commit.
4. Push if possible.
5. Summarize what was completed.
6. Stop.
7. Ask for owner greenlight before proceeding.

Do not start the next phase until the owner explicitly approves.

Acceptable greenlight phrases:
- “go ahead”
- “continue”
- “approved”
- “next phase”
- “greenlight”
- “proceed”

---

## 17. Things Not To Do

Do not:
- Build all pages at once.
- Continue after a phase without approval.
- Use minimalist design.
- Use generic rounded cards.
- Use unpolished placeholder visuals.
- Create fake backend behavior.
- Invent fake awards, testimonials, team members, or client logos.
- Replace the owner’s homepage strategy with generic SaaS copy.
- Ignore mobile.
- Ignore build errors.
- Add unnecessary features not requested.
- Make every section look the same.
- Use default shadcn-style rounded cards without redesigning them.
- Leave obvious AI-generated visual artifacts.

---

## 18. Definition of Done for Each Phase

A phase is done only when:
- The requested scope is implemented.
- UI follows `DESIGN.md`.
- Mobile version is polished.
- Animations are smooth and purposeful.
- No obvious placeholder sections remain unless intentionally noted.
- Lint passes or issue is documented.
- Build passes or issue is documented.
- Git commit is made.
- User receives a clear completion summary.
- Codex stops and waits.

---

## 19. First Prompt Codex Should Follow

When starting from the empty local folder, follow this sequence:

```txt
You are working in C:\Users\carlo\OneDrive\Desktop\iq-integrations.

Read AGENTS.md and DESIGN.md first.

Phase 0 only:
Initialize the local git repo, connect it to https://github.com/carlosreynag06/iq-integrations.git, scaffold a Next.js 15 App Router + TypeScript + Tailwind project, install only the baseline design dependencies needed now, preserve AGENTS.md and DESIGN.md, run lint/build, commit, push if possible, then stop and wait for my greenlight. Do not build the homepage yet.
```
