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
    "Services taxi à Marseille : taxi aéroport Marseille (MRS), gare, hôtels, congrès, Aix & Cassis. Van Mercedes 8 places pour groupes. Chauffeur privé 24/7.",
  keywords:
    "services taxi marseille, taxi aéroport marseille marignane, taxi gare saint-charles, chauffeur privé marseille",
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
      title: "Hôtels & Événements",
      desc: "Pharo, Chanot, Vélodrome, centres d'affaires et hôtels 4-5*",
      image: "/marseille-evenements.jpg",
      details: ["Discrétion", "Ponctualité", "Mise à disposition possible"],
      href: "/services/trajets-hotels-evenements",
    },
    {
      title: "Marseille → Aix & Cassis",
      desc: "Escapades vers Aix-en-Provence, route des Crêtes, port de Cassis",
      image: "/saint-tropez-cannes.jpg",
      details: [
        "Longue distance",
        "Itinéraires sur mesure",
        "Van 8 places pour groupes",
      ],
      href: "/services/marseille-aix-cassis",
    },
    {
      title: "Gare Saint-Charles",
      desc: "Correspondances TGV, bus et navettes port",
      image: "/vieux-port-marseille.jpg",
      details: ["Prise en charge quai", "Bagages assistés", "Attente train"],
      href: "/services/taxi-gare-saint-charles",
    },
    {
      title: "Chauffeur privé",
      desc: "Mise à disposition demi-journée ou journée sur la métropole",
      image: "/chauffeur-prive.jpg",
      details: [
        "Planning flexible",
        "Van 8 places sur demande",
        "Business & loisirs",
      ],
      href: "/services/chauffeur-prive-marseille",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/service-page.jpg"
          alt="Services Taxi Marseille"
          fill
          className="object-cover"
          priority
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
    </main>
  );
}
