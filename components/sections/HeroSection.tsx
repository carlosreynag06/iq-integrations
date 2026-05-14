import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Metric } from "@/components/ui/Metric";
import { RevenueCommandCore } from "@/components/visuals/RevenueCommandCore";
import { heroMetrics } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">High-Performance Automation</p>
          <h1>
            Stop Losing Customers
            <span>To Silence.</span>
          </h1>
          <p className="hero-lede">
            We build AI systems that answer every call, capture every lead, and
            book every appointment.
          </p>
          <div className="hero-actions">
            <Button href="#audit">Book Your ROI Audit</Button>
            <Button href="#capabilities" variant="secondary">
              View Systems
            </Button>
          </div>
        </div>

        <div className="hero-visual-wrap">
          <Image
            className="hero-command-image"
            src="/generated/revenue-command-core.png"
            alt="Abstract revenue recovery command center with data streams converging into an automation core"
            width={1536}
            height={1024}
            priority
          />
          <RevenueCommandCore />
        </div>
      </div>

      <div className="metric-strip" aria-label="Performance metrics">
        {heroMetrics.map((metric) => (
          <Metric key={metric.label} value={metric.value} label={metric.label} tone="success" />
        ))}
        <div className="metric-system-note">
          <span>SYSTEM</span>
          <b>Revenue recovery architecture ready for deployment</b>
        </div>
      </div>
    </section>
  );
}
