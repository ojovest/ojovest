export const metadata = {
  title: "OJOVEST | Ultra HNI Loans & Elite Credit Cards",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
  alternates: {
    canonical: "https://www.ojovest.com",
  },
  openGraph: {
    title: "OJOVEST | Ultra HNI Loans & Elite Credit Cards",
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

  // ✅ GOOGLE VERIFICATION — THIS IS ENOUGH
  verification: {
    google: "MshjPsG4x3vwyHM68IlWpxRn8DBZqiSVGAQnDTa0ivw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
