export const metadata = {
  title:
    "Taxi Hôtels & Événements Marseille | Pharo, Chanot, Vélodrome | Taxi Marseille",
  description:
    "Taxi pour hôtels et événements à Marseille : transferts hôtel ↔ Pharo, Parc Chanot, Orange Vélodrome. Prise en charge, van 8 places, tarif annoncé. Réservation 24h/24.",
  keywords:
    "taxi hôtel marseille, taxi congrès marseille, taxi pharo, taxi chanot, taxi velodrome marseille, transfert événement marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/trajets-hotels-evenements",
  },
  robots: { index: true, follow: true },
};

import Button from "@/app/components/ui/Button";
import { PHONE_FR, PHONE_TEL_HREF } from "@/app/lib/phone";
import {
  Building2,
  CheckCircle,
  Hotel,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TrajetsHotelsEvenements() {
  const faqItems = [
    {
      q: "Peut-on réserver un taxi depuis un hôtel à Marseille ?",
      a: "Oui. Indiquez le nom et l’adresse de l’hôtel, l’heure souhaitée, la destination (événement, gare, aéroport…) et le nombre de passagers. Le tarif est communiqué avant confirmation.",
    },
    {
      q: "Pouvez-vous assurer un transfert vers le Parc Chanot ?",
      a: "Oui, en transfert hôtel → Chanot (ou l’inverse). Pour un salon ou un congrès centré uniquement sur ce site, la page dédiée Taxi Parc Chanot détaille les accès et les créneaux d’affluence.",
    },
    {
      q: "Peut-on réserver un van pour plusieurs passagers ?",
      a: "Oui. Un Mercedes van jusqu’à 8 places est disponible selon configuration et bagages. Précisez le nombre exact de personnes à la réservation.",
    },
    {
      q: "Pouvez-vous assurer un trajet vers le Palais du Pharo ?",
      a: "Oui. Transfert depuis un hôtel, la gare ou un autre lieu vers le Palais du Pharo (congrès, séminaire, soirée). Indiquez l’horaire de début pour caler la prise en charge.",
    },
    {
      q: "Quelle différence entre un transfert et une mise à disposition ?",
      a: "Un transfert = un trajet (ou aller-retour) avec prise en charge et dépose. Une mise à disposition = véhicule et chauffeur disponibles sur une durée (demi-journée, journée, multi-arrêts). Si vous enchaînez plusieurs lieux sans horaires fixes, préférez la mise à disposition.",
    },
    {
      q: "Comment réserver pour un événement à Marseille ?",
      a: "Via le formulaire de réservation ou par téléphone : date, heure, adresse de départ (souvent l’hôtel), destination, nombre de passagers et bagages. Nous confirmons le véhicule et le tarif avant le trajet.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi hôtels et événements Marseille",
    serviceType: "Transfert hôtel / événement / congrès",
    description:
      "Transferts taxi entre hôtels et lieux d’événements à Marseille : Parc Chanot, Palais du Pharo, Orange Vélodrome, rendez-vous professionnels. Tarif annoncé à la réservation.",
    areaServed: [
      "Marseille",
      "Parc Chanot",
      "Palais du Pharo",
      "Orange Vélodrome",
      "Euroméditerranée",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Taxi Marseille",
      url: "https://www.taxis-marseille.fr/",
      telephone: "+33782984200",
    },
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="service-hero relative min-h-[88vh] flex items-start md:items-center overflow-hidden pt-20 pb-16 md:pb-24">
        <Image
          src="/marseille-evenements.jpg"
          alt="Taxi pour hôtels et événements à Marseille — transferts Pharo, Chanot, Vélodrome"
          fill
          className="object-cover object-[center_40%] md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/30" />
        <div
          className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
          aria-hidden
        />

        <div className="service-hero-inner relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="text-white">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    <Hotel className="h-4 w-4 text-cyan-200" aria-hidden />
                    Hôtels · Congrès · Événements
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    Tarif annoncé
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi pour hôtels et événements à Marseille
                </h1>
                <p className="mt-3 text-lg md:text-xl font-semibold text-cyan-100/95">
                  Pharo · Parc Chanot · Orange Vélodrome · rendez-vous pro
                </p>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Organisez un <strong>transfert depuis votre hôtel</strong>{" "}
                  vers un congrès, un salon, un match ou un rendez-vous
                  professionnel — et le retour. Chauffeur local, véhicule adapté
                  (berline ou van), <strong>tarif annoncé</strong> avant
                  confirmation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
                  >
                    Réserver un transfert
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm shadow-lg shadow-black/10"
                  >
                    Demander un devis
                  </Button>
                </div>

                <p className="mt-6 text-sm text-white/80">
                  Ou appelez le{" "}
                  <a
                    href={PHONE_TEL_HREF}
                    className="font-semibold text-white underline underline-offset-2"
                  >
                    {PHONE_FR}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Vos transferts entre hôtels et événements à Marseille
          </h2>
          <p className="mb-4">
            Cette page regroupe les <strong>trajets ponctuels</strong> entre un
            hébergement et les principaux lieux d’événements de Marseille :
            prise en charge à l’adresse de l’hôtel, dépose au point d’accès
            autorisé, éventuel retour après la session ou le spectacle.
          </p>
          <p>
            Elle ne remplace pas la fiche dédiée au{" "}
            <Link
              href="/services/taxi-parc-chanot-marseille"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Parc Chanot
            </Link>{" "}
            (salons et accès Prado), ni la{" "}
            <Link
              href="/services/mise-a-disposition-mariage-congres"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              mise à disposition
            </Link>{" "}
            lorsque vous avez besoin du véhicule sur plusieurs heures avec
            multi-arrêts. Pour coordonner plusieurs participants (vols, gare,
            hôtels), voir aussi le guide{" "}
            <Link
              href="/blog/organiser-transferts-groupe-congres-marseille"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              organiser les transferts d&apos;un groupe pour un congrès à
              Marseille
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Principaux lieux événementiels desservis
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            Voici les destinations les plus fréquentes depuis un hôtel ou un
            rendez-vous en ville. Chaque lieu a ses contraintes d’accès : nous
            calons la dépose selon les consignes du jour.
          </p>

          <div className="space-y-10">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-accent" aria-hidden />
                Parc Chanot
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Salons, foires et congrès au Rond-Point du Prado. Cas typique :
                hôtel du centre ou du Prado → Chanot le matin, retour en fin de
                journée. L’affluence augmente aux heures d’ouverture et de
                fermeture : réservez à l’avance.
              </p>
              <p className="text-base text-gray-600">
                Détail des accès et FAQ salon :{" "}
                <Link
                  href="/services/taxi-parc-chanot-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  taxi Parc Chanot Marseille
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Palais du Pharo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Congrès, séminaires et soirées côté Vieux-Port / Pharo. Transfert
                depuis l’hôtel, reprise en fin de plénière ou cocktail. Indiquez
                l’horaire de début (et, si possible, une estimation de fin) pour
                le retour.
              </p>
              <p className="text-base text-gray-600">
                Guide pratique accès &amp; conseils :{" "}
                <Link
                  href="/blog/taxi-palais-du-pharo-marseille-congres-acces"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  taxi Palais du Pharo Marseille
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Orange Vélodrome
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Matchs, concerts et événements au stade. Depuis un hôtel du
                centre ou du sud : dépose au plus près des accès ouverts le jour
                J, puis reprise après la fin — les flux piétons allongent souvent
                les derniers kilomètres.
              </p>
              <p className="text-base text-gray-600">
                Accès et marges horaires :{" "}
                <Link
                  href="/blog/taxi-orange-velodrome-marseille-match-om-concerts-acces-2026"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  taxi Orange Vélodrome Marseille
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-accent" aria-hidden />
                Joliette &amp; Euroméditerranée
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Hôtels d’affaires, Docks, réunions en tour de bureaux : transferts
                vers un congrès au Pharo, un salon au Chanot, ou simplement hôtel
                ↔ rendez-vous dans le quartier.
              </p>
              <p className="text-base text-gray-600">
                Zone desservie :{" "}
                <Link
                  href="/secteurs/joliette-euromediterranee"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  secteur Joliette &amp; Euroméditerranée
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Prise en charge depuis votre hôtel
          </h2>
          <p className="mb-4">
            Le plus simple : communiquez le <strong>nom de l’hôtel</strong> et
            l’adresse exacte (ou le point d’accès véhicules indiqué par la
            réception). Le chauffeur vous retrouve au lobby ou à la dépose
            autorisée, selon les règles de l’établissement.
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Hôtel → congrès / salon / stade (horaire de début)",
              "Retour événement → hôtel (heure approximative de fin)",
              "Hôtel → dîner / soirée, puis retour",
              "Plusieurs collaborateurs au même hôtel : un seul véhicule si van",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-600">
            Nous ne listons pas ici une annuaire d’hôtels : l’essentiel est
            l’adresse de prise en charge et l’horaire, pour un trajet clair.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Arrivée gare ou aéroport, puis hôtel ou événement
          </h2>
          <p className="mb-4">
            Beaucoup de visiteurs enchaînent{" "}
            <strong>TGV ou vol → hôtel</strong>, puis{" "}
            <strong>hôtel → événement</strong> le lendemain — ou l’inverse après
            la clôture. Chaque étape peut être réservée séparément.
          </p>
          <p className="mb-4">
            Pour le détail des prises en charge aéroport ou gare (terminaux,
            Honnorat, bagages), utilisez les pages dédiées : elles restent la
            référence pour ces intentions. Ici, l’enjeu est surtout le{" "}
            <strong>lien hôtel ↔ lieu d’événement</strong>.
          </p>
          <p className="text-base text-gray-600">
            Transferts{" "}
            <Link
              href="/services/taxi-gare-saint-charles"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              gare Saint-Charles
            </Link>{" "}
            ·{" "}
            <Link
              href="/services/taxi-aeroport-marseille"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              aéroport Marseille Provence (MRS)
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
            <Users className="w-8 h-8 text-accent" aria-hidden />
            Berline ou van selon le déplacement
          </h2>
          <p className="mb-4">
            <strong>Berline / SUV</strong> : 1 à 4 passagers, bagages légers —
            idéal hôtel → congrès ou dîner.
          </p>
          <p className="mb-4">
            <strong>Mercedes van jusqu’à 8 places</strong> : équipe, famille,
            délégation ou plusieurs valises après un salon. Un seul véhicule
            évite de scinder le groupe devant l’hôtel ou le site.
          </p>
          <p>
            Détails capacité et usages :{" "}
            <Link
              href="/services/van-8-places"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              van 8 places Marseille
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transfert ponctuel ou organisation plus complexe ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-accent mb-3">
                Transfert (cette page)
              </h3>
              <p className="text-gray-700">
                Un trajet défini : hôtel → Pharo, hôtel → Chanot, Vélodrome →
                hôtel, etc. Aller, retour, ou les deux réservés à l’avance.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-accent mb-3">
                Mise à disposition
              </h3>
              <p className="text-gray-700 mb-3">
                Véhicule disponible sur une durée (demi-journée / journée) :
                multi-sites, attente, programme variable (mariage, congrès avec
                plusieurs déplacements).
              </p>
              <Link
                href="/services/mise-a-disposition-mariage-congres"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Voir la mise à disposition
              </Link>
              <p className="mt-3 text-sm text-gray-600">
                Journée d’affaires ou multi-rendez-vous hors événement :{" "}
                <Link
                  href="/services/chauffeur-prive-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  chauffeur privé Marseille
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Comment réserver votre transfert ?
          </h2>
          <ol className="list-decimal list-inside space-y-3 mb-8">
            <li>
              Indiquez <strong>date</strong>, <strong>heure</strong>,{" "}
              <strong>hôtel ou adresse</strong> de départ.
            </li>
            <li>
              Précisez la <strong>destination</strong> (Pharo, Chanot, Vélodrome,
              autre adresse).
            </li>
            <li>
              Nombre de <strong>passagers</strong> et de{" "}
              <strong>bagages</strong> (van si besoin).
            </li>
            <li>
              Nous confirmons le <strong>tarif</strong> et le véhicule avant le
              trajet.
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
            >
              Réserver en ligne
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="px-8 py-4 text-lg border-accent text-accent"
            >
              Demander un devis événement
            </Button>
            <Button
              href="/tarifs"
              variant="outline"
              className="px-8 py-4 text-lg"
            >
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
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

      <section className="py-16 bg-linear-to-br from-accent to-sky-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à organiser votre transfert hôtel / événement ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Réservez en ligne ou contactez-nous : nous confirmons l’horaire et
            le type de véhicule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              className="bg-white text-accent hover:bg-gray-50 px-8 py-4 text-lg"
            >
              Réserver
            </Button>
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white rounded-xl hover:bg-white/10 transition-colors"
            >
              {PHONE_FR}
            </a>
          </div>
        </div>
      </section>

      <Script
        id="service-hotels-evenements-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-hotels-evenements-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
