# DESIGN.md — IQ Integrations

> Design authority file for the IQ Integrations website.
> This file exists so Codex makes consistent, premium UI decisions across the entire project.
> Read this before creating or modifying any visual component, page, animation, image, icon system, layout, or copy presentation.

---

## 1. Brand Positioning

**Business name:** IQ Integrations  
**Category:** AI automation and integration company for service businesses.  
**Core promise:** IQ Integrations builds revenue-recovery and operational automation systems that capture leads, answer calls, qualify prospects, book appointments, process documents, reactivate databases, and deliver reporting without forcing the client to learn new software.

**Brand thesis:**  
Most businesses do not need more ads first. They need the operational pipe unclogged. IQ Integrations finds where revenue, time, and leads are leaking, then builds AI systems that recover that value.

**Website perception goal:**  
A visitor should instantly feel:  
“This company is serious, modern, technical, expensive, and capable. This is not a template agency. This is high-level AI infrastructure for real businesses.”

**Do not make the site feel like:**
- Generic SaaS template
- Flat startup landing page
- Minimalist white-card grid
- “AI slop” with random glowing blobs and meaningless robot imagery
- Plain black background with neon text
- Cheap local agency website
- Rounded-card dashboard clone

**Make it feel like:**
- Premium AI operations lab
- High-conversion revenue engineering firm
- Advanced automation command center
- Polished, cinematic, high-contrast, editorial, and technical
- A website that could compete with high-end product studios and enterprise AI companies

---

## 2. Design North Star

**Primary creative direction:**  
“Revenue Intelligence Command Center”

The site should feel like a dark, high-performance operational system. It should combine:
- Cinematic dark luxury
- Glass and metal surfaces
- Precise grid systems
- Technical overlays
- Animated data trails
- High-contrast typography
- Industrial UI details
- Sharp geometry
- Elegant motion
- Strategic copy hierarchy

**Visual metaphor:**  
The business finds invisible leaks in a company’s communication and operations, then builds automated systems that recover revenue. The UI should visualize that through:
- Signals moving through pipelines
- Missed leads being captured
- Call activity becoming booked appointments
- Documents transforming into clean data
- Dormant contacts reactivating
- Reporting streams consolidating into executive alerts

---

## 3. Color System

Use a dark technical-luxury palette. Avoid generic blue-purple AI gradients unless used with restraint and polish.

### Core Palette

```css
:root {
  --background: #05070A;
  --background-elevated: #090D13;
  --surface: #0D121A;
  --surface-2: #111824;
  --surface-glass: rgba(13, 18, 26, 0.68);

  --text-primary: #F5F7FA;
  --text-secondary: #AAB4C3;
  --text-muted: #6F7A89;

  --line-soft: rgba(255, 255, 255, 0.08);
  --line-medium: rgba(255, 255, 255, 0.14);
  --line-strong: rgba(255, 255, 255, 0.22);

  --accent-cyan: #31E6FF;
  --accent-electric: #6A7DFF;
  --accent-violet: #9B5CFF;
  --accent-lime: #C7FF5A;
  --accent-gold: #E8C66A;

  --danger-revenue: #FF4D6D;
  --success-recovery: #6DFFB8;
}
```

### Color Usage

**Primary mood:** dark, metallic, controlled.  
**Primary accent:** cyan/electric blue for AI and data motion.  
**Secondary accent:** lime or gold for ROI, recovery, saved revenue, and important proof metrics.  
**Danger accent:** red/pink only for leaks, missed calls, lost revenue, or problem states.

**Avoid:**
- Large rainbow gradients
- Overused purple-blue blob backgrounds
- Pure white backgrounds for main sections
- Flat gray cards
- Pastel startup palettes

**Preferred gradients:**
```css
background:
  radial-gradient(circle at 20% 10%, rgba(49, 230, 255, 0.18), transparent 28%),
  radial-gradient(circle at 80% 20%, rgba(106, 125, 255, 0.16), transparent 32%),
  linear-gradient(180deg, #05070A 0%, #090D13 48%, #05070A 100%);
```

Accent gradient:
```css
linear-gradient(135deg, #31E6FF 0%, #6A7DFF 46%, #9B5CFF 100%);
```

ROI gradient:
```css
linear-gradient(135deg, #C7FF5A 0%, #6DFFB8 100%);
```

---

## 4. Typography

### Typeface

Use a premium modern sans-serif with excellent readability.

Preferred:
- `Inter` through `next/font/google`
- Optionally pair with a technical mono font for labels and code-like UI:
  - `IBM Plex Mono`
  - `Geist Mono`
  - `JetBrains Mono`

### Typography Personality

Headlines should feel commanding, sharp, and engineered.  
Body text should feel clear, direct, and business-oriented.

### Type Scale

Use large, confident type. The site must not look timid.

```css
--font-display: Inter, system-ui, sans-serif;
--font-mono: "IBM Plex Mono", "Geist Mono", monospace;

Hero H1 desktop: clamp(4.6rem, 8vw, 8.8rem)
Hero H1 mobile: clamp(3rem, 15vw, 4.4rem)

Section H2 desktop: clamp(3rem, 5vw, 5.8rem)
Section H2 mobile: clamp(2.3rem, 11vw, 3.4rem)

Card/service titles: clamp(1.35rem, 2vw, 2rem)
Body: 1rem–1.125rem
Large body: 1.2rem–1.45rem
Eyebrows/labels: 0.72rem–0.85rem, uppercase, letter-spaced
Metric numbers: clamp(2.2rem, 5vw, 5rem)
```

### Typography Rules

- Use strong line breaks in hero and section headlines.
- Use editorial contrast: huge headline, restrained body, precise labels.
- Eyebrows should feel like system commands: `// CAPABILITIES`, `// PROBLEM IDENTIFICATION`, `SYSTEM: ACTIVE`.
- Use mono font for technical labels, metadata, stat captions, status chips, step numbers, and small system UI.
- Never center every section. Use a mix of asymmetric alignments.
- Avoid weak headings such as “Our Services” unless paired with a sharper strategic headline.

---

## 5. Layout System

### Grid

Use a disciplined 12-column grid on desktop.

```css
max-width: 1440px;
container-padding-desktop: 32px–48px;
container-padding-mobile: 20px;
section-padding-desktop: 120px–180px;
section-padding-mobile: 72px–96px;
```

### Layout Personality

Layouts should feel custom, layered, and intentionally engineered.

Use:
- Asymmetric hero layouts
- Oversized headline blocks
- Split-screen sections
- Technical overlays
- Large horizontal bands
- Metric strips
- Layered panels
- Sticky visual panels where useful
- Alternating dense and spacious sections
- Diagonal/angled separators
- Vertical side labels
- Scroll-linked progression
- Modular “system map” visuals

Avoid:
- Repeated 3-card rows
- Identical cards in every section
- Basic centered headline + paragraph + grid
- Generic bento boxes with rounded corners
- Overly rounded cards

---

## 6. Shape Language

The user does **not** like rounded cards.

### Approved Shapes

- Sharp cards: `border-radius: 0px`
- Slightly softened technical panels: `border-radius: 4px–8px max`
- Angled corners using `clip-path`
- Notched panels
- Thin borders
- Layered frames
- Edge highlights
- Brackets and corner markers
- Divider lines and grid overlays

### Forbidden

- Large rounded cards
- Pill-shaped cards, unless used for very small tags/buttons
- Soft bubbly SaaS cards
- Cartoon-like panels
- Random glass blobs

### Panel Style Example

```css
.technical-panel {
  position: relative;
  border: 1px solid rgba(255,255,255,.12);
  background:
    linear-gradient(180deg, rgba(255,255,255,.055), rgba(255,255,255,.02)),
    rgba(8, 13, 20, .84);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, .38),
    inset 0 1px 0 rgba(255,255,255,.09);
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
}
```

---

## 7. Motion and Interaction Standards

The website must feel alive, expensive, and technically advanced. Use motion to communicate system intelligence, not decoration.

### Approved Libraries

Codex may install any design-enhancing dependency required, including:
- `framer-motion`
- `gsap`
- `@gsap/react`
- `lenis`
- `lucide-react`
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `class-variance-authority`
- `tailwind-merge`
- `clsx`
- `next-themes`
- `motion` if preferred over framer-motion

Use dependencies only when they improve the result and do not create unnecessary complexity.

### Motion Rules

- Motion must be smooth, deliberate, and premium.
- Use staggered reveals, scroll-triggered transitions, subtle parallax, and animated data lines.
- Hero should have an animated system visual immediately.
- Buttons and panels should have refined hover states.
- Use micro-interactions for status indicators, call flows, lead routing, and ROI counters.
- Respect reduced-motion preferences.
- Do not use cheap bounce effects.
- Do not animate everything at once.
- Do not create distracting, random floating elements.

### Recommended Effects

- Animated signal lines moving through pipeline diagrams
- Lead cards flowing from “missed” to “booked”
- Call waveform transforming into appointment card
- Document pages scanning into structured fields
- KPI counters with subtle count-up on view
- Cursor-follow glow limited to desktop and low opacity
- Header glass blur after scroll
- Smooth section transitions with Lenis
- Sticky process visualization
- Animated chatbot dock expanding on click

---

## 8. Imagery and Visual Direction

Codex can create or request visual assets. Images should look custom, cinematic, and tech-forward.

### Image Rules

- No generic robot faces.
- No random humanoid AI.
- No stock photos of people smiling at laptops.
- No cliché circuit board backgrounds.
- No low-resolution or obviously AI-generated artifacts.
- No image with unreadable fake text.
- Use abstract, high-end operational visuals instead.

### Image Concepts to Use

#### Homepage Hero Visual: “Revenue Recovery Command Core”
A dark, cinematic 3D interface environment showing multiple business communication channels converging into one central automation core. Visual elements:
- Incoming calls
- Web leads
- Form submissions
- Social DMs
- Calendar bookings
- CRM records
- Small glowing data packets moving along precise glass tubes
- A central luminous core labeled visually only through UI-like geometry, not text
- Color mood: black graphite, cyan, electric blue, lime ROI highlights
- No human faces
- No readable fake text
- Aspect: wide desktop hero asset and mobile crop

#### Problem Section Visual: “Clogged Revenue Pipe”
A premium abstract visualization of ad spend and leads entering a blocked operational pipe, with red/orange lost-signal fragments leaking out. It should feel like a high-end financial risk visualization, not plumbing stock art.

#### Services Visual System
Each service gets a small custom icon/mini-scene:
1. Missed-call text-back: phone signal captured before disappearing.
2. AI voice receptionist: waveform becoming booked appointment.
3. Speed-to-lead: lead dot routed instantly through a network.
4. Review management: rating signal rising in search-like grid.
5. No-show reduction: calendar gaps being refilled.
6. AI support agent: chat node triaging questions into routes.

#### Document Processing Page Visual
A dark scanner-like interface where PDFs, invoices, and forms are converted into structured rows, validation checks, and approved output destinations.

#### Database Reactivation Visual
Dormant contact nodes lighting up across a dark CRM map, segmented into groups with targeted signal beams.

#### Reporting Visual
Multiple software streams merging into one executive notification card.

#### Chatbot UI Visual
A floating bottom-right AI assistant with a sharp rectangular panel, not a rounded bubble. It should feel like a “support command module,” not a casual chat widget.

---

## 9. Homepage Required Sections

The homepage copy is provided by the owner. Preserve the strategy, strengthen only where needed for clarity and polish.

### 1. Header

Header should be premium and functional:
- Left: IQ Integrations wordmark
- Center/right nav:
  - Services
  - Solutions
  - Process
  - Results
  - FAQ
- CTA: Book Your ROI Audit
- Sticky glass behavior after scroll
- Thin bottom border
- Desktop nav feels like system controls
- Mobile menu must be polished, full-screen or edge-panel, not a basic dropdown

### 2. Hero

Required copy:
- Eyebrow: `High-Performance Automation`
- Headline: `Stop Losing Customers To Silence.`
- Subheadline: `We build AI systems that answer every call, capture every lead, and book every appointment.`
- Primary CTA: `Book Your ROI Audit`
- Metrics:
  - `240x` Faster Response
  - `340%` Avg 90-Day ROI

Design:
- Full viewport or near-full viewport
- Asymmetric layout
- Giant headline
- Animated command-core visual
- Technical metric strip
- Background data grid
- Subtle animated signal trails
- Make the CTA feel important and premium

### 3. Problem Identification

Required copy:
- Eyebrow: `// Problem Identification`
- Headline: `You are bleeding capital.`
- Subheadline: `Every minute an inquiry sits in voicemail, your ad spend is vaporized. Here is the math.`
- Stats:
  - `62%` of inbound calls go unanswered during local business hours
  - `85%` of callers routed to voicemail will immediately call a competitor
  - `$24k` average annual revenue lost from just 2 missed calls per day
  - `400%` drop in conversion probability if a lead isn’t contacted within 5 minutes

Design:
- This section should feel urgent.
- Use red/pink danger accents for loss.
- Use a brutal, sharp stat layout.
- Consider a large “loss calculator” visual or animated leakage diagram.

### 4. Services / Capabilities

Required headline:
- Eyebrow: `// CAPABILITIES`
- Headline: `Systems That Pay For Themselves.`

Services:
1. Missed-Call Text-Back & Revenue Recovery
2. 24/7 AI Voice Receptionist
3. Speed-to-Lead Instant Follow-Up
4. AI Review & Reputation Management
5. No-Show Reduction & Schedule Optimization
6. AI Customer Support & FAQ Agent

Design:
- Do not use plain cards.
- Create a capability matrix or command-center board.
- Each service panel should have:
  - service number
  - title
  - concise description
  - value metric
  - small animated technical visual/icon
  - hover state that reveals “system flow”
- Use varied panel sizes; not a boring equal-card grid.

### 5. Why Us / Philosophy

Required copy:
- Eyebrow: `Philosophy`
- Headline: `We Don't Sell Software. We Sell Outcomes.`
- Pillars:
  1. ROI-First Architecture
  2. Zero-Friction, Done-For-You
  3. Built for Service Businesses

Design:
- Should feel premium and authoritative.
- Use editorial layout with large numbers and vertical dividers.
- Tie each pillar to a visual proof point.

### 6. Process / Methodology

Required copy:
- Eyebrow: `// THE METHODOLOGY`
- Headline: `Revenue Mechanics`
- Steps:
  1. Diagnose Analysis
  2. Automate Deploy
  3. Optimize Scale
- CTA: `Start Now`

Design:
- Use a horizontal or vertical system pipeline.
- Animate the process as the user scrolls.
- Use “diagnose → deploy → optimize” as a living operational flow.

### 7. Validation / Testimonials

Use provided testimonial copy, but presentation must be premium.
- Avoid generic testimonial cards.
- Use black glass quote panels, audit-log styling, or “case signal recovered” visual format.
- Make testimonials feel like operational wins.

### 8. FAQ / Knowledge Base

Required:
- Eyebrow: `// KNOWLEDGE BASE`
- Headline: `System Queries`
- Use the provided Q&A content.

Design:
- Sharp accordion style.
- Terminal-like query language is acceptable if readable.
- FAQ state animations should be smooth.

### 9. Final CTA

Required:
- Headline: `End The Madness.`
- Subheadline: `Book a structural audit of your communication systems. Find out exactly where you are losing capital.`
- CTA: `Initialize Audit`

Design:
- High-impact, cinematic, closing section.
- Show data signals converging into one CTA.
- Should feel decisive.

### 10. Footer

Required:
- Tagline: `We sell outcomes, not software.`
- Nav: Services, About, Process, FAQ
- Operations: Chicago, IL
- Email: hello@iqintegrations.com
- Phone: (800) 555-0100
- Legal: Privacy, Terms
- Copyright: © 2026 IQ Integrations. All rights reserved.

---

## 10. Additional Pages and Recommended Structure

Codex must create copy for pages beyond the homepage using the business strategy in this file and AGENTS.md.

Recommended pages:
- `/` Homepage
- `/services` or `/solutions` Main services/solutions page
- `/services/missed-call-text-back`
- `/services/ai-voice-receptionist`
- `/services/speed-to-lead`
- `/services/document-processing`
- `/services/follow-up-nurture`
- `/services/database-reactivation`
- `/services/reporting-notifications`
- `/process`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

For SEO and clarity, prefer service detail pages if time permits. Build by phase.

---

## 11. Services from Business Strategy

The website must also feature these five automation categories from the uploaded services/problem strategy:

### Speed to Lead
Problem: slow lead response causes warm prospects to move on.  
Solution: instantly capture, qualify, route, and follow up.  
Design metaphor: data packet racing competitors to a booking node.

### Document Processing
Problem: staff waste hours reading documents and retyping data.  
Solution: extract, validate, and push clean data to destination systems.  
Design metaphor: documents scanned into structured verified fields.

### Follow-Up and Nurture Sequences
Problem: businesses stop after one or two follow-ups while many sales require more persistence.  
Solution: intelligent multi-touch personalized sequences with handoff to humans when the lead replies or books.  
Design metaphor: timed signal sequence warming a lead path.

### Database Reactivation
Problem: forgotten CRM contacts contain lost revenue.  
Solution: segment and send personalized reactivation outreach.  
Design metaphor: dormant nodes lighting back up.

### Internal Reporting and Status Notifications
Problem: teams waste hours compiling updates across tools.  
Solution: pull data, analyze it, and deliver reports where the team already works.  
Design metaphor: fragmented streams merging into one executive notification.

---

## 12. Component Standards

### Buttons

Primary CTA:
- Sharp rectangle or slight 4px radius
- Strong contrast
- Gradient border or light sweep
- Hover: subtle glow, translate, shimmer line
- Text: direct and action-oriented

Secondary CTA:
- Transparent dark surface
- Thin border
- Accent hover
- Arrow or command icon

Avoid:
- pill buttons unless very small
- cartoon gradients
- weak gray buttons

### Cards / Panels

Cards must be technical panels, not generic cards:
- Sharp corners or clipped corners
- Inner border
- Subtle layered background
- Corner brackets
- Status labels
- Hover reveals
- Motion only where meaningful

### Forms

Contact forms should feel like an intake console:
- Dark fields
- Sharp borders
- Active field glow
- Clear labels
- Strategic questions:
  - Business type
  - Current lead volume
  - Biggest bottleneck
  - Main software tools
  - Monthly ad spend or lead source
  - Desired outcome
- No overly long form on first contact unless framed as an audit.

### Chatbot UI

UI only for now. No backend required unless explicitly requested.

Chatbot requirements:
- Floating lower-right module
- Sharp rectangular interface
- Header: `IQ Assistant`
- Status: `Online / ROI Audit Mode`
- Preloaded options:
  - “Recover missed calls”
  - “Automate follow-up”
  - “Process documents”
  - “Book ROI audit”
- Show a polished conversation preview
- Must not pretend to be live if no backend exists.
- Label as UI prototype or “assistant preview” in code comments if necessary.

---

## 13. Animation Implementation Guidance

### Framer Motion

Use for:
- Section reveals
- Panel stagger animations
- Button interactions
- Accordion transitions
- Chatbot open/close
- Route/page transitions if useful

### GSAP

Use only if needed for:
- ScrollTrigger sequences
- Complex timeline animations
- Smooth hero system animation
- Pipeline visualization

### Canvas / Three.js

Allowed if it makes the hero truly impressive. Keep performance controlled:
- Lazy-load heavy visuals
- Use dynamic imports for client-only components
- Provide fallback for reduced motion/mobile
- Do not block initial page render

### Performance Rules

The site must still feel fast:
- Optimize images
- Use Next Image when appropriate
- Avoid large client bundles when CSS/SVG can solve the effect
- Keep LCP hero optimized
- Use progressive enhancement

---

## 14. Responsive Design

Mobile must not be an afterthought.

Mobile design:
- Keep the same premium feeling.
- Hero must be dramatic but readable.
- Technical visuals should simplify, not disappear completely.
- Use stacked layouts with strong section rhythm.
- Avoid horizontal overflow.
- Tap targets at least 44px.
- Mobile nav must be excellent.

Breakpoints:
- Mobile: 360–767px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Large desktop: 1440px+

---

## 15. Copy and Tone

### Voice

- Direct
- Sharp
- Commercially intelligent
- Outcome-focused
- Technical but not confusing
- Confident, not hypey
- Premium and decisive

### Phrases that fit

- “Revenue recovery”
- “Operational bottlenecks”
- “Lead capture”
- “No ad dollar wasted”
- “Done-for-you automation”
- “AI systems that pay for themselves”
- “Built around measurable outcomes”
- “Every missed inquiry has a cost”
- “Your systems should answer before your competitor does”

### Avoid

- “Unlock the power of AI”
- “Revolutionize your business”
- “Seamless solutions for modern teams”
- “Cutting-edge technology” without specifics
- “Transform your workflow” as empty filler
- Generic AI buzzwords

---

## 16. Accessibility and Polish

- Maintain strong contrast.
- Keyboard navigation must work.
- Animations must respect `prefers-reduced-motion`.
- Use semantic HTML.
- Use visible focus states that match the design.
- Buttons and links need clear labels.
- Avoid text embedded inside generated images.
- Make sure decorative visuals do not hurt readability.

---

## 17. Design Quality Bar

Before marking any phase complete, Codex must review the UI against this checklist:

- Does this look custom-coded and premium?
- Would a visitor immediately believe this is a high-level tech/AI company?
- Is there enough visual drama without sacrificing clarity?
- Did we avoid generic rounded SaaS cards?
- Are animations purposeful and polished?
- Is the hero visually impressive?
- Does the services section feel like a capability system, not a card grid?
- Is the mobile version still premium?
- Is the copy outcome-focused and specific?
- Is performance still acceptable?

If the answer to any critical item is “no,” improve before stopping.

---

## 18. Non-Negotiables

1. No minimalist design.
2. No generic AI template.
3. No large rounded cards.
4. No plain white card grids.
5. No placeholder-quality visuals.
6. No random robot imagery.
7. No generic copy for important sections.
8. No proceeding to the next phase without user greenlight.
9. No changing the brand strategy without explicit instruction.
10. Every visible section must feel intentional, premium, and high-tech.
