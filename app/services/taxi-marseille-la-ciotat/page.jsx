// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

export const metadata = {
  title: "Taxi Marseille → La Ciotat | Transfert & réservation",
  description:
    "Réservez un taxi Marseille → La Ciotat : transfert porte à porte, tarif annoncé dès 90 € (indicatif), port, centre, hôtel ou gare. Aller-retour possible, van 8 places sur demande.",
  keywords:
    "taxi marseille la ciotat, transfert marseille la ciotat, taxi la ciotat, prix taxi marseille la ciotat",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/taxi-marseille-la-ciotat",
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
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TaxiMarseilleLaCiotat() {
  const faqItems = [
    {
      q: "Peut-on réserver un taxi de Marseille à La Ciotat ?",
      a: "Oui. Indiquez date, heure, adresse de prise en charge à Marseille et point de dépose à La Ciotat (centre, port, hôtel, gare…). Nous confirmons avec un tarif annoncé avant validation.",
    },
    {
      q: "Combien coûte un taxi Marseille – La Ciotat ?",
      a: "Sur notre grille tarifs, le trajet Marseille → La Ciotat est affiché à partir de 90 € (indicatif). Le montant exact dépend des adresses, de l’horaire et du véhicule ; il est annoncé à la réservation.",
    },
    {
      q: "Combien de temps faut-il prévoir ?",
      a: "La durée dépend de la circulation, de l’heure, du point exact de départ à Marseille et de la destination à La Ciotat. Aucune durée n’est garantie : prévoyez une marge si vous avez un horaire imposé.",
    },
    {
      q: "Peut-on réserver un trajet retour vers Marseille ?",
      a: "Oui. Aller simple ou aller-retour (y compris retour en soirée). Précisez les deux horaires à la réservation pour caler le véhicule.",
    },
    {
      q: "Peut-on déposer à la gare de La Ciotat ?",
      a: "Oui. La gare SNCF (secteur Ceyreste) n’est pas en centre-ville : précisez bien « gare » ou votre adresse centre / port pour éviter toute confusion sur le point de dépose et le tarif.",
    },
    {
      q: "Peut-on voyager en groupe ?",
      a: "Oui. Pour familles ou équipes avec bagages, un Mercedes van jusqu’à 8 places peut être proposé selon disponibilité. Indiquez le nombre de passagers et de valises.",
    },
    {
      q: "Peut-on partir de la gare Saint-Charles ou de l’aéroport MRS ?",
      a: "Oui. Après une arrivée en train à Saint-Charles ou un vol à Marignane, nous organisons la suite vers La Ciotat. Voir aussi nos pages aéroport et gare pour le détail de la prise en charge.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi Marseille → La Ciotat",
    serviceType: "Transfert taxi longue distance",
    description:
      "Taxi et transfert depuis Marseille vers La Ciotat : tarif annoncé, porte à porte, aller-retour possible, van 8 places sur demande.",
    areaServed: [
      "Marseille",
      "La Ciotat",
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
          src="/taxi-marseille-cassis-calanques-cretes.jpeg"
          alt="Taxi Marseille sur le littoral — trajet vers La Ciotat (route des Crêtes / Cap Canaille)"
          fill
          className="object-cover object-[center_35%] md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/35" />

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
                    Dès 90 €*
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Marseille → La Ciotat
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Organisez un <strong>transfert taxi</strong> depuis Marseille
                  vers <strong>La Ciotat</strong> : centre, port, hôtel ou gare.
                  Tarif annoncé à la réservation, aller-retour possible.
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
                    className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm"
                  >
                    Voir les tarifs
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm text-white/85">
                  {[
                    { icon: Shield, label: "Dès 90 € (grille tarifs)" },
                    { icon: Clock, label: "Durée selon circulation" },
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
                  * Tarif indicatif — montant exact annoncé à la réservation.
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
                      desc: "Marseille → La Ciotat, horaires, passagers, bagages.",
                    },
                    {
                      title: "On confirme le tarif",
                      desc: "Montant annoncé avant validation.",
                    },
                    {
                      title: "On vous prend en charge",
                      desc: "Hôtel, domicile, gare Saint-Charles ou aéroport.",
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transfert taxi Marseille vers La Ciotat
          </h2>
          <p className="mb-4">
            Vous avez besoin d&apos;un{" "}
            <strong>taxi Marseille → La Ciotat</strong> ? Nous organisons le
            transfert porte à porte pour un séjour, un hôtel, un rendez-vous, une
            journée au port ou un trajet avec bagages — y compris le{" "}
            <strong>retour vers Marseille</strong>.
          </p>
          <p className="mb-6">
            Sur notre page{" "}
            <Link
              href="/tarifs"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              tarifs
            </Link>
            , le trajet est affiché à partir de <strong>90 €</strong>{" "}
            (indicatif). Le prix définitif dépend des adresses et de l&apos;horaire.
          </p>
          <Button
            href="/reservation"
            className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-5"
          >
            Demander un tarif / réserver
          </Button>
        </div>
      </section>

      {/* Destinations utiles */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Où vous déposer à La Ciotat ?
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              Précisez l&apos;adresse exacte à la réservation. Les demandes
              fréquentes concernent le <strong>centre-ville</strong>, le{" "}
              <strong>port</strong>, un <strong>hôtel</strong> ou la{" "}
              <strong>gare SNCF</strong> (secteur Ceyreste — distincte du
              centre).
            </p>
            <p>
              Si vous enchaînez avec <strong>Cassis</strong> ou la{" "}
              <strong>route des Crêtes</strong>, indiquez-le dès le devis : le
              trajet peut être traité en multi-arrêts ou en mise à disposition.
              Guide Cassis :{" "}
              <Link
                href="/blog/taxi-marseille-cassis-calanques-guide-2026"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                taxi Marseille ↔ Cassis &amp; Calanques
              </Link>
              .
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Centre / commerces",
              "Port & front de mer",
              "Hôtels & locations",
              "Gare La Ciotat (Ceyreste)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
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

      {/* Tarif + durée */}
      <section className="py-16 bg-slate-50/80 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Tarif indicatif &amp; durée
          </h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
            <table className="w-full text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-bold">Trajet</th>
                  <th className="px-6 py-4 font-bold text-right">À partir de</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-slate-800">
                    Marseille → La Ciotat
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-accent">
                    90 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Source : grille{" "}
            <Link
              href="/tarifs"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              tarifs
            </Link>
            . Surcharge nocturne éventuelle et options (attente, van,
            multi-arrêts) : précisées au devis.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Durée :</strong> variable selon la circulation (axe A50 /
            accès littoral), l&apos;heure et le point exact de prise en charge /
            dépose. Aucune durée n&apos;est garantie.
          </p>
        </div>
      </section>

      {/* MRS + Gare */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Depuis l&apos;aéroport ou la gare
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <Plane className="mb-3 h-6 w-6 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Aéroport MRS
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Arrivée à Marignane puis suite vers La Ciotat : indiquez le
                numéro de vol. Détail prise en charge :{" "}
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
              <Train className="mb-3 h-6 w-6 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Gare Saint-Charles
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Transfert direct après TGV/TER, avec bagages. Voir{" "}
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

      {/* Groupes + autres destinations */}
      <section className="py-16 bg-slate-50/80 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Groupes &amp; autres trajets littoral
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Famille ou équipe avec valises : un{" "}
            <Link
              href="/services/van-8-places"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Mercedes van 8 places
            </Link>{" "}
            peut être proposé selon disponibilité.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Pour <strong>Aix-en-Provence</strong> ou <strong>Cassis</strong>,
            consultez notre landing{" "}
            <Link
              href="/services/marseille-aix-cassis"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Marseille → Aix &amp; Cassis
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
              "Séjour ou hôtel à La Ciotat",
              "Journée / dîner au port",
              "Transfert avec bagages",
              "Correspondance gare Ceyreste",
              "Groupe / famille",
              "Retour vers Marseille",
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

      {/* FAQ */}
      <section className="py-16 bg-linear-to-b from-blue-50/40 via-white to-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-blue-200/60 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              FAQ — taxi Marseille La Ciotat
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200/70 bg-slate-50/40 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-lg font-bold text-slate-900">
                      {item.q}
                    </span>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-800 ring-1 ring-cyan-200 group-open:rotate-45 transition-transform">
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
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 text-white p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  Prêt à réserver Marseille → La Ciotat ?
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
                  className="border-white/20 text-white bg-white/5 hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="service-taxi-marseille-la-ciotat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-taxi-marseille-la-ciotat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
