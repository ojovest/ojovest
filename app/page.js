export default function Home() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>Ojovest</h1>
      <p>India’s Smart Loan & Financial Marketplace</p>

      <section>
        <h2>Loans We Offer</h2>
        <ul>
          <li>Personal Loan</li>
          <li>Business Loan</li>
          <li>Home Loan</li>
          <li>Loan Against Property</li>
          <li>Credit Card</li>
        </ul>
      </section>

      <section>
        <h2>Why Ojovest?</h2>
        <ul>
          <li>✔ Compare multiple lenders</li>
          <li>✔ Instant eligibility check</li>
          <li>✔ 100% online process</li>
          <li>✔ Safe & secure</li>
        </ul>
      </section>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Apply Now
      </button>
    </main>
  );
}
