import { gaEvent } from "./lib/gtag";

export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20premium%20financing%20%26%20loans%2Fcredit%20cards.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20-%20Inquiry";

  return (
    <main className="container">
      {/* Header */}
      <header className="header">
        <div className="headerLeft">
          <img src="/logo.png" alt="OJOVEST Wealth Management" className="logo" />
          <div className="subtitle">Ultra HNI · India &amp; NRI</div>

          <div className="topLinks">
            <a
              className="topLink"
              href={emailLink}
              onClick={() =>
                gaEvent({
                  action: "email_click",
                  category: "Lead",
                  label: "Header: Email Director",
                })
              }
            >
              Email Director
            </a>
            <span className="dot">•</span>
            <a
              className="topLink"
              href={whatsappMainLink}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                gaEvent({
                  action: "whatsapp_click",
                  category: "Lead",
                  label: "Header: WhatsApp Now",
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
            gaEvent({
              action: "whatsapp_click",
              category: "Lead",
              label: "Header: WhatsApp Concierge",
            })
          }
        >
          WhatsApp Concierge →
        </a>
      </header>

      {/* Hero */}
      <h1 className="heroTitle">
        Premium Loans &amp; <br />
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
            gaEvent({
              action: "cta_click",
              category: "Lead",
              label: "Hero: Apply via WhatsApp",
            })
          }
        >
          Apply via WhatsApp →
        </a>

        <a
          className="ctaSecondary"
          href={emailLink}
          onClick={() =>
            gaEvent({
              action: "cta_click",
              category: "Lead",
              label: "Hero: Request a Call (Email)",
            })
          }
        >
          Request a Call (Email)
        </a>
      </div>

      {/* Trust points */}
      <ul className="trustList">
        <li>Confidential &amp; secure</li>
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
            <div className="cardValue">India &amp; NRI</div>
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
              gaEvent({
                action: "whatsapp_click",
                category: "Lead",
                label: "Card: WhatsApp Now",
              })
            }
          >
            WhatsApp Now →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() =>
              gaEvent({
                action: "email_click",
                category: "Lead",
                label: "Card: Email Director",
              })
            }
          >
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile, documentation and lender policies.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footerLinks">
          <span className="brand">OJOVEST</span>
          <span className="dot">•</span>
          <a
            href={emailLink}
            onClick={() =>
              gaEvent({
                action: "email_click",
                category: "Lead",
                label: "Footer: Email",
              })
            }
          >
            Email
          </a>
          <span className="dot">•</span>
          <a
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              gaEvent({
                action: "whatsapp_click",
                category: "Lead",
                label: "Footer: WhatsApp",
              })
            }
          >
            WhatsApp
          </a>
          <span className="dot">•</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Privacy
          </a>
        </div>

        <p className="disclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card introductions.
          Final approval, pricing, eligibility, and documentation requirements are determined solely
          by partner banks/NBFCs.
        </p>

        <p className="copyright">© 2026 OJOVEST Wealth Management. All rights reserved.</p>
      </footer>
    </main>
  );
}
