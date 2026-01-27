export const metadata = {
  title: "Ojovest | Loan & Financial Marketplace",
  description: "Compare loans and credit cards, check eligibility, and apply online with Ojovest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff" }}>{children}</body>
    </html>
  );
}
