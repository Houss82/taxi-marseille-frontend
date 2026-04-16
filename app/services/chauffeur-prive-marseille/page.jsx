export const metadata = {
  title:
    "Chauffeur privé Marseille | Mise à disposition | Van 8 places | Taxi Marseille",
  description:
    "Chauffeur privé à Marseille : mise à disposition demi-journée ou journée, rendez-vous professionnels, déplacements sur la métropole. Mercedes, SUV et van 8 places.",
  keywords:
    "chauffeur privé marseille, mise à disposition marseille, vtc marseille, chauffeur affaires marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/chauffeur-prive-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import { Briefcase, CheckCircle, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function ChauffeurPriveMarseille() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/chauffeur-prive.jpg"
          alt="Chauffeur privé Marseille - mise à disposition et trajets professionnels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Sur mesure
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Chauffeur privé Marseille
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Mise à disposition, journées multi-rendez-vous et déplacements
            premium sur Marseille et la métropole
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Demander un chauffeur privé
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "À la carte", desc: "Demi-journée ou journée" },
              { icon: Briefcase, label: "Pro & VIP", desc: "Discrétion assurée" },
              { icon: Shield, label: "Véhicules haut de gamme", desc: "SUV & van 8 places" },
              { icon: Star, label: "Itinéraire flexible", desc: "Vos horaires" },
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
              Votre chauffeur dédié sur Marseille
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Idéal pour séminaires, tournées commerciales, accueil de clients
              ou journées touristiques sans vous soucier du stationnement.
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                Nous adaptons le véhicule à votre usage : berline ou SUV pour
                les trajets urbains,{" "}
                <strong>Mercedes van 8 places</strong> pour groupes,
                équipes ou matériel. Planning fluide entre bureaux, hôtels,
                salles de congrès et aéroport.
              </p>
            </div>

            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Ce que nous proposons
              </h3>
              <ul className="space-y-4 text-gray-800">
                {[
                  "Mise à disposition avec attente sur place",
                  "Chauffeur bilingue sur demande (selon disponibilité)",
                  "Facturation claire pour entreprises",
                  "Van 8 places pour déplacements de groupe",
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
                Réserver un chauffeur privé
              </h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Décrivez votre journée ou vos créneaux — nous vous répondons
                rapidement.
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
