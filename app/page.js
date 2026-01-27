const WHATSAPP_NUMBER = "918651035362";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi OJOVEST, I’m interested in Ultra HNI premium loans / credit cards. Please contact me."
);

export default function Page() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const emailLink = "mailto:director@ojovest.com?subject=Ultra%20HNI%20Inquiry%20-%20OJOVEST";

  return (
    <main className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">OJOVEST</div>
          <div className="topActions">
            <a className="btn ghost" href={emailLink}>Email Director</a>
            <a className="btn primary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp Now
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="badge">Ultra HNI • India & NRI</div>
            <h1>Premium Loans & Elite Credit Card Offers</h1>
            <p className="sub">
              Discreet, relationship-led financing for Ultra HNI clients — faster approvals,
              premium terms, and white-glove assistance.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href={waLink} target="_blank" rel="noreferrer">
                Apply via WhatsApp
              </a>
              <a className="btn ghost" href={emailLink}>Request a Call (Email)</a>
            </div>

            <div className="trustRow">
              <div className="trustItem">✔ Confidential & secure</div>
              <div className="trustItem">✔ Multi-lender comparison</div>
              <div className="trustItem">✔ Dedicated handling</div>
            </div>
          </div>

          <div className="card glass">
            <h3>Fast Track Concierge</h3>
            <p className="muted">
              Share your requirements — we’ll suggest the best matched lenders/cards and guide documentation.
            </p>

            <div className="miniList">
              <div className="mini">
                <div className="miniTitle">Loan Range</div>
                <div className="miniValue">₹50L to ₹50Cr+</div>
              </div>
              <div className="mini">
                <div className="miniTitle">TAT</div>
                <div className="miniValue">24–72 hrs* (case-based)</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Region</div>
                <div className="miniValue">India + NRI</div>
              </div>
            </div>

            <div className="divider" />

            <a className="btn primary full" href={waLink} target="_blank" rel="noreferrer">
              Message Director on WhatsApp
            </a>
            <a className="btn ghost full" href={emailLink}>Send Email</a>

            <p className="tiny">
              *Indicative timelines depend on profile, documentation and lender policies.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="grid3">
            <div className="card">
              <h3>Premium Loans</h3>
              <ul>
                <li>Home Loan (prime + private banks)</li>
                <li>Loan Against Property</li>
                <li>Business / Working Capital</li>
                <li>Personal Loan (select profiles)</li>
                <li>NRI financing support</li>
              </ul>
            </div>

            <div className="card">
              <h3>Elite Credit Cards</h3>
              <ul>
                <li>Super-premium cards</li>
                <li>Invite-only & high-limit options</li>
                <li>Travel, lifestyle & concierge benefits</li>
                <li>Upgrade/limit enhancement guidance</li>
                <li>Card-to-profile matching</li>
              </ul>
            </div>

            <div className="card">
              <h3>White-Glove Support</h3>
              <ul>
                <li>Discreet handling</li>
                <li>End-to-end documentation support</li>
                <li>Multi-lender comparison</li>
                <li>Priority escalation</li>
                <li>Dedicated relationship contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="twoCol">
            <div>
              <h2>Eligibility Snapshot</h2>
              <p className="muted">
                We’ll evaluate and suggest the best route based on your profile.
              </p>
              <div className="pillGrid">
                <span className="pill">High income / strong cashflows</span>
                <span className="pill">High credit score (preferred)</span>
                <span className="pill">Clean banking history</span>
                <span className="pill">Asset-backed options available</span>
                <span className="pill">NRI support for select banks</span>
              </div>
            </div>

            <div className="card glass">
              <h3>Start Now</h3>
              <p className="muted">
                Tap WhatsApp and share: loan type / amount / city / income range / existing liabilities.
              </p>
              <a className="btn primary full" href={waLink} target="_blank" rel="noreferrer">
                WhatsApp +91 86510 35362
              </a>
              <a className="btn ghost full" href={emailLink}>director@ojovest.com</a>
              <p className="tiny">
                We respond quickly during business hours (India).
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footInner">
          <div>
            <div className="brand small">OJOVEST</div>
            <div className="tiny muted">
              Premium loans & credit card offers for Ultra HNI clients (India & NRI).
            </div>
          </div>
          <div className="footLinks">
            <a href={emailLink}>Email</a>
            <a href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="container tiny muted disclaimer">
          Disclaimer: OJOVEST is an advisory/assistance platform. Loan/credit card approvals, pricing and limits
          are solely at the discretion of partner banks/NBFCs and subject to eligibility and documentation.
        </div>
      </footer>
    </main>
  );
}
