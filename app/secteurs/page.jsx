// app/secteurs/page.jsx — NOS SECTEURS MARSEILLE

export const metadata = {
  title: "Nos Secteurs | Taxi Marseille | Quartiers Desservis",
  description:
    "Quartiers desservis par Taxi Marseille : Vieux-Port, Joliette & Euroméditerranée, Le Panier. Taxi disponible 24h/24 sur la métropole.",
  keywords:
    "secteurs taxi marseille, taxi vieux-port, taxi joliette, taxi panier marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/secteurs",
  },
};

import Button from "@/app/components/ui/Button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Secteurs() {
  const secteurs = [
    {
      name: "Vieux-Port",
      description:
        "Cœur touristique, ferries, restaurants et accès rapide au Mucem",
      href: "/secteurs/vieux-port",
      image: "/port-cannes-yachts.jpg",
      features: [
        "Dépose minute quai du port",
        "Liaisons croisiéristes & navettes",
        "Soirées et événements nautiques",
        "Accès préfecture & mairie secteur",
      ],
    },
    {
      name: "Joliette & Euroméditerranée",
      description:
        "Tourisme, bureaux, Docks, grandes voies vers le nord de la ville",
      href: "/secteurs/joliette-euromediterranee",
      image: "/cannes-hotels.jpg",
      features: [
        "Quartier d'affaires moderne",
        "Musées et Docks Village",
        "Gare maritime grandes lignes",
        "Connexion autoroute A7 / A55",
      ],
    },
    {
      name: "Le Panier",
      description:
        "Village historique, ruelles piétonnes, Major et La Vieille Charité",
      href: "/secteurs/le-panier",
      image: "/taxi-cannes-le-suquet.png",
      features: [
        "Dépose aux points d'accès piétons",
        "Visites patrimoine & street-art",
        "Restaurants et vues sur la basilique",
        "Montée en voiture selon accès",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/service-page.jpg"
          alt="Nos secteurs Marseille - Taxi Marseille"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
            Nos Secteurs à Marseille
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Taxi disponible 24h/24 sur les quartiers emblématiques de la cité
            phocéenne
          </p>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Quartiers desservis par Taxi Marseille
            </h2>
            <p className="text-lg text-muted-foreground">
              Transport professionnel du centre historique aux zones
              contemporaines du littoral —{" "}
              <span className="text-foreground font-medium">
                van 8 places pour groupes sur réservation.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secteurs.map((secteur) => (
              <div
                key={secteur.href}
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={secteur.image}
                    alt={`Taxi ${secteur.name} Marseille`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold">{secteur.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{secteur.description}</p>
                  <ul className="space-y-2 mb-6">
                    {secteur.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={secteur.href}>
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      Découvrir le secteur
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d&apos;un taxi dans votre secteur ?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez votre trajet en quelques clics et recevez une confirmation
            immédiate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              className="bg-white text-accent hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un taxi
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              Nous contacter
            </Button>
          </div>
          <p className="mt-6 text-sm text-accent-foreground/80">
            📞 <strong>+33 6 98 76 54 32</strong> | ✉️{" "}
            <strong>contact@taxis-marseille.fr</strong>
            <br />
            Service disponible 24h/24 et 7j/7 • Réponse garantie sous 2 heures
          </p>
        </div>
      </section>
    </main>
  );
}
