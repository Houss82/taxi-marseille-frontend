// ✅ SERVER COMPONENT - Pas de "use client"
// L'interactivité (scroll, menu mobile) est gérée par HeaderClient

import Image from "next/image";
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
        label: "Mise à disposition (mariage & congrès)",
        href: "/services/mise-a-disposition-mariage-congres",
      },
      {
        label: "Mercedes van 8 places",
        href: "/services/van-8-places",
      },
      {
        label: "Port de croisières",
        href: "/services/port-de-croisieres",
      },
      {
        label: "Gare Saint-Charles",
        href: "/services/taxi-gare-saint-charles",
      },
      {
        label: "City tour : visite de Marseille",
        href: "/services/city-tour-visite-marseille",
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
          <Image
            src="/taxi-Marseille-logo.png"
            alt="Taxi Marseille"
            width={40}
            height={40}
            className="h-10 w-10 object-contain shrink-0"
            priority
          />
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
