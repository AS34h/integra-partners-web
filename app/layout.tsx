import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

// Fonts optimisées avec next/font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "INTEGRA PARTNERS | Cabinet de conseil institutionnel",
  description: "Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures.",
  keywords: ["conseil", "stratégie", "transformation", "gouvernance", "capital humain"],
  authors: [{ name: "INTEGRA PARTNERS" }],
  openGraph: {
    title: "INTEGRA PARTNERS | Cabinet de conseil institutionnel",
    description: "Cabinet de conseil en stratégie et transformation",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
