export default function Home() {
  return (
    <main className="container">
      
      {/* Header */}
<header
  style={{
    marginBottom: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  }}
>
  <div>
    <img
      src="/logo.png"
      alt="OJOVEST Wealth Management"
      style={{ height: "44px", marginBottom: "10px" }}
    />
    <div className="subtitle">Ultra HNI · India & NRI</div>
  </div>

  <a
    href="https://wa.me/918651035362?text=Hi%20OJOVEST..."
  >
    WhatsApp Concierge →
  </a>
</header>


      {/* Hero */}
      <h1>
        Premium Loans & <br />
        Elite Credit Card Offers
      </h1>

      <p style={{ marginTop: "16px", color: "#ccc" }}>
        Discreet, relationship-led financing for Ultra HNI clients —
        faster approvals, premium terms, and white-glove assistance.
      </p>

      {/* CTA */}
      <a
        href="https://wa.me/918651035362?text=Hi%20OJOVEST%2C%20I%20am%20interested%20in%20Premium%20Loans%20or%20Elite%20Credit%20Cards."
        className="cta"
        style={{ marginTop: "24px", display: "inline-block" }}
      >
        WhatsApp Concierge →
      </a>

      {/* Trust points */}
      <ul style={{ marginTop: "20px", paddingLeft: "18px" }}>
        <li>Confidential & secure</li>
        <li>Multi-lender comparison</li>
        <li>Dedicated handling</li>
      </ul>

      {/* Card */}
      <div className="card">
        <h3>Fast Track Concierge</h3>
        <p>
          Share your requirements — we’ll suggest the best matched
          lenders/cards and guide documentation.
        </p>
        <p style={{ marginTop: "12px", fontWeight: 600 }}>
          Loan Range: ₹50L to ₹50Cr+
        </p>
        <p>TAT: 24–72 hrs*</p>
      </div>

    </main>
  );
}
