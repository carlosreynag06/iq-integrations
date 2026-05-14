import Link from "next/link";

const footerNav = [
  { label: "Services", href: "#capabilities" },
  { label: "About", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="wordmark footer-wordmark">
            <span>IQ</span>
            <b>Integrations</b>
          </Link>
          <p>We sell outcomes, not software.</p>
        </div>

        <nav aria-label="Footer navigation">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <span>Operations: Chicago, IL</span>
          <a href="mailto:hello@iqintegrations.com">hello@iqintegrations.com</a>
          <a href="tel:+18005550100">(800) 555-0100</a>
        </div>

        <div className="footer-legal">
          <Link href="#privacy">Privacy</Link>
          <Link href="#terms">Terms</Link>
          <span>© 2026 IQ Integrations. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
