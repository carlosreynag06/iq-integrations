import { Metric } from "@/components/ui/Metric";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeakageDiagram } from "@/components/visuals/LeakageDiagram";
import { problemStats } from "@/lib/site-data";

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <SectionHeader
          eyebrow="// Problem Identification"
          title="You are bleeding capital."
          body="Every minute an inquiry sits in voicemail, your ad spend is vaporized. Here is the math."
          align="split"
        />
        <div className="problem-grid">
          <LeakageDiagram />
          <div className="problem-stats">
            {problemStats.map((stat) => (
              <Metric key={stat.value} value={stat.value} label={stat.label} tone="danger" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
