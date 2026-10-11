export const metadata = {
  title: "Chauffeur privé Marseille | Réservation 24h/24 | Van & berline",
  description:
    "Chauffeur privé à Marseille pour déplacements d’affaires, multi-rendez-vous, gare Saint-Charles et aéroport MRS. Berline, SUV ou van 8 places. Devis et réservation 24h/24.",
  keywords:
    "chauffeur privé marseille, chauffeur dédié marseille, chauffeur professionnel marseille, déplacements affaires marseille, chauffeur marseille aéroport, chauffeur marseille gare, transport privé marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/chauffeur-prive-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import { PHONE_FR, PHONE_TEL_HREF } from "@/app/lib/phone";
import {
  Briefcase,
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ChauffeurPriveMarseille() {
  const faqItems = [
    {
      q: "Comment réserver un chauffeur privé à Marseille ?",
      a: "Indiquez la date, l’heure, le point de prise en charge, les destinations prévues, le nombre de passagers et le véhicule souhaité via le formulaire de réservation ou le contact. Nous confirmons le créneau et le tarif avant validation.",
    },
    {
      q: "Peut-on prévoir plusieurs arrêts avec le même chauffeur ?",
      a: "Oui. C’est l’usage typique d’un chauffeur dédié : plusieurs rendez-vous, hôtels, bureaux ou lieux de réunion dans la même demi-journée ou journée. Précisez l’ordre des arrêts et les horaires approximatifs à la réservation.",
    },
    {
      q: "Peut-on réserver un chauffeur pour une journée entière ?",
      a: "Oui. Décrivez le créneau (demi-journée ou journée), le point de départ et les étapes prévues. Un devis est communiqué avant confirmation selon la durée, le véhicule et le parcours.",
    },
    {
      q: "Quelle différence avec la mise à disposition mariage & congrès ?",
      a: "Cette page concerne le chauffeur privé au sens large : déplacements d’affaires, multi-rendez-vous, arrivées gare ou aéroport, journées organisées. La page mise à disposition détaille surtout les prestations événementielles (mariage, congrès, navettes invités) sur une durée définie. Les deux peuvent recouvrir un véhicule avec chauffeur : choisissez selon votre contexte.",
    },
    {
      q: "Peut-on réserver un van pour jusqu’à 8 passagers ?",
      a: "Oui, un Mercedes van jusqu’à 8 places peut être proposé selon disponibilité, configuration et volume de bagages. Indiquez le nombre exact de personnes à la réservation.",
    },
    {
      q: "Le chauffeur peut-il venir à la gare Saint-Charles ou à l’aéroport MRS ?",
      a: "Oui. Prise en charge possible à la gare Saint-Charles, à l’aéroport Marseille Provence (MRS), à un hôtel ou à une adresse en ville. Pour un transfert ponctuel aéroport ou gare seul, les pages dédiées restent les plus précises.",
    },
    {
      q: "Peut-on demander un devis pour une entreprise ?",
      a: "Oui. Précisez le nom de la société, les horaires, les adresses et le nombre de passagers. Nous communiquons un devis avant validation ; une facturation adaptée aux entreprises peut être demandée à la réservation.",
    },
    {
      q: "Comment sont déterminés les tarifs ?",
      a: "Selon la durée (si le véhicule reste à disposition), le trajet, le véhicule (berline, SUV ou van) et le créneau. Aucun montant n’est annoncé ici : le tarif ou le devis est confirmé avant la course.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chauffeur privé à Marseille",
    serviceType: "Chauffeur privé / déplacements dédiés",
    description:
      "Chauffeur privé à Marseille pour déplacements d’affaires, multi-rendez-vous, transferts gare Saint-Charles et aéroport MRS, groupes jusqu’à 8 passagers selon véhicule.",
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
      "Gare Saint-Charles",
      "Aéroport Marseille Provence (MRS)",
      "Parc Chanot",
      "Palais du Pharo",
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

  const scenarios = [
    {
      icon: Briefcase,
      title: "Déplacements professionnels",
      items: [
        "Rendez-vous d’affaires entre plusieurs adresses",
        "Hôtel ↔ bureau, tour d’affaires ou salle de réunion",
        "Journée pro avec plusieurs arrêts sans chercher de place",
      ],
    },
    {
      icon: Train,
      title: "Arrivées & déplacements privés",
      items: [
        "Prise en charge gare Saint-Charles ou aéroport MRS",
        "Transfert vers l’hôtel puis déplacements en ville",
        "Soirées, dîners et retours sans stress de stationnement",
      ],
    },
    {
      icon: Users,
      title: "Groupes & familles",
      items: [
        "Collègues ou famille dans un seul véhicule",
        "Van jusqu’à 8 passagers selon disponibilité et bagages",
        "Bagages et matériel gérés dès la réservation",
      ],
    },
    {
      icon: MapPin,
      title: "Journée organisée",
      items: [
        "Plusieurs destinations sur un créneau convenu",
        "Itinéraire personnalisé (affaires ou découverte)",
        "Devis préalable selon durée et parcours",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="service-hero relative min-h-[88vh] flex items-start md:items-center justify-center overflow-hidden pt-20 pb-16 md:pb-24">
        <Image
          src="/chauffeur-prive.jpg"
          alt="Chauffeur privé Marseille — véhicule dédié pour déplacements d’affaires et multi-rendez-vous"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <Clock className="w-5 h-5 text-accent" aria-hidden />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Dédié · 24h/24
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Chauffeur privé Marseille
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
            Chauffeur dédié pour vos déplacements d’affaires, multi-rendez-vous
            et journées organisées sur Marseille
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
            >
              Réserver un chauffeur privé
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm"
            >
              Demander un devis
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/85">
            Ou appelez le{" "}
            <a
              href={PHONE_TEL_HREF}
              className="font-semibold text-white underline underline-offset-2"
            >
              {PHONE_FR}
            </a>
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Un chauffeur dédié pour vos déplacements à Marseille
          </h2>
          <p className="mb-4">
            Un <strong>chauffeur privé à Marseille</strong>, c’est un véhicule
            avec chauffeur qui suit <strong>votre planning</strong> : rendez-vous
            d’affaires, enchaînement d’adresses, arrivée en gare ou à
            l’aéroport, puis déplacements en ville sans multiplier les courses
            improvisées.
          </p>
          <p className="mb-4">
            Service disponible <strong>24h/24</strong> sur la métropole.
            Berline ou SUV pour 1 à 4 passagers ;{" "}
            <Link
              href="/services/van-8-places"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              van 8 places à Marseille
            </Link>{" "}
            pour les groupes, selon disponibilité et bagages.
          </p>
          <p>
            Vous décrivez le programme ; nous confirmons le créneau, le véhicule
            et le <strong>tarif ou devis</strong> avant validation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
            Chauffeur privé ou mise à disposition événementielle ?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Les deux formules reposent sur un véhicule avec chauffeur. La
            différence porte sur le <strong>contexte</strong> de votre demande,
            pas sur une prestation inventée.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-accent/30 p-6 shadow-sm ring-1 ring-accent/10">
              <h3 className="text-xl font-bold text-accent mb-3">
                Cette page — chauffeur privé
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Déplacements d’affaires et multi-rendez-vous</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Arrivées gare / aéroport puis journée en ville</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Journée organisée sur devis (horaires à convenir)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mise à disposition — mariage &amp; congrès
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Mariage, cérémonie, navettes invités</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Congrès et événements sur une durée définie</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Organisation événementielle (Chanot, Pharo…)</span>
                </li>
              </ul>
              <Link
                href="/services/mise-a-disposition-mariage-congres"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Voir la mise à disposition mariage &amp; congrès
              </Link>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            Transfert hôtel ↔ lieu d’événement ponctuel :{" "}
            <Link
              href="/services/trajets-hotels-evenements"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              trajets hôtels et événements à Marseille
            </Link>
            . Visite touristique :{" "}
            <Link
              href="/services/city-tour-visite-marseille"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              city tour / visite de Marseille
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pour quels besoins réserver un chauffeur privé ?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Des situations concrètes rencontrées à Marseille — sans promesse
              de service hors de notre offre réelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Exemples de parcours à Marseille
          </h2>
          <p className="mb-4">
            Depuis le <strong>centre</strong> ou le <strong>Vieux-Port</strong>,
            un chauffeur dédié enchaîne volontiers hôtels, restaurants et
            rendez-vous sans vous laisser chercher une place. Côté{" "}
            <Link
              href="/secteurs/joliette-euromediterranee"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Joliette / Euroméditerranée
            </Link>
            , les tours d’affaires et hôtels pro se combinent souvent avec une
            session au <strong>Parc Chanot</strong> ou au{" "}
            <strong>Palais du Pharo</strong>.
          </p>
          <p className="mb-4">
            Arrivée{" "}
            <Link
              href="/services/taxi-gare-saint-charles"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              gare Saint-Charles
            </Link>{" "}
            ou{" "}
            <Link
              href="/services/taxi-aeroport-marseille"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              aéroport Marseille Provence (MRS)
            </Link>{" "}
            : prise en charge, dépôt à l’hôtel, puis suite du programme en
            ville. Pour un seul trajet aéroport ou gare sans journée dédiée,
            préférez la page transfert correspondante.
          </p>
          <p>
            Les accès et temps de trajet varient selon le trafic, les travaux et
            les jours d’événement : indiquez vos horaires réels pour caler une
            marge réaliste.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Clock,
                label: "Créneau sur mesure",
                desc: "Quelques heures, demi-journée ou journée",
              },
              {
                icon: Briefcase,
                label: "Usage pro",
                desc: "Discrétion et ponctualité pour vos RDV",
              },
              {
                icon: Shield,
                label: "Véhicules adaptés",
                desc: "Berline, SUV ou van 8 places",
              },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="text-center p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-accent" aria-hidden />
                <h3 className="font-bold mb-2 text-lg">{label}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Ce que vous pouvez demander
            </h2>
            <ul className="space-y-4 text-gray-800">
              {[
                "Chauffeur dédié avec attente entre les rendez-vous",
                "Planning multi-adresses communiqué à l’avance",
                "Facturation claire, y compris pour les entreprises",
                "Van 8 places pour déplacements de groupe (selon disponibilité)",
              ].map((advantage) => (
                <li key={advantage} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Comment organiser votre chauffeur privé ?
          </h2>
          <ol className="list-decimal list-inside space-y-3 mb-8">
            <li>
              Indiquez <strong>date</strong>, <strong>heure</strong> et{" "}
              <strong>point de départ</strong> (hôtel, gare, aéroport, adresse).
            </li>
            <li>
              Listez les <strong>arrêts</strong> ou le type de journée (affaires,
              privé, groupe).
            </li>
            <li>
              Précisez le <strong>nombre de passagers</strong> et les bagages —
              berline ou van.
            </li>
            <li>
              Recevez le <strong>devis / tarif</strong>, puis confirmez via{" "}
              <Link
                href="/reservation"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                la réservation en ligne
              </Link>{" "}
              ou le{" "}
              <Link
                href="/contact"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                formulaire de contact
              </Link>
              .
            </li>
          </ol>
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Prêt à réserver votre chauffeur à Marseille ?
            </h3>
            <p className="mb-6 text-primary-foreground/90">
              Décrivez votre journée — nous revenons vers vous avec une
              proposition claire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/reservation"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg"
              >
                Réserver maintenant
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 py-4 text-lg"
              >
                Demander un devis
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/85">
              Tél.{" "}
              <a
                href={PHONE_TEL_HREF}
                className="font-semibold underline underline-offset-2"
              >
                {PHONE_FR}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Questions fréquentes — Chauffeur privé Marseille
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Réservation, multi-arrêts, véhicules, devis entreprise.
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
