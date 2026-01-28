export default function Home() {
  return (
    <main className="container">
      
      {/* Header */}
      <header style={{ marginBottom: "32px" }}>
        <img
          src="/logo.png"
          alt="OJOVEST Wealth Management"
          style={{
            height: "42px",
            marginBottom: "12px"
          }}
        />
        <div className="subtle">
          Ultra HNI • India & NRI
        </div>
      </header>

      {/* Hero */}
      <h1>
        Premium Loans & <br />
        Elite Credit Card Offers
      </h1>

      <p className="description">
        Discreet, relationship-led financing for Ultra HNI clients —
        faster approvals, premium terms, and white-glove assistance.
      </p>

      {/* CTA */}
      <a
        href="https://wa.me/918651035362"
        className="cta"
        target="_blank"
      >
        Apply via WhatsApp
      </a>

      {/* Trust points */}
      <ul className="points">
        <li>✔ Confidential & secure</li>
        <li>✔ Multi-lender comparison</li>
        <li>✔ Dedicated handling</li>
      </ul>

      {/* Concierge card */}
      <div className="card">
        <h2>Fast Track Concierge</h2>
        <p>
          Share your requirements — we’ll suggest the best matched
          lenders/cards and guide documentation.
        </p>
        <p><strong>Loan Range:</strong> ₹50L to ₹50Cr+</p>
        <p><strong>TAT:</strong> 24–72 hrs (case based)</p>
      </div>

    </main>
  );
}
<a
  href="https://wa.me/918651035362"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    right: "18px",
    bottom: "18px",
    background: "linear-gradient(135deg, #c9a24d, #f5d27a)",
    color: "#000",
    padding: "14px 18px",
    borderRadius: "999px",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    zIndex: 9999
  }}
>
  WhatsApp Concierge
</a>
