import SEOBreadcrumb from "@/app/components/SEOBreadcrumb";
import { PHONE_FR, PHONE_TEL_HREF } from "@/app/lib/phone";
import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    slug: "vieux-port",
    name: "Vieux-Port",
    description:
      "Taxi au Vieux-Port : ferries, restaurants sur les quais, Mucem, retours de soirée et dépose au plus près des zones autorisées.",
    image: "/taxi-marseille-vieux-port.jpeg",
  },
  {
    slug: "joliette-euromediterranee",
    name: "Joliette & Euroméditerranée",
    description:
      "Docks Village, tours de bureaux, gare maritime et terminaux croisière : accès riverains et transferts pro.",
    image: "/cannes-hotels.jpg",
  },
  {
    slug: "le-panier",
    name: "Le Panier",
    description:
      "Quartier historique, Major, Vieille Charité : dépose aux accès piétons et liaisons hôtels / aéroport.",
    image: "/taxi-cannes-le-suquet.png",
  },
  {
    slug: "port-de-croisiere",
    name: "Port de croisière",
    description:
      "Terminaux J4 & MPCT, escales et excursions à la journée avec retour avant l’heure de rappel.",
    image: "/taxi-marseille-port-de-croisiere.jpeg",
  },
];

export default function SecteursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <SEOBreadcrumb
            items={[
              {
                name: "Nos secteurs",
                url: "/secteurs",
                title: "Secteurs Taxi Marseille",
              },
            ]}
          />
        </div>
      </div>

      <main className="py-16">
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Taxi Marseille — Bouches-du-Rhône
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nos secteurs desservis
                <span className="block bg-gradient-to-r from-accent via-sky-600 to-amber-600 bg-clip-text text-transparent">
                  Vieux-Port, Joliette, Panier &amp; port de croisière
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre équipe de chauffeurs opère sur la métropole marseillaise
                avec un service disponible{" "}
                <strong className="text-gray-900">24h/24 et 7j/7</strong>.
                Découvrez nos pages dédiées pour le centre historique, les
                quartiers du littoral (Joliette &amp; Euroméditerranée),
                le port de croisière — avec des informations concrètes sur les
                déposes, les temps de trajet et nos véhicules{" "}
                <strong>Mercedes GLC</strong> et{" "}
                <strong>Mercedes van 8 places</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Besoin d&apos;un transfert pour un vol, un train, une escale ou
                un événement ? Nous proposons des courses sur mesure avec{" "}
                <strong>tarif annoncé à la réservation</strong>, facturation
                claire pour les entreprises et prise en charge des groupes avec
                bagages.
              </p>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px]">
              <Image
                src="/taxi-marseille-aeroport-marignane.jpeg"
                alt="Taxi Marseille — secteurs et transferts"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Disponibilité
                </p>
                <p className="text-2xl font-semibold bg-gradient-to-r from-accent to-sky-600 bg-clip-text text-transparent">
                  24h/24 — 7j/7
                </p>
                <p className="text-sm text-gray-600">
                  Chauffeurs locaux pour les accès piétons, portuaires et
                  autoroutiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chaque page détaille les services proposés, les zones couvertes,
              les lieux utiles (gares, terminaux, hôpitaux) et une FAQ pour
              préparer votre trajet.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/secteurs/${sector.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={sector.image}
                    alt={`Taxi ${sector.name} Marseille`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Taxi {sector.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <span className="text-accent font-semibold">
                    Découvrir le secteur →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Un réseau de chauffeurs habitués à Marseille
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous intervenons quotidiennement depuis l&apos;aéroport
                  Marignane (MRS), la gare Saint-Charles, le Vieux-Port, La
                  Joliette et les terminaux croisière. Notre objectif : vous
                  faire gagner du temps sur les accès réglementés, les créneaux
                  de forte affluence et les liaisons autoroutières (A7, A55,
                  L2).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En réservant via Taxi Marseille, vous avez un interlocuteur
                  pour planifier vos transferts simples ou multi-segments,
                  coordonner les horaires avec votre vol ou votre train, et
                  choisir le véhicule adapté (berline ou van 8 places).
                </p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  Services inclus
                </h3>
                <ul className="space-y-3 text-gray-800">
                  <li>✓ Accueil aéroport avec pancarte nominative sur demande</li>
                  <li>✓ Suivi de vol et ajustement des horaires</li>
                  <li>✓ Aide aux bagages et liaisons groupe / famille</li>
                  <li>✓ Tarif annoncé ou devis avant la course</li>
                  <li>✓ Paiement CB à bord — facturation entreprise possible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-br from-accent to-sky-800 text-white rounded-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Besoin d&apos;un trajet sur mesure ?
                </h2>
                <p className="text-lg text-white/90">
                  Transferts, mises à disposition, excursions depuis une escale
                  croisière ou navette événement : décrivez votre besoin, nous
                  vous proposons un créneau et un véhicule adaptés.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_TEL_HREF}
                  className="flex-1 text-center px-6 py-4 bg-white text-accent rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  📞 {PHONE_FR}
                </a>
                <Link
                  href="/reservation"
                  className="flex-1 text-center px-6 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-accent transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
