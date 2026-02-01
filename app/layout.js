import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "OJOVEST | Ultra HNI Wealth Management",
  description:
    "Premium loans and elite credit card offers for Ultra HNI clients in India & NRI.",
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZQFTXMEDC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZQFTXMEDC', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
