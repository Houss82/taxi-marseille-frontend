// Page de confirmation réservation + conversion Google Ads (balises uniquement ici)
export const dynamic = "force-dynamic";

import MerciPageClient from "../components/client/MerciPageClient";

export const metadata = {
  title: "Demande envoyée",
  description:
    "Votre demande de réservation Taxi Marseille a bien été prise en compte.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.taxis-marseille.fr/merci",
  },
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-white">
      <MerciPageClient />
    </main>
  );
}
