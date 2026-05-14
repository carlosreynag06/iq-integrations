import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="final-cta" id="audit">
      <div className="final-cta-grid">
        <div>
          <p className="eyebrow">SYSTEM: AUDIT READY</p>
          <h2>End The Madness.</h2>
          <p>
            Book a structural audit of your communication systems. Find out
            exactly where you are losing capital.
          </p>
          <Button href="mailto:hello@iqintegrations.com?subject=ROI%20Audit%20Request">
            Initialize Audit
          </Button>
        </div>
        <div className="convergence-visual" aria-hidden="true">
          <i />
          <i />
          <i />
          <span />
        </div>
      </div>
    </section>
  );
}
