export const metadata = {
  title:
    "Taxi Vieux-Port Marseille | Dépose port & croisières | Taxi Marseille",
  description:
    "Service taxi 24h/24 au Vieux-Port de Marseille : ferries, restaurants, Hôtel de ville, Mucem. Prise en charge et retours de soirée.",
  keywords:
    "taxi vieux port marseille, taxi port marseille, dépose ferry marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/secteurs/vieux-port",
  },
};

import Button from "@/app/components/ui/Button";
import { Anchor, Car, Clock, MapPin, Ship } from "lucide-react";
import Image from "next/image";

export default function VieuxPort() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/port-cannes-yachts.jpg"
          alt="Taxi Vieux-Port Marseille"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Anchor className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Cœur de Marseille
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Vieux-Port
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Ferries, croisières, restos &amp; nuit marseillaise
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
              { icon: Ship, label: "Ferries", desc: "Corse & Algérie" },
              { icon: Clock, label: "24h/24", desc: "Dispo" },
              { icon: Car, label: "Dépose", desc: "Quais & Canebière" },
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
          Pourquoi un taxi au Vieux-Port ?
        </h2>
        <p>
          Le Vieux-Port concentre trafic piéton, événements et forte demande le
          week-end. Un <strong>taxi</strong> vous évite les tours de recherche
          de place et vous dépose au plus près des{" "}
          <strong>embarcadères</strong> ou de votre restaurant.
        </p>
        <p>
          Nous connaissons les créneaux chargés (départs ferry, soirées
          estivales) et adaptons l&apos;itinéraire (Vieux-Port, Joliette, Fort
          Saint-Jean).
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
