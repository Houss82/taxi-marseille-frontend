export const metadata = {
  title: "Chauffeur privé Marseille | Réservation 24h/24 | Van & berline",
  description:
    "Chauffeur privé à Marseille : réservation 24h/24, mise à disposition à l’heure (business, événements), transferts aéroport MRS et gare Saint-Charles. Berline, SUV et van 8 places.",
  keywords:
    "chauffeur privé marseille, vtc marseille, chauffeur professionnel marseille, transport premium marseille, mise à disposition marseille, chauffeur marseille aéroport, chauffeur marseille gare",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/chauffeur-prive-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import { Briefcase, CheckCircle, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ChauffeurPriveMarseille() {
  const faqItems = [
    {
      q: "Combien coûte un chauffeur privé à Marseille ?",
      a: "Le prix dépend de la durée (mise à disposition), du trajet, du véhicule (berline ou van 8 places) et du créneau. Nous annonçons un tarif ou un devis clair avant validation via la réservation.",
    },
    {
      q: "Peut-on réserver à l’avance un chauffeur privé Marseille ?",
      a: "Oui. La réservation est possible 24h/24 : indiquez votre adresse, l’horaire, le nombre de passagers et le programme (business, mariage, congrès, visite).",
    },
    {
      q: "Desservez-vous l’aéroport Marseille Provence (MRS) et la gare Saint-Charles ?",
      a: "Oui. Nous assurons les transferts et mises à disposition incluant l’aéroport MRS, la gare Saint-Charles, le centre-ville et les quartiers d’affaires.",
    },
    {
      q: "Quels véhicules proposez-vous ?",
      a: "Selon la demande : berline/SUV pour 1 à 4 passagers, ou Mercedes van 8 places pour groupes, familles et bagages.",
    },
  ];

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taxi Marseille",
    url: "https://www.taxis-marseille.fr/services/chauffeur-prive-marseille",
    telephone: "+33782984200",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Av. de la Grognarde",
      postalCode: "13011",
      addressLocality: "Marseille",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      addressCountry: "FR",
    },
    areaServed: "Marseille",
    openingHours: "Mo-Su 00:00-23:59",
  };

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chauffeur privé à Marseille",
    serviceType: "Chauffeur privé / mise à disposition",
    provider: {
      "@type": "LocalBusiness",
      name: "Taxi Marseille",
      telephone: "+33782984200",
      url: "https://www.taxis-marseille.fr/",
    },
    areaServed: [
      "Marseille",
      "Vieux-Port",
      "Joliette",
      "Euroméditerranée",
      "Prado",
      "Gare Saint-Charles",
      "Aéroport Marseille Provence (MRS)",
    ],
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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

      {/* SEO (intention + local) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Chauffeur privé à Marseille disponible 24h/24
          </h2>
          <p className="mb-4">
            Vous recherchez un <strong>chauffeur privé à Marseille</strong> pour
            vos déplacements professionnels ou personnels ? Nous proposons un
            service de transport premium disponible <strong>24h/24</strong> sur
            toute la métropole marseillaise.
          </p>
          <p className="mb-4">
            Nos chauffeurs assurent vos trajets : rendez-vous d’affaires,
            transferts vers l’<strong>aéroport Marseille Provence (MRS)</strong>,{" "}
            <strong>gare Saint-Charles</strong>, hôtels, restaurants, mariages
            et congrès.
          </p>
          <p>
            Réservez facilement votre <strong>chauffeur privé Marseille</strong>{" "}
            (type <strong>VTC Marseille</strong> au sens “chauffeur dédié”) et
            profitez d’un service ponctuel, discret et adapté à vos besoins.
          </p>
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

      {/* Zones desservies (SEO local) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zones desservies à Marseille
          </h2>
          <p className="text-gray-700 mb-6">
            Nous intervenons dans les quartiers et lieux clés (prise en charge
            à l’adresse, hôtels, bureaux et lieux d’événements) :
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 text-gray-800">
            {[
              "Vieux-Port",
              "Le Panier",
              "Joliette & Euroméditerranée",
              "Prado & Castellane",
              "Parc Chanot (congrès)",
              "Palais du Pharo",
              "Gare Saint-Charles",
              "Aéroport Marseille Provence (MRS)",
              "Port de croisière (J4 / MPCT)",
            ].map((zone) => (
              <li
                key={zone}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
                <span className="font-medium">{zone}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Besoin d’un transfert simple ? Voir{" "}
            <Link
              href="/services"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              tous nos services
            </Link>
            .
          </p>
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

      {/* FAQ (rich results) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Questions fréquentes — Chauffeur privé Marseille
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Prix, réservation, véhicules, zones desservies : réponses rapides.
            </p>
          </div>
          <div className="grid gap-6">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD (LocalBusiness + Service + FAQPage) */}
      <Script
        id="localbusiness-chauffeur-prive-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJson),
        }}
      />
      <Script
        id="service-chauffeur-prive-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJson),
        }}
      />
      <Script
        id="faq-chauffeur-prive-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJson),
        }}
      />
    </main>
  );
}
