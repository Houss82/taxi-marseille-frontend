import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 🌐 Métadonnées globales SEO pour Taxi Marseille
export const metadata = {
  metadataBase: new URL("https://www.taxis-marseille.fr"),
  title: {
    default:
      "Taxi Marseille – Taxi aéroport Marseille Marignane (MRS) & Chauffeur Privé",
    template: "%s | Taxi Marseille",
  },
  description:
    "Taxi Marseille 24h/24 : aéroport MRS, gare Saint-Charles, Vieux-Port, congrès. Van Mercedes 8 places pour groupes et familles.",
  keywords: [
    "taxi Marseille",
    "taxi à Marseille",
    "taxi aéroport marseille marignane",
    "chauffeur privé Marseille",
    "taxi Vieux-Port",
    "taxi gare Saint-Charles",
  ],
  alternates: {
    canonical: "/", // la home a en plus son canonical absolu dans page.jsx
  },
  openGraph: {
    title:
      "Taxi Marseille – Taxi aéroport Marseille Marignane (MRS) & Chauffeur Privé",
    description:
      "Service de taxi à Marseille : taxi aéroport Marseille (MRS), gare Saint-Charles, hôtels et événements. Réservation 24h/24.",
    url: "/",
    siteName: "Taxi Marseille",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/taxi-Marseille-logo.png",
        alt: "Logo Taxi Marseille",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/taxi-Marseille-logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/taxi-Marseille-logo.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/taxi-Marseille-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/taxi-Marseille-logo.png",
  },
};

// ISR: Revalidate toutes les 24 heures pour le SEO (si tu veux le garder global)
export const revalidate = 86400;

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
