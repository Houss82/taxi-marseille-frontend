export const metadata = {
  title: "City tour Marseille | Visite de Marseille en taxi | Taxi Marseille",
  description:
    "City tour en taxi à Marseille : Vieux-Port, Panier, Notre-Dame-de-la-Garde, Corniche, Prado. Chauffeur local, itinéraire flexible, arrêts photos. Devis sur demande.",
  keywords:
    "city tour marseille, visite marseille taxi, chauffeur visite marseille, tour marseille en voiture, taxi touristique marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/city-tour-visite-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import { Camera, Compass, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CityTourVisiteMarseille() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-marseille-vieux-port.jpeg"
          alt="City tour Marseille — visite de Marseille en taxi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Compass className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Visite sur mesure
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            City tour : visiter Marseille en taxi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Itinéraire flexible, arrêts photos, chauffeur local
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Demander un city tour
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Timer, label: "Durée", desc: "1h · 2h · demi-journée" },
              { icon: Camera, label: "Arrêts", desc: "Photos & points de vue" },
              { icon: MapPin, label: "Incontournables", desc: "Vieux-Port, Panier, Bonne Mère" },
              { icon: Compass, label: "Sur mesure", desc: "Selon vos envies" },
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

      <section className="py-24 max-w-4xl mx-auto px-6 text-lg text-gray-800 leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Une visite de Marseille confortable (et efficace)
        </h2>
        <p>
          Le city tour est idéal si vous avez peu de temps ou si vous souhaitez
          optimiser la visite : votre chauffeur vous emmène sur les spots clés,
          vous dépose au plus près des accès autorisés et vous attend pendant
          les arrêts.
        </p>
        <p>
          Exemples d&apos;étapes : <strong>Vieux-Port</strong>,{" "}
          <strong>Le Panier</strong>, <strong>Notre-Dame-de-la-Garde</strong>,{" "}
          <strong>Corniche Kennedy</strong>, <strong>Prado</strong>,{" "}
          <strong>Joliette</strong> / J4. L&apos;itinéraire dépend de votre point
          de départ, de la circulation et du temps disponible.
        </p>
        <div className="flex gap-4 pt-4">
          <Button href="/reservation" className="bg-accent text-accent-foreground">
            Réserver une visite
          </Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Pour une escale, consulte aussi{" "}
          <Link
            href="/blog/taxi-marseille-port-croisiere-guide-2026"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            notre guide port de croisière
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

