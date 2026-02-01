import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "OJOVEST | Ultra HNI Wealth Management",
  description:
    "Premium Loans & Elite Credit Card Offers — relationship-led financing for Ultra HNI clients (India & NRI).",

  // Google Search Console verification (your token)
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4: load gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZQFTXMEDC"
          strategy="afterInteractive"
        />

        {/* GA4: init */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-KZQFTXMEDC', {
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
