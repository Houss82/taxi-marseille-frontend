// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

import Button from "@/app/components/ui/Button";
import {
  Anchor,
  CheckCircle,
  Clock,
  Hotel,
  MapPin,
  Ship,
  Shield,
  Timer,
  Train,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Taxi Vieux-Port Marseille | Dépose quais, ferries & hôtels 24h/24",
  description:
    "Réservez votre taxi au Vieux-Port de Marseille : dépose au plus près des quais, hôtels et restaurants, transferts vers gare Saint-Charles, port (J4/MPCT) et aéroport MRS. Service 24h/24.",
  keywords:
    "taxi vieux-port marseille, taxi vieux port, taxi quai du port marseille, taxi ferry marseille, taxi hotels vieux port",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/taxi-vieux-port",
  },
};

const gallery = [
  {
    src: "/taxi-marseille-vieux-port.jpeg",
    alt: "Taxi Marseille au Vieux-Port — quais et centre historique",
    caption: "Dépose au plus près des quais, hôtels et restaurants du port",
  },
  {
    src: "/taxi-marseille-vieux-port-van-1.jpeg",
    alt: "Mercedes van Taxi Marseille en dépose au Vieux-Port",
    caption: "Idéal pour familles, groupes et bagages côté port",
  },
  {
    src: "/taxi-marseille-van-arriere-vieux-port.jpeg",
    alt: "Taxi van au Vieux-Port de Marseille, coffre bagages",
    caption: "Transferts hôtels, ferries et soirées avec bagages",
  },
  {
    src: "/taxi-marseille-port-ferry.jpeg",
    alt: "Taxi Marseille vers ferries et gare maritime",
    caption: "Liaisons vers La Joliette, ferries Corse & Maghreb",
  },
];

export default function TaxiVieuxPortService() {
  const useCases = [
    {
      title: "Hôtels & restaurants",
      desc: "Dépose au plus près de votre adresse sur les quais ou en périphérie immédiate du port.",
      href: "/services/trajets-hotels-evenements",
      label: "Hôtels & événements",
    },
    {
      title: "Gare Saint-Charles",
      desc: "Correspondance TGV / TER : trajet court mais sensible au trafic — réservez avec marge.",
      href: "/services/taxi-gare-saint-charles",
      label: "Taxi gare Saint-Charles",
    },
    {
      title: "Ferries & croisière",
      desc: "Vieux-Port ↔ La Joliette, gares maritimes, terminaux J4 / MPCT selon votre embarquement.",
      href: "/services/port-de-croisieres",
      label: "Port de croisière",
    },
    {
      title: "Aéroport MRS",
      desc: "Aller ou retour Marignane avec suivi de vol possible et tarif annoncé à la réservation.",
      href: "/services/taxi-aeroport-marseille",
      label: "Taxi aéroport",
    },
  ];

  const faqItems = [
    {
      q: "Où se fait la dépose au Vieux-Port en taxi ?",
      a: "Selon votre adresse et les restrictions (zones piétonnes, événements), la dépose se fait sur les axes autorisés autour du port (Quai du Port, Quai de Rive Neuve, Quai de la Fraternité) avec quelques mètres à pied si nécessaire.",
    },
    {
      q: "Peut-on relier rapidement le Vieux-Port et la gare Saint-Charles ?",
      a: "Oui. Le trajet est court mais peut varier selon l’heure et la circulation. Si vous avez une correspondance, indiquez votre contrainte horaire lors de la réservation.",
    },
    {
      q: "Vous faites aussi les transferts vers les ferries et le port de croisière ?",
      a: "Oui. Nous assurons les transferts Vieux-Port ↔ La Joliette (gares maritimes, J4, MPCT) selon votre terminal et l’affluence du jour.",
    },
    {
      q: "Le service taxi Vieux-Port est-il disponible la nuit ?",
      a: "Oui. Nous intervenons 24 h/24 et 7 j/7 sur réservation — utile pour les retours de soirée, les départs ferry matinaux ou les arrivées tardives.",
    },
    {
      q: "Comment réserver un taxi pour un hôtel au Vieux-Port ?",
      a: "Indiquez le nom de l’hôtel (ou l’adresse exacte), l’horaire et le nombre de passagers. Nous confirmons le tarif et le point de dépose le plus adapté aux accès du moment.",
    },
    {
      q: "Peut-on réserver un van pour un groupe au Vieux-Port ?",
      a: "Oui. Pour les familles ou groupes avec bagages, un Mercedes van jusqu’à 8 places est disponible selon configuration. Précisez passagers et valises à la réservation.",
    },
    {
      q: "Le tarif est-il annoncé à l’avance ?",
      a: "Oui. Le montant ou le devis est communiqué avant confirmation — pas de surprise au compteur si vous avez validé ce tarif.",
    },
    {
      q: "Où trouver plus d’infos pratiques sur les accès ?",
      a: "Consultez notre guide blog Taxi Vieux-Port Marseille et la page secteur Vieux-Port pour les zones de dépose, ferries et conseils locaux.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi Vieux-Port Marseille",
    serviceType: "Transfert local / dépose centre-ville",
    description:
      "Taxi au Vieux-Port de Marseille : dépose quais, hôtels et restaurants, transferts gare Saint-Charles, ferries, port de croisière et aéroport MRS. Tarif annoncé à la réservation, 24h/24.",
    areaServed: [
      "Vieux-Port",
      "Marseille",
      "La Joliette",
      "Port de croisière (J4 / MPCT)",
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
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="service-hero relative min-h-[88vh] flex items-start md:items-center overflow-hidden pt-20 pb-16 md:pb-24">
        <Image
          src="/vieux-port-marseille.jpg"
          alt="Taxi Vieux-Port Marseille — quais et accès centre-ville"
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

        <div className="service-hero-inner relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="text-white">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    <Anchor className="h-4 w-4 text-cyan-200" aria-hidden />
                    Vieux-Port · centre historique
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-emerald-200" aria-hidden />
                    Tarif annoncé
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Vieux-Port Marseille
                </h1>
                <p className="mt-3 text-lg md:text-xl font-semibold text-cyan-100/95">
                  Quais · hôtels · ferries · gare · aéroport · 24h/24
                </p>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Réservez un <strong>taxi au Vieux-Port</strong> pour une
                  dépose au plus près des quais, hôtels et restaurants.
                  Chauffeur local, <strong>tarif annoncé</strong>, accès
                  adaptés aux zones piétonnes et à l’affluence du jour.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
                  >
                    Réserver un taxi Vieux-Port
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
                    { icon: MapPin, label: "Dépose quais & hôtels" },
                    { icon: Train, label: "Gare Saint-Charles" },
                    { icon: Ship, label: "Ferries & croisière" },
                    { icon: Clock, label: "Disponible 24h/24" },
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

              <div className="service-hero-card rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Comment réserver au Vieux-Port ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous indiquez les détails",
                      desc: "Adresse (hôtel, quai, resto), horaire, passagers et bagages.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif annoncé + point de dépose adapté aux accès du moment.",
                    },
                    {
                      title: "On vous récupère",
                      desc: "Au point convenu — ou on vous dépose au plus près.",
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
                  Astuce : précisez le <strong>nom de l’hôtel</strong> ou le quai
                  (Port / Rive Neuve / Fraternité) pour une dépose plus fluide.
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
              icon: MapPin,
              title: "Accès centre optimisés",
              text: "Zones piétonnes, sens uniques, événements : on vise le point autorisé le plus proche.",
            },
            {
              icon: Hotel,
              title: "Hôtels & restos",
              text: "Dépose pour check-in, dîner sur le quai ou soirée — retour possible la nuit.",
            },
            {
              icon: Ship,
              title: "Ferries & croisière",
              text: "Liaisons vers La Joliette, gares maritimes et terminaux J4 / MPCT.",
            },
            {
              icon: Shield,
              title: "Devis transparent",
              text: "Tarif communiqué avant validation — pas de surprise si vous avez confirmé le montant.",
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

      {/* SEO */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Taxi Vieux-Port Marseille : dépose, quais et transferts
          </h2>
          <p className="mb-4">
            Vous cherchez un <strong>taxi au Vieux-Port de Marseille</strong>{" "}
            pour rejoindre un hôtel, un restaurant, la{" "}
            <Link
              href="/services/taxi-gare-saint-charles"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              gare Saint-Charles
            </Link>
            , un ferry, le{" "}
            <Link
              href="/secteurs/joliette-euromediterranee"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              quartier de la Joliette
            </Link>{" "}
            ou l&apos;
            <Link
              href="/services/taxi-aeroport-marseille"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              aéroport Marseille Provence (MRS)
            </Link>{" "}
            ? Nous assurons les courses{" "}
            <strong>24 h/24 et 7 j/7</strong> avec chauffeur local et tarif
            annoncé à la réservation.
          </p>
          <p className="mb-4">
            Le Vieux-Port concentre hôtels, quais piétons, restos et flux
            touristiques. La circulation y est dense ; le stationnement rare. Un
            transfert réservé évite de chercher une place et permet une{" "}
            <strong>dépose au plus près</strong> des accès autorisés du moment.
          </p>
          <p>
            Pour les détails terrain (zones de dépose, ferries, soirées), lisez
            aussi notre{" "}
            <Link
              href="/blog/taxi-vieux-port-marseille-guide-2026"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              guide Taxi Vieux-Port Marseille
            </Link>{" "}
            et la page{" "}
            <Link
              href="/secteurs/vieux-port"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              secteur Vieux-Port
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            À quelle occasion réserver un taxi au Vieux-Port ?
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Hôtels, correspondances, ferries ou soirées : un créneau, un
            chauffeur, un devis clair.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map(({ title, desc, href, label }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-cyan-200/70 bg-linear-to-b from-white to-cyan-50/30 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 flex-1">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="mt-4 text-sm font-semibold text-cyan-700 underline-offset-2 hover:underline"
                >
                  {label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="service-bento py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Infos pratiques
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Un taxi pensé pour le cœur de Marseille
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Quais, hôtels, gare, ferries, aéroport : on simplifie l’accès au
              Vieux-Port avec un point de rendez-vous clair et un horaire calé
              sur votre programme.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/40 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Dépose au plus près — sans promesse irréaliste
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Selon les zones piétonnes et les événements du jour, la dépose
                peut se faire sur le Quai du Port, le Quai de Rive Neuve ou le
                Quai de la Fraternité — parfois à quelques mètres à pied de
                l’adresse exacte. Votre chauffeur choisit l’accès autorisé le
                plus pertinent.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Hôtels & check-in",
                  "Restaurants du quai",
                  "Correspondances train",
                  "Ferries & croisière",
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
                Vieux-Port ↔ Saint-Charles, port de croisière ou aéroport MRS :
                on adapte l’horaire à votre train, ferry ou vol.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-200/70 bg-cyan-50 p-5 text-cyan-950">
                <p className="font-semibold mb-1">Conseil</p>
                <p className="text-sm leading-relaxed text-cyan-900/90">
                  En haute saison et les soirs d’événement, réservez à l’avance
                  pour sécuriser votre créneau.
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

      {/* Parallax */}
      <section
        className="relative h-[52vh] md:h-[60vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/taxi-marseille-vieux-port.jpeg)" }}
        aria-label="Taxi Marseille — Vieux-Port"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Timer className="h-4 w-4 text-cyan-200" aria-hidden />
                Quais · Hôtels · Correspondances
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Arriver au Vieux-Port sans stress
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Hôtel, resto, gare ou ferry : on gère l’itinéraire et le point
                de dépose pour que vous arriviez à l’heure.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver un taxi
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

      {/* Éditorial + image */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pourquoi choisir notre taxi au Vieux-Port ?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Le <strong>Vieux-Port</strong> demande un chauffeur qui
                connaît les <strong>accès autorisés</strong>, les embouteillages
                de la Canebière et les créneaux ferry / croisière. Nous
                adaptons la dépose au plus près de votre hôtel, restaurant ou
                quai — sans promettre l’impossible quand une zone est piétonne.
              </p>
              <p>
                Nous relions aussi le Vieux-Port à la{" "}
                <Link
                  href="/services/taxi-gare-saint-charles"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  gare Saint-Charles
                </Link>
                , au{" "}
                <Link
                  href="/services/port-de-croisieres"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  port de croisière
                </Link>
                , à l’aéroport MRS, et proposons un{" "}
                <Link
                  href="/services/van-8-places"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  van 8 places
                </Link>{" "}
                pour les groupes.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Chauffeurs locaux, itinéraires réalistes",
                "Tarif annoncé avant confirmation",
                "Retours de soirée et départs matinaux",
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
                  src="/taxi-marseille-vieux-port-van-1.jpeg"
                  alt="Taxi Marseille Mercedes van en dépose au Vieux-Port"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
                Dépose Vieux-Port — confort pour couples, familles et groupes
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Cas d’usage */}
      <section className="bg-linear-to-b from-accent/5 via-white to-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Quand réserver un taxi Vieux-Port ?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Un créneau réservé, un point de rendez-vous clair, un véhicule adapté
            à votre nombre de passagers.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Utensils,
                title: "Dîner & soirée sur le quai",
                desc: "Arrivée à l’heure pour votre table, retour après dîner sans chercher de parking.",
              },
              {
                icon: Train,
                title: "Correspondance train ou vol",
                desc: "Vieux-Port ↔ Saint-Charles ou MRS avec marge calée sur votre horaire.",
              },
              {
                icon: Ship,
                title: "Ferry ou croisière",
                desc: "Transfert vers La Joliette / J4 / MPCT selon le terminal indiqué par votre compagnie.",
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
              Réserver un taxi Vieux-Port
            </Button>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Taxi Vieux-Port en images
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Déposes sur les quais, transferts groupes et liaisons vers ferries
            et gares maritimes.
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
              FAQ — taxi Vieux-Port Marseille
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
            <p className="mt-8 text-sm text-slate-600">
              Plus de détails pratiques :{" "}
              <Link
                href="/blog/taxi-vieux-port-marseille-guide-2026"
                className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
              >
                guide Vieux-Port 2026
              </Link>
              {" · "}
              <Link
                href="/secteurs/vieux-port"
                className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
              >
                secteur Vieux-Port
              </Link>
              .
            </p>
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
                  Prêt à réserver votre taxi au Vieux-Port ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez l’adresse, l’horaire et le nombre de passagers. On
                  confirme rapidement avec un devis clair.
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
                "Quais & hôtels",
                "Gare Saint-Charles",
                "Ferries & croisière",
                "Aéroport MRS",
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

      <Script
        id="service-taxi-vieux-port-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-taxi-vieux-port-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
