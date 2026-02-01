"use client";

function track(eventName, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else {
      // fallback: still helps you confirm clicks in console
      console.log("[GA not ready yet] event:", eventName, params);
    }
  } catch (e) {
    console.log("track error:", e);
  }
}

export default function Home() {
  const whatsappHeaderLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20premium%20financing%20%28Loans%2FCredit%20Cards%29.";
  const whatsappMainLink =
    "https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20%26%20Elite%20Credit%20Card%20Offers.";
  const emailLink =
    "mailto:director@ojovest.com?subject=Premium%20Loans%20%26%20Elite%20Credit%20Cards%20-%20Inquiry";

  return (
    <main className="container">
      {/* Header */}
      <header className="header">
        <div className="headerLeft">
          <img
            src="/logo.png"
            alt="OJOVEST Wealth Management"
            className="logo"
          />

          <div className="subtitleRow">
            <div className="subtitle">ULTRA HNI · INDIA & NRI</div>

            <div className="topLinks">
              <a
                className="topLink"
                href={emailLink}
                onClick={() =>
                  track("click_email_director_top", {
                    link_type: "email",
                    position: "top",
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
                  track("click_whatsapp_top", {
                    link_type: "whatsapp",
                    position: "top",
                  })
                }
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
          onClick={() =>
            track("click_whatsapp_concierge", {
              link_type: "whatsapp",
              position: "header_button",
            })
          }
        >
          WhatsApp Concierge →
        </a>
      </header>

      {/* Hero */}
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
            onClick={() =>
              track("click_apply_whatsapp", {
                link_type: "whatsapp",
                position: "hero",
              })
            }
          >
            Apply via WhatsApp →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() =>
              track("click_request_call_email", {
                link_type: "email",
                position: "hero",
              })
            }
          >
            Request a Call (Email)
          </a>
        </div>

        <ul className="trustList">
          <li>Confidential &amp; secure</li>
          <li>Multi-lender comparison</li>
          <li>Dedicated handling</li>
        </ul>
      </section>

      {/* Card */}
      <section className="card">
        <h3>Fast Track Concierge</h3>
        <p className="cardDesc">
          Share your requirements — we’ll suggest the best matched lenders/cards
          and guide documentation.
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
              track("click_whatsapp_now_card", {
                link_type: "whatsapp",
                position: "card",
              })
            }
          >
            WhatsApp Now →
          </a>

          <a
            className="ctaSecondary"
            href={emailLink}
            onClick={() =>
              track("click_email_director_card", {
                link_type: "email",
                position: "card",
              })
            }
          >
            Email Director
          </a>
        </div>

        <p className="finePrint">
          *Turnaround time is indicative and depends on profile, documentation
          and lender policies.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerLinks">
          <span className="footerBrand">OJOVEST</span>
          <span className="dot">•</span>
          <a
            className="footerLink"
            href={emailLink}
            onClick={() => track("click_footer_email")}
          >
            Email
          </a>
          <span className="dot">•</span>
          <a
            className="footerLink"
            href={whatsappMainLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("click_footer_whatsapp")}
          >
            WhatsApp
          </a>
          <span className="dot">•</span>
          <a
            className="footerLink"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              track("click_footer_privacy");
              alert("Privacy policy page coming soon.");
            }}
          >
            Privacy
          </a>
        </div>

        <p className="footerDisclaimer">
          Disclaimer: OJOVEST provides concierge support for loan and credit card
          introductions. Final approval, pricing, eligibility, and documentation
          requirements are determined solely by partner banks/NBFCs.
        </p>

        <p className="footerCopy">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
