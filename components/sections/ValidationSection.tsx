import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { validationLogs } from "@/lib/site-data";

export function ValidationSection() {
  return (
    <section className="section validation-section" id="validation">
      <div className="container validation-grid">
        <SectionHeader
          eyebrow="// VALIDATION"
          title="Operational Wins, Logged."
          body="Proof should read like operational evidence: captured demand, faster response, cleaner handoffs, and recovery paths tied to real bottlenecks."
        />
        <div className="audit-log" aria-label="Operational validation log">
          {validationLogs.map((item, index) => (
            <div className="audit-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <CheckCircle2 aria-hidden="true" size={18} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
