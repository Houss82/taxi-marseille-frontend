// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400;

import Link from "next/link";
import ReservationForm from "../components/client/ReservationForm";
import Card from "../components/ui/Card";

export const metadata = {
  title: "Réservation - Taxi Marseille",
  description:
    "Réservez votre taxi à Marseille. Confirmation par email. Transferts aéroport MRS, gare Saint-Charles, Aix, Cassis. Service 24/7.",
  keywords:
    "réservation taxi marseille, réserver taxi mrs, booking taxi marseille, réservation chauffeur privé",
};

export default function Reservation() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Réserver un Trajet
            </h1>
            <p className="text-xl text-muted-foreground">
              Confirmation instantanée par email — véhicule{" "}
              <span className="text-foreground font-medium">8 places</span>{" "}
              sélectionnable pour les groupes.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
              Course depuis ou vers l&apos;aéroport ?{" "}
              <Link
                href="/blog/taxi-aeroport-marseille-mrs-guide-2026"
                className="text-accent font-medium underline-offset-2 hover:underline"
              >
                Chauffeur aéroport Marseille — infos utiles
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <ReservationForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-secondary">
                <h3 className="font-bold text-lg mb-4">
                  Conditions d'Annulation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Gratuit jusqu'à 24h avant</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">À Savoir</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Confirmation par email instantanée</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Chauffeur vous attend 15 min</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Prix fixes, pas de surprise</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>Paiement à bord</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
