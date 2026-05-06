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
      title: "Mercedes van 8 places",
      desc: "Van pour groupes : aéroport, gare, séminaires, Aix, Cassis",
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
      image: "/vieux-port-marseille.jpg",
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
    </main>
  );
}
