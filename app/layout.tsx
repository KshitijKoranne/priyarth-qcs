import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Priyarth QCS - Pharmaceutical Quality & Compliance Services",
    template: "%s | Priyarth QCS"
  },
  description: "Your Partner in Pharmaceutical Excellence — Ensuring Quality. Empowering Compliance. Comprehensive GMP trainings, audits, CAPA management, and regulatory filing support.",
  keywords: [
    "pharmaceutical quality",
    "GMP compliance",
    "pharmaceutical audits",
    "regulatory compliance",
    "FDA compliance",
    "MHRA",
    "pharmaceutical training",
    "computer system validation",
    "CSV",
    "regulatory filings",
    "DMF",
    "pharmaceutical consulting"
  ],
  authors: [{ name: "Priyarth QCS" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyarthqcs.com",
    siteName: "Priyarth QCS",
    title: "Priyarth QCS - Pharmaceutical Quality & Compliance Services",
    description: "Your Partner in Pharmaceutical Excellence — Ensuring Quality. Empowering Compliance.",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
