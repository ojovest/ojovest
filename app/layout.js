import "./globals.css";
import Script from "next/script";
import Analytics from "./components/Analytics";
import { GA_MEASUREMENT_ID } from "./lib/gtag";

export const metadata = {
  title: "OJOVEST | Wealth Management",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 base script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              anonymize_ip: true
            });
          `}
        </Script>
      </head>

      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
