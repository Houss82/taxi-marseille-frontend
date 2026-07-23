export const metadata = {
  title: "City tour Marseille | Visite privée en taxi | Taxi Marseille",
  description:
    "City tour Marseille en taxi privé : Vieux-Port, Panier, Notre-Dame-de-la-Garde, Corniche, MuCEM. Chauffeur local, itinéraire sur mesure, arrêts photos. Devis sur demande, 1h à demi-journée.",
  keywords:
    "city tour marseille, visite marseille taxi, chauffeur visite marseille, tour marseille en voiture, taxi touristique marseille, visite guidée marseille taxi",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/city-tour-visite-marseille",
  },
};

import Button from "@/app/components/ui/Button";
import {
  Camera,
  CheckCircle,
  Clock,
  Compass,
  MapPin,
  Shield,
  Timer,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function CityTourVisiteMarseille() {
  const tourFormulas = [
    {
      title: "Express 1 h",
      desc: "Vieux-Port, Panier ou Bonne Mère — l’essentiel en un créneau court.",
    },
    {
      title: "Classique 2 h",
      desc: "Vieux-Port, Panier, Notre-Dame-de-la-Garde et points de vue photo.",
    },
    {
      title: "Demi-journée",
      desc: "Corniche, MuCEM, Joliette, Prado — itinéraire personnalisé selon vos envies.",
    },
    {
      title: "Escale croisière",
      desc: "Prise en charge terminal J4/MPCT, visite, retour avant l’heure de rappel.",
    },
    {
      title: "Groupe & famille",
      desc: "Mercedes van 8 places sur demande — un seul véhicule pour tout le monde.",
    },
    {
      title: "Soirée / coucher de soleil",
      desc: "Corniche Kennedy et Vieux-Port de nuit — service selon disponibilité.",
    },
  ];

  const highlights = [
    "Vieux-Port & Canebière",
    "Le Panier (rues & street-art)",
    "Notre-Dame-de-la-Garde",
    "Corniche Kennedy & plages",
    "MuCEM & Fort Saint-Jean",
    "Joliette & Docks",
  ];

  const faqItems = [
    {
      q: "Combien coûte un city tour Marseille en taxi ?",
      a: "Le tarif dépend de la durée (1 h, 2 h, demi-journée), du point de départ, du nombre de passagers et du véhicule. Un devis vous est communiqué avant la réservation.",
    },
    {
      q: "Peut-on personnaliser l’itinéraire ?",
      a: "Oui : vous indiquez vos priorités (monuments, photos, restaurants, shopping) et le chauffeur adapte le parcours selon le trafic et le temps disponible.",
    },
    {
      q: "Le chauffeur attend-il pendant les arrêts ?",
      a: "Oui, le véhicule reste à disposition pendant les pauses photo ou visites courtes. Les durées d’arrêt sont intégrées au créneau réservé.",
    },
    {
      q: "City tour depuis le port de croisière : est-ce possible ?",
      a: "Oui, nous pouvons vous récupérer au terminal croisière (J4, MPCT) pour une excursion à la journée ou demi-journée, avec retour avant l’heure de rappel.",
    },
    {
      q: "Proposez-vous un van pour les groupes ?",
      a: "Un Mercedes van 8 places peut être proposé selon disponibilité pour les familles et petits groupes souhaitant un city tour ensemble.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "City tour Marseille en taxi",
    serviceType: "Visite touristique / excursion privée",
    areaServed: [
      "Marseille",
      "Vieux-Port",
      "Le Panier",
      "Notre-Dame-de-la-Garde",
      "Corniche Kennedy",
      "MuCEM",
      "La Joliette",
      "Prado",
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
      <section className="service-hero relative min-h-[88vh] flex items-start md:items-center overflow-hidden pt-20 pb-16 md:pb-24">
        <Image
          src="/taxi-marseille-vieux-port.jpeg"
          alt="City tour Marseille — visite du Vieux-Port en taxi privé"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/30" aria-hidden />
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
                    <Compass className="h-4 w-4 text-cyan-200" aria-hidden />
                    Visite sur mesure
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-emerald-200" aria-hidden />
                    1 h · 2 h · demi-journée
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  City tour Marseille en taxi privé
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Découvrez Marseille avec un <strong>chauffeur local</strong> :
                  itinéraire flexible, <strong>arrêts photos</strong>, dépose au
                  plus près des accès autorisés — berline ou{" "}
                  <strong>van 8 places</strong>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
                  >
                    Demander un city tour
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
                    { icon: Timer, label: "Formules 1 h, 2 h ou demi-journée" },
                    { icon: Camera, label: "Arrêts photos & points de vue" },
                    { icon: MapPin, label: "Vieux-Port, Panier, Bonne Mère…" },
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

              {/* Carte « comment ça marche » */}
              <div className="service-hero-card rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Comment se déroule la visite ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous précisez",
                      desc: "Durée, point de départ, envies (monuments, photos, escale croisière).",
                    },
                    {
                      title: "On confirme",
                      desc: "Devis communiqué + véhicule adapté (van si groupe).",
                    },
                    {
                      title: "On vous guide",
                      desc: "Parcours fluide, arrêts au fil de la route, retour à l’heure convenue.",
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
                  Astuce : indiquez si vous partez d&apos;une{" "}
                  <strong>escale croisière</strong> — on calle le retour avant
                  l&apos;heure de rappel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO local */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Visite de Marseille en taxi : confortable, flexible et local
          </h2>
          <p className="mb-4">
            Vous cherchez un <strong>city tour Marseille</strong> pour
            découvrir la ville sans contraintes de parking ni de transports en
            commun ? Notre service vous propose une{" "}
            <strong>visite privée en taxi</strong> avec un chauffeur qui
            connaît les accès, les points de vue et les rues autorisées.
          </p>
          <p className="mb-4">
            Idéal si vous avez <strong>peu de temps</strong> (escale
            croisière, week-end court), si vous voyagez avec des{" "}
            <strong>enfants ou des seniors</strong>, ou si vous souhaitez
            enchaîner plusieurs quartiers en une seule matinée :{" "}
            <strong>Vieux-Port</strong>, <strong>Le Panier</strong>,{" "}
            <strong>Notre-Dame-de-la-Garde</strong>, <strong>Corniche</strong>
            , <strong>MuCEM</strong> ou <strong>Joliette</strong>.
          </p>
          <p>
            Le tarif est <strong>communiqué avant la réservation</strong> selon
            la durée et le véhicule. Pour les groupes, un{" "}
            <strong>van 8 places</strong> peut être proposé selon
            disponibilité.
          </p>
          <p className="mt-6 text-base text-gray-600">
            Pour le Vieux-Port en détail :{" "}
            <Link
              href="/blog/taxi-vieux-port-marseille-guide-2026"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              guide taxi Vieux-Port
            </Link>
            . Escale croisière :{" "}
            <Link
              href="/blog/taxi-marseille-port-croisiere-guide-2026"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              guide port de croisière
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Bento « infos utiles » */}
      <section className="service-bento py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <Compass className="h-3.5 w-3.5" aria-hidden />
              Incontournables
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Les spots d&apos;un city tour à Marseille
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              L&apos;itinéraire s&apos;adapte à votre créneau et à la
              circulation. Voici les étapes les plus demandées.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Parcours type & arrêts photos
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Votre chauffeur vous dépose au plus près des zones accessibles,
                vous laisse le temps de photographier la vue sur le port ou la
                Bonne Mère, puis enchaîne vers le quartier suivant sans perdre
                de temps en correspondances.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
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
                Pourquoi un taxi plutôt qu&apos;un bus touristique ?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Itinéraire <strong>100 % personnalisable</strong>, rythme à
                votre main, pas d&apos;attente de départ collectif — et accès
                aux collines (Bonne Mère) sans marche depuis le bus.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Bon à savoir</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  Certaines rues du Panier sont piétonnes : le chauffeur vous
                  dépose au meilleur accès puis vous récupère au point convenu.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  href="/reservation"
                  className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-base"
                >
                  Demander un devis city tour
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-5 text-center text-slate-700">
            <MapPin className="inline-block h-5 w-5 text-accent mr-2" aria-hidden />
            Découvrez aussi notre page secteur{" "}
            <Link
              href="/secteurs/vieux-port"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Vieux-Port
            </Link>
            .
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage:
            "url(/taxi-marseille-Basilique Notre-Dame-de-la-Garde.jpeg)",
        }}
        aria-label="City tour Marseille — Notre-Dame de la Garde"
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
                <Camera className="h-4 w-4 text-cyan-200" aria-hidden />
                Panorama · Bonne Mère · Corniche
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Marseille vue d&apos;en haut, sans la montée à pied
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Notre-Dame-de-la-Garde, la Corniche et les calanques au loin :
                votre chauffeur vous emmène aux <strong>belvédères</strong> les
                plus photogéniques de la cité phocéenne.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver ma visite
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

      {/* Formules / trajets */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
            Formules city tour les plus demandées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tourFormulas.map((formula) => (
              <div
                key={formula.title}
                className="rounded-2xl border border-cyan-200/70 p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-slate-900">
                  {formula.title}
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {formula.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc confiance + points forts */}
      <section className="py-24 bg-linear-to-b from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Un city tour pensé pour vous
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chauffeur local, véhicule confortable et parcours ajusté en temps
              réel selon le trafic marseillais.
            </p>
          </div>

          <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Ce qui est inclus
            </h3>
            <ul className="space-y-4 text-gray-800">
              {[
                "Chauffeur connaissant Marseille et les accès autorisés",
                "Itinéraire flexible selon vos envies et le temps disponible",
                "Arrêts photos et pauses à la demande",
                "Devis communiqué avant confirmation",
                "Berline, SUV ou van 8 places selon le groupe",
              ].map((advantage) => (
                <li key={advantage} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-accent shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5">
              <Shield className="h-6 w-6 text-cyan-600 shrink-0 mt-0.5" aria-hidden />
              <p className="text-slate-700 leading-relaxed text-base">
                <strong className="text-slate-900">Taxi Marseille</strong> assure
                aussi les transferts classiques (aéroport MRS, gare
                Saint-Charles, port de croisière) — pratique pour combiner
                arrivée et city tour sur la même réservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Questions fréquentes sur le city tour Marseille
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

      {/* CTA final */}
      <section className="py-18 md:py-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/0 to-cyan-500/10 p-10 shadow-2xl shadow-black/30">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  Prêt à visiter Marseille en taxi ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez la durée souhaitée, votre point de départ (hôtel,
                  gare, port) et vos incontournables. On vous envoie un devis
                  rapidement.
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

      <Script
        id="service-city-tour-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-city-tour-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
