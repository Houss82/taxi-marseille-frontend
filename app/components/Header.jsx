// ✅ SERVER COMPONENT - Pas de "use client"
// L'interactivité (scroll, menu mobile) est gérée par HeaderClient

import Link from "next/link";
import HeaderClient from "./client/HeaderClient";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      {
        label: "Taxi aéroport Marseille (MRS)",
        href: "/services/taxi-aeroport-marseille",
      },
      {
        label: "Hôtels & Événements",
        href: "/services/trajets-hotels-evenements",
      },
      {
        label: "Marseille → Aix & Cassis",
        href: "/services/marseille-aix-cassis",
      },
    ],
  },
  {
    label: "Nos secteurs",
    href: "/secteurs",
    subItems: [
      {
        label: "Vieux-Port",
        href: "/secteurs/vieux-port",
      },
      {
        label: "Joliette & Euroméditerranée",
        href: "/secteurs/joliette-euromediterranee",
      },
      { label: "Le Panier", href: "/secteurs/le-panier" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <HeaderClient navItems={navItems}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">T</span>
          </div>
          <span
            className={`font-bold text-xl transition-colors ${
              // Le style sera géré par HeaderClient via isScrolled
              "text-white"
            }`}
          >
            Taxi Marseille
          </span>
        </Link>
      </HeaderClient>
    </header>
  );
}
