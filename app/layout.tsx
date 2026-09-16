import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://unleashworks.vercel.app";
const SITE_TITLE = "UNLEASHWORKS - Leadership Change Culture";
const SITE_DESCRIPTION =
  "UNLEASHWORKS is a leadership, change and culture practice by Nuzhath Ayaz. 20+ years of experience helping people grow, leaders evolve and organisations move forward with clarity and purpose.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1F44",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | UNLEASHWORKS",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "UNLEASHWORKS",
    "Nuzhath Ayaz",
    "leadership development",
    "change management",
    "organisational culture",
    "executive coaching",
    "Bengaluru leadership coach",
  ],
  authors: [{ name: "Nuzhath Ayaz" }],
  creator: "UNLEASHWORKS",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "UNLEASHWORKS",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNLEASHWORKS — Leadership. Change. Culture.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/u-mark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white font-sans overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "UNLEASHWORKS",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              founder: { "@type": "Person", name: "Nuzhath Ayaz" },
              email: "nuzhath.ayaz@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/nuzhath-ayaz-215b688",
              ],
            }),
          }}
        />
        <div id="top" aria-hidden="true" className="sr-only" />
        <Navbar />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
