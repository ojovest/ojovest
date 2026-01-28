export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20premium%20financing%20%26%20loans%20%2F%20credit%20card%20offers.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20-%20Inquiry";

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

          <div className="subtitleWrap">
            <div className="subtitle">ULTRA HNI · INDIA & NRI</div>

            <div className="topLinks">
              <a className="topLink" href={emailLink}>
                Email Director
              </a>
              <span className="dot">•</span>
              <a
                className="topLink"
                href={whatsappHeaderLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        <a
          className="headerCta"
          href={whatsappHeaderLink}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Concierge →
        </a>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero">
        <h1 className="heroTitle">
          Premium Loans & <br />
          Elite Credit Card Offers
        </h1>

        <p className="heroDesc">
          Discreet, relationship-led financing for Ultra HNI clients — faster
          approvals, premium terms, and white-glove assistance.
        </p>

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

        <ul className="trustList">
          <li>Confidential & secure</li>
          <li>Multi-lender comparison</li>
          <li>Dedicated handling</li>
        </ul>
      </section>

      {/* ===== Card ===== */}
      <section className="card">
        <h3 className="cardTitle">Fast Track Concierge</h3>
        <p className="cardDesc">
          Share your requirements — we’ll suggest the best matched lenders/cards
          and guide documentation.
        </p>

        <div className="cardGrid">
          <div className="cardItem">
            <div className="cardLabel">LOAN RANGE</div>
            <div className="cardValue">₹50L to ₹50Cr+</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">TAT</div>
            <div className="cardValue">24–72 hrs*</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">REGION</div>
            <div className="cardValue">India & NRI</div>
          </div>

          <div className="cardItem">
            <div className="cardLabel">SUPPORT</div>
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
          *Turnaround time is indicative and depends on profile, documentation
          and lender policies.
        </p>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footerLinks">
          <span className="brandMini">OJOVEST</span>
          <span className="dot">•</span>
          <a className="footerLink" href={emailLink}>
            Email
          </a>
          <span className="dot">•</span>
          <a
            className="footerLink"
            href={whatsappHeaderLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <span className="dot">•</span>
          <a className="footerLink" href="/privacy">
            Privacy
          </a>
        </div>

        <p className="disclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card
          introductions. Final approval, pricing, eligibility, and documentation
          requirements are determined solely by partner banks/NBFCs.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
