import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  MessageSquareText,
  PhoneCall,
  Route,
  Star,
} from "lucide-react";

const nav = ["Services", "Solutions", "Process", "Results", "FAQ"];

const leakStats = [
  { number: "62", symbol: "%", label: "of inbound calls go unanswered during local business hours" },
  { number: "85", symbol: "%", label: "of callers routed to voicemail will immediately call a competitor" },
  { number: "$24k", symbol: "", label: "average annual revenue lost from just 2 missed calls per day" },
  { number: "400", symbol: "%", label: "drop in conversion probability if a lead isn't contacted within 5 minutes" },
];

const systems = [
  {
    n: "01",
    title: "Missed-Call Text-Back & Revenue Recovery",
    body: "Capture the caller before the moment goes cold, trigger a direct text path, and route the opportunity toward a booking.",
    metric: "Recover silent demand",
    icon: PhoneCall,
  },
  {
    n: "02",
    title: "24/7 AI Voice Receptionist",
    body: "Answer after-hours demand, qualify the request, and keep appointment momentum moving when the front desk is offline.",
    metric: "Always-on intake",
    icon: Bot,
  },
  {
    n: "03",
    title: "Speed-to-Lead Instant Follow-Up",
    body: "Route new inquiries immediately across the channels your prospects already use, before a competitor gets the conversation.",
    metric: "Sub-minute response",
    icon: Route,
  },
  {
    n: "04",
    title: "AI Review & Reputation Management",
    body: "Identify satisfied customers, request reviews at the right time, and keep reputation signals moving upward.",
    metric: "Reputation lift",
    icon: Star,
  },
  {
    n: "05",
    title: "No-Show Reduction & Schedule Optimization",
    body: "Use reminders, confirmations, and recovery sequences to protect calendar capacity and refill openings.",
    metric: "Protected calendar",
    icon: CalendarCheck,
  },
  {
    n: "06",
    title: "AI Customer Support & FAQ Agent",
    body: "Triage repeat questions, route urgent needs, and keep staff focused on higher-value work.",
    metric: "Lower support drag",
    icon: MessageSquareText,
  },
];

const pillars = [
  ["ROI-First Architecture", "Every system starts with the leak: missed calls, slow follow-up, manual entry, dormant contacts, or reporting drag."],
  ["Zero-Friction, Done-For-You", "Clients do not need to learn another platform. We build around the tools and operating habits already in place."],
  ["Built for Service Businesses", "The work is designed for calls, bookings, reviews, intake, field teams, document flow, and local revenue pressure."],
];

const steps = [
  ["Diagnose Analysis", "Map response gaps, intake friction, manual labor, and the exact places revenue or time is leaking."],
  ["Automate Deploy", "Build the workflows, routing, prompts, integrations, and handoff logic that remove the bottleneck."],
  ["Optimize Scale", "Tune performance, watch outcomes, and expand automation only where the business case is clear."],
];

const faqs = [
  ["Do we have to replace our current software?", "No. IQ Integrations is built around your existing tools wherever possible. The goal is to remove friction, not force your team into another platform."],
  ["What kind of businesses is this built for?", "Service businesses with inbound calls, booked appointments, repeat follow-up, reviews, documents, or operational reporting needs are the strongest fit."],
  ["Is the AI customer-facing?", "It can be, but only where it improves the customer experience. Some systems run behind the scenes to route leads, clean data, trigger follow-up, or notify staff."],
  ["How do you decide what to automate first?", "We start with the highest-cost bottleneck: missed calls, slow response, no-shows, manual document entry, dormant contacts, or fragmented reporting."],
  ["Will this pretend to be a human?", "No. Systems should be clear, useful, and trustworthy. Automation should create faster service without damaging customer confidence."],
];

export default function Home() {
  return (
    <div className="page">
      <header className="nav-shell">
        <Link href="/" className="mark" aria-label="IQ Integrations home">
          <span>IQ</span>
          <b>Integrations</b>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map((item) => (
            <Link href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </Link>
          ))}
        </nav>
        <Link href="#audit" className="audit-link">
          Book Your ROI Audit <ArrowUpRight size={17} />
        </Link>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <div className="hero-kicker">
              <span>High-Performance Automation</span>
              <i />
              <span>Revenue Recovery Systems</span>
            </div>
            <h1>
              Stop Losing Customers
              <span>To Silence.</span>
            </h1>
            <p>
              We build AI systems that answer every call, capture every lead,
              and book every appointment.
            </p>
            <div className="hero-actions">
              <Link href="#audit" className="primary">
                Book Your ROI Audit <ArrowUpRight size={18} />
              </Link>
              <Link href="#services" className="ghost">
                Inspect Systems
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Revenue recovery automation visual">
            <Image
              className="hero-media"
              src="/generated/revenue-command-core.png"
              alt="Revenue recovery automation core with data streams"
              fill
              priority
              sizes="(max-width: 1120px) 100vw, 48vw"
            />
            <div className="visual-frame">
              <span>IQ OPS / LIVE MODEL</span>
              <b>Revenue Recovery Command</b>
            </div>
          </div>

          <aside className="hero-rail" aria-label="Automation system status">
            <div>
              <span>240x</span>
              <b>Faster Response</b>
            </div>
            <div>
              <span>340%</span>
              <b>Avg 90-Day ROI</b>
            </div>
            <p>CALL <i /> QUALIFY <i /> BOOK</p>
          </aside>
        </section>

        <section className="bleed-section" id="results">
          <div className="section-copy">
            <p>{"// Problem Identification"}</p>
            <h2>You are bleeding capital.</h2>
            <span>
              Every minute an inquiry sits in voicemail, your ad spend is
              vaporized. Here is the math.
            </span>
          </div>
          <div className="bleed-grid">
            <div className="rupture-map">
              <Image
                src="/generated/broken-revenue-funnel.png"
                alt="Cracked revenue funnel leaking lost signal"
                fill
                sizes="(max-width: 1120px) 100vw, 38vw"
              />
              <div className="leak-console">
                <small>LEAK DETECTED</small>
                <strong>voicemail delay / slow follow-up / manual handoff</strong>
              </div>
            </div>
            <div className="stat-stack">
              {leakStats.map((stat) => (
                <article key={`${stat.number}${stat.symbol}`}>
                  <strong>
                    <span className="stat-number">{stat.number}</span>
                    {stat.symbol ? <span className="stat-symbol">{stat.symbol}</span> : null}
                  </strong>
                  <span className="stat-label">{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems" id="services">
          <div className="systems-lead">
            <p>{"// CAPABILITIES"}</p>
            <h2>Systems That Pay For Themselves.</h2>
          </div>
          <div className="systems-stage">
            {systems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="system-node" key={item.n}>
                  <div>
                    <span>{item.n}</span>
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <b>{item.metric}</b>
                </article>
              );
            })}
          </div>
          <div className="systems-command">
            <div>
              <span>READY TO DEPLOY</span>
              <strong>Build the recovery system around your highest-cost bottleneck.</strong>
            </div>
            <Link href="#audit" className="systems-cta">
              Build My Recovery System <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        <section className="outcomes" id="solutions">
          <div className="outcomes-heading">
            <p>Philosophy</p>
            <h2>
              We Don&apos;t <span className="accent-gold">Sell</span> Software.{" "}
              <span className="accent-gold">We Sell</span> Outcomes.
            </h2>
          </div>
          <div className="outcomes-body">
            <p>
              The work is not another subscription. It is a structural repair
              to the parts of the operation that leak demand, time, and
              attention.
            </p>
            <div>
              {pillars.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method" id="process">
          <div className="section-copy">
            <p>{"// THE METHODOLOGY"}</p>
            <h2>Revenue Mechanics</h2>
            <span>
              Diagnose the leak, deploy the system, and scale only what proves
              its value in the operation.
            </span>
          </div>
          <div className="method-track">
            {steps.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <Link href="#audit" className="primary">
            Start Now <ArrowUpRight size={18} />
          </Link>
        </section>

        <section className="proof">
          <div>
            <p>{"// VALIDATION"}</p>
            <h2>Operational Wins, Logged.</h2>
          </div>
          <div className="proof-log">
            {[
              "Missed inquiries converted into immediate follow-up paths.",
              "Lead response compressed from manual delay to automated routing.",
              "Document and reporting work prepared for future automation layers.",
              "Revenue recovery logic tied to measurable operating bottlenecks.",
            ].map((item) => (
              <p key={item}>
                <CheckCircle2 size={18} />
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="queries" id="faq">
          <div className="section-copy">
            <p>{"// KNOWLEDGE BASE"}</p>
            <h2>System Queries</h2>
          </div>
          <div className="query-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final" id="audit">
          <div>
            <p>SYSTEM: AUDIT READY</p>
            <h2>End The Madness.</h2>
            <span>
              Book a structural audit of your communication systems. Find out
              exactly where you are losing capital.
            </span>
            <Link
              href="mailto:hello@iqintegrations.com?subject=ROI%20Audit%20Request"
              className="primary"
            >
              Initialize Audit <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <Link href="/" className="mark">
            <span>IQ</span>
            <b>Integrations</b>
          </Link>
          <p>We sell outcomes, not software.</p>
        </div>
        <nav aria-label="Footer">
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
