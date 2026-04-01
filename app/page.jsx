// app/page.jsx — PAGE D’ACCUEIL TAXI MARSEILLE (SERVER)

// ✅ ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

// ✅ Métadonnées SEO pour cette page
export const metadata = {
  title:
    "Taxi Marseille – Taxi aéroport Marseille Marignane (MRS) & Service sur la métropole",
  description:
    "Taxi Marseille 24h/24 : taxi aéroport Marseille (MRS), gare Saint-Charles, Vieux-Port, Joliette, congrès. Van Mercedes 8 places pour groupes. Trajets Aix-en-Provence & Cassis.",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/",
  },
};

import {
  Building2,
  Car,
  ChevronRight,
  Clock,
  Compass,
  CreditCard,
  Plane,
  Star,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import HeroBackgroundSlideshow from "./components/client/HeroBackgroundSlideshow";
import { PHONE_SCHEMA } from "./lib/phone";
import VehicleCarousel from "./components/client/VehicleCarousel";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

const vehicles = [
  {
    name: "Mercedes SUV",
    image: "/mercedes-glc-luxury-suv.png",
    desc: "Confort et espace pour vos trajets",
  },
  {
    name: "Mercedes Classe V — 8 places",
    image: "/mercedes-v-luxury-van.png",
    desc: "Van 8 passagers : groupes, familles, bagages volumineux",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroBackgroundSlideshow />
        <div className="absolute inset-0 z-2 bg-black/50" aria-hidden />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Taxi Marseille
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Réservation 24h/24 – aéroport Marignane (MRS), gare Saint-Charles,
            Vieux-Port, Euroméditerranée et toute la métropole.
          </h2>
          <p className="text-base md:text-lg mb-4 text-white/80">
            Réservez un taxi à Marseille pour vos déplacements privés ou
            professionnels en Provence et sur la côte.
          </p>
          <p className="text-base md:text-lg mb-8 text-white/95 font-medium">
            Véhicule 8 places disponible (Mercedes Classe V) — idéal groupes et
            taxi aéroport Marseille.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un taxi à Marseille
            </Button>
            <Button
              href="/tarifs"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              Consulter les tarifs taxi Marseille
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Vos trajets en taxi depuis Marseille
            </h2>
            <p className="text-muted-foreground">
              Aéroport Marignane, gare Saint-Charles, hôtels du centre, ports de
              plaisance et escapades vers Aix ou la côte.{" "}
              <span className="text-foreground font-medium">
                Van 8 places sur demande.
              </span>
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                label: "Aéroport Marignane (MRS)",
                desc: "Service porte-à-porte",
              },
              {
                icon: Train,
                label: "Gare Saint-Charles",
                desc: "Arrivées & départs TGV",
              },
              {
                icon: Building2,
                label: "Hôtels & congrès",
                desc: "Pharo, Chanot, centre-ville",
              },
              {
                icon: Compass,
                label: "Longue distance",
                desc: "Aix, Cassis, littoral",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <Card
                  key={i}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOC CORRECTIF SEO - Identification claire pour Google */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">
            Taxi à Marseille – Service local officiel 24h/24
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Entreprise de taxi sur Marseille : prises en charge au Vieux-Port,
            Joliette, préfecture, gare Saint-Charles et liaisons vers
            l&apos;aéroport Marseille Provence (Marignane). Service 24h/24 et
            7j/7 sur la métropole et les Bouches-du-Rhône.
          </p>
        </div>
      </section>

      {/* SECTION TEXTE SEO: Taxi Marseille */}
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        {/* Éléments décoratifs plus visibles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré avec design moderne */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Service Premium
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Taxi Marseille
              </span>
              <br />
              <span className="text-gray-700">
                votre service de taxi sur la
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-accent to-primary bg-clip-text text-transparent font-extrabold">
                  métropole marseillaise
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 z-0 rounded-sm"></span>
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-linear-to-r from-transparent to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-1 w-24 bg-linear-to-r from-accent via-primary to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-1 w-16 bg-linear-to-r from-primary to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Contenu avec design amélioré */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe avec fond coloré */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                Notre service{" "}
                <strong className="font-bold text-accent text-xl">
                  Taxi Marseille
                </strong>{" "}
                assure vos déplacements à Marseille et en Provence : liaisons
                depuis l&apos;
                <strong className="font-bold text-primary text-lg">
                  aéroport Marseille Provence (Marignane)
                </strong>
                , la{" "}
                <strong className="font-bold text-primary text-lg">
                  gare Saint-Charles
                </strong>
                , le Vieux-Port, Euroméditerranée, hôtels du centre et stade
                Vélodrome.
              </p>
            </div>

            {/* Deuxième paragraphe avec bordure accent */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous soyez en voyage d&apos;affaires, en séjour touristique
                ou résident à l&apos;année, vous profitez d&apos;un{" "}
                <strong className="font-bold text-accent text-xl">
                  taxi à Marseille
                </strong>{" "}
                ponctuel, discret et confortable. Nos chauffeurs suivent votre
                vol ou votre train en temps réel et vous attendent à
                l&apos;arrivée avec un accueil personnalisé.
              </p>
            </div>

            {/* Call-to-action avec design premium */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Vous pouvez{" "}
                <a
                  href="/reservation"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    réserver votre taxi à Marseille en ligne
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>{" "}
                24h/24 et 7j/7 ou nous contacter pour un{" "}
                <a
                  href="/tarifs"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    devis taxi aéroport Marseille
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </a>{" "}
                vers Aix-en-Provence, Cassis, l&apos;aéroport ou toute autre
                destination.
              </p>
            </div>

            {/* Dernier paragraphe avec icône visuelle */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Basés au cœur de la ville, nous connaissons parfaitement les
                contraintes de circulation (matchs au Vélodrome, salons au Parc
                Chanot, événements au Pharo, forte saison estivale au port) et
                adaptons nos itinéraires pour vous faire gagner du temps.
              </p>
            </div>
          </div>

          {/* Séparateur décoratif amélioré */}
          <div className="mt-16 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent via-accent to-transparent"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="h-px w-20 bg-linear-to-r from-transparent via-primary to-transparent"></div>
              </div>
              <span className="text-base font-bold text-gray-700 bg-white/80 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
                Service disponible 24h/24 7j/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir notre taxi à Marseille ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Service de taxi à Marseille fiable et haut de gamme depuis 2015.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Chauffeurs Professionnels",
                desc: "Expérience, discrétion et courtoisie garanties.",
              },
              {
                icon: Car,
                title: "Véhicules Premium",
                desc: "Mercedes SUV et van 8 places pour groupes et familles.",
              },
              {
                icon: Clock,
                title: "Disponibilité 24/7",
                desc: "Taxi Marseille disponible jour et nuit.",
              },
              {
                icon: CreditCard,
                title: "Paiement Flexible",
                desc: "CB à bord, espèces ou virement.",
              },
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre flotte de taxis à Marseille
            </h2>
            <p className="text-lg text-muted-foreground">
              Véhicules haut de gamme :{" "}
              <strong className="text-foreground">SUV Mercedes</strong> et{" "}
              <strong className="text-foreground">
                Mercedes Classe V 8 places
              </strong>{" "}
              pour familles et groupes.
            </p>
          </div>
          <VehicleCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* Airport Transfer Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Taxi Marseille – Taxi aéroport Marseille Marignane (MRS)
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Environ 25 à 35 minutes depuis l&apos;aéroport Marseille Provence,
              notre service <strong>taxi aéroport Marseille</strong> assure des
              trajets confortables vers le centre-ville, la gare Saint-Charles,
              le littoral ou votre hôtel.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Prix fixe annoncé à l’avance",
                "Chauffeur à l’arrivée avec panneau nominatif",
                "Van 8 places disponible pour groupes et bagages",
                "Pas de supplément pour bagages ou retard avion",
                "Réservation en ligne ou par téléphone",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un taxi aéroport Marseille
            </Button>
          </div>
          <Image
            src="/taxi-marseille-aeroport-marignane.jpeg"
            alt="Taxi aéroport Marseille depuis l'aéroport Marignane"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos clients taxi Marseille
            </h2>
            <p className="text-lg text-muted-foreground">
              Des centaines de trajets réussis chaque année à Marseille et en
              Provence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie D.",
                rating: 5,
                review:
                  "Service de taxi à Marseille impeccable pour notre séjour. Très professionnel !",
              },
              {
                name: "Jean M.",
                rating: 5,
                review:
                  "Chauffeur courtois, véhicule propre et à l'heure pour notre taxi aéroport Marseille (aéroport–Vieux-Port).",
              },
              {
                name: "Sophie L.",
                rating: 5,
                review:
                  "Expérience premium du début à la fin. Taxi Marseille parfait pour les congrès.",
              },
            ].map((review, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-bold text-sm">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d&apos;un taxi à Marseille maintenant ?
          </h2>
          <p className="text-lg mb-8 text-accent-foreground/90">
            Réservez votre trajet en quelques clics et recevez une confirmation
            immédiate par email.
          </p>
          <Button
            href="/reservation"
            size="lg"
            className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            Réserver un taxi à Marseille
          </Button>
        </div>
      </section>

      {/* JSON-LD LocalBusiness pour Taxi Marseille */}
      <Script
        id="localbusiness-taxi-marseille"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Marseille",
            url: "https://www.taxis-marseille.fr/",
            telephone: PHONE_SCHEMA,
            image: "https://www.taxis-marseille.fr/taxi-Marseille-logo.png",
            logo: "https://www.taxis-marseille.fr/taxi-Marseille-logo.png",
            areaServed: [
              "Marseille",
              "Aix-en-Provence",
              "Cassis",
              "La Ciotat",
              "Allauch",
              "Bouches-du-Rhône",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marseille",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}
