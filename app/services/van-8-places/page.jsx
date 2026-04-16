// ✅ SERVER COMPONENT — ISR
export const revalidate = 86400;

import Button from "@/app/components/ui/Button";
import {
  Briefcase,
  CheckCircle,
  Luggage,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Mercedes van 8 places Marseille | Taxi van Marseille — groupes & transferts | Taxi Marseille",
  description:
    "Taxi van à Marseille avec chauffeur : Mercedes van 8 places pour l’aéroport MRS, la gare, hôtels et séminaires, Aix-en-Provence, Cassis. Bagages, enfants, PMR sur demande. Devis et réservation.",
  keywords:
    "mercedes van 8 places marseille, van 8 places marseille, taxi van marseille, van taxi marseille, taxi groupe marseille, navette 8 passagers marseille",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/services/van-8-places",
  },
};

const gallery = [
  {
    src: "/taxi-InterContinental-Marseille-cours.jpeg",
    alt: "Mercedes van 8 places — silhouette et finitions premium",
    caption: "Mercedes van 8 places — habitacle spacieux et finitions soignées",
  },
  {
    src: "/taxi-marseille-service-coffre.jpeg",
    alt: "Marseille, cathédrale — service van groupe sur la métropole",
    caption: "Idéal groupes, familles nombreuses et transferts avec bagages",
  },
  {
    src: "/taxi-marseille-port-ferry.jpeg",
    alt: "Taxi van 8 places Mercedes à Marseille, service sur la métropole",
    caption: "Mise à disposition sur Marseille, aéroport Marignane et littoral",
  },
  {
    src: "/taxi-marseille-aeroport-marignane.jpeg",
    alt: "Mercedes van 8 places en service sur Marseille — extérieur et présentation soignée",
    caption:
      "Même exigence de ponctualité : journées sur la métropole, escapades ou fin de soirée en groupe",
  },
];

export default function Van8PlacesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/taxi-marseille-van-interieur-place-8.jpeg"
            alt="Taxi van Marseille — Mercedes van 8 places, intérieur"
            fill
            className="object-cover object-[center_42%] md:object-[center_35%] lg:object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-1 bg-linear-to-t from-black/70 via-black/45 to-black/30" />
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <p className="mb-4 rounded-full border border-accent/30 bg-blue-200/90 px-4 py-2 text-sm font-bold uppercase tracking-widest text-accent">
            Transport de groupes
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Mercedes van 8 places à Marseille
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-white/90 md:text-xl">
            Pour un taxi van à Marseille fiable et confortable : un seul
            véhicule pour votre famille, votre équipe ou vos invités — coffre
            volumineux et chauffeur habitué à la métropole, à l’aéroport
            Marignane et aux escapades vers Aix ou Cassis.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent px-8 py-6 text-lg text-accent-foreground hover:opacity-90"
            >
              Réserver le van 8 places
            </Button>
            <Button
              href="/tarifs"
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/20"
            >
              Voir les tarifs
            </Button>
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="border-b border-slate-100 bg-slate-50/80 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Jusqu’à 8 passagers",
              text: "Sièges réglables, climatisation : voyages sereins en groupe.",
            },
            {
              icon: Luggage,
              title: "Bagages volumineux",
              text: "Valises, poussettes, matériel sport : nous anticipons le chargement.",
            },
            {
              icon: Plane,
              title: "Aéroport & gare",
              text: "MRS, Saint-Charles, hôtels : prise en charge au plus près des accès.",
            },
            {
              icon: Shield,
              title: "Devis transparent",
              text: "Forfait ou au kilomètre selon le trajet — pas de surprise à bord.",
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

      {/* Contenu éditorial + image */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pourquoi choisir notre Mercedes van 8 places avec Taxi Marseille ?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                Le <strong>Mercedes van 8 places</strong> est la réponse la plus
                confortable lorsque vous dépassez cinq passagers, lorsque vous
                voyagez avec des <strong>bagages nombreux</strong> ou lorsque
                vous organisez un <strong>déplacement professionnel</strong>{" "}
                (accueil clients, séminaire, équipe sur chantier). C’est aussi le
                format adapté lorsque vous cherchez un{" "}
                <strong>taxi van sur Marseille</strong> pour tout le groupe dans
                un seul véhicule.
              </p>
              <p>
                Nous desservons l&apos;ensemble de la{" "}
                <strong>métropole marseillaise</strong>, l&apos;
                <Link
                  href="/services/taxi-aeroport-marseille"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  aéroport Marseille Provence
                </Link>
                , la{" "}
                <Link
                  href="/services/taxi-gare-saint-charles"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  gare Saint-Charles
                </Link>
                , les hôtels et palais des congrès, ainsi que les{" "}
                <strong>longues distances</strong> (
                <Link
                  href="/services/marseille-aix-cassis"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Aix-en-Provence, Cassis, route des Crêtes
                </Link>
                , littoral, selon disponibilité).
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Siège enfant ou rehausseur sur demande à la réservation",
                "Attente possible sur site (excursion, dîner, réunion)",
                "Alternative SUV Mercedes pour 1 à 4 passagers si le van n’est pas nécessaire",
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
                  src="/taxi-marseille-Cathedrale-Sainte-Marie-Majeure.jpeg"
                  alt="Mercedes van 8 places pour transferts et groupes à Marseille"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
                Mercedes van 8 places — idéal pour les groupes et les longues
                distances
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Cas d’usage */}
      <section className="bg-linear-to-b from-accent/5 via-white to-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Quand réserver le van 8 places ?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Un seul créneau à réserver, un interlocuteur pour tout le groupe, un
            véhicule homologué transport avec chauffeur.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Plane,
                title: "Transferts aéroport & croisière",
                desc: "Vol retardé, valises lourdes, groupe avec enfants : nous adaptons l’heure de prise en charge.",
              },
              {
                icon: Briefcase,
                title: "Entreprises & événements",
                desc: "Accueil délégations, salons, soirées au Pharo ou au Chanot — image soignée et ponctualité.",
              },
              {
                icon: Users,
                title: "Familles & tourisme",
                desc: "Journée vers Aix, Cassis ou la route des Crêtes : le van évite de multiplier les véhicules.",
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
              Demander un devis van 8 places
            </Button>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Mercedes van 8 places en images
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Découvrez le véhicule dédié aux groupes : volume, confort et
            présentation soignée pour vos transferts sur Marseille et au-delà.
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

      {/* CTA final */}
      <section className="border-t border-slate-200 bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Prêt à réserver votre van 8 places ?
          </h2>
          <p className="mb-8 text-lg text-white/85">
            Indiquez la date, l&apos;heure, le nombre de passagers et le type de
            véhicule « Mercedes van 8 places » dans notre formulaire : nous vous
            confirmons rapidement par téléphone ou e-mail.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/reservation"
              size="lg"
              className="bg-accent px-8 py-5 text-accent-foreground hover:opacity-90"
            >
              Formulaire de réservation
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent px-8 py-5 text-white hover:bg-white/10"
            >
              Tous nos services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
