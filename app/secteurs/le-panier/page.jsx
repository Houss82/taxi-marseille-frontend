export const metadata = {
  title:
    "Taxi Le Panier Marseille | Quartier historique | Taxi Marseille",
  description:
    "Taxi vers Le Panier : ruelles piétonnes, Major, Vieille Charité. Dépose aux accès près de la cathédrale et remontées vers les belvédères.",
  keywords:
    "taxi panier marseille, taxi quartier panier, taxi marseille vieille ville",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/secteurs/le-panier",
  },
};

import Button from "@/app/components/ui/Button";
import { Camera, Car, Castle, Clock } from "lucide-react";
import Image from "next/image";

export default function LePanier() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/taxi-cannes-le-suquet.png"
          alt="Taxi Le Panier Marseille quartier historique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Castle className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Quartier historique
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Le Panier
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Ruelles, street-art, Major &amp; La Vieille Charité
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
              { icon: Castle, label: "Patrimoine", desc: "Plus vieux quartier" },
              { icon: Clock, label: "24h/24", desc: "Dispo" },
              { icon: Car, label: "Accès", desc: "Points de dépose" },
              { icon: Camera, label: "Vues", desc: "Belvédères" },
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
          Circuler au Panier en taxi
        </h2>
        <p>
          Le <strong>Panier</strong> est majoritairement piéton : nous vous
          déposons aux <strong>accès</strong> les plus proches du cours ou de
          la place de la Major (selon réglementation du jour) pour vous
          éviter les marches inutiles avec bagages.
        </p>
        <p>
          Parfait pour une visite touristique, un dîner ou un shooting
          photo avant le retour vers votre hôtel ou l&apos;aéroport.
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
