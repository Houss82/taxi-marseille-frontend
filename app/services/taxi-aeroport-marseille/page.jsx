export const metadata = {
  title: "Taxi aéroport Marseille | Marignane MRS 24h/24 | Prix fixe",
  description:
    "Réservez votre taxi aéroport Marseille Provence MRS : prise en charge terminal, suivi de vol, prix annoncé à l’avance, berline ou van 8 places 24h/24.",
  keywords:
    "taxi aéroport marseille, taxi marignane, navette mrs, aéroport marseille provence",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/taxi-aeroport-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import {
  CheckCircle,
  Clock,
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

export default function TaxiAeroportMarseille() {
  const priceCards = [
    ["Aéroport Marseille → Vieux-Port", "Tarif sur demande"],
    ["Aéroport Marseille → Gare Saint-Charles", "Tarif sur demande"],
    ["Aéroport Marseille → Prado / Castellane", "Tarif sur demande"],
  ];

  const faqItems = [
    {
      q: "Combien coûte un taxi entre Marseille et l’aéroport Marignane (MRS) ?",
      a: "Le prix dépend du point de départ, de l’horaire, du trafic et du véhicule choisi. Le tarif est annoncé avant la réservation afin d’éviter toute surprise.",
    },
    {
      q: "Le chauffeur suit-il mon vol ?",
      a: "Oui, nous pouvons suivre votre vol pour ajuster l’heure de prise en charge en cas d’avance ou de retard.",
    },
    {
      q: "Peut-on réserver un van 8 places pour l’aéroport Marseille ?",
      a: "Oui, un van 8 places peut être proposé selon disponibilité pour les familles, groupes ou clients avec plusieurs bagages.",
    },
    {
      q: "Où se fait la prise en charge à l’aéroport MRS ?",
      a: "Selon votre réservation, la prise en charge se fait au terminal / en salle des arrivées ou au point convenu. Indiquez votre numéro de vol et votre terminal si possible.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi aéroport Marseille (MRS)",
    serviceType: "Transfert aéroport",
    areaServed: [
      "Marseille",
      "Marignane",
      "Vieux-Port",
      "Prado",
      "Joliette",
      "Euroméditerranée",
      "Gare Saint-Charles",
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
          src="/aeroport-marseille.jpg"
          alt="Taxi aéroport Marseille Marignane - Taxi Marseille"
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
                    <Plane className="h-4 w-4 text-cyan-200" aria-hidden />
                    Aéroport MRS · Marignane
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-emerald-200" aria-hidden />
                    24h/24 · 7j/7
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi aéroport Marseille Marignane 24h/24
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Prise en charge terminal, <strong>suivi de vol</strong>, aide
                  bagages et véhicule adapté (berline, SUV ou{" "}
                  <strong>van 8 places</strong>).
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
                  >
                    Réserver mon taxi aéroport
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
                    { icon: Timer, label: "Temps moyen : 25–40 min vers Marseille" },
                    { icon: Shield, label: "Tarif communiqué avant réservation" },
                    { icon: Plane, label: "Suivi vol (avance/retard)" },
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
                      desc: "Vol, heure, terminal, passagers et bagages.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif communiqué + véhicule adapté (van si besoin).",
                    },
                    {
                      title: "On vous récupère",
                      desc: "Au terminal / point convenu, avec suivi de vol.",
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
                  Astuce : indique ton <strong>numéro de vol</strong> pour
                  ajuster automatiquement la prise en charge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO local (intention + zones) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Taxi aéroport Marseille : réservez votre transfert vers Marignane
          </h2>
          <p className="mb-4">
            Vous cherchez un <strong>taxi aéroport Marseille</strong> pour
            rejoindre l&apos;aéroport Marseille Provence à{" "}
            <strong>Marignane (MRS)</strong> ou partir du terminal vers Marseille
            centre ? Notre service assure vos transferts{" "}
            <strong>24h/24</strong> avec un tarif annoncé à l&apos;avance.
          </p>
          <p className="mb-4">
            Nous desservons les principaux quartiers de Marseille :{" "}
            <strong>Vieux-Port</strong>, <strong>Prado</strong>,{" "}
            <strong>La Joliette</strong>, <strong>Euroméditerranée</strong>,{" "}
            <strong>Castellane</strong>, <strong>La Timone</strong>,{" "}
            <strong>Saint-Charles</strong>, ainsi que les hôtels, ports et zones
            professionnelles.
          </p>
          <p>
            Pour un départ ou une arrivée, votre chauffeur suit votre vol, vous
            aide avec les bagages et vous accompagne jusqu&apos;à votre
            destination en berline, SUV ou <strong>van 8 places</strong> selon
            vos besoins.
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
              Départs & arrivées MRS : on anticipe pour vous
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Prise en charge terminal, aide aux bagages et itinéraire optimisé
              vers Marseille (A7/A55). Idéal après un vol tardif ou un départ
              très matinal.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Accueil terminal & bagages
              </h3>
              <p className="text-slate-700 leading-relaxed">
                À l’arrivée : prise en charge au terminal / salle des arrivées
                selon votre réservation. Nous aidons avec les bagages et
                proposons un <strong>van 8 places</strong> pour groupes (selon
                disponibilité).
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Suivi de vol (avance/retard)",
                  "Point de rendez-vous simple",
                  "Berline/SUV ou van 8 places",
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
                Temps de trajet & marge
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Comptez en général <strong>25 à 40 minutes</strong> vers le
                centre de Marseille, selon le trafic. On recommande une marge
                aux heures de pointe.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Conseil</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Pour un vol international, prévoyez un peu plus large (check-in,
                  contrôles).
                </p>
              </div>
              <div className="mt-6">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Réserver mon taxi aéroport
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax au milieu */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/taxi-marseille-aeroport-marignane.jpeg)" }}
        aria-label="Taxi Marseille — transfert aéroport Marignane"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Plane className="h-4 w-4 text-cyan-200" aria-hidden />
                Marignane (MRS) · Marseille
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un transfert aéroport sans stress
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Vol tôt le matin ou tard le soir : on s’adapte. Suivi de vol,
                bagages, et véhicule dimensionné (van 8 places sur demande).
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver mon taxi aéroport
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Taxi aéroport Marseille (MRS)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L&apos;aéroport Marseille Provence dessert le monde entier. Nous
              assurons vos trajets vers le Vieux-Port, les business districts,
              les ports de plaisance ou votre domicile.
            </p>
            <p className="mt-5 text-sm text-muted-foreground max-w-2xl mx-auto">
              <Link
                href="/blog/taxi-aeroport-marseille-mrs-guide-2026"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Taxi aéroport Marseille Marignane
              </Link>{" "}
              — guide (terminaux, durées, tarifs indicatifs) pour compléter cette
              page.
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                <strong className="text-accent">Taxi Marseille</strong> prend en
                charge vos arrivées et départs au terminal : panneau nominatif,
                aide aux bagages ; berlines, SUV ou{" "}
                <strong>van Mercedes 8 places</strong> selon le nombre de
                passagers.
              </p>
            </div>

            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Le trajet vers le centre de Marseille s&apos;étale en général
                sur <strong>25 à 40 minutes</strong> selon le trafic sur les
                autoroutes A7 / A55 et le périphérique.
              </p>
            </div>

            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Pourquoi réserver avec nous ?
              </h3>
              <ul className="space-y-4 text-gray-800">
                {[
                  "Tarif annoncé avant la course",
                  "Chauffeur à l'accueil avec panneau",
                  "Suivi des vols en temps réel",
                  "Véhicules premium climatisés (dont van 8 places)",
                  "Pas de supplément bagages raisonnables",
                ].map((advantage, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prix */}
          <section className="mt-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Prix taxi aéroport Marseille
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {priceCards.map(([trajet, prix]) => (
                <div
                  key={trajet}
                  className="rounded-2xl border border-cyan-200/70 p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-2">{trajet}</h3>
                  <p className="text-muted-foreground">{prix}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Le prix dépend de l&apos;horaire, du nombre de passagers, des
              bagages et du véhicule demandé.
            </p>
          </section>

          {/* FAQ SEO */}
          <section className="mt-16 rounded-3xl border border-blue-200/60 bg-linear-to-b from-white via-white to-blue-50/40 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              Questions fréquentes sur le taxi aéroport Marseille
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-6"
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
          </section>

          {/* CTA final moderne */}
          <div className="mt-16 pt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-10 shadow-2xl shadow-slate-900/20">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black">
                    Prêt à réserver votre taxi aéroport ?
                  </h3>
                  <p className="mt-4 text-white/80 leading-relaxed">
                    Indiquez vol, terminal, bagages et destination. On vous
                    confirme rapidement avec un véhicule adapté.
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
        id="service-taxi-aeroport-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-taxi-aeroport-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
