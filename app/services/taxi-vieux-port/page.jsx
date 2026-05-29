export const revalidate = 86400;

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

import Button from "@/app/components/ui/Button";
import { Anchor, CheckCircle, Clock, MapPin, Ship, Train } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TaxiVieuxPortService() {
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
  ];

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi Vieux-Port Marseille",
    serviceType: "Transfert local / dépose centre-ville",
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
      <section className="relative min-h-[88vh] flex items-start md:items-center overflow-hidden pt-20 pb-16 md:pb-24">
        <Image
          src="/vieux-port-marseille.jpg"
          alt="Taxi Vieux-Port Marseille — quais et accès centre-ville"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/30" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="text-white">
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    <Anchor className="h-4 w-4 text-cyan-200" aria-hidden />
                    Vieux-Port · centre historique
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-emerald-200" aria-hidden />
                    24h/24 · 7j/7
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                  Taxi Vieux-Port Marseille
                </h1>
                <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
                  Dépose au plus près des quais, hôtels et restaurants. Transferts
                  vers la gare Saint-Charles, le port (J4/MPCT) et l’aéroport MRS.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="/reservation"
                    className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg rounded-full"
                  >
                    Réserver un taxi Vieux-Port
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="border-white/20 text-white bg-white/10 hover:bg-white/15 px-8 py-6 text-lg rounded-full"
                  >
                    Question rapide
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl text-sm text-white/85">
                  {[
                    { icon: MapPin, label: "Accès centre / quais optimisés" },
                    { icon: Train, label: "Correspondances gare Saint-Charles" },
                    { icon: Ship, label: "Ferries & croisières (selon terminal)" },
                    { icon: CheckCircle, label: "Tarif communiqué avant validation" },
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
                  Pour des infos très pratiques (dépose, ferries, accès), voir notre
                  guide{" "}
                  <Link
                    href="/blog/taxi-vieux-port-marseille-guide-2026"
                    className="font-semibold underline-offset-2 hover:underline"
                  >
                    Taxi Vieux-Port Marseille — guide 2026
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 text-white backdrop-blur-sm shadow-2xl shadow-black/20">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Trajets fréquents
                </h2>
                <ul className="space-y-3 text-white/90">
                  {[
                    {
                      label: "Vieux-Port ↔ Gare Saint-Charles",
                      href: "/services/taxi-gare-saint-charles",
                    },
                    {
                      label: "Vieux-Port ↔ Port de croisière (J4 / MPCT)",
                      href: "/services/port-de-croisieres",
                    },
                    {
                      label: "Vieux-Port ↔ Aéroport Marseille (MRS)",
                      href: "/services/taxi-aeroport-marseille",
                    },
                  ].map((item) => (
                    <li key={item.href} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300/80 shrink-0" />
                      <Link
                        href={item.href}
                        className="font-semibold text-white underline-offset-2 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/85">
                  Besoin d’une page “quartier” avec détails d’accès ? Consulte le{" "}
                  <Link
                    href="/secteurs/vieux-port"
                    className="font-semibold underline-offset-2 hover:underline"
                  >
                    secteur Vieux-Port
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-linear-to-b from-cyan-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Questions fréquentes — taxi Vieux-Port Marseille
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

