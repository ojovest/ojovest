import "./globals.css";

export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Credit Cards",
  description: "Exclusive premium loans & credit card solutions for Ultra HNI clients in India & NRI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
