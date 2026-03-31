export const metadata = {
  title:
    "Taxi Hôtels & Événements Marseille | Pharo, Chanot, Vélodrome | Taxi Marseille",
  description:
    "Transferts taxi pour hôtels 5*, palais des congrès du Pharo, Parc Chanot, Orange Vélodrome. Service professionnel et discret à Marseille.",
  keywords:
    "taxi congrès marseille, taxi pharo, taxi chanot, taxi velodrome marseille, chauffeur privé hôtel",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/trajets-hotels-evenements",
  },
};

import Button from "@/app/components/ui/Button";
import { Building2, CheckCircle, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function TrajetsHotelsEvenements() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/marseille-evenements.jpg"
          alt="Taxi hôtels et événements Marseille"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Business & VIP
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Hôtels & Événements
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Pharo, Chanot, Vélodrome, centres d&apos;affaires Euroméditerranée
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un véhicule
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "Ponctualité", desc: "Congrès & matchs" },
              { icon: Shield, label: "Discrétion", desc: "VIP & médias" },
              { icon: Building2, label: "Multi-sites", desc: "Pharo / Chanot" },
              { icon: Star, label: "Sur-mesure", desc: "Mise à disposition" },
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
            Un taxi pour vos événements à Marseille
          </h2>
          <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
            <p>
              Salons professionnels au <strong>Parc Chanot</strong>, séminaires
              vue mer au <strong>Palais du Pharo</strong>, matchs à l&apos;
              <strong>Orange Vélodrome</strong> ou soirées dans les hôtels du
              centre : nous planifions les déposes et prises en charge aux accès
              autorisés.
            </p>
            <ul className="space-y-3">
              {[
                "Coordination avec votre assistant(e) ou travel manager",
                "Berlines ou van Mercedes 8 places pour équipes et délégations",
                "Attente sur place si besoin (tarif horaire)",
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
              href="/contact"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
            >
              Demander un devis événement
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
