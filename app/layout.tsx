import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SITE_URL, KENNEL_NAME } from "@/lib/constants";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${KENNEL_NAME} — Shikoku Ken, San Francisco`,
    template: `%s — ${KENNEL_NAME}`,
  },
  description:
    "Yujira Sou is a Shikoku Ken preservation kennel in San Francisco dedicated to health testing and the continued stewardship of this rare Japanese breed.",
  openGraph: {
    title: `${KENNEL_NAME} — Shikoku Ken, San Francisco`,
    description:
      "Shikoku Ken preservation kennel in San Francisco, California.",
    url: SITE_URL,
    siteName: KENNEL_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${KENNEL_NAME} — Shikoku Ken, San Francisco`,
    description:
      "Shikoku Ken preservation kennel in San Francisco, California.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: KENNEL_NAME,
  url: SITE_URL,
  description:
    "Shikoku Ken preservation kennel in San Francisco, California.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
