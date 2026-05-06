export const metadata = {
  title:
    "Taxi port de croisière Marseille | Terminal J4 & MPCT 24h/24",
  description:
    "Réservez votre taxi port de croisière Marseille : transfert vers terminaux J4, MPCT et La Joliette, prise en charge bagages, van 8 places et service disponible 24h/24.",
  keywords:
    "taxi port de croisière marseille, taxi terminal j4 marseille, taxi mpct marseille, taxi croisière marseille, transfert port marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/port-de-croisieres",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Anchor,
  CheckCircle,
  Clock,
  Luggage,
  MapPin,
  Ship,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function PortDeCroisieres() {
  const popularTrips = [
    "Aéroport Marseille Provence → Terminal J4",
    "Gare Saint-Charles → Port de croisière Marseille",
    "Vieux-Port → MPCT Marseille",
    "La Joliette → Terminal croisière",
    "Hôtel Marseille centre → Port de croisière",
    "Terminal croisière → Aéroport Marseille",
  ];

  const faqItems = [
    {
      q: "Quel terminal dessert le taxi à Marseille ?",
      a: "Les transferts peuvent être assurés vers les principaux terminaux comme J4, MPCT et les zones de croisière de La Joliette, selon votre compagnie et le jour d’escale.",
    },
    {
      q: "Peut-on réserver un van pour plusieurs bagages ?",
      a: "Oui, un van 8 places peut être proposé selon disponibilité pour les familles, groupes ou passagers avec bagages volumineux.",
    },
    {
      q: "Le chauffeur peut-il attendre en cas de retard ?",
      a: "En indiquant votre horaire d’embarquement ou d’arrivée, la prise en charge peut être adaptée selon les conditions du port et du trafic.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi port de croisière Marseille",
    serviceType: "Transfert port / terminal croisière",
    areaServed: [
      "Marseille",
      "La Joliette",
      "Terminal J4 (Marseille)",
      "MPCT (Marseille Provence Cruise Terminal)",
      "Vieux-Port",
      "Gare Saint-Charles",
      "Aéroport Marseille Provence (MRS)",
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
      {/* Hero moderne */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/taxi-marseille-port-de-croisiere.jpeg"
          alt="Taxi port de croisière Marseille — terminaux J4 et MPCT"
          fill
          className="object-cover"
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
                    <Ship className="h-4 w-4 text-cyan-200" aria-hidden />
                    Terminal J4 · MPCT · La Joliette
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-emerald-200" aria-hidden />
                    24h/24 · 7j/7
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi port de croisière Marseille
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Transferts vers les terminaux <strong>J4</strong> et{" "}
                  <strong>MPCT</strong>, prise en charge bagages,{" "}
                  <strong>van 8 places</strong> sur demande — avec un tarif
                  communiqué avant réservation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
                  >
                    Réserver mon taxi croisière
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
                    { icon: MapPin, label: "Dépose au plus près (accès autorisés)" },
                    { icon: Luggage, label: "Assistance bagages sur demande" },
                    { icon: Timer, label: "Marge escale / heure de rappel" },
                    { icon: CheckCircle, label: "Van 8 places (selon dispo)" },
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
                  Comment se passe la prise en charge ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous réservez",
                      desc: "Terminal (J4/MPCT), créneau, passagers, bagages.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif communiqué avant réservation, véhicule adapté.",
                    },
                    {
                      title: "On vous dépose",
                      desc: "Au plus près des accès autorisés le jour J.",
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
                  Astuce : indique ton <strong>horaire d’embarquement</strong> ou
                  de <strong>débarquement</strong> pour prévoir la marge
                  nécessaire.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO local (intention + mots-clés) */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Taxi port de croisière Marseille : transfert vers J4 et MPCT
          </h2>
          <p className="mb-4">
            Vous recherchez un <strong>taxi port de croisière Marseille</strong>{" "}
            pour rejoindre les terminaux <strong>J4</strong>, <strong>MPCT</strong>{" "}
            ou le <strong>port de croisière La Joliette</strong> ? Notre service
            assure vos transferts depuis l&apos;aéroport Marseille Provence, la
            gare Saint-Charles, votre hôtel ou le centre-ville.
          </p>
          <p className="mb-4">
            Nos chauffeurs connaissent les accès aux différents terminaux de{" "}
            <strong>croisière Marseille Provence</strong> et vous déposent au
            plus proche des zones autorisées avec assistance bagages si
            nécessaire.
          </p>
          <p>
            Pour les familles, groupes ou voyageurs avec plusieurs valises, un{" "}
            <strong>van 8 places</strong> peut être proposé selon disponibilité
            afin de faciliter votre arrivée au <strong>port de croisière de Marseille</strong>.
          </p>
        </div>
      </section>

      {/* Bento “infos utiles” */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <Anchor className="h-3.5 w-3.5" aria-hidden />
              Infos utiles
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Terminaux, accès et escales : on s’occupe du compliqué
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Le port de croisière de Marseille se répartit entre{" "}
              <strong>J4</strong>, <strong>MPCT</strong> et{" "}
              <strong>La Joliette</strong>. Les accès changent selon le jour et
              la compagnie : un chauffeur local fait gagner du temps.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Dépose au plus près des zones autorisées
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Nous vous déposons au plus près des entrées passagers en
                respectant les filtres du jour. Pour les familles, groupes ou
                voyageurs avec plusieurs valises, un <strong>van 8 places</strong>{" "}
                peut être proposé selon disponibilité.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Terminal J4 (proche Mucem)",
                  "MPCT (Marseille Provence Cruise Terminal)",
                  "La Joliette & accès portuaires",
                  "Hôtels centre & Euroméditerranée",
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
                Escale : retour avant l’heure de rappel
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Pour une excursion, nous planifions l’itinéraire et le retour au
                terminal avant <strong>l’heure de rappel</strong>. À préciser au
                moment de la réservation.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Bon à savoir</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Selon la compagnie et l’affluence, la marche terminal ↔ véhicule
                  peut varier. On prévoit la marge.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Réserver mon taxi croisière
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-5 text-center text-slate-700">
            <Anchor className="inline-block h-5 w-5 text-accent mr-2" aria-hidden />
            Pour une page secteur dédiée, voir{" "}
            <Link
              href="/secteurs/port-de-croisiere"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Port de croisière (secteur)
            </Link>
            .
          </div>
        </div>
      </section>

      {/* Parallax — visuel premium au milieu */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/taxi-marseille-port-ferry.jpeg)" }}
        aria-label="Taxi Marseille — port, ferries et croisières"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Ship className="h-4 w-4 text-cyan-200" aria-hidden />
                Port de Marseille · J4 · MPCT
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un transfert portuaire sans stress
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Bagages, accès filtrés, files d&apos;attente : on anticipe. Vous
                êtes déposé au plus près des zones autorisées avec un véhicule
                adapté (berline ou <strong>van 8 places</strong>).
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver mon taxi croisière
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

      {/* Trajets fréquents */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
            Trajets fréquents vers le port de croisière Marseille
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTrips.map((trajet) => (
              <div
                key={trajet}
                className="rounded-2xl border border-cyan-200/70 p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg">{trajet}</h3>
                <p className="text-muted-foreground mt-2">
                  Tarif communiqué avant réservation selon le trajet et
                  l&apos;horaire.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Questions fréquentes sur le taxi port de croisière Marseille
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
      </section>

      {/* CTA final moderne */}
      <section className="py-18 md:py-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/0 to-cyan-500/10 p-10 shadow-2xl shadow-black/30">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  Besoin d’un taxi vers le port de croisière ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez terminal (<strong>J4</strong> / <strong>MPCT</strong>),
                  horaire et bagages. On vous confirme rapidement avec un
                  véhicule adapté.
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
          </div>
        </div>
      </section>

      {/* JSON-LD (Service + FAQPage) */}
      <Script
        id="service-port-de-croisiere-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-port-de-croisiere-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}

