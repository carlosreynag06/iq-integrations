import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  FileText,
  MessageSquareText,
  PhoneCall,
  Route,
  Sparkles,
  Star,
} from "lucide-react";

const navItems = ["Services", "Solutions", "Process", "Results", "FAQ"];

const stats = [
  {
    value: "62%",
    label: "of inbound calls go unanswered during local business hours",
  },
  {
    value: "85%",
    label: "of callers routed to voicemail will immediately call a competitor",
  },
  {
    value: "$24k",
    label: "average annual revenue lost from just 2 missed calls per day",
  },
  {
    value: "400%",
    label: "drop in conversion probability if a lead isn't contacted within 5 minutes",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Missed-Call Text-Back & Revenue Recovery",
    body: "Capture the caller before the moment goes cold, trigger a direct text path, and route the opportunity toward a booking.",
    metric: "Recover silent demand",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "24/7 AI Voice Receptionist",
    body: "Answer after-hours demand, qualify the request, and keep appointment momentum moving when the front desk is offline.",
    metric: "Always-on intake",
    icon: Bot,
  },
  {
    number: "03",
    title: "Speed-to-Lead Instant Follow-Up",
    body: "Route new inquiries immediately across the channels your prospects already use, before a competitor gets the conversation.",
    metric: "Sub-minute response",
    icon: Route,
  },
  {
    number: "04",
    title: "AI Review & Reputation Management",
    body: "Identify satisfied customers, request reviews at the right time, and keep reputation signals moving upward.",
    metric: "Reputation lift",
    icon: Star,
  },
  {
    number: "05",
    title: "No-Show Reduction & Schedule Optimization",
    body: "Use reminders, confirmations, and recovery sequences to protect calendar capacity and refill openings.",
    metric: "Protected calendar",
    icon: CalendarCheck,
  },
  {
    number: "06",
    title: "AI Customer Support & FAQ Agent",
    body: "Triage repeat questions, route urgent needs, and keep staff focused on higher-value work.",
    metric: "Lower support drag",
    icon: MessageSquareText,
  },
];

const pillars = [
  {
    title: "ROI-First Architecture",
    body: "Every system starts with the leak: missed calls, slow follow-up, manual entry, dormant contacts, or reporting drag.",
  },
  {
    title: "Zero-Friction, Done-For-You",
    body: "Clients do not need to learn another platform. We build around the tools and operating habits already in place.",
  },
  {
    title: "Built for Service Businesses",
    body: "The work is designed for calls, bookings, reviews, intake, field teams, document flow, and local revenue pressure.",
  },
];

const process = [
  {
    title: "Diagnose Analysis",
    body: "Map response gaps, intake friction, manual labor, and the exact places revenue or time is leaking.",
  },
  {
    title: "Automate Deploy",
    body: "Build the workflows, routing, prompts, integrations, and handoff logic that remove the bottleneck.",
  },
  {
    title: "Optimize Scale",
    body: "Tune performance, watch outcomes, and expand automation only where the business case is clear.",
  },
];

const faqs = [
  {
    question: "Do we have to replace our current software?",
    answer:
      "No. IQ Integrations is built around your existing tools wherever possible. The goal is to remove friction, not force your team into another platform.",
  },
  {
    question: "What kind of businesses is this built for?",
    answer:
      "Service businesses with inbound calls, booked appointments, repeat follow-up, reviews, documents, or operational reporting needs are the strongest fit.",
  },
  {
    question: "Is the AI customer-facing?",
    answer:
      "It can be, but only where it improves the customer experience. Some systems run behind the scenes to route leads, clean data, trigger follow-up, or notify staff.",
  },
  {
    question: "How do you decide what to automate first?",
    answer:
      "We start with the highest-cost bottleneck: missed calls, slow response, no-shows, manual document entry, dormant contacts, or fragmented reporting.",
  },
  {
    question: "Will this pretend to be a human?",
    answer:
      "No. Systems should be clear, useful, and trustworthy. Automation should create faster service without damaging customer confidence.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="IQ Integrations home">
          <span>IQ</span>
          <strong>Integrations</strong>
        </Link>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="#audit">
          Book Your ROI Audit <ArrowUpRight size={18} />
        </Link>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="section-code">High-Performance Automation</p>
            <h1>
              Stop Losing
              <span>Customers To Silence.</span>
            </h1>
            <p>
              We build AI systems that answer every call, capture every lead,
              and book every appointment.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="#audit">
                Book Your ROI Audit <ArrowUpRight size={18} />
              </Link>
              <Link className="secondary-action" href="#services">
                View Recovery Systems
              </Link>
            </div>
          </div>

          <div className="hero-stage" aria-label="Revenue recovery command core visual">
            <Image
              src="/generated/revenue-command-core.png"
              alt="Cinematic automation command core with data pipelines converging"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 54vw"
            />
            <div className="stage-overlay">
              <div>
                <span>240x</span>
                <b>Faster Response</b>
              </div>
              <div>
                <span>340%</span>
                <b>Avg 90-Day ROI</b>
              </div>
            </div>
            <div className="channel-stack">
              <span>Calls</span>
              <span>Forms</span>
              <span>DMs</span>
              <span>Calendar</span>
            </div>
          </div>
        </section>

        <section className="loss-section" id="results">
          <div className="loss-intro">
            <p className="section-code">{"// Problem Identification"}</p>
            <h2>You are bleeding capital.</h2>
            <p>
              Every minute an inquiry sits in voicemail, your ad spend is
              vaporized. Here is the math.
            </p>
          </div>
          <div className="loss-board">
            <div className="loss-visual">
              <span className="loss-label">Leak detected</span>
              <div className="loss-pipe">
                <i />
                <i />
                <i />
              </div>
              <strong>voicemail delay / slow follow-up / manual handoff</strong>
            </div>
            <div className="loss-stats">
              {stats.map((stat) => (
                <article key={stat.value}>
                  <b>{stat.value}</b>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems-section" id="services">
          <div className="section-title-row">
            <div>
              <p className="section-code">{"// CAPABILITIES"}</p>
              <h2>Systems That Pay For Themselves.</h2>
            </div>
            <p>
              A disciplined automation board for the moments where silence,
              delay, and manual work quietly tax the business.
            </p>
          </div>

          <div className="systems-board">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className="system-row" key={item.number}>
                  <span className="row-number">{item.number}</span>
                  <Icon className="row-icon" size={24} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <b>{item.metric}</b>
                </article>
              );
            })}
          </div>
        </section>

        <section className="philosophy-panel" id="solutions">
          <div className="philosophy-copy">
            <p className="section-code">Philosophy</p>
            <h2>We Don&apos;t Sell Software. We Sell Outcomes.</h2>
            <p>
              The work is not another subscription. It is a structural repair
              to the parts of the operation that leak demand, time, and
              attention.
            </p>
          </div>
          <div className="philosophy-proof">
            {pillars.map((pillar, index) => (
              <article key={pillar.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-title-row">
            <div>
              <p className="section-code">{"// THE METHODOLOGY"}</p>
              <h2>Revenue Mechanics</h2>
            </div>
            <p>
              Diagnose the leak, deploy the system, and scale only what proves
              its value in the operation.
            </p>
          </div>
          <div className="process-track">
            {process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <Link className="primary-action process-action" href="#audit">
            Start Now <ArrowUpRight size={18} />
          </Link>
        </section>

        <section className="validation-section">
          <div>
            <p className="section-code">{"// VALIDATION"}</p>
            <h2>Operational Wins, Logged.</h2>
          </div>
          <div className="log-list">
            {[
              "Missed inquiries converted into immediate follow-up paths.",
              "Lead response compressed from manual delay to automated routing.",
              "Document and reporting work prepared for future automation layers.",
              "Revenue recovery logic tied to measurable operating bottlenecks.",
            ].map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} /> {item}
              </p>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-title-row">
            <div>
              <p className="section-code">{"// KNOWLEDGE BASE"}</p>
              <h2>System Queries</h2>
            </div>
            <FileText size={42} />
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-section" id="audit">
          <div>
            <p className="section-code">SYSTEM: AUDIT READY</p>
            <h2>End The Madness.</h2>
            <p>
              Book a structural audit of your communication systems. Find out
              exactly where you are losing capital.
            </p>
            <Link
              className="primary-action"
              href="mailto:hello@iqintegrations.com?subject=ROI%20Audit%20Request"
            >
              Initialize Audit <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="closing-orbit" aria-hidden="true">
            <Sparkles size={30} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <Link href="/" className="brand">
            <span>IQ</span>
            <strong>Integrations</strong>
          </Link>
          <p>We sell outcomes, not software.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="#services">Services</Link>
          <Link href="#solutions">About</Link>
          <Link href="#process">Process</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
        <div>
          <p>Operations: Chicago, IL</p>
          <p>hello@iqintegrations.com</p>
          <p>(800) 555-0100</p>
        </div>
        <div>
          <Link href="#privacy">Privacy</Link>
          <Link href="#terms">Terms</Link>
          <p>© 2026 IQ Integrations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
