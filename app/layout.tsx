import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { organizationSchema, websiteSchema } from "./schema";

export const metadata: Metadata = {
  metadataBase: new URL('https://integrapartners.com'),
  title: {
    default: "INTEGRA PARTNERS | Cabinet de conseil institutionnel",
    template: "%s | INTEGRA PARTNERS"
  },
  description: "Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures. Expertise en gouvernance, stratégie, capital humain et transformation opérationnelle.",
  keywords: ["conseil stratégique", "gouvernance", "transformation", "stratégie d'entreprise", "capital humain", "Afrique", "OHADA", "consulting institutionnel", "diagnostic stratégique", "accompagnement dirigeants"],
  authors: [{ name: "INTEGRA PARTNERS", url: "https://integrapartners.com" }],
  creator: "INTEGRA PARTNERS",
  publisher: "INTEGRA PARTNERS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://integrapartners.com",
    siteName: "INTEGRA PARTNERS",
    title: "INTEGRA PARTNERS | Cabinet de conseil institutionnel",
    description: "Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTEGRA PARTNERS - Cabinet de conseil stratégique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTEGRA PARTNERS | Cabinet de conseil institutionnel",
    description: "Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://integrapartners.com",
    languages: {
      'fr': 'https://integrapartners.com',
    },
  },
  verification: {
    google: "verification_code_here",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-gray-100">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
