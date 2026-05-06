export const metadata = {
  title: "Taxi Gare Saint-Charles Marseille | Réservation 24h/24",
  description:
    "Réservez votre taxi gare Saint-Charles Marseille : prise en charge à la gare TGV, aide aux bagages, transfert vers Vieux-Port, port, hôtel ou aéroport Marseille Provence.",
  keywords:
    "taxi gare saint-charles marseille, taxi gare marseille, taxi saint charles, taxi gare tgv marseille, transfert gare saint-charles",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/taxi-gare-saint-charles",
  },
};

import Button from "@/app/components/ui/Button";
import {
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Timer,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function TaxiGareSaintCharles() {
  const popularTrips = [
    "Gare Saint-Charles → Vieux-Port",
    "Gare Saint-Charles → Aéroport Marseille Provence",
    "Gare Saint-Charles → Terminal croisière",
    "Gare Saint-Charles → Prado",
    "Gare Saint-Charles → La Joliette",
    "Gare Saint-Charles → Euroméditerranée",
  ];

  const faqItems = [
    {
      q: "Où prendre un taxi à la gare Saint-Charles ?",
      a: "Le chauffeur peut vous donner un point de rendez-vous simple à la sortie de la gare ou vous attendre avec un panneau nominatif sur demande.",
    },
    {
      q: "Peut-on réserver un taxi depuis la gare vers l’aéroport Marseille Provence ?",
      a: "Oui, vous pouvez réserver un transfert depuis la gare Saint-Charles vers l’aéroport Marseille Provence à Marignane.",
    },
    {
      q: "Le taxi attend-il en cas de retard du train ?",
      a: "En indiquant votre numéro de train ou votre horaire d’arrivée, le chauffeur peut adapter la prise en charge selon les informations disponibles.",
    },
    {
      q: "Proposez-vous un van 8 places au départ de Saint-Charles ?",
      a: "Oui, un van 8 places peut être proposé selon disponibilité pour les familles, groupes ou voyageurs avec plusieurs valises.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi gare Saint-Charles Marseille",
    serviceType: "Transfert gare / prise en charge TGV",
    areaServed: [
      "Marseille",
      "Vieux-Port",
      "Joliette",
      "Euroméditerranée",
      "Prado",
      "Aéroport Marseille Provence (MRS)",
      "Port de croisière",
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
          src="/taxi-marseille-gare-st-charles.png"
          alt="Taxi Gare Saint-Charles Marseille - centre-ville et accès gare TGV"
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
                    <Train className="h-4 w-4 text-cyan-200" aria-hidden />
                    Gare Saint-Charles · TGV · TER
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-emerald-200" aria-hidden />
                    24h/24 · 7j/7
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Gare Saint-Charles Marseille
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Prise en charge sortie de gare, aide bagages et transferts
                  vers <strong>Vieux-Port</strong>, <strong>Joliette</strong>,{" "}
                  <strong>aéroport MRS</strong> et terminaux croisière.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
                  >
                    Réserver mon taxi gare Saint-Charles
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
                    { icon: MapPin, label: "Point de rendez-vous simple" },
                    { icon: Timer, label: "Retards train pris en compte" },
                    {
                      icon: Shield,
                      label: "Tarif communiqué avant réservation",
                    },
                    { icon: Users, label: "Van 8 places (selon dispo)" },
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
                      desc: "Train, heure d’arrivée, destination et bagages.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif communiqué + véhicule adapté (van si besoin).",
                    },
                    {
                      title: "On vous récupère",
                      desc: "À la sortie de la gare / point convenu.",
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
                  Astuce : indique ton <strong>numéro de train</strong> si tu
                  peux, pour ajuster l’horaire en cas de retard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO local (intention + réservation) */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Taxi gare Saint-Charles Marseille : réservation simple et rapide
          </h2>
          <p className="mb-4">
            Vous cherchez un <strong>taxi gare Saint-Charles Marseille</strong>{" "}
            pour votre arrivée en TGV, votre départ en train ou une
            correspondance ? Notre service vous accompagne depuis la gare vers
            le Vieux-Port, La Joliette, Euroméditerranée, Prado, les hôtels du
            centre-ville ou l&apos;aéroport Marseille Provence.
          </p>
          <p className="mb-4">
            Le chauffeur peut vous récupérer à la sortie de la gare, vous aider
            avec vos bagages et vous conduire rapidement vers votre destination.
            Pour les familles, les groupes ou les voyageurs avec plusieurs
            valises, un <strong>van 8 places</strong> peut être proposé selon
            disponibilité.
          </p>
          <p>
            Réservez votre <strong>taxi à la gare Saint-Charles</strong> en
            indiquant votre heure d&apos;arrivée, votre train et votre
            destination afin de recevoir une confirmation rapide.
          </p>
        </div>
      </section>

      {/* Bento “infos utiles” */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Infos pratiques
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Arrivées TGV/TER : gagnez du temps dès la sortie de gare
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Point de rendez-vous simple, aide aux bagages et transferts
              rapides vers le centre-ville, l’aéroport ou le port.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Sortie de gare & bagages
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Nous vous récupérons à la sortie de la gare / point convenu,
                avec aide aux bagages. Pour les groupes, un{" "}
                <strong>van 8 places</strong> peut être proposé selon
                disponibilité.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Pancarte nominative sur demande",
                  "Correspondances bus/métro maîtrisées",
                  "Tarif communiqué avant réservation",
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
                Connexions rapides
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Vieux-Port, Joliette/Euromed, terminaux croisière, aéroport MRS
                : on optimise l’itinéraire selon l’heure et la circulation.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Conseil</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Si tu as une correspondance, précise l’heure limite : on
                  prévoit la marge.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Réserver mon taxi gare Saint-Charles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax au milieu */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/taxi-marseille-gare-st-charles.png)" }}
        aria-label="Taxi Marseille — transferts depuis Saint-Charles"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Train className="h-4 w-4 text-cyan-200" aria-hidden />
                Saint-Charles · Centre-ville
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un départ/une arrivée de gare sans friction
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Bagages, correspondances, timing : on fluidifie. Point de
                rendez-vous simple et dépôt au plus près.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver mon taxi gare
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

      <section className="py-24 bg-linear-to-b from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Un taxi fiable à la gare Saint-Charles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hub national et régional : nous vous récupérons à la sortie de
              votre train ou vous déposons à temps pour votre départ.
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                <strong className="text-accent">Taxi Marseille</strong> gère vos
                transferts depuis ou vers la <strong>gare Saint-Charles</strong>{" "}
                : liaisons avec le <strong>Vieux-Port</strong>,{" "}
                <strong>Joliette</strong>, les hôtels du centre, l&apos;
                <strong>aéroport Marseille Provence (MRS)</strong> ou les
                terminaux de croisière. <strong>Mercedes van 8 places</strong>{" "}
                sur demande pour familles et bagages volumineux.
              </p>
            </div>

            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Points forts
              </h3>
              <ul className="space-y-4 text-gray-800">
                {[
                  "Accueil avec panneau nominatif sur demande",
                  "Aide aux bagages et véhicules adaptés aux valises",
                  "Correspondances avec bus et métro maîtrisées",
                  "Trajets vers gare maritime ou zones Euroméditerranée",
                ].map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trajets fréquents */}
          <section className="mt-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Trajets fréquents depuis la gare Saint-Charles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularTrips.map((trajet) => (
                <div
                  key={trajet}
                  className="rounded-2xl border border-cyan-200/70 p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg">{trajet}</h3>
                  <p className="text-muted-foreground mt-2">
                    Tarif annoncé avant réservation selon l&apos;horaire et le
                    trajet.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ SEO */}
          <section className="mt-16 rounded-3xl border border-blue-200/60 bg-linear-to-b from-white via-white to-blue-50/40 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              Questions fréquentes sur le taxi gare Saint-Charles
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
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA final moderne */}
          <div className="mt-16 pt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-10 shadow-2xl shadow-slate-900/20">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black">
                    Prêt à réserver votre taxi gare Saint-Charles ?
                  </h3>
                  <p className="mt-4 text-white/80 leading-relaxed">
                    Indiquez votre train, l’heure, bagages et destination. On
                    vous confirme rapidement.
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
        </div>
      </section>

      {/* JSON-LD (Service + FAQPage) */}
      <Script
        id="service-taxi-gare-saint-charles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-taxi-gare-saint-charles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
