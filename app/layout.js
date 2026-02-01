import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Elite Credit Cards",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients in India & NRI — premium loans, elite credit cards, and white-glove assistance.",
  metadataBase: new URL("https://www.ojovest.com"),
  alternates: {
    canonical: "https://www.ojovest.com/",
  },
  openGraph: {
    title: "OJOVEST | Ultra HNI Loans & Elite Credit Cards",
    description:
      "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
    url: "https://www.ojovest.com/",
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

  // ✅ Google Search Console verification (keep your existing token here)
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ GA4: Load gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KZQFTXMEDC`}
          strategy="afterInteractive"
        />

        {/* ✅ GA4: Initialize */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZQFTXMEDC', {
              anonymize_ip: true
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
