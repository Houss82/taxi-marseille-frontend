// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

import Button from "@/app/components/ui/Button";
import {
  Briefcase,
  CheckCircle,
  Luggage,
  MapPin,
  Plane,
  Shield,
  Timer,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title:
    "Taxi van 8 places Marseille | Mercedes van 8 places — groupes & transferts | Taxi Marseille",
  description:
    "Taxi van à Marseille avec chauffeur : Mercedes van 8 places pour l’aéroport MRS, la gare, hôtels et séminaires, Aix-en-Provence, Cassis. Bagages, enfants, PMR sur demande. Devis et réservation.",
  keywords:
    "mercedes van 8 places marseille, van 8 places marseille, taxi van marseille, van taxi marseille, taxi groupe marseille, navette 8 passagers marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/van-8-places",
  },
};

const gallery = [
  {
    src: "/taxi-InterContinental-Marseille-cours.jpeg",
    alt: "Mercedes van 8 places — silhouette et finitions premium",
    caption: "Mercedes van 8 places — habitacle spacieux et finitions soignées",
  },
  {
    src: "/taxi-marseille-service-coffre.jpeg",
    alt: "Marseille, cathédrale — service van groupe sur la métropole",
    caption: "Idéal groupes, familles nombreuses et transferts avec bagages",
  },
  {
    src: "/taxi-marseille-port-ferry.jpeg",
    alt: "Taxi van 8 places Mercedes à Marseille, service sur la métropole",
    caption: "Mise à disposition sur Marseille, aéroport Marignane et littoral",
  },
  {
    src: "/taxi-marseille-aeroport-marignane.jpeg",
    alt: "Mercedes van 8 places en service sur Marseille — extérieur et présentation soignée",
    caption:
      "Même exigence de ponctualité : journées sur la métropole, escapades ou fin de soirée en groupe",
  },
];

export default function Van8PlacesPage() {
  const faqItems = [
    {
      q: "Peut-on réserver un Mercedes van 8 places pour l’aéroport MRS ou la gare Saint-Charles ?",
      a: "Oui. Indiquez l’heure, le numéro de vol ou de train, le nombre de passagers et les bagages. Nous confirmons rapidement selon disponibilité.",
    },
    {
      q: "Combien de bagages peut-on mettre dans le van ?",
      a: "Le van est adapté aux groupes avec valises. La capacité exacte dépend du nombre de passagers et du format des bagages (valises cabine, grands formats, poussette).",
    },
    {
      q: "Proposez-vous sièges enfant / rehausseurs ?",
      a: "Oui, sur demande lors de la réservation (selon disponibilité). Précisez l’âge de l’enfant pour l’équipement adapté.",
    },
    {
      q: "Peut-on réserver le van pour une mise à disposition (mariage, congrès) ?",
      a: "Oui. Nous pouvons organiser une mise à disposition avec chauffeur pour plusieurs trajets sur la journée ou la soirée, avec un devis clair.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi van 8 places Marseille (Mercedes van 8 places)",
    serviceType: "Taxi van / transport de groupes",
    areaServed: [
      "Marseille",
      "Aéroport Marseille Provence (MRS)",
      "Gare Saint-Charles",
      "Vieux-Port",
      "La Joliette",
      "Euroméditerranée",
      "Aix-en-Provence",
      "Cassis",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/taxi-marseille-van-interieur-place-8.jpeg"
          alt="Taxi van Marseille — Mercedes van 8 places, intérieur"
          fill
          className="object-cover object-[center_42%] md:object-[center_35%] lg:object-center"
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

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="text-white">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    <Users className="h-4 w-4 text-cyan-200" aria-hidden />
                    Transport de groupes
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-emerald-200" aria-hidden />
                    Devis clair
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi van 8 places Marseille
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Un seul véhicule pour toute la famille, l’équipe ou les
                  invités. <strong>Confort</strong>, <strong>coffre</strong> et
                  chauffeur habitué à la métropole, à l’aéroport MRS et aux
                  escapades vers Aix ou Cassis.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
                  >
                    Réserver le van 8 places
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm shadow-lg shadow-black/10"
                  >
                    Question rapide
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm text-white/85">
                  {[
                    { icon: Users, label: "Jusqu’à 8 passagers" },
                    { icon: Luggage, label: "Bagages volumineux" },
                    { icon: Plane, label: "Aéroport & gare" },
                    { icon: Shield, label: "Tarif communiqué avant réservation" },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="font-medium">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carte “comment ça marche” */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Comment réserver le van 8 places ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous indiquez les détails",
                      desc: "Date, heure, passagers, bagages et adresses.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif communiqué + véhicule adapté à votre groupe.",
                    },
                    {
                      title: "On vous récupère",
                      desc: "Au point convenu (aéroport, gare, hôtel, domicile).",
                    },
                  ].map((step, idx) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400/25 to-blue-600/25 ring-1 ring-white/15 font-black">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="text-sm text-white/80">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/85">
                  Astuce : précisez le <strong>nombre de valises</strong> (et
                  poussettes / matériel) pour un chargement fluide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="border-b border-slate-100 bg-slate-50/80 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Jusqu’à 8 passagers",
              text: "Sièges réglables, climatisation : voyages sereins en groupe.",
            },
            {
              icon: Luggage,
              title: "Bagages volumineux",
              text: "Valises, poussettes, matériel sport : nous anticipons le chargement.",
            },
            {
              icon: Plane,
              title: "Aéroport & gare",
              text: "MRS, Saint-Charles, hôtels : prise en charge au plus près des accès.",
            },
            {
              icon: Shield,
              title: "Devis transparent",
              text: "Forfait ou au kilomètre selon le trajet — pas de surprise à bord.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <Icon className="mb-3 h-8 w-8 text-accent" aria-hidden />
              <h2 className="mb-2 text-lg font-bold text-slate-900">{title}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento “infos utiles” */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Infos pratiques
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Un van premium, pensé pour les groupes
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Aéroport MRS, gare Saint-Charles, hôtels, séminaires, excursions :
              on simplifie l’organisation avec un seul véhicule et un seul
              interlocuteur.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Confort + bagages = zéro compromis
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Le Mercedes van 8 places est idéal quand vous voyagez à plusieurs
                ou avec des valises. Pour les familles et groupes, nous pouvons
                prévoir équipements enfants sur demande (selon disponibilité).
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Jusqu’à 8 passagers",
                  "Coffre adapté aux valises",
                  "Sièges enfant sur demande",
                  "Paiement CB à bord",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 shrink-0" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Trajets fréquents
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Aéroport, gare, port, événements, excursions : on adapte l’horaire
                et l’itinéraire selon votre programme.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Conseil</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Pour les groupes, réservez en avance (notamment weekends et
                  soirées).
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Demander un devis
                </Button>
                <Button
                  href="/tarifs"
                  variant="outline"
                  className="w-full border-slate-200 bg-white hover:bg-slate-50 py-6 text-base"
                >
                  Voir les tarifs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax au milieu */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/taxi-marseille-service-coffre.jpeg)" }}
        aria-label="Taxi Marseille — Mercedes van 8 places"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Timer className="h-4 w-4 text-cyan-200" aria-hidden />
                Groupes · Bagages · Confort
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un seul véhicule, une organisation simple
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Aéroport, gare, port ou événement : on gère la logistique pour
                que tout le monde arrive ensemble, à l’heure.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver le van 8 places
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-6 py-6 text-base backdrop-blur-sm shadow-lg shadow-black/10"
                >
                  Poser une question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu éditorial + image */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pourquoi choisir notre Mercedes van 8 places avec Taxi Marseille ?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Le <strong>Mercedes van 8 places</strong> est la réponse la plus
                confortable lorsque vous dépassez cinq passagers, lorsque vous
                voyagez avec des <strong>bagages nombreux</strong> ou lorsque
                vous organisez un <strong>déplacement professionnel</strong>{" "}
                (accueil clients, séminaire, équipe sur chantier). C’est aussi le
                format adapté lorsque vous cherchez un{" "}
                <strong>taxi van sur Marseille</strong> pour tout le groupe dans
                un seul véhicule.
              </p>
              <p>
                Nous desservons l&apos;ensemble de la{" "}
                <strong>métropole marseillaise</strong>, l&apos;
                <Link
                  href="/services/taxi-aeroport-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  aéroport Marseille Provence
                </Link>
                , la{" "}
                <Link
                  href="/services/taxi-gare-saint-charles"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  gare Saint-Charles
                </Link>
                , les hôtels et palais des congrès, ainsi que les{" "}
                <strong>longues distances</strong> (
                <Link
                  href="/services/city-tour-visite-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  city tour / visite de Marseille
                </Link>
                , littoral, selon disponibilité).
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Siège enfant ou rehausseur sur demande à la réservation",
                "Attente possible sur site (excursion, dîner, réunion)",
                "Alternative SUV Mercedes pour 1 à 4 passagers si le van n’est pas nécessaire",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle
                    className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <div className="relative h-[350px] w-full sm:h-[420px] md:h-[550px]">
                <Image
                  src="/taxi-marseille-Cathedrale-Sainte-Marie-Majeure.jpeg"
                  alt="Mercedes van 8 places pour transferts et groupes à Marseille"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
                Mercedes van 8 places — idéal pour les groupes et les longues
                distances
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Cas d’usage */}
      <section className="bg-linear-to-b from-accent/5 via-white to-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Quand réserver le van 8 places ?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Un seul créneau à réserver, un interlocuteur pour tout le groupe, un
            véhicule homologué transport avec chauffeur.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Plane,
                title: "Transferts aéroport & croisière",
                desc: "Vol retardé, valises lourdes, groupe avec enfants : nous adaptons l’heure de prise en charge.",
              },
              {
                icon: Briefcase,
                title: "Entreprises & événements",
                desc: "Accueil délégations, salons, soirées au Pharo ou au Chanot — image soignée et ponctualité.",
              },
              {
                icon: Users,
                title: "Familles & tourisme",
                desc: "Journée vers Aix, Cassis ou la route des Crêtes : le van évite de multiplier les véhicules.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <Icon className="mb-4 h-10 w-10 text-accent" aria-hidden />
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent px-8 py-5 text-accent-foreground hover:opacity-90"
            >
              Demander un devis van 8 places
            </Button>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Mercedes van 8 places en images
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Découvrez le véhicule dédié aux groupes : volume, confort et
            présentation soignée pour vos transferts sur Marseille et au-delà.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-slate-600">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-blue-200/60 bg-linear-to-b from-white via-white to-blue-50/40 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              Questions fréquentes sur le van 8 places à Marseille
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-lg md:text-xl font-bold text-slate-900">
                      {item.q}
                    </span>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-800 ring-1 ring-cyan-200 transition-transform group-open:rotate-45">
                      <span className="text-2xl leading-none" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-slate-200 bg-white py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-10 shadow-2xl shadow-slate-900/20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  Prêt à réserver votre van 8 places ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez la date, l’heure, passagers et bagages. On confirme
                  rapidement avec un devis clair.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Button
                  href="/reservation"
                  size="lg"
                  className="bg-white text-slate-950 hover:bg-white/90 px-8 py-6 text-lg"
                >
                  Réserver en ligne
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm shadow-lg shadow-black/10"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {[
                "Aéroport MRS",
                "Gare Saint-Charles",
                "Événements & congrès",
                "Aix · Cassis",
              ].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 text-sm text-white/70">
              Besoin d’un autre service ?{" "}
              <Link
                href="/services"
                className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
              >
                Voir tous nos services
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD (Service + FAQPage) */}
      <Script
        id="service-van-8-places"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-van-8-places"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
