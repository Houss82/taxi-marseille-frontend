// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

import Button from "@/app/components/ui/Button";
import {
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  Hotel,
  MapPin,
  Plane,
  Shield,
  Timer,
  Train,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Taxi Parc Chanot Marseille | Salons, congrès & transferts",
  description:
    "Réservez un taxi pour le Parc Chanot à Marseille : salons, congrès, hôtels, Gare Saint-Charles, aéroport et transferts professionnels. Tarif annoncé, 24h/24.",
  keywords:
    "taxi parc chanot marseille, taxi parc chanot, taxi salon marseille, taxi congrès marseille, transfert parc chanot, chauffeur congrès marseille",
  alternates: {
    canonical:
      "https://www.taxis-marseille.fr/services/taxi-parc-chanot-marseille",
  },
};

export default function TaxiParcChanotMarseille() {
  const faqItems = [
    {
      q: "Peut-on réserver un taxi pour le Parc Chanot ?",
      a: "Oui. Indiquez la date, l’heure, votre adresse de départ ou d’arrivée et le nombre de passagers. Le tarif est communiqué avant confirmation.",
    },
    {
      q: "Peut-on venir depuis la Gare Saint-Charles ?",
      a: "Oui. Nous organisons des transferts directs Saint-Charles → Parc Chanot après l’arrivée du train, avec marge si votre correspondance est serrée.",
    },
    {
      q: "Assurez-vous les transferts depuis l’aéroport ?",
      a: "Oui. Un transfert depuis l’aéroport Marseille Provence (MRS) vers le Parc Chanot peut être organisé. Indiquez votre numéro de vol si besoin.",
    },
    {
      q: "Peut-on réserver pour un salon ou un congrès ?",
      a: "Oui. Visiteurs, exposants, équipes ou délégations : précisez l’horaire et, si utile, le nom de l’événement pour caler la prise en charge.",
    },
    {
      q: "Peut-on réserver un van pour un groupe ?",
      a: "Oui. Un Mercedes van jusqu’à 8 places est disponible selon configuration et bagages. Indiquez le nombre exact de passagers à la réservation.",
    },
    {
      q: "Peut-on prévoir un retour après l’événement ?",
      a: "Oui. Réservez le retour à l’avance, communiquez une heure approximative de fin et restez joignable pour confirmer le point de rendez-vous.",
    },
    {
      q: "Assurez-vous les transferts depuis les hôtels ?",
      a: "Oui. Depuis le centre-ville, le Prado, Castellane, le Vieux-Port ou le secteur sud : indiquez le nom de l’hôtel pour une prise en charge précise.",
    },
    {
      q: "Faut-il réserver à l’avance ?",
      a: "Fortement recommandé pendant les salons et congrès : l’affluence autour du Rond-Point du Prado augmente nettement aux heures d’ouverture et de fermeture.",
    },
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi Parc Chanot Marseille",
    serviceType: "Transfert salon / congrès / événement professionnel",
    description:
      "Taxi pour le Parc Chanot (Marseille Chanot) : salons, congrès, expositions, transferts hôtels, gare Saint-Charles et aéroport MRS. Tarif annoncé à la réservation.",
    areaServed: [
      "Parc Chanot / Marseille Chanot",
      "Rond-Point du Prado",
      "Marseille",
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
          src="/marseille-evenements.jpg"
          alt="Taxi Parc Chanot Marseille — salons, congrès et transferts professionnels"
          fill
          className="object-cover object-[center_40%] md:object-center"
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
                    <Building2 className="h-4 w-4 text-cyan-200" aria-hidden />
                    Salons · Congrès · Expositions
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Shield className="h-4 w-4 text-emerald-200" aria-hidden />
                    Tarif annoncé
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Parc Chanot Marseille : salons, congrès et événements
                </h1>
                <p className="mt-3 text-lg md:text-xl font-semibold text-cyan-100/95">
                  Transferts professionnels · hôtels · gare · aéroport · 24h/24
                </p>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Organisez un <strong>taxi pour le Parc Chanot</strong>{" "}
                  (Marseille Chanot, Rond-Point du Prado, 13008) : visiteurs,
                  exposants, équipes et rendez-vous professionnels. Chauffeur
                  local, <strong>tarif annoncé</strong>, aller et retour sur
                  réservation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    size="lg"
                    className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
                  >
                    Réserver un taxi pour le Parc Chanot
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-8 py-6 text-lg backdrop-blur-sm shadow-lg shadow-black/10"
                  >
                    Demander un trajet
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm text-white/85">
                  {[
                    { icon: Briefcase, label: "Salons & congrès" },
                    { icon: Hotel, label: "Hôtels → Chanot" },
                    { icon: Train, label: "Gare Saint-Charles" },
                    { icon: Plane, label: "Aéroport MRS" },
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

                <p className="mt-6 text-sm text-white/80 max-w-2xl">
                  Vue d’ensemble hôtels, Pharo, Vélodrome et autres lieux :{" "}
                  <Link
                    href="/services/trajets-hotels-evenements"
                    className="font-semibold underline-offset-2 hover:underline"
                  >
                    hôtels &amp; événements à Marseille
                  </Link>
                  .
                </p>
              </div>

              <div className="service-hero-card rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Réserver un taxi pour le Parc Chanot
                </h2>
                <ol className="space-y-4 text-white/90">
                  {[
                    {
                      title: "Vous précisez le trajet",
                      desc: "Date, heure, adresse, passagers, bagages — et retour si besoin.",
                    },
                    {
                      title: "On confirme",
                      desc: "Tarif annoncé + créneau adapté à votre salon ou congrès.",
                    },
                    {
                      title: "On vous prend en charge",
                      desc: "Hôtel, gare, aéroport ou point convenu près de Chanot.",
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
                  Astuce : indiquez le <strong>nom de l’événement</strong>{" "}
                  (salon / congrès) et l’heure d’ouverture ou de fin pour une
                  marge réaliste.
                </div>
                <div className="mt-5">
                  <Button
                    href="/reservation"
                    className="w-full bg-accent text-accent-foreground hover:opacity-90 py-5"
                  >
                    Organiser votre transfert
                  </Button>
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
              icon: Briefcase,
              title: "Salons & congrès",
              text: "Visiteurs, exposants, équipes : prise en charge calée sur votre horaire.",
            },
            {
              icon: Hotel,
              title: "Depuis les hôtels",
              text: "Centre, Prado, Castellane, Vieux-Port, secteur sud — dépose au plus près.",
            },
            {
              icon: Clock,
              title: "Aller + retour",
              text: "Réservez les deux trajets pour éviter l’attente en sortie de salon.",
            },
            {
              icon: Shield,
              title: "Devis clair",
              text: "Montant communiqué avant validation — pas de surprise si vous avez confirmé.",
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

      {/* SEO intro */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-lg leading-relaxed text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Taxi pour salons et congrès au Parc Chanot
          </h2>
          <p className="mb-4">
            Le <strong>Parc Chanot</strong> (Marseille Chanot — Palais des
            congrès &amp; des expositions,{" "}
            <a
              href="https://www.marseille-chanot.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              Rond-Point du Prado, 13008 Marseille
            </a>
            ) accueille salons professionnels, congrès, expositions et
            événements. Un <strong>taxi Parc Chanot Marseille</strong> permet
            d’arriver à l’heure — sans chercher de parking — et de repartir
            sereinement en fin de journée.
          </p>
          <p className="mb-4">
            Nous organisons des transferts pour <strong>visiteurs</strong>,{" "}
            <strong>exposants</strong>, <strong>équipes</strong> et{" "}
            <strong>délégations</strong> : hôtel → Chanot, gare → Chanot,
            aéroport → Chanot, ou retour après clôture. Indiquez simplement vos
            contraintes horaires à la réservation.
          </p>
          <p>
            Pour une vue plus large (Pharo, Vélodrome, hôtels), consultez
            également{" "}
            <Link
              href="/services/trajets-hotels-evenements"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              nos trajets hôtels &amp; événements
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Trajets fréquents */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Transferts fréquents vers le Parc Chanot
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
            Gare, aéroport, hôtels : des trajets directs, avec tarif annoncé.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-200/70 bg-linear-to-b from-white to-cyan-50/30 p-6 shadow-sm">
              <Train className="mb-4 h-9 w-9 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Gare Saint-Charles → Parc Chanot
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Idéal après un TGV : transfert direct vers le Rond-Point du
                Prado, sans correspondance. Indiquez l’heure du train et celle
                de votre rendez-vous au salon.
              </p>
              <Link
                href="/services/taxi-gare-saint-charles"
                className="text-sm font-semibold text-cyan-700 underline-offset-2 hover:underline"
              >
                Service taxi gare Saint-Charles →
              </Link>
            </div>
            <div className="rounded-2xl border border-cyan-200/70 bg-linear-to-b from-white to-cyan-50/30 p-6 shadow-sm">
              <Plane className="mb-4 h-9 w-9 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Aéroport MRS → Parc Chanot
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Transfert depuis Marignane pour un salon ou un congrès.
                Communiquez votre numéro de vol pour adapter la prise en charge.
              </p>
              <Link
                href="/services/taxi-aeroport-marseille"
                className="text-sm font-semibold text-cyan-700 underline-offset-2 hover:underline"
              >
                Service taxi aéroport Marseille →
              </Link>
            </div>
            <div className="rounded-2xl border border-cyan-200/70 bg-linear-to-b from-white to-cyan-50/30 p-6 shadow-sm">
              <Hotel className="mb-4 h-9 w-9 text-accent" aria-hidden />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hôtels → Parc Chanot
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Depuis le centre-ville, le Prado, Castellane, le Vieux-Port ou
                le secteur sud : prise en charge à l’hôtel et dépose au plus
                près des accès autorisés.
              </p>
              <Link
                href="/reservation"
                className="text-sm font-semibold text-cyan-700 underline-offset-2 hover:underline"
              >
                Réserver depuis votre hôtel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retour */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Retour après un salon ou un congrès
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            La sortie d’un salon concentre beaucoup de départs en même temps.
            Pour un retour fluide :
          </p>
          <ul className="space-y-3 text-slate-700">
            {[
              "Réservez le retour à l’avance (même créneau que l’aller si possible)",
              "Communiquez une heure approximative de fin",
              "Gardez votre téléphone accessible",
              "Convenez d’un point de rendez-vous si les accès sont saturés",
              "Prévenez en cas de prolongation ou de changement d’horaire",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle
                  className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Groupes + MAD */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white to-cyan-50/40 p-8 shadow-sm">
            <Users className="mb-4 h-10 w-10 text-accent" aria-hidden />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Transfert en groupe vers le Parc Chanot
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Équipes professionnelles, exposants, délégations ou familles :
              un seul véhicule simplifie l’arrivée et le retour, surtout avec
              bagages ou matériel.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Selon l’effectif, nous proposons une berline / SUV ou un{" "}
              <Link
                href="/services/van-8-places"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Mercedes van jusqu’à 8 places
              </Link>{" "}
              (configuration et bagages à préciser à la réservation).
            </p>
            <Button
              href="/services/van-8-places"
              variant="outline"
              className="border-slate-200"
            >
              Voir le van 8 places
            </Button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white to-blue-50/40 p-8 shadow-sm">
            <Briefcase className="mb-4 h-10 w-10 text-accent" aria-hidden />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Mise à disposition pour congrès et événements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Plusieurs déplacements dans la journée ? Hôtel → Chanot, Chanot →
              restaurant, rendez-vous pro, retour hôtel : une mise à disposition
              évite de réserver chaque course séparément.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Détails et devis sur notre page{" "}
              <Link
                href="/services/mise-a-disposition-mariage-congres"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                mise à disposition mariage &amp; congrès
              </Link>
              .
            </p>
            <Button
              href="/services/mise-a-disposition-mariage-congres"
              variant="outline"
              className="border-slate-200"
            >
              Voir la mise à disposition
            </Button>
          </div>
        </div>
      </section>

      {/* Circulation */}
      <section className="py-16 bg-linear-to-b from-accent/5 via-white to-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="mt-1 h-7 w-7 text-accent shrink-0" aria-hidden />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Circulation autour du Parc Chanot
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Les conditions de circulation varient selon l’heure, le salon,
            l’affluence et les événements à proximité (notamment le secteur Prado
            / Orange Vélodrome). Certains accès peuvent être temporairement
            réorganisés les jours de forte fréquentation.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nous ne garantissons pas une durée fixe : le chauffeur adapte
            l’itinéraire et le point de dépose aux accès autorisés du moment.
            Informations site :{" "}
            <a
              href="https://www.marseille-chanot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-700 underline-offset-2 hover:underline"
            >
              marseille-chanot.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tarif d’un taxi pour le Parc Chanot
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Le montant dépend de votre point de départ (hôtel, gare, aéroport,
            adresse), de l’horaire et du véhicule. Nous n’affichons pas de
            forfait unique figé : le <strong>prix est annoncé ou devisé</strong>{" "}
            à la réservation selon votre trajet exact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6"
            >
              Obtenir le tarif
            </Button>
            <Button
              href="/tarifs"
              variant="outline"
              size="lg"
              className="border-slate-200 px-8 py-6"
            >
              Voir les tarifs de référence
            </Button>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section
        className="relative h-[48vh] md:h-[56vh] overflow-hidden bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/mise-a-dispo.jpg)" }}
        aria-label="Chauffeur professionnel pour le Parc Chanot"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/45 to-slate-950/65" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur-sm shadow-2xl shadow-black/25">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <Timer className="h-4 w-4 text-cyan-200" aria-hidden />
                Ponctualité · Professionnels · Groupes
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Un chauffeur pour votre journée au Parc Chanot
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Aller, retour ou mise à disposition : on calque le planning sur
                votre salon ou congrès.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/reservation"
                  className="bg-white text-slate-950 hover:bg-white/90 px-6 py-6 text-base"
                >
                  Réserver votre chauffeur
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-white/20 text-white bg-linear-to-br from-cyan-500/25 via-white/10 to-blue-600/25 hover:from-cyan-500/30 hover:to-blue-600/30 px-6 py-6 text-base backdrop-blur-sm shadow-lg shadow-black/10"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-blue-200/60 bg-linear-to-b from-white via-white to-blue-50/40 p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              FAQ — taxi Parc Chanot Marseille
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
                  Prêt à réserver votre taxi pour le Parc Chanot ?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Indiquez la date, l’horaire et vos adresses. On confirme
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
                "Salons & congrès",
                "Hôtels Marseille",
                "Gare Saint-Charles",
                "Aéroport MRS",
              ].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 text-sm text-white/70">
              Autres lieux (Pharo, Vélodrome, hôtels) :{" "}
              <Link
                href="/services/trajets-hotels-evenements"
                className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
              >
                hôtels &amp; événements
              </Link>
              {" · "}
              <Link
                href="/services"
                className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
              >
                tous les services
              </Link>
              .
            </div>
          </div>
        </div>
      </section>

      <Script
        id="service-taxi-parc-chanot-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <Script
        id="faq-taxi-parc-chanot-marseille"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </main>
  );
}
