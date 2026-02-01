"use client";

export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20premium%20financing%20%26%20loans%2Fcredit%20cards.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20-%20Inquiry";

  // ✅ GA event helper
  const track = (eventName, params = {}) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  };

  return (
    <main className="container">
      {/* Header */}
      <header className="header">
        <div className="headerLeft">
          <img src="/logo.png" alt="OJOVEST Wealth Management" className="logo" />
          <div className="subtitle">Ultra HNI · India & NRI</div>

          <div className="topLinks">
            <a
              className="topLink"
              href={emailLink}
              onClick={() =>
                track("email_click", {
                  link_text: "Email Director (top)",
                  link_url: emailLink,
                })
              }
            >
              Email Director
            </a>
            <span className="dot">•</span>
            <a
              className="topLink"
              href={whatsappHeaderLink}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                track("whatsapp_click", {
                  link_text: "WhatsApp Now (top)",
                  link_url: whatsappHeaderLink,
                })
              }
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
          onClick={() =>
            track("whatsapp_concierge_click", {
              link_text: "WhatsApp Concierge (header)",
              link_url: whatsappHeaderLink,
            })
          }
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

      {/* CTA Row */}
      <div className="ctaRow">
        <a
          className="cta"
          href={whatsappMainLink}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            track("apply_whatsapp_click", {
              link_text: "Apply via WhatsApp",
              link_url: whatsappMainLink,
            })
          }
        >
          Apply via WhatsApp →
        </a>

        <a
          className="ctaSecondary"
          href={emailLink}
          onClick={() =>
            track("request_call_email_click", {
              link_text: "Request a Call (Email)",
              link_url: emailLink,
            })
          }
        >
          Request a Call (Email)
        </a>
      </div>

      {/* Trust points */}
      <ul className="trustList">
        <li>Confidential & secure</li>
        <li>Multi-lender comparison</li>
        <li>Dedicated handling</li>
      </ul>

      {/* Card */}
      <div className="card">
        <h3>Fast Track Concierge</h3>
        <p>
          Share your requirements — we’ll suggest the best matched lenders/cards and guide
          documentation.
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
            onClick={() =>
              track("whatsapp_now_click", {
                link_text: "WhatsApp Now (card)",
                link_url: whatsappMainLink,
              })
            }
          >
            WhatsApp Now →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() =>
              track("email_click", {
                link_text: "Email Director (card)",
                link_url: emailLink,
              })
            }
          >
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile, documentation and lender
          policies.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footerLinks">
          <a
            href={emailLink}
            onClick={() =>
              track("footer_email_click", { link_text: "Email (footer)", link_url: emailLink })
            }
          >
            Email
          </a>
          <span>•</span>
          <a
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              track("footer_whatsapp_click", {
                link_text: "WhatsApp (footer)",
                link_url: whatsappMainLink,
              })
            }
          >
            WhatsApp
          </a>
          <span>•</span>
          <a href="/privacy">Privacy</a>
        </div>

        <div className="disclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card introductions.
          Final approval, pricing, eligibility, and documentation requirements are determined solely
          by partner banks/NBFCs.
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
