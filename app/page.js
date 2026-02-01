"use client";

import { event } from "./lib/gtag";

export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%20-%20I%20am%20interested%20in%20premium%20financing%20%26%20loans%20%2F%20credit%20cards.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%20-%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20Inquiry";

  const trackClick = (label) => {
    event({
      action: "click_cta",
      category: "engagement",
      label,
    });
  };

  return (
    <main className="container">
      {/* Header */}
      <header className="header">
        <div className="headerLeft">
          <img src="/logo.png" alt="OJOVEST Wealth Management" className="logo" />
          <div className="subtitle">ULTRA HNI · INDIA & NRI</div>

          <div className="topLinks">
            <a
              className="topLink"
              href={emailLink}
              onClick={() => trackClick("header_email_director")}
            >
              Email Director
            </a>
            <span className="dot">•</span>
            <a
              className="topLink"
              href={whatsappHeaderLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackClick("header_whatsapp_now")}
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
          onClick={() => trackClick("header_whatsapp_concierge")}
        >
          WhatsApp Concierge →
        </a>
      </header>

      {/* Hero */}
      <h1 className="heroTitle">
        Premium Loans & <br />
        Elite Credit Card Offers
      </h1>

      <p className="heroDesc">
        Discreet, relationship-led financing for Ultra HNI clients — faster approvals,
        premium terms, and white-glove assistance.
      </p>

      {/* CTA */}
      <div className="ctaRow">
        <a
          className="cta"
          href={whatsappMainLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClick("main_apply_whatsapp")}
        >
          Apply via WhatsApp →
        </a>

        <a
          className="ctaSecondary"
          href={emailLink}
          onClick={() => trackClick("main_request_call_email")}
        >
          Request a Call (Email)
        </a>
      </div>

      {/* Trust */}
      <ul className="trustList">
        <li>Confidential & secure</li>
        <li>Multi-lender comparison</li>
        <li>Dedicated handling</li>
      </ul>

      {/* Card */}
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
            onClick={() => trackClick("card_whatsapp_now")}
          >
            WhatsApp Now →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() => trackClick("card_email_director")}
          >
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile, documentation and
          lender policies.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footerLinks">
          <a href="/" onClick={() => trackClick("footer_home")}>OJOVEST</a>
          <span>•</span>
          <a href={emailLink} onClick={() => trackClick("footer_email")}>Email</a>
          <span>•</span>
          <a
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackClick("footer_whatsapp")}
          >
            WhatsApp
          </a>
          <span>•</span>
          <a href="/privacy" onClick={() => trackClick("footer_privacy")}>Privacy</a>
          <span>•</span>
          <a href="/terms" onClick={() => trackClick("footer_terms")}>Terms</a>
        </div>

        <p className="disclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card
          introductions. Final approval, pricing, eligibility, and documentation
          requirements are determined solely by partner banks/NBFCs.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
