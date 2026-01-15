import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
