export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Elite Credit Cards",
  description:
    "OJOVEST provides discreet, relationship-led premium loans and elite credit card solutions for Ultra HNI clients in India & NRI. White-glove financial concierge.",
  keywords: [
    "Ultra HNI loans",
    "Premium loans India",
    "Elite credit cards",
    "High value loans",
    "Wealth management India",
    "NRI loans India",
    "Luxury banking concierge"
  ],
  authors: [{ name: "OJOVEST Wealth Management" }],
  openGraph: {
    title: "OJOVEST | Premium Loans & Elite Credit Card Offers",
    description:
      "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
    url: "https://www.ojovest.com",
    siteName: "OJOVEST",
    images: [
      {
        url: "https://www.ojovest.com/logo.png",
        width: 800,
        height: 600,
        alt: "OJOVEST Wealth Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
