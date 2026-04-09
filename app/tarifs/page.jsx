// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import { Check } from "lucide-react";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Tarifs - Taxi Marseille",
  description:
    "Tarifs indicatifs pour transferts aéroport Marignane (MRS), gare Saint-Charles, Aix-en-Provence et Cassis. Devis sur mesure.",
  keywords:
    "tarifs taxi marseille, prix transfert aéroport mrs, tarif taxi aix, prix taxi cassis",
};

export default function Pricing() {
  const routes = [
    { from: "Aéroport MRS", to: "Marseille centre", price: 65 },
    { from: "Aéroport MRS", to: "Gare Saint-Charles", price: 70 },
    { from: "Marseille", to: "Aix-en-Provence", price: 85 },
    { from: "Marseille", to: "Cassis", price: 95 },
    { from: "Marseille", to: "La Ciotat", price: 90 },
    { from: "Gare TGV", to: "Vieux-Port", price: 35 },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-muted-foreground">
              Prix fixes, sans surprise. Service de qualité premium à des tarifs
              compétitifs —{" "}
              <span className="text-foreground font-medium">
                van 8 places sur devis pour groupes.
              </span>
            </p>
            <p className="mt-5 text-base text-muted-foreground max-w-2xl mx-auto">
              Pour le trajet aéroport :{" "}
              <Link
                href="/blog/taxi-aeroport-marseille-mrs-guide-2026"
                className="text-accent font-semibold underline-offset-2 hover:underline"
              >
                transfert aéroport Marseille Provence
              </Link>{" "}
              (durées, zones et conseils pratiques).
            </p>
          </div>

          {/* Pricing Table */}
          <Card className="overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">De</th>
                    <th className="px-6 py-4 text-left font-bold">Vers</th>
                    <th className="px-6 py-4 text-right font-bold">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0 hover:bg-secondary transition-colors"
                    >
                      <td className="px-6 py-4">{route.from}</td>
                      <td className="px-6 py-4">{route.to}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent">
                        {route.price}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Chauffeur Privé</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Demi-journée (4h): 240€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Journée complète (8h): 420€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Itinéraires flexibles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Chauffeur professionnel</span>
                </li>
              </ul>
              <Link href="/reservation">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Réserver une journée
                </Button>
              </Link>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Forfait Événement</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Mariage: à partir de 500€</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Festival: tarif spécial</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Transport groupe (van 8 places)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span>Discrétion et service blanc</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                  Devis personnalisé
                </Button>
              </Link>
            </Card>
          </div>

          {/* Info */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Informations Tarifaires</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Tous les tarifs incluent la TVA</li>
              <li>• Surcharge de 20% entre 20h et 6h</li>
              <li>• Gratuit: bagages, enfant -3 ans</li>
              <li>• Attente (à partir de 15 min): 0,35€/min</li>
              <li>• Réduction groupe à partir de 5 personnes</li>
              <li>
                • Mercedes Classe V 8 places : tarif sur devis (précisez le
                nombre de passagers à la réservation)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
