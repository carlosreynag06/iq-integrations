import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="// THE METHODOLOGY"
          title="Revenue Mechanics"
          body="Diagnose the leak, deploy the system, and scale only what proves its value in the operation."
        />
        <div className="process-pipeline">
          {processSteps.map((step) => (
            <article className="process-step" key={step.step}>
              <span>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="process-action">
          <Button href="#audit">Start Now</Button>
        </div>
      </div>
    </section>
  );
}
