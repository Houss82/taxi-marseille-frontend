export const metadata = {
  title:
    "Taxi Gare Saint-Charles Marseille | TGV, correspondances & port | Taxi Marseille",
  description:
    "Taxi gare Saint-Charles à Marseille : prise en charge quai, bagages, correspondances bus et navette vers le Vieux-Port ou l'aéroport. Service 24h/24.",
  keywords:
    "taxi gare saint-charles marseille, taxi gare tgv marseille, transfert gare marseille, taxi gare bus",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/taxi-gare-saint-charles",
  },
};

import Button from "@/app/components/ui/Button";
import { CheckCircle, Clock, Shield, Train, Users } from "lucide-react";
import Image from "next/image";

export default function TaxiGareSaintCharles() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/vieux-port-marseille.jpg"
          alt="Taxi Gare Saint-Charles Marseille - centre-ville et accès gare TGV"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Train className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Gare TGV & bus
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Gare Saint-Charles
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Arrivées et départs TGV, correspondances régionales et accès rapide
            au centre-ville, au port ou à l&apos;aéroport Marignane
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi depuis la gare
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Train, label: "Prise en charge", desc: "Quai & sortie gare" },
              { icon: Shield, label: "Prix clair", desc: "Devis ou forfait" },
              { icon: Clock, label: "Attente train", desc: "Retards pris en compte" },
              { icon: Users, label: "Van 8 places", desc: "Groupes & bagages" },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
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

      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Un taxi fiable à la gare Saint-Charles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hub national et régional : nous vous récupérons à la sortie de
              votre train ou vous déposons à temps pour votre départ.
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                <strong className="text-accent">Taxi Marseille</strong> gère
                vos transferts depuis ou vers la{" "}
                <strong>gare Saint-Charles</strong> : liaisons avec le{" "}
                <strong>Vieux-Port</strong>, <strong>Joliette</strong>, les
                hôtels du centre, l&apos;
                <strong>aéroport Marseille Provence (MRS)</strong> ou les
                terminaux de croisière.{" "}
                <strong>Mercedes Classe V 8 places</strong> sur demande pour
                familles et bagages volumineux.
              </p>
            </div>

            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Points forts
              </h3>
              <ul className="space-y-4 text-gray-800">
                {[
                  "Accueil avec panneau nominatif sur demande",
                  "Aide aux bagages et véhicules adaptés aux valises",
                  "Correspondances avec bus et métro maîtrisées",
                  "Trajets vers gare maritime ou zones Euroméditerranée",
                ].map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Réservez votre taxi gare Saint-Charles
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Indiquez votre train ou votre créneau — confirmation rapide.
              </p>
              <Button
                href="/reservation"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
              >
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
