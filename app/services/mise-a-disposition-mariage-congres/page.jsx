export const metadata = {
  title: "Mise à disposition taxi Marseille | Chauffeur privé journée",
  description:
    "Réservez une mise à disposition taxi à Marseille avec chauffeur privé : demi-journée, journée complète, mariage, congrès, événement, van 8 places et devis clair.",
  keywords:
    "mise à disposition taxi marseille, chauffeur privé journée marseille, chauffeur mariage marseille, taxi congrès marseille, van avec chauffeur marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/mise-a-disposition-mariage-congres",
  },
};

import Button from "@/app/components/ui/Button";
import {
  CalendarClock,
  CheckCircle,
  HeartHandshake,
  MapPin,
  Shield,
  Timer,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function MiseADispositionMariageCongres() {
  const faqItems = [
    {
      q: "Qu’est-ce qu’une mise à disposition taxi ?",
      a: "C’est un service où un véhicule avec chauffeur reste disponible pendant une durée définie : quelques heures, une demi-journée ou une journée complète.",
    },
    {
      q: "Peut-on réserver un chauffeur pour un mariage à Marseille ?",
      a: "Oui, vous pouvez réserver un chauffeur pour un mariage, une cérémonie, une séance photo ou des navettes invités entre différents lieux.",
    },
    {
      q: "Proposez-vous un van avec chauffeur pour les groupes ?",
      a: "Oui, un van 8 places peut être proposé selon disponibilité pour les groupes, familles, invités, équipes ou passagers avec bagages.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mise à disposition taxi Marseille",
    serviceType: "Mise à disposition avec chauffeur",
    areaServed: [
      "Marseille",
      "Parc Chanot Marseille",
      "Pharo Marseille",
      "Vélodrome",
      "Vieux-Port",
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
          src="/chauffeur-prive.jpg"
          alt="Mise à disposition taxi Marseille — chauffeur privé journée"
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
                    <CalendarClock
                      className="h-4 w-4 text-cyan-200"
                      aria-hidden
                    />
                    Chauffeur privé journée
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-emerald-200" aria-hidden />
                    Devis clair
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Mise à disposition taxi Marseille
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Demi-journée, journée complète, <strong>mariage</strong>,{" "}
                  <strong>congrès</strong> et événements : on suit votre
                  planning avec un véhicule premium (berline, SUV ou{" "}
                  <strong>van 8 places</strong>).
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
                  >
                    Demander une mise à disposition
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
                    {
                      icon: Timer,
                      label: "Quelques heures, 1/2 journée ou journée",
                    },
                    {
                      icon: MapPin,
                      label: "Parc Chanot, Pharo, Vélodrome, hôtels",
                    },
                    { icon: Users, label: "Van 8 places (selon dispo)" },
                    {
                      icon: Shield,
                      label: "Tarif communiqué avant validation",
                    },
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
                  Comment fonctionne la mise à disposition ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous décrivez le besoin",
                      desc: "Durée, lieux, horaires, nombre de passagers, bagages.",
                    },
                    {
                      title: "On propose & on confirme",
                      desc: "Véhicule + devis clair + organisation des navettes si besoin.",
                    },
                    {
                      title: "Le chauffeur vous accompagne",
                      desc: "Selon votre planning (événement, photos, rendez-vous).",
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
                  Astuce : précisez le <strong>nombre d’arrêts</strong> et les
                  lieux (ex: Chanot → Pharo → hôtel) pour un devis précis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: CalendarClock,
                label: "À l’heure",
                desc: "1/2 journée ou journée",
              },
              {
                icon: HeartHandshake,
                label: "Mariage",
                desc: "Cérémonie & invités",
              },
              { icon: Users, label: "Groupes", desc: "Van 8 places" },
              {
                icon: CheckCircle,
                label: "Devis clair",
                desc: "Avant la course",
              },
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

      {/* Bento “infos utiles” */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Infos pratiques
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Chauffeur dédié : un service fluide, du début à la fin
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Pour un <strong>mariage</strong>, un <strong>congrès</strong> ou
              une journée business : vous gardez le même chauffeur et le même
              véhicule.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Organisation & navettes invités
              </h3>
              <p className="text-slate-700 leading-relaxed">
                On organise les horaires, points d’arrêt et navettes (hôtel →
                cérémonie → photos → réception). Idéal pour{" "}
                <strong>chauffeur mariage Marseille</strong> ou journées
                événement.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Planning sur mesure",
                  "Pancarte / accueil sur demande",
                  "Véhicules premium climatisés",
                  "Van 8 places (selon dispo)",
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
                Lieux fréquents
              </h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Parc Chanot</strong>, <strong>Pharo</strong>,{" "}
                <strong>Vélodrome</strong>, hôtels, centre-ville et ports : on
                optimise les trajets selon l’heure.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Conseil</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Pour un <strong>taxi congrès Marseille</strong>, partagez vos
                  créneaux (début/fin) : on cale les navettes au bon timing.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Demander mon devis chauffeur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax au milieu */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/splitshire-car-407165_1920.jpg)" }}
        aria-label="Taxi Marseille — mise à disposition avec chauffeur"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <HeartHandshake className="h-4 w-4 text-cyan-200" aria-hidden />
                Mariage · Congrès · Événement
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un chauffeur dédié, une journée maîtrisée
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Vous avez plusieurs arrêts ? On s’adapte, on optimise et on
                garde le rythme de votre événement.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Demander une mise à disposition
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

      {/* SEO local (intention + zones) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Mise à disposition taxi Marseille : chauffeur dédié pour vos
            événements
          </h2>

          <p className="mb-4">
            Vous recherchez une{" "}
            <strong>mise à disposition taxi Marseille</strong> pour plusieurs
            heures, une demi-journée ou une journée complète ? Notre service
            vous permet de réserver un véhicule avec chauffeur selon votre
            planning, vos horaires et vos lieux de rendez-vous.
          </p>

          <p className="mb-4">
            Cette solution est idéale pour un mariage, un congrès, une journée
            professionnelle, un événement au{" "}
            <strong>Parc Chanot Marseille</strong>, une réception au{" "}
            <strong>Pharo</strong>, un transfert vers le{" "}
            <strong>Vélodrome</strong> ou l’organisation de navettes pour vos
            invités.
          </p>

          <p>
            Berline, SUV ou{" "}
            <strong>van 8 places avec chauffeur à Marseille</strong> : nous
            adaptons le véhicule au nombre de passagers, aux bagages et au
            niveau de confort souhaité.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Requête associée :{" "}
            <strong>chauffeur privé journée Marseille</strong>.
          </p>
        </div>
      </section>

      {/* Cas d’utilisation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Pour quels besoins réserver une mise à disposition ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Mariage à Marseille ou en Provence",
              "Congrès au Parc Chanot",
              "Événement professionnel au Pharo",
              "Navettes invités vers hôtel ou salle",
              "Journée business avec plusieurs rendez-vous",
              "Van 8 places pour groupe ou famille",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-muted-foreground mt-2">
                  Organisation adaptée à vos horaires, lieux de prise en charge
                  et nombre de passagers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 text-lg text-gray-800 leading-relaxed space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Chauffeur pour mariage, congrès & événements
        </h2>
        <p>
          La mise à disposition, c&apos;est un{" "}
          <strong>véhicule avec chauffeur</strong> pour une durée définie. Idéal
          pour un <strong>mariage</strong> (cérémonie, photos, navettes
          invités), un <strong>congrès</strong> au <strong>Parc Chanot</strong>,
          un événement au <strong>Pharo</strong> ou une journée d&apos;agenda
          business.
        </p>
        <p>
          Nous organisons les horaires, les points d&apos;arrêt et la logistique
          (bagages, groupes) avec un <strong>devis clair</strong> avant
          validation. Berline ou <strong>Mercedes van 8 places</strong> selon
          vos besoins.
        </p>
        <div className="flex gap-4 pt-4">
          <Button
            href="/reservation"
            className="bg-accent text-accent-foreground"
          >
            Demander mon devis chauffeur
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="border-slate-200 bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30"
          >
            Contact
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Pour un transfert simple (aéroport, gare), voir{" "}
          <Link
            href="/services"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            nos services
          </Link>
          .
        </p>
      </section>

      {/* FAQ SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Questions fréquentes sur la mise à disposition taxi Marseille
          </h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm"
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
      <section className="py-18 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-10 shadow-2xl shadow-slate-900/20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  Prêt à réserver votre chauffeur pour la journée ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Décrivez votre planning (lieux, horaires, passagers) : on vous
                  propose un véhicule adapté et un devis clair.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Button
                  href="/reservation"
                  size="lg"
                  className="bg-white text-slate-950 hover:bg-white/90 px-8 py-6 text-lg"
                >
                  Demander mon devis chauffeur
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
                "Mariage",
                "Congrès (Parc Chanot)",
                "Pharo",
                "Navettes invités",
              ].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 text-sm text-white/70">
              Besoin d’un transfert simple ?{" "}
              <Link
                href="/services"
                className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
              >
                Voir nos services
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD (Service + FAQPage) */}
      <Script
        id="service-mise-a-disposition"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-mise-a-disposition"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
