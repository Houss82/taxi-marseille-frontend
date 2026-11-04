const baseUrl = "https://www.taxis-marseille.fr";

/** Génération au build : XML statique servi sans ré-exécuter remark/rehype en prod */
export const dynamic = "force-static";

export const runtime = "nodejs";

/**
 * URLs hors blog.
 * Pas de lastModified artificiel (= Date.now() au build) : sans date fiable
 * de modification de contenu, on omet lastModified (recommandation audit SEO).
 */
function getStaticUrlEntries() {
  const staticPaths = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/services/taxi-aeroport-marseille",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/mise-a-disposition-mariage-congres",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/van-8-places",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/port-de-croisieres",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/taxi-gare-saint-charles",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/taxi-vieux-port",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/city-tour-visite-marseille",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/chauffeur-prive-marseille",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/marseille-aix-cassis",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/trajets-hotels-evenements",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/taxi-parc-chanot-marseille",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/taxi-marseille-la-ciotat",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    { path: "/secteurs", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/secteurs/vieux-port",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/secteurs/joliette-euromediterranee",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/secteurs/le-panier",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/secteurs/port-de-croisiere",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    { path: "/tarifs", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/reservation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/conditions-utilisation",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      path: "/politique-confidentialite",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    { path: "/mentions-legales", priority: 0.5, changeFrequency: "yearly" },
  ];

  return staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));
}

/** Import dynamique : si le blog plante au chargement, le sitemap des services reste valide */
export default async function sitemap() {
  const staticEntries = getStaticUrlEntries();

  try {
    const { getAllPostSlugs, getAllPosts } = await import("@/lib/blogManifest");
    const allPosts = getAllPosts();
    const postDatesMap = {};
    allPosts.forEach((post) => {
      if (!post.date) return;
      const d = new Date(post.date);
      if (!Number.isNaN(d.getTime())) {
        postDatesMap[post.slug] = d;
      }
    });

    const blogEntries = getAllPostSlugs().map(({ slug }) => {
      const entry = {
        url: `${baseUrl}/blog/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      };
      if (postDatesMap[slug]) {
        entry.lastModified = postDatesMap[slug];
      }
      return entry;
    });

    return [...staticEntries, ...blogEntries];
  } catch (e) {
    console.error("[sitemap] Fallback sans articles blog:", e?.message || e);
    return staticEntries;
  }
}
