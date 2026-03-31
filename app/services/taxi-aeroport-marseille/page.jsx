export const metadata = {
  title:
    "Taxi aéroport Marseille Marignane (MRS) | Service 24h/24 | Taxi Marseille",
  description:
    "Taxi aéroport Marseille entre la ville et l'aéroport Marseille Provence (MRS) : prix fixe, suivi de vol, prise en charge terminal. Réservez votre course.",
  keywords:
    "taxi aéroport marseille, taxi marignane, navette mrs, aéroport marseille provence",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/taxi-aeroport-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import { CheckCircle, Clock, Plane, Shield, Users } from "lucide-react";
import Image from "next/image";

export default function TaxiAeroportMarseille() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/aeroport-marseille.jpg"
          alt="Taxi aéroport Marseille Marignane - Taxi Marseille"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Plane className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Aéroport MRS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi aéroport Marseille Provence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Navette taxi 24h/24 entre Marignane et Marseille centre, gare
            Saint-Charles ou littoral
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi aéroport Marseille
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "25–40 min", desc: "Vers centre-ville" },
              { icon: Shield, label: "Prix fixe", desc: "Sans surprise" },
              { icon: Plane, label: "Suivi vol", desc: "Retards inclus" },
              { icon: Users, label: "24h/24", desc: "Disponible" },
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Taxi aéroport Marseille (MRS)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L&apos;aéroport Marseille Provence dessert le monde entier. Nous
              assurons vos trajets vers le Vieux-Port, les business districts,
              les ports de plaisance ou votre domicile.
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                <strong className="text-accent">Taxi Marseille</strong> prend en
                charge vos arrivées et départs au terminal : panneau nominatif,
                aide aux bagages ; berlines, SUV ou{" "}
                <strong>van Mercedes 8 places</strong> selon le nombre de
                passagers.
              </p>
            </div>

            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Le trajet vers le centre de Marseille s&apos;étale en général
                sur <strong>25 à 40 minutes</strong> selon le trafic sur les
                autoroutes A7 / A55 et le périphérique.
              </p>
            </div>

            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Pourquoi réserver avec nous ?
              </h3>
              <ul className="space-y-4 text-gray-800">
                {[
                  "Tarif annoncé avant la course",
                  "Chauffeur à l'accueil avec panneau",
                  "Suivi des vols en temps réel",
                  "Véhicules premium climatisés (dont van 8 places)",
                  "Pas de supplément bagages raisonnables",
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
                Réservez votre taxi aéroport Marseille
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Confirmation immédiate par email ou SMS.
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
