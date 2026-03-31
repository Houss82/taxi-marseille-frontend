export const metadata = {
  title:
    "Taxi Joliette & Euroméditerranée Marseille | Docks & affaires | Taxi Marseille",
  description:
    "Taxi quartier Joliette, Euroméditerranée, Docks, gare maritime : trajets pro, croisières et musées. Service 24h/24 à Marseille.",
  keywords:
    "taxi joliette marseille, taxi euromediterranee, taxi docks marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/secteurs/joliette-euromediterranee",
  },
};

import Button from "@/app/components/ui/Button";
import { Building2, Clock, MapPin, Ship } from "lucide-react";
import Image from "next/image";

export default function JolietteEuromediterranee() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/cannes-hotels.jpg"
          alt="Taxi Joliette Euroméditerranée Marseille"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Euroméditerranée
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Joliette &amp; Euroméditerranée
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Affaires, croisières grandes lignes et musées
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Bureaux", desc: "Tours & médias" },
              { icon: Ship, label: "Gare maritime", desc: "Grandes lignes" },
              { icon: Clock, label: "24h/24", desc: "Dispo" },
              { icon: MapPin, label: "Mucem", desc: "À proximité" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{info.label}</h3>
                  <p className="text-sm text-muted-foreground">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 text-lg text-gray-800 leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Un quartier en transformation
        </h2>
        <p>
          Entre les <strong>Docks</strong>, les tours de bureaux et la
          <strong> gare maritime</strong> des grandes lignes croisières, le
          trafic et les zones de dépose évoluent souvent. Nos chauffeurs
          suivent les accès autorisés et les créneaux d&apos;affluence.
        </p>
        <p>
          Idéal pour les rendez-vous professionnels, les transferts depuis la
          gare Saint-Charles ou l&apos;aéroport vers le siège social ou le
          terminal croisiériste.
        </p>
        <div className="flex gap-4 pt-4">
          <Button href="/reservation" className="bg-accent text-accent-foreground">
            Réserver un taxi
          </Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </section>
    </main>
  );
}
