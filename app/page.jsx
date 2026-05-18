// app/page.jsx — PAGE D’ACCUEIL TAXI MARSEILLE (SERVER)

// ✅ ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

// ✅ Métadonnées SEO pour cette page
export const metadata = {
  title:
    "Taxi Marseille Aéroport & Gare Saint-Charles | Prix fixe & réservation 24h/24",
  description:
    "Taxi Marseille sur réservation : transfert aéroport Marignane (MRS), gare Saint-Charles, métropole et longues distances. Prix fixe annoncé à l'avance, chauffeur professionnel joignable 7j/7. Réservation téléphone ou en ligne.",
  keywords:
    "taxi marseille, taxi aéroport marseille, gare saint-charles, taxi marseille prix fixe, taxi marseille réservation, taxi marseille métropole, transfert mrs",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/",
  },
};

import {
  Anchor,
  Building2,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  CreditCard,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Train,
  Users,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ElfsightGoogleReviews from "./components/client/ElfsightGoogleReviews";
import HeroBackgroundSlideshow from "./components/client/HeroBackgroundSlideshow";
import VehicleCarousel from "./components/client/VehicleCarousel";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { GOOGLE_BUSINESS_MAPS_URL } from "./lib/google-business";
import { PHONE_FR, PHONE_SCHEMA, PHONE_TEL_HREF } from "./lib/phone";

/** Serif élégante pour le nom de marque — lisible, premium, sobre (hôtellerie / transport) */
const fontHeroBrand = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const vehicles = [
  {
    name: "Mercedes SUV",
    image: "/suv-marseille.png",
    desc: "Confort et espace pour vos trajets",
  },
  {
    name: "Mercedes van 8 places",
    image: "/mercedes-v-luxury-van.png",
    desc: "Van 8 passagers : groupes, familles, bagages volumineux",
  },
];

/** FAQ SEO locale — utilisée pour le rendu visible et le JSON-LD FAQPage */
const FAQ_ITEMS = [
  {
    q: "Comment réserver un taxi à Marseille (gare ou aéroport) ?",
    a: `Indiquez date, heure, adresses et nombre de passagers. Appelez le ${PHONE_FR} ou utilisez le formulaire en ligne : nous confirmons votre transfert avec un tarif annoncé à l'avance.`,
  },
  {
    q: "Quel prix pour un taxi Marseille → aéroport Marignane (MRS) ?",
    a: "Comptez en général entre 55 € et 75 € depuis le centre-ville de Marseille (Vieux-Port, gare Saint-Charles, Euroméditerranée) selon l'heure, le trafic et le point de départ. Prix fixe annoncé à la réservation.",
  },
  {
    q: "Proposez-vous un taxi gare Saint-Charles sur réservation ?",
    a: "Oui. Transferts depuis ou vers la gare Saint-Charles : accueil TGV/TER, panneau nominatif sur demande, liaison aéroport MRS, Vieux-Port et métropole.",
  },
  {
    q: "Le tarif est-il fixe à l'avance ?",
    a: "Sur les transferts aéroport, gare et longues distances, nous annonçons un prix fixe avant validation. Le tarif dépend du trajet, de l'horaire et du véhicule (berline, SUV ou van 8 places).",
  },
  {
    q: "Êtes-vous joignables 7j/7 pour une réservation ?",
    a: "Oui, notre service est joignable 7j/7 pour planifier vos transferts (aéroport, gare, port, événements). Pour un départ tôt ou tard, réservez à l'avance.",
  },
  {
    q: "Prenez-vous les groupes et les bagages volumineux ?",
    a: "Oui, Mercedes SUV et van 8 places pour familles, équipes et bagages (croisière, aéroport). Précisez-le lors de la réservation.",
  },
];

const HERO_PRICES = [
  { route: "Marseille → Aéroport MRS", price: "dès 55 €" },
  { route: "Cassis → Gare Saint-Charles", price: "dès 90 €" },
  { route: "Aix → Aéroport Marseille", price: "sur devis" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32 md:pb-0">
      {/* Hero Section — transferts gare & aéroport sur réservation */}
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12 lg:h-[calc(100svh-4.5rem)] lg:min-h-0 lg:max-h-[920px] lg:py-6">
        <HeroBackgroundSlideshow />
        <div className="absolute inset-0 z-2 bg-black/55" aria-hidden />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:items-center lg:text-left">
            <div>
              <div className="mb-3 lg:mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm lg:text-xs">
                  <Plane className="h-3 w-3 text-cyan-200 lg:h-3.5 lg:w-3.5" aria-hidden />
                  Transferts gare &amp; aéroport
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/30 lg:text-xs">
                  <MapPin className="h-3 w-3 text-cyan-200 lg:h-3.5 lg:w-3.5" aria-hidden />
                  Marseille &amp; métropole
                </span>
              </div>

              <h1 className="mb-3 lg:mb-4 leading-tight text-balance">
                <span
                  className={`${fontHeroBrand.className} block bg-linear-to-r from-sky-200 via-blue-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-normal text-transparent sm:text-5xl lg:text-[2.75rem] lg:leading-[1.08] xl:text-5xl`}
                >
                  Taxi Marseille
                </span>
                <span className="mt-1 block text-2xl font-bold text-white sm:text-3xl lg:text-[1.65rem] lg:leading-snug xl:text-4xl">
                  Aéroport &amp; Gare Saint-Charles 24h/24
                </span>
                <span className="mt-2 block text-base font-semibold text-white/90 sm:text-lg lg:mt-2 lg:text-[1.05rem] lg:font-medium lg:leading-snug">
                  Transferts sur réservation avec tarif fixe annoncé à
                  l&apos;avance.
                </span>
              </h1>

              <p className="mb-4 text-sm text-white/85 leading-relaxed sm:text-base lg:mb-5 lg:max-w-xl lg:text-[0.95rem]">
                Gare Saint-Charles, aéroport Marignane (MRS), longues distances
                et métropole. Chauffeur professionnel,{" "}
                <span className="font-medium text-white">joignable 7j/7</span>.
              </p>

              <ul className="mb-5 flex flex-wrap items-center justify-center gap-1.5 text-[0.7rem] text-white/90 sm:text-xs lg:hidden">
                {[
                  "Prix fixe à l'avance",
                  "Réservation téléphone",
                  "Chauffeur 7j/7",
                ].map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 backdrop-blur-sm"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href={PHONE_TEL_HREF}
                  aria-label={`Réservation par téléphone Taxi Marseille au ${PHONE_FR}`}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full bg-linear-to-br from-cyan-600 via-blue-600 to-blue-800 px-6 py-4 text-white shadow-xl shadow-blue-900/40 ring-2 ring-white/25 hover:scale-[1.02] transition-transform lg:px-7"
                >
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 lg:h-11 lg:w-11">
                    <Phone className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="relative flex flex-col items-start leading-tight">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan-50 lg:text-xs">
                      Réservation par téléphone
                    </span>
                    <span className="font-mono text-lg font-bold tabular-nums tracking-wider lg:text-xl">
                      {PHONE_FR}
                    </span>
                  </span>
                </a>
                <Link
                  href="/reservation"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15"
                >
                  Réservation en ligne
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-50 hover:bg-cyan-500/25"
                >
                  Obtenir un tarif fixe
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <ul className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-2">
                {HERO_PRICES.map(({ route, price }) => (
                  <li
                    key={route}
                    className="rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-left backdrop-blur-sm lg:flex lg:items-center lg:justify-between lg:gap-4 lg:px-4 lg:py-3"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-white/75 lg:text-xs">
                      {route}
                    </p>
                    <p className="text-base font-bold text-white lg:text-lg lg:shrink-0">
                      {price}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 hidden flex-col gap-2 text-xs text-white/80 lg:flex">
                {[
                  { icon: Plane, label: "Taxi aéroport Marseille (MRS)" },
                  { icon: Train, label: "Gare Saint-Charles" },
                  { icon: ShieldCheck, label: "Prix fixe · Chauffeur pro" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-cyan-200" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-5 hidden flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/75 lg:flex">
            {[
              { icon: Plane, label: "Aéroport MRS" },
              { icon: Train, label: "Gare Saint-Charles" },
              { icon: Users, label: "Van 8 places" },
              { icon: CreditCard, label: "CB à bord" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-cyan-200" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews Section (Google Reviews en temps réel via Elfsight) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Des avis Google en temps réel : votre meilleure garantie avant de
              réserver.
            </p>
          </div>
          <div className="mt-4">
            <ElfsightGoogleReviews
              widgetClassName="elfsight-app-f474b67e-af96-4dcc-9e4b-5e5517a5a747"
              containerClassName="max-w-6xl mx-auto"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href={GOOGLE_BUSINESS_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Voir tous les avis sur Google
              <ChevronRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Trajets populaires — SEO local + CTA appel par carte */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-10 lg:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Trajets populaires
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold mb-3">
              Transferts sur réservation depuis Marseille
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aéroport Marignane, gare Saint-Charles, port, longues distances.{" "}
              <span className="text-foreground font-medium">
                Tarif annoncé à l&apos;avance — van 8 places sur demande.
              </span>
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                icon: Plane,
                label: "Marseille → Aéroport Marignane",
                desc: "Transfert MRS, suivi de vol, prix fixe.",
                meta: "dès 55 €",
                href: "/services/taxi-aeroport-marseille",
              },
              {
                icon: Train,
                label: "Marseille → Gare Saint-Charles",
                desc: "Accueil TGV/TER, panneau nominatif sur demande.",
                meta: "Sur réservation",
                href: "/services/taxi-gare-saint-charles",
              },
              {
                icon: Anchor,
                label: "Marseille → Vieux-Port",
                desc: "Ferries Corse/Maghreb, croisières, hôtels du port.",
                meta: "Centre-ville",
                href: "/secteurs/vieux-port",
              },
              {
                icon: Building2,
                label: "Marseille → Euroméditerranée / Joliette",
                desc: "Tours La Marseillaise, CMA CGM, Les Docks.",
                meta: "Sur réservation",
                href: "/secteurs/joliette-euromediterranee",
              },
              {
                icon: Compass,
                label: "Marseille → Port de croisières",
                desc: "Terminaux J4 & MPCT : embarquement, débarquement, bagages.",
                meta: "J4 · MPCT",
                href: "/services/port-de-croisieres",
              },
              {
                icon: Users,
                label: "Prado · Castellane · Vélodrome",
                desc: "Quartiers sud, matchs, salons Parc Chanot.",
                meta: "Sud Marseille",
                href: "/secteurs",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.label}
                  className="group flex flex-col p-6 text-left hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.7rem] font-semibold text-slate-600">
                      {service.meta}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 text-base lg:text-lg leading-snug">
                    {service.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {service.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <a
                      href={PHONE_TEL_HREF}
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                      aria-label={`Réserver ${service.label}`}
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden />
                      Réserver
                    </a>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                    >
                      En savoir plus
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service 24/7 — carte vitrée, hiérarchie lisible */}
      <section className="relative py-16 md:py-20 overflow-hidden border-y border-slate-200/80">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-500/7 via-white to-blue-600/8"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="rounded-[1.75rem] border border-white/80 bg-white/75 p-8 shadow-2xl shadow-slate-900/6 ring-1 ring-slate-900/5 backdrop-blur-xl md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
              <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-700 text-white shadow-lg shadow-cyan-500/30 md:mx-0">
                <Clock className="h-10 w-10" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-center md:text-left">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/80 bg-cyan-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-800">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    24h/24 · 7j/7
                  </span>
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    Bouches-du-Rhône
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Taxi Marseille : réservation gare &amp; aéroport
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-800">
                    Transferts sur réservation
                  </strong>{" "}
                  : gare Saint-Charles, aéroport Marseille Provence (Marignane),
                  port, longues distances et métropole. Tarif fixe annoncé à
                  l&apos;avance.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: MapPin, label: "Dépose au plus près" },
                    { icon: Plane, label: "Liaison aéroport MRS" },
                    { icon: Train, label: "Gare & centre-ville" },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-left text-sm font-medium text-slate-700"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm ring-1 ring-slate-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quartiers — grille bento + pastilles, texte aéré */}
      <section className="relative border-b border-slate-100 bg-linear-to-b from-white via-slate-50/50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Toute la ville
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Taxi à Marseille dans tous les quartiers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              Transferts gare, aéroport et longues distances : un{" "}
              <strong className="text-slate-800">taxi à Marseille</strong> pour
              la métropole et la Provence.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed text-slate-700 md:text-center">
              Nous assurons vos trajets en taxi dans les principaux secteurs de
              Marseille : Vieux-Port, Le Panier, Joliette, Euroméditerranée,
              Saint-Charles, Prado, Castellane, La Timone, quartiers sud et
              quartiers nord.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-md shadow-slate-200/40 transition hover:border-cyan-200 hover:shadow-lg md:p-7">
              <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-teal-600 text-white shadow-md">
                <Building2 className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Cœur de ville
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Canebière, centre historique,{" "}
                <Link
                  href="/secteurs/vieux-port"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Vieux-Port
                </Link>
                ,{" "}
                <Link
                  href="/secteurs/le-panier"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Le Panier
                </Link>{" "}
                — arrondissements{" "}
                <span className="font-medium text-slate-800">1er, 2e, 6e</span>.
              </p>
            </div>
            <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-md shadow-slate-200/40 transition hover:border-blue-200 hover:shadow-lg md:p-7">
              <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-md">
                <Train className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Gare &amp; affaires
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-800">Saint-Charles</strong>, La
                Timone, Parc Chanot,{" "}
                <Link
                  href="/secteurs/joliette-euromediterranee"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Joliette &amp; Euroméditerranée
                </Link>
                , Docks.
              </p>
            </div>
            <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-md shadow-slate-200/40 transition hover:border-violet-200 hover:shadow-lg md:p-7">
              <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-fuchsia-700 text-white shadow-md">
                <Compass className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Grand Marseille
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Prado, Castellane, Orange Vélodrome — quartiers{" "}
                <span className="font-medium text-slate-800">sud</span> (8e, 9e,
                11e, 12e) et{" "}
                <span className="font-medium text-slate-800">nord</span> (13e,
                14e, 15e, 16e).
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10">
            {[
              "1er",
              "2e",
              "6e",
              "8e",
              "9e",
              "11e",
              "12e",
              "13e",
              "14e",
              "15e",
              "16e",
            ].map((arr) => (
              <span
                key={arr}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {arr} arr.
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-6 text-center md:mt-12 md:px-8">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Hôtel, cabinet, résidence : votre{" "}
              <strong className="text-slate-800">taxi Marseille</strong> ajuste
              l&apos;itinéraire au trafic et aux événements (matchs au
              Vélodrome, salons…).
            </p>
            <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/secteurs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent/30 bg-white px-5 py-3 text-sm font-bold text-accent shadow-sm transition hover:border-accent/60 hover:bg-accent/5"
              >
                Secteurs desservis
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services/taxi-aeroport-marseille"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-cyan-500/25 transition hover:opacity-95"
              >
                <Plane className="h-4 w-4" aria-hidden />
                Transfert aéroport
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TEXTE SEO: Taxi Marseille */}
      <section className="py-24 bg-linear-to-b from-accent/5 via-white to-accent/5 relative overflow-hidden">
        {/* Éléments décoratifs plus visibles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* En-tête centré avec design moderne */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Service Premium
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Taxi Marseille
              </span>
              <br />
              <span className="text-gray-700">
                votre service de taxi sur la
              </span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-accent to-primary bg-clip-text text-transparent font-extrabold">
                  métropole marseillaise
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 z-0 rounded-sm"></span>
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-16 bg-linear-to-r from-transparent to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="h-1 w-24 bg-linear-to-r from-accent via-primary to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-1 w-16 bg-linear-to-r from-primary to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Contenu avec design amélioré */}
          <div className="space-y-10 text-lg leading-relaxed">
            {/* Premier paragraphe avec fond coloré */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 mb-0 leading-relaxed text-lg">
                Notre service{" "}
                <strong className="font-bold text-accent text-xl">
                  Taxi Marseille
                </strong>{" "}
                assure vos déplacements à Marseille et en Provence : liaisons
                depuis l&apos;
                <strong className="font-bold text-primary text-lg">
                  aéroport Marseille Provence (Marignane)
                </strong>
                , la{" "}
                <strong className="font-bold text-primary text-lg">
                  gare Saint-Charles
                </strong>
                , le Vieux-Port, Euroméditerranée, hôtels du centre et stade
                Vélodrome.
              </p>
            </div>

            {/* Deuxième paragraphe avec bordure accent */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed text-lg">
                Que vous soyez en voyage d&apos;affaires, en séjour touristique
                ou résident à l&apos;année, vous profitez d&apos;un{" "}
                <strong className="font-bold text-accent text-xl">
                  taxi à Marseille
                </strong>{" "}
                ponctuel, discret et confortable. Nos chauffeurs suivent votre
                vol ou votre train en temps réel et vous attendent à
                l&apos;arrivée avec un accueil personnalisé.
              </p>
            </div>

            {/* Call-to-action avec design premium */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <p className="text-gray-800 mb-0 leading-relaxed text-lg relative z-10">
                Vous pouvez{" "}
                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    réserver votre taxi à Marseille en ligne
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </Link>{" "}
                24h/24 et 7j/7 ou nous contacter pour un{" "}
                <Link
                  href="/tarifs"
                  className="inline-flex items-center gap-1 text-accent font-bold hover:text-primary transition-all duration-200 relative group text-xl"
                >
                  <span className="relative">
                    devis taxi aéroport Marseille
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </span>
                </Link>{" "}
                vers Aix-en-Provence, Cassis, l&apos;aéroport ou toute autre
                destination.
              </p>
            </div>

            {/* Dernier paragraphe avec icône visuelle */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">
                Basés au cœur de la ville, nous connaissons parfaitement les
                contraintes de circulation (matchs au Vélodrome, salons au Parc
                Chanot, événements au Pharo, forte saison estivale au port) et
                adaptons nos itinéraires pour vous faire gagner du temps.
              </p>
            </div>
          </div>

          {/* Séparateur décoratif amélioré */}
          <div className="mt-16 pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-20 bg-linear-to-r from-transparent via-accent to-transparent"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="h-px w-20 bg-linear-to-r from-transparent via-primary to-transparent"></div>
              </div>
              <span className="text-base font-bold text-gray-700 bg-white/80 px-6 py-2 rounded-full border border-gray-200 shadow-sm">
                Service disponible 24h/24 7j/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir notre taxi à Marseille ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Service de taxi à Marseille fiable et haut de gamme depuis 2015.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Chauffeurs Professionnels",
                desc: "Expérience, discrétion et courtoisie garanties.",
              },
              {
                icon: Car,
                title: "Véhicules Premium",
                desc: "Mercedes SUV et Mercedes van 8 places pour groupes et familles.",
              },
              {
                icon: Clock,
                title: "Joignable 7j/7",
                desc: "Réservation pour vos transferts, y compris tôt le matin ou tard le soir.",
              },
              {
                icon: CreditCard,
                title: "Paiement Flexible",
                desc: "CB à bord, espèces ou virement.",
              },
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold mb-2 text-lg">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre flotte de taxis à Marseille
            </h2>
            <p className="text-lg text-muted-foreground">
              Véhicules haut de gamme :{" "}
              <strong className="text-foreground">SUV Mercedes</strong> et{" "}
              <strong className="text-foreground">Mercedes van 8 places</strong>{" "}
              pour familles et groupes.
            </p>
          </div>
          <VehicleCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* Airport Transfer Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Taxi Marseille – Taxi aéroport Marseille Marignane (MRS)
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Environ 25 à 35 minutes depuis l&apos;aéroport Marseille Provence,
              notre service <strong>taxi aéroport Marseille</strong> assure des
              trajets confortables vers le centre-ville, la gare Saint-Charles,
              le littoral ou votre hôtel.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Prix fixe annoncé à l’avance",
                "Chauffeur à l’arrivée avec panneau nominatif",
                "Mercedes van 8 places pour groupes et bagages",
                "Pas de supplément pour bagages ou retard avion",
                "Réservation en ligne ou par téléphone",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-8 text-lg"
            >
              Réserver un taxi aéroport Marseille
            </Button>
            <p className="mt-6 text-sm text-primary-foreground/85 max-w-xl leading-relaxed">
              <Link
                href="/blog/taxi-aeroport-marseille-mrs-guide-2026"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                Guide : taxi depuis Marignane (MRS)
              </Link>{" "}
              — durées, fourchettes de prix, terminaux et FAQ.
            </p>
          </div>
          <Image
            src="/taxi-marseille-aeroport-marignane.jpeg"
            alt="Taxi aéroport Marseille depuis l'aéroport Marignane"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Section SEO : taxi gare Saint-Charles */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-linear-to-b from-slate-50 via-white to-blue-50/40 py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-gray-200/90 bg-white/95 p-8 shadow-xl shadow-gray-200/40 backdrop-blur-sm md:p-10">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent/20 via-blue-100 to-blue-50 text-accent shadow-inner">
                <Train className="h-8 w-8" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Gare SNCF · Centre-ville Marseille
              </p>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Taxi gare Saint-Charles Marseille
              </h2>
            </div>
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-700 md:text-left">
              Transferts en taxi depuis et vers la gare Saint-Charles : prise en
              charge sur réservation pour les arrivées{" "}
              <strong className="font-semibold text-gray-900">TGV</strong>,{" "}
              <strong className="font-semibold text-gray-900">TER</strong> et
              départs longue distance. Liaisons vers l&apos;aéroport Marseille
              Provence, le Vieux-Port, les hôtels du centre et toute la
              métropole.
            </p>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Attente panneau nominatif possible",
                "Suivi des retards train",
                "Vers aéroport MRS & hôtels",
                "Mercedes van 8 places sur demande",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button
                href="/services/taxi-gare-saint-charles"
                className="w-full bg-accent text-accent-foreground hover:opacity-90 sm:w-auto px-8 py-8 text-lg"
              >
                Détails &amp; tarifs gare Saint-Charles
              </Button>
              <Button
                href="/reservation"
                variant="outline"
                className="w-full border-gray-300 bg-white text-gray-800 hover:bg-gray-50 sm:w-auto"
              >
                Réserver un taxi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO locale — Taxi Marseille */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-10 lg:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              Questions fréquentes
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Taxi à Marseille : tout savoir avant de réserver
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Réservation, prix fixe, gare Saint-Charles, aéroport Marignane,
              métropole : nos réponses en quelques lignes.
            </p>
          </header>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/40 shadow-sm">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className="group px-6 py-5 md:px-8 md:py-6"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-bold text-slate-900 text-base md:text-lg">
                  <span>{item.q}</span>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-accent ring-1 ring-slate-200 transition-transform group-open:rotate-45">
                    <span className="text-xl leading-none" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <div className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Une question sur votre transfert ? Joignables 7j/7 pour réserver.
            </p>
            <a
              href={PHONE_TEL_HREF}
              className="inline-flex items-center gap-3 rounded-full bg-linear-to-br from-emerald-500 to-green-700 px-6 py-4 text-white shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition-transform"
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span className="font-mono text-lg font-bold tabular-nums">
                {PHONE_FR}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner final — 1 gros bouton appel, lien réservation discret */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réserver votre transfert gare ou aéroport
          </h2>
          <p className="text-lg mb-10 text-accent-foreground/90">
            Indiquez date, heure et destination : nous confirmons votre{" "}
            <strong className="font-bold">tarif fixe</strong> avant le départ.
          </p>

          <div className="flex flex-col items-center gap-5">
            <a
              href={PHONE_TEL_HREF}
              aria-label={`Réservation par téléphone Taxi Marseille au ${PHONE_FR}`}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-4 overflow-hidden rounded-full bg-linear-to-br from-cyan-600 via-blue-600 to-blue-800 px-8 py-6 md:px-12 md:py-8 text-white shadow-2xl shadow-blue-900/40 ring-2 ring-white/30 hover:scale-[1.02] transition-transform"
            >
              <span
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-2xl transition group-hover:bg-white/30"
                aria-hidden
              />
              <span className="relative flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
                <Phone
                  className="h-7 w-7 md:h-8 md:w-8"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </span>
              <span className="relative flex flex-col items-start leading-tight">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-cyan-50">
                  Réservation par téléphone
                </span>
                <span className="font-mono text-2xl md:text-4xl font-bold tabular-nums tracking-wider">
                  {PHONE_FR}
                </span>
              </span>
            </a>

            <Link
              href="/reservation"
              className="inline-flex items-center gap-1.5 text-xs font-normal text-white/65 underline-offset-4 hover:text-white/90"
            >
              Réservation en ligne
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD LocalBusiness pour Taxi Marseille */}
      <Script
        id="localbusiness-taxi-marseille"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Taxi Marseille",
            url: "https://www.taxis-marseille.fr/",
            telephone: PHONE_SCHEMA,
            image: "https://www.taxis-marseille.fr/taxi-Marseille-logo.png",
            logo: "https://www.taxis-marseille.fr/taxi-Marseille-logo.png",
            areaServed: [
              "Marseille",
              "Aix-en-Provence",
              "Cassis",
              "La Ciotat",
              "Allauch",
              "Bouches-du-Rhône",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "9 Av. de la Grognarde",
              postalCode: "13011",
              addressLocality: "Marseille",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR",
            },
            sameAs: [GOOGLE_BUSINESS_MAPS_URL],
          }),
        }}
      />

      {/* JSON-LD FAQPage — rich results Google */}
      <Script
        id="faq-taxi-marseille"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
