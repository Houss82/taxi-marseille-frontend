const site = "https://www.taxis-marseille.fr";

/** Signal explicite pour l’exploration : sous-arbre /services (les pages filles gardent leur canonical propre) */
export const metadata = {
  metadataBase: new URL(site),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Taxi Marseille",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <script
        id="schema-services-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Services Taxi Marseille",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Taxi aéroport Marseille Marignane (MRS)",
                url: `${site}/services/taxi-aeroport-marseille`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Taxi port de croisière Marseille",
                url: `${site}/services/port-de-croisieres`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Taxi van Marseille (Mercedes 8 places)",
                url: `${site}/services/van-8-places`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Taxi gare Saint-Charles Marseille",
                url: `${site}/services/taxi-gare-saint-charles`,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "City tour Marseille",
                url: `${site}/services/city-tour-visite-marseille`,
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Mise à disposition mariage et congrès",
                url: `${site}/services/mise-a-disposition-mariage-congres`,
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Chauffeur privé Marseille",
                url: `${site}/services/chauffeur-prive-marseille`,
              },
              {
                "@type": "ListItem",
                position: 8,
                name: "Trajets Marseille Aix Cassis",
                url: `${site}/services/marseille-aix-cassis`,
              },
              {
                "@type": "ListItem",
                position: 9,
                name: "Trajets hôtels et événements",
                url: `${site}/services/trajets-hotels-evenements`,
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
