import "./globals.css";

export const metadata = {
  title: "OJOVEST | Premium Loans & Elite Credit Cards",
  description:
    "Discreet, relationship-led financing for Ultra HNI clients in India & NRI.",
  robots: {
    index: true,
    follow: true,
  },
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
