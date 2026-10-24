import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | Full Stack Developer | MERN, Next.js & Shopify`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full Stack Developer with 3.5+ years of experience building modern web applications, backend services, API integrations, and Shopify solutions.",
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Shopify Developer",
    "React Developer",
    profile.name,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${profile.name} | Full Stack Developer | MERN, Next.js & Shopify`,
    description:
      "Full Stack Developer with 3.5+ years of experience building modern web applications, backend services, API integrations, and Shopify solutions.",
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Full Stack Developer specializing in MERN, Next.js, Shopify, and production systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070b12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
