"use client";

export default function Home() {
  // ===== LINKS =====
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%20-%20I%20am%20interested%20in%20premium%20financing%20%26%20loans%2Fcredit%20cards.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%20-%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20-%20Inquiry";

  // ===== GA4 EVENT HELPER =====
  const trackEvent = (eventName, params = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: "engagement",
        event_label: "OJOVEST",
        ...params,
      });
    }
  };

  // For outbound clicks (WhatsApp / Email)
  const trackOutbound = (eventName, url) => {
    trackEvent(eventName, { outbound_url: url });
  };

  return (
    <main className="container">
      {/* ===== Header ===== */}
      <header className="header">
        <div className="headerLeft">
          <img src="/logo.png" alt="OJOVEST Wealth Management" className="logo" />
          <div className="subtitle">Ultra HNI · India & NRI</div>

          <div className="topLinks">
            <a
              className="topLink"
              href={emailLink}
              onClick={() => trackEvent("email_lead")}
            >
              Email Director
            </a>
            <span className="dot">•</span>
            <a
              className="topLink"
              href={whatsappMainLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackOutbound("qualify_lead", whatsappMainLink)}
            >
              WhatsApp Now
            </a>
          </div>
        </div>

        <a
          className="header-cta"
          href={whatsappHeaderLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutbound("close_convert_lead", whatsappHeaderLink)}
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
        Discreet, relationship-led financing for Ultra HNI clients — faster approvals,
        premium terms, and white-glove assistance.
      </p>

      {/* ===== CTA Row ===== */}
      <div className="ctaRow">
        <a
          className="cta"
          href={whatsappMainLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutbound("qualify_lead", whatsappMainLink)}
        >
          Apply via WhatsApp →
        </a>

        <a
          className="ctaSecondary"
          href={emailLink}
          onClick={() => trackEvent("email_lead")}
        >
          Request a Call (Email)
        </a>
      </div>

      {/* ===== Trust points ===== */}
      <ul className="trustList">
        <li>Confidential & secure</li>
        <li>Multi-lender comparison</li>
        <li>Dedicated handling</li>
      </ul>

      {/* ===== Card ===== */}
      <div className="card">
        <h3>Fast Track Concierge</h3>
        <p>
          Share your requirements — we’ll suggest the best matched lenders/cards and
          guide documentation.
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
            onClick={() => trackOutbound("close_convert_lead", whatsappMainLink)}
          >
            WhatsApp Now →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() => trackEvent("email_lead")}
          >
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile, documentation and lender policies.
        </p>
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footerLinks">
          <span className="footerBrand">OJOVEST</span>
          <span className="dot">•</span>
          <a href={emailLink} onClick={() => trackEvent("email_lead")}>
            Email
          </a>
          <span className="dot">•</span>
          <a
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackOutbound("qualify_lead", whatsappMainLink)}
          >
            WhatsApp
          </a>
          <span className="dot">•</span>
          <a
            href="/privacy"
            onClick={() => trackEvent("privacy_open")}
          >
            Privacy
          </a>
        </div>

        <p className="footerDisclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card introductions.
          Final approval, pricing, eligibility, and documentation requirements are determined
          solely by partner banks/NBFCs.
        </p>

        <p className="footerCopyright">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
