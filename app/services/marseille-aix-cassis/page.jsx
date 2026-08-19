// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

export const metadata = {
  title: "Taxi Marseille → Aix & Cassis | Transferts & réservation",
  description:
    "Réservez un taxi Marseille → Aix-en-Provence ou Cassis : transfert porte à porte, tarif annoncé (dès 85 € / 95 €), aller-retour possible, van 8 places sur demande. 7j/7.",
  keywords:
    "taxi marseille aix, taxi marseille cassis, transfert marseille aix, transfert marseille cassis, taxi aix en provence, taxi cassis",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/marseille-aix-cassis",
  },
};

import Button from "@/app/components/ui/Button";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Luggage,
  MapPin,
  Plane,
  Shield,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function MarseilleAixCassis() {
  const faqItems = [
    {
      q: "Peut-on réserver un taxi de Marseille à Aix-en-Provence ?",
      a: "Oui. Indiquez date, heure, adresses de prise en charge et de dépose (centre Aix, hôtel, gare TGV Aix, Les Milles, etc.). Nous confirmons le trajet avec un tarif annoncé avant validation.",
    },
    {
      q: "Peut-on réserver un taxi de Marseille à Cassis ?",
      a: "Oui. Transfert porte à porte vers le centre, le port, un hôtel ou un accès adapté selon votre adresse. Réservation en ligne ou par contact, 7j/7.",
    },
    {
      q: "Combien coûte un taxi Marseille – Aix ?",
      a: "Sur notre grille tarifs, le trajet Marseille → Aix-en-Provence est affiché à partir de 85 € (indicatif). Le montant exact dépend des adresses, de l’horaire et du véhicule ; il est annoncé à la réservation.",
    },
    {
      q: "Combien coûte un taxi Marseille – Cassis ?",
      a: "Sur notre grille tarifs, le trajet Marseille → Cassis est affiché à partir de 95 € (indicatif). Le tarif définitif dépend des adresses, de l’heure et du véhicule choisi.",
    },
    {
      q: "Combien de temps faut-il prévoir pour Aix ou Cassis ?",
      a: "En conditions normales, comptez souvent autour de 35–40 minutes vers le centre d’Aix et autour de 45 minutes vers Cassis. Circulation, heure, points exacts et saison peuvent allonger nettement le trajet : nous ne garantissons pas une durée fixe.",
    },
    {
      q: "Peut-on réserver un trajet retour vers Marseille ?",
      a: "Oui. Aller simple ou aller-retour (y compris retour en soirée après un rendez-vous ou un dîner). Précisez les deux horaires à la réservation pour caler le véhicule.",
    },
    {
      q: "Peut-on voyager en groupe vers Aix ou Cassis ?",
      a: "Oui. Pour familles ou équipes avec bagages, un Mercedes van jusqu’à 8 places peut être proposé selon disponibilité. Indiquez le nombre de passagers et de valises.",
    },
    {
      q: "Peut-on partir de la gare Saint-Charles ou de l’aéroport MRS ?",
      a: "Oui. Après une arrivée TGV/TER à Saint-Charles ou un vol à Marignane, nous organisons la suite vers Aix ou Cassis. Pour le détail aéroport ou gare, consultez aussi nos pages dédiées.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi Marseille → Aix-en-Provence & Cassis",
    serviceType: "Transfert taxi longue distance",
    description:
      "Taxi et transfert depuis Marseille vers Aix-en-Provence et Cassis : tarif annoncé, porte à porte, aller-retour possible, van 8 places sur demande.",
    areaServed: [
      "Marseille",
      "Aix-en-Provence",
      "Cassis",
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
      {/* Hero */}
      <section className="service-hero relative min-h-[72vh] md:min-h-[82vh] flex items-start md:items-center overflow-hidden pt-20 pb-14 md:pb-20">
        <Image
          src="/taxi-marseille-aix-en-provence.jpeg"
          alt="Taxi Marseille devant la fontaine de la Rotonde à Aix-en-Provence"
          fill
          className="object-cover object-[center_28%] md:object-[center_32%] lg:object-center"
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
                    <MapPin className="h-4 w-4 text-cyan-200" aria-hidden />
                    Longue distance
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-emerald-200" aria-hidden />
                    Tarif annoncé
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Marseille → Aix-en-Provence &amp; Cassis
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Organisez un <strong>transfert taxi</strong> depuis Marseille
                  vers <strong>Aix-en-Provence</strong> ou{" "}
                  <strong>Cassis</strong> : rendez-vous pro, hôtel, bagages,
                  groupe ou retour le soir. Prix communiqué avant confirmation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
                  >
                    Réserver votre trajet
                  </Button>
                  <Button
                    href="/tarifs"
                    variant="outline"
                    className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm shadow-lg shadow-black/10"
                  >
                    Voir les tarifs
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm text-white/85">
                  {[
                    { icon: Clock, label: "Aix ~35–40 min* · Cassis ~45 min*" },
                    { icon: Shield, label: "Dès 85 € Aix · dès 95 € Cassis" },
                    { icon: Luggage, label: "Bagages & porte à porte" },
                    { icon: Users, label: "Van 8 places sur demande" },
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
                <p className="mt-3 text-xs text-white/60">
                  * Durées observées en conditions normales — variables selon
                  circulation et adresses.
                </p>
              </div>

              <div className="service-hero-card rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Comment réserver le transfert ?
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous précisez le trajet",
                      desc: "Marseille → Aix ou Cassis, horaires, passagers, bagages.",
                    },
                    {
                      title: "On confirme le tarif",
                      desc: "Montant annoncé avant validation — pas de surprise.",
                    },
                    {
                      title: "On vous prend en charge",
                      desc: "Hôtel, domicile, gare, aéroport ou adresse exacte.",
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
                  Aller-retour possible : indiquez l’heure de retour pour caler
                  le véhicule.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro commerciale */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transfert taxi Marseille vers Aix ou Cassis
          </h2>
          <p className="mb-4">
            Vous avez besoin d&apos;un{" "}
            <strong>taxi Marseille → Aix-en-Provence</strong> ou d&apos;un{" "}
            <strong>taxi Marseille → Cassis</strong> ? Nous organisons le
            transfert porte à porte pour un déplacement professionnel, un hôtel,
            un rendez-vous, un séjour, un départ en gare ou un trajet en groupe
            — y compris le <strong>retour vers Marseille</strong>.
          </p>
          <p className="mb-6">
            Le tarif dépend des adresses exactes et de l&apos;horaire : il est{" "}
            <strong>annoncé à la réservation</strong>. Pour les fourchettes
            affichées, consultez aussi notre page{" "}
            <Link
              href="/tarifs"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              tarifs
            </Link>
            .
          </p>
          <Button
            href="/reservation"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-5 text-base"
          >
            Demander un tarif / réserver
          </Button>
        </div>
      </section>

      {/* Aix */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Taxi Marseille → Aix-en-Provence
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              Prise en charge à Marseille (hôtel, domicile,{" "}
              <Link
                href="/services/taxi-gare-saint-charles"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                gare Saint-Charles
              </Link>
              , centre-ville) et dépose à l&apos;adresse utile à Aix :{" "}
              <strong>centre-ville</strong>, <strong>hôtel</strong>, rendez-vous
              pro, <strong>gare TGV Aix</strong> ou pôles d&apos;activités (
              <strong>Les Milles</strong>, <strong>La Duranne</strong>).
            </p>
            <p>
              Idéal pour un RDV business, un transfert avec bagages ou un
              aller-retour le même jour. Précisez bien « centre Aix » ou « gare
              TGV » : ce ne sont pas le même point de dépose.
            </p>
            <p className="text-base text-slate-600">
              Pour les durées détaillées, accès et conseils terrain :{" "}
              <Link
                href="/blog/taxi-marseille-aix-en-provence-guide-2026"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                guide du trajet Marseille – Aix-en-Provence
              </Link>
              .
            </p>
          </div>
          <div className="mt-8">
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-5"
            >
              Réserver Marseille → Aix
            </Button>
          </div>
        </div>
      </section>

      {/* Cassis */}
      <section className="py-16 bg-slate-50/80 border-b border-slate-100">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Taxi Marseille → Cassis
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Transfert depuis Marseille vers <strong>Cassis</strong> :{" "}
                <strong>centre</strong>, <strong>port</strong>, hôtel ou accès
                adapté (Presqu&apos;île / Bestouan selon votre adresse). Utile
                pour une journée, un séjour avec bagages ou un retour en soirée.
              </p>
              <p>
                En haute saison, circulation et accès centre peuvent allonger le
                trajet : réservez avec une marge si vous avez un horaire imposé.
                Pour un groupe ou plusieurs valises, un{" "}
                <Link
                  href="/services/van-8-places"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  van 8 places
                </Link>{" "}
                peut être proposé.
              </p>
              <p className="text-base text-slate-600">
                Route des Crêtes / calanques : possibles en option sur devis —
                détails pratiques dans le{" "}
                <Link
                  href="/blog/taxi-marseille-cassis-calanques-guide-2026"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  guide du trajet Marseille – Cassis &amp; Calanques
                </Link>
                .
              </p>
            </div>
            <div className="mt-8">
              <Button
                href="/reservation"
                className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-5"
              >
                Réserver Marseille → Cassis
              </Button>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <div className="relative h-[280px] w-full sm:h-[360px]">
              <Image
                src="/taxi-marseille-cassis-port.jpeg"
                alt="Taxi Marseille au port de Cassis — transfert depuis Marseille"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-slate-100 bg-white px-4 py-3 text-center text-sm text-slate-600">
              Dépose port / centre à Cassis — tarif annoncé à la réservation
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Durées */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Durées de trajet (indicatives)
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Les temps ci-dessous sont des{" "}
            <strong>ordres de grandeur observés</strong>. Ils varient selon la
            circulation, l&apos;heure, le lieu exact de départ et
            d&apos;arrivée, et la période de l&apos;année. Aucune durée
            n&apos;est garantie.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <p className="font-bold text-slate-900 text-lg mb-2">
                Marseille → Aix-en-Provence
              </p>
              <p className="text-slate-700">
                Souvent <strong>~35–40 min</strong> en conditions normales vers
                le centre ; plutôt <strong>45–55 min</strong> aux heures de
                pointe.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
              <p className="font-bold text-slate-900 text-lg mb-2">
                Marseille → Cassis
              </p>
              <p className="text-slate-700">
                Souvent autour de <strong>~45 min</strong> hors pointe ; en
                haute saison / week-ends, prévoyez davantage (parfois 55–75
                min).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-linear-to-b from-accent/5 via-white to-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Tarifs indicatifs Aix &amp; Cassis
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Montants repris de notre page{" "}
            <Link
              href="/tarifs"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              tarifs
            </Link>{" "}
            (grille indicative). Le prix définitif dépend des adresses, de
            l&apos;horaire et du véhicule.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-bold">Trajet</th>
                  <th className="px-6 py-4 font-bold text-right">
                    À partir de
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-800">
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-4">Marseille → Aix-en-Provence</td>
                  <td className="px-6 py-4 text-right font-bold text-accent">
                    85 €
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Marseille → Cassis</td>
                  <td className="px-6 py-4 text-right font-bold text-accent">
                    95 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Surcharge nocturne éventuelle et options (attente, multi-arrêts,
            van) : précisées au devis. Van 8 places : tarif sur devis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              href="/reservation"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-5"
            >
              Demander un tarif
            </Button>
            <Button
              href="/tarifs"
              variant="outline"
              className="border-slate-200 bg-white hover:bg-slate-50 px-8 py-5"
            >
              Grille complète
            </Button>
          </div>
        </div>
      </section>

      {/* MRS + Gare — courts */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Depuis l&apos;aéroport ou la gare
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
                <Plane className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Aéroport Marseille Provence (MRS)
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Arrivée à Marignane puis suite vers Aix ou Cassis : nous
                organisons la correspondance. Pour le service aéroport (suivi de
                vol, prise en charge terminal), voir notre{" "}
                <Link
                  href="/services/taxi-aeroport-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  taxi aéroport Marseille
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
                <Train className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Gare Saint-Charles
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Après un TGV ou TER à Marseille, transfert direct vers Aix ou
                Cassis sans correspondance bus. Accueil gare détaillé sur{" "}
                <Link
                  href="/services/taxi-gare-saint-charles"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  taxi gare Saint-Charles
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes / van */}
      <section className="py-16 bg-slate-50/80 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Voyager à plusieurs vers Aix ou Cassis
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Familles, équipes ou amis avec bagages : un seul véhicule évite de
            multiplier les courses. Indiquez le nombre de passagers et de
            valises à la réservation pour confirmer la configuration.
          </p>
          <p className="text-slate-700">
            Détail flotte et capacité :{" "}
            <Link
              href="/services/van-8-places"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Mercedes van 8 places
            </Link>
            .
          </p>
          <p className="mt-4 text-slate-700">
            Destination un peu plus à l&apos;est sur le littoral :{" "}
            <Link
              href="/services/taxi-marseille-la-ciotat"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              taxi Marseille → La Ciotat
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Pour quels déplacements réserver ce trajet ?
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Rendez-vous professionnel à Aix (centre, Les Milles, La Duranne)",
              "Hôtel ou séjour à Aix-en-Provence",
              "Journée ou dîner à Cassis (aller-retour possible)",
              "Transfert avec bagages (gare, hôtel, port)",
              "Déplacement en groupe / famille",
              "Retour vers Marseille en fin de journée",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/50 p-4"
              >
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden
                />
                <span className="text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guides — maillage blogs */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-200/70 bg-slate-50/60 p-8 md:p-10">
            <div className="flex items-start gap-3 mb-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Guides pratiques
                </h2>
                <p className="mt-1 text-slate-600 text-sm md:text-base">
                  Conseils, accès et détails terrain — la réservation se fait
                  sur cette page ou via le formulaire.
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                {
                  href: "/blog/taxi-marseille-aix-en-provence-guide-2026",
                  title: "Taxi Marseille ↔ Aix-en-Provence — guide 2026",
                  desc: "Durées, accès centre / TGV, Les Milles, conseils trafic.",
                },
                {
                  href: "/blog/taxi-marseille-cassis-calanques-guide-2026",
                  title: "Taxi Marseille ↔ Cassis & Calanques — guide 2026",
                  desc: "Port, accès été, Crêtes : infos pratiques (pas la réservation).",
                },
              ].map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    <span>
                      <span className="font-semibold text-slate-900 group-hover:text-accent">
                        {guide.title}
                      </span>
                      <span className="mt-1 block text-sm text-slate-600">
                        {guide.desc}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-linear-to-b from-blue-50/40 via-white to-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-blue-200/60 bg-linear-to-b from-white via-white to-blue-50/40 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              FAQ — taxi Marseille Aix &amp; Cassis
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
                  Prêt à réserver votre transfert Aix ou Cassis ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez départ, destination, horaire et passagers. On
                  confirme rapidement avec un tarif clair.
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
        id="service-marseille-aix-cassis"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-marseille-aix-cassis"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
