export default function PrivacyPolicy() {
  return (
    <main className="container">
      <section className="privacy">
        <h1 className="privacyTitle">Privacy Policy</h1>

        <p className="privacyText">
          At <strong>OJOVEST Wealth Management</strong>, your privacy is extremely
          important to us. This Privacy Policy outlines how we collect, use, and
          protect your information when you engage with our services.
        </p>

        <h2 className="privacyHeading">1. Information We Collect</h2>
        <p className="privacyText">
          We may collect personal information such as your name, contact details,
          financial requirements, and related information when you contact us via
          WhatsApp, email, or other communication channels.
        </p>

        <h2 className="privacyHeading">2. How We Use Your Information</h2>
        <p className="privacyText">
          Your information is used solely to:
        </p>
        <ul className="privacyList">
          <li>Understand your financial needs</li>
          <li>Connect you with suitable partner banks/NBFCs</li>
          <li>Provide concierge-level assistance</li>
          <li>Communicate updates related to your inquiry</li>
        </ul>

        <h2 className="privacyHeading">3. Information Sharing</h2>
        <p className="privacyText">
          OJOVEST does not sell or rent your personal data. Information may only
          be shared with trusted financial institutions strictly for the purpose
          of processing your request.
        </p>

        <h2 className="privacyHeading">4. Data Security</h2>
        <p className="privacyText">
          We follow industry-standard practices to safeguard your data. However,
          no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="privacyHeading">5. Consent</h2>
        <p className="privacyText">
          By contacting OJOVEST, you consent to the collection and use of your
          information as described in this policy.
        </p>

        <h2 className="privacyHeading">6. Contact Us</h2>
        <p className="privacyText">
          For any privacy-related concerns, please contact us at{" "}
          <a href="mailto:director@ojovest.com">director@ojovest.com</a>.
        </p>

        <p className="privacyFooter">
          © {new Date().getFullYear()} OJOVEST Wealth Management. All rights
          reserved.
        </p>
      </section>
    </main>
  );
}
