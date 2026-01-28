export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Credit Cards",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
  openGraph: {
    title: "OJOVEST | Ultra HNI Loans & Credit Cards",
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

  // ✅ GOOGLE VERIFICATION (THIS IS THE KEY)
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDToAiww",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
