import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Credit Card Offers",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients — faster approvals, premium terms, and white-glove assistance.",
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZQFTXMEDC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-KZQFTXMEDC', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
