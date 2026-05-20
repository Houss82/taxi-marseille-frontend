// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Services - Taxi Marseille",
  description:
    "Services taxi à Marseille : taxi aéroport Marseille (MRS), gare Saint-Charles, Mercedes van 8 places, mise à disposition (mariages & congrès), port de croisière et city tour. Service 24h/24.",
  keywords:
    "services taxi marseille, taxi aéroport marseille marignane, taxi gare saint-charles, van 8 places marseille, taxi mariage marseille, taxi congrès marseille, taxi port de croisière marseille, city tour marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services",
  },
  robots: { index: true, follow: true },
};

export default function Services() {
  const services = [
    {
      title: "Taxi aéroport Marseille (MRS)",
      desc: "Navette fiable vers / depuis l'aéroport Marseille Provence",
      image: "/aeroport-marseille.jpg",
      details: ["Prix fixe", "Suivi de vol", "24h/24 disponible"],
      href: "/services/taxi-aeroport-marseille",
    },
    {
      title: "Mise à disposition (mariage & congrès)",
      desc: "Chauffeur dédié : cérémonie, navettes invités, Parc Chanot, Pharo",
      image: "/chauffeur-prive.jpg",
      details: ["Chauffeur dédié", "Organisation sur mesure", "Devis clair"],
      href: "/services/mise-a-disposition-mariage-congres",
    },
    {
      title: "Taxi van Marseille",
      desc: "Mercedes 8 places — groupes, aéroport, gare, mariages, Aix, Cassis",
      image: "/taxi-marseille-service-8-places.jpeg",
      details: [
        "Jusqu’à 8 passagers",
        "Bagages & sièges enfants sur demande",
        "Devis transparent",
      ],
      href: "/services/van-8-places",
    },
    {
      title: "Port de croisières",
      desc: "Terminaux J4 & MPCT : embarquement, débarquement, bagages",
      image: "/taxi-marseille-port-de-croisiere.jpeg",
      details: ["Accès terminaux", "Groupes & bagages", "Coordination escale"],
      href: "/services/port-de-croisieres",
    },
    {
      title: "Gare Saint-Charles",
      desc: "Correspondances TGV, bus et navettes port",
      image: "/taxi-marseille-gare-st-charles.png",
      details: ["Prise en charge quai", "Bagages assistés", "Attente train"],
      href: "/services/taxi-gare-saint-charles",
    },
    {
      title: "City tour : visite de Marseille",
      desc: "Vieux-Port, Panier, Notre-Dame-de-la-Garde, littoral — sur mesure",
      image: "/vieux-port-marseille.jpg",
      details: ["Itinéraire flexible", "Arrêts photos", "Retour à l'heure"],
      href: "/services/city-tour-visite-marseille",
    },
    {
      title: "Chauffeur privé Marseille",
      desc: "Transferts sur mesure, grandes distances, ponctualité garantie",
      image: "/chauffeur-prive.jpg",
      details: ["À la carte", "Véhicules premium", "Réponse rapide"],
      href: "/services/chauffeur-prive-marseille",
    },
    {
      title: "Trajets Marseille – Aix – Cassis",
      desc: "Transferts et excursions vers Aix-en-Provence ou Cassis",
      image: "/splitshire-car-407165_1920.jpg",
      details: ["Longue distance", "Temps de trajet maîtrisé", "Van sur demande"],
      href: "/services/marseille-aix-cassis",
    },
    {
      title: "Hôtels & événements",
      desc: "Venues, salons, stade, arrivées groupées",
      image: "/marseille-evenements.jpg",
      details: ["Planning serré", "Bagages", "Attente sur site"],
      href: "/services/trajets-hotels-evenements",
    },
  ];

  const footerServiceLinks = [
    { href: "/services/taxi-aeroport-marseille", label: "Taxi aéroport Marseille (MRS)" },
    { href: "/services/port-de-croisieres", label: "Taxi port de croisière Marseille (J4 / MPCT)" },
    { href: "/services/van-8-places", label: "Taxi van Marseille — Mercedes 8 places" },
    { href: "/services/taxi-gare-saint-charles", label: "Taxi gare Saint-Charles" },
    { href: "/services/city-tour-visite-marseille", label: "City tour Marseille en taxi" },
    {
      href: "/services/mise-a-disposition-mariage-congres",
      label: "Mise à disposition mariage & congrès",
    },
    { href: "/services/chauffeur-prive-marseille", label: "Chauffeur privé Marseille" },
    { href: "/services/marseille-aix-cassis", label: "Trajets Marseille · Aix · Cassis" },
    { href: "/services/trajets-hotels-evenements", label: "Trajets hôtels & événements" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-marseille-service.jpeg"
          alt="Mercedes van 8 places — Taxi Marseille"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Nos Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href || "/reservation"}
                    className="mt-auto"
                  >
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Voir
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Liens texte : maillage clair pour les crawlers */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            Tous nos services taxi à Marseille
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Liens directs vers chaque prestation (pour faciliter la navigation et
            l’indexation).
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerServiceLinks.map(({ href, label }) => (
              <li key={href} className="list-none">
                <Link
                  href={href}
                  className="text-base font-medium text-cyan-800 underline-offset-2 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
