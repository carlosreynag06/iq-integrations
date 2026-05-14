import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalPanel } from "@/components/ui/TechnicalPanel";
import { capabilities } from "@/lib/site-data";

export function CapabilitiesSection() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container">
        <SectionHeader
          eyebrow="// CAPABILITIES"
          title="Systems That Pay For Themselves."
          body="Automation for the moments where slow response, manual work, and silence turn demand into lost revenue."
        />
        <div className="capability-matrix">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <TechnicalPanel className="capability-panel" key={item.number}>
                <div className="capability-topline">
                  <span>{item.number}</span>
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="capability-meta">
                  <b>{item.metric}</b>
                  <span>{item.flow}</span>
                </div>
                <div className="mini-flow" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </TechnicalPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
