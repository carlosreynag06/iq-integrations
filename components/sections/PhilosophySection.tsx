import { SectionHeader } from "@/components/ui/SectionHeader";
import { philosophyPillars } from "@/lib/site-data";

export function PhilosophySection() {
  return (
    <section className="section philosophy-section" id="philosophy">
      <div className="container">
        <SectionHeader
          eyebrow="Philosophy"
          title="We Don't Sell Software. We Sell Outcomes."
          body="The work is not another subscription. It is a structural repair to the parts of the operation that leak demand, time, and attention."
          align="split"
        />
        <div className="pillar-grid">
          {philosophyPillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
