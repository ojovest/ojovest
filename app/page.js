export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20premium%20financing";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20Inquiry";

  return (
    <main className="container">
      {/* ===== Header ===== */}
      <header className="header">
        <div className="headerLeft">
          <img
            src="/logo.png"
            alt="OJOVEST Wealth Management"
            className="logo"
          />
          <div className="subtitle">Ultra HNI · India & NRI</div>
        </div>

        <a
          className="header-cta"
          href={whatsappHeaderLink}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Concierge →
        </a>
      </header>

      {/* ===== Hero ===== */}
      <h1 className="heroTitle">
        Premium Loans & <br />
        Elite Credit Card Offers
      </h1>

      <p className="heroDesc">
        Discreet, relationship-led financing for Ultra HNI clients — faster
        approvals, premium terms, and white-glove assistance.
      </p>

      {/* ===== CTA Row ===== */}
      <div className="ctaRow">
        <a
          className="cta"
          href={whatsappMainLink}
          target="_blank"
          rel="noreferrer"
        >
          Apply via WhatsApp →
        </a>

        <a className="ctaSecondary" href={emailLink}>
          Request a Call (Email)
        </a>
      </div>

      {/* ===== Trust Points ===== */}
      <ul className="trustList">
        <li>Confidential & secure</li>
        <li>Multi-lender comparison</li>
        <li>Dedicated handling</li>
      </ul>

      {/* ===== Concierge Card ===== */}
      <div className="card">
        <h3>Fast Track Concierge</h3>
        <p>
          Share your requirements — we’ll suggest the best matched
          lenders/cards and guide documentation.
        </p>

        <div className="cardGrid">
          <div className="cardItem">
            <div className="cardLabel">Loan Range</div>
            <div className="cardValue">₹50L to ₹50Cr+</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">TAT</div>
            <div className="cardValue">24–72 hrs*</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">Region</div>
            <div className="cardValue">India & NRI</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">Support</div>
            <div className="cardValue">White-glove</div>
          </div>
        </div>

        <div className="cardActions">
          <a
            className="cta"
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Now →
          </a>

          <a className="ctaSecondary" href={emailLink}>
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile,
          documentation, and lender policies.
        </p>
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footerRow">
          <div className="footerBrand">OJOVEST</div>

          <div className="footerLinks">
            <a href={emailLink} className="footerLink">
              Email
            </a>
            <span className="footerDot">•</span>
            <a
              href={whatsappHeaderLink}
              target="_blank"
              rel="noreferrer"
              className="footerLink"
            >
              WhatsApp
            </a>
            <span className="footerDot">•</span>
            <a href="#privacy" className="footerLink">
              Privacy
            </a>
          </div>
        </div>

        <p className="footerDisclaimer" id="privacy">
          Disclaimer: OJOVEST provides concierge support for loan and credit card
          introductions. Final approval, pricing, eligibility, and documentation
          requirements are determined solely by partner banks/NBFCs.
        </p>

        <p className="footerCopyright">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
