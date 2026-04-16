// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

export const metadata = {
  title:
    "Taxi Marseille → Aix-en-Provence & Cassis | Longue distance | Taxi Marseille",
  description:
    "Trajets taxi Marseille vers Aix-en-Provence, Cassis, route des Crêtes, calanques. Van 8 places, excursion journée. Réservez votre chauffeur.",
  keywords:
    "taxi marseille aix, taxi marseille cassis, excursion calanques, longue distance marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/marseille-aix-cassis",
  },
};

import { MapPin, Clock, Shield, CheckCircle, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function MarseilleAixCassis() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/saint-tropez-cannes.jpg"
          alt="Taxi Marseille Aix Cassis longue distance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Compass className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Longue distance
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Marseille → Aix & Cassis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Escapades vers le pays d&apos;Aix, le village de Cassis &amp; la
            route des Crêtes
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un trajet
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "~35 min", desc: "Marseille → Aix" },
              { icon: MapPin, label: "~45 min", desc: "Marseille → Cassis" },
              { icon: Shield, label: "Prix forfait", desc: "Sur devis" },
              { icon: Compass, label: "Itinéraires", desc: "Sur mesure" },
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

      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Découvrir la Provence depuis Marseille
          </h2>
          <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
            <p>
              Idéal pour une journée touristique ou un transfert professionnel :
              nous vous déposons au cœur d&apos;
              <strong>Aix-en-Provence</strong>, au port de{" "}
              <strong>Cassis</strong> pour embarquer vers les calanques, ou sur
              les points de vue de la <strong>route des Crêtes</strong>.
            </p>
            <p className="text-base text-gray-700">
              Pour les groupes jusqu&apos;à 8 passagers, voir notre page dédiée{" "}
              <Link
                href="/services/van-8-places"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Mercedes van 8 places
              </Link>
              .
            </p>
            <ul className="space-y-3">
              {[
                "Mercedes van 8 places pour les groupes",
                "Pauses photos et attente sur site",
                "Retour soirée possible après dîner à Cassis",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 text-center">
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
            >
              Organiser une excursion
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
