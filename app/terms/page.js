export default function TermsPage() {
  return (
    <main className="container">
      <section className="legal">
        <h1 className="legalTitle">Terms &amp; Conditions</h1>

        <p className="legalText">
          Welcome to <strong>OJOVEST Wealth Management</strong>. By accessing our
          website or contacting us via WhatsApp/email, you agree to the following
          Terms &amp; Conditions.
        </p>

        <h2 className="legalHeading">1. Nature of Service</h2>
        <p className="legalText">
          OJOVEST provides a concierge support service for loan and credit card
          introductions. We help clients connect with partner banks/NBFCs and
          guide documentation.
        </p>

        <h2 className="legalHeading">2. No Guarantee of Approval</h2>
        <p className="legalText">
          Final approval, pricing, eligibility, and documentation requirements
          are decided solely by partner banks/NBFCs. OJOVEST does not guarantee
          loan/credit card approval or specific terms.
        </p>

        <h2 className="legalHeading">3. Client Responsibility</h2>
        <p className="legalText">
          You are responsible for providing accurate and complete information.
          Any incorrect or incomplete data may impact eligibility or processing.
        </p>

        <h2 className="legalHeading">4. Turnaround Time</h2>
        <p className="legalText">
          Turnaround times (TAT) shown on the website are indicative and may
          vary based on profile review, lender policies, and documentation.
        </p>

        <h2 className="legalHeading">5. Third-Party Links</h2>
        <p className="legalText">
          Our website may include third-party links (WhatsApp, email, bank/NBFC
          portals). We are not responsible for third-party content, policies, or
          services.
        </p>

        <h2 className="legalHeading">6. Limitation of Liability</h2>
        <p className="legalText">
          OJOVEST is not liable for any direct or indirect losses arising from
          lender decisions, delays, pricing changes, or third-party actions.
        </p>

        <h2 className="legalHeading">7. Updates to Terms</h2>
        <p className="legalText">
          We may update these Terms &amp; Conditions at any time. Continued use
          of the website/services indicates acceptance of updated terms.
        </p>

        <h2 className="legalHeading">8. Contact</h2>
        <p className="legalText">
          For questions, contact{" "}
          <a href="mailto:director@ojovest.com">director@ojovest.com</a>.
        </p>

        <p className="legalFooter">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights
          reserved.
        </p>
      </section>
    </main>
  );
}
