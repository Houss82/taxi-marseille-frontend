import { getAllPostSlugs, getAllPosts } from "@/lib/blog";

const baseUrl = "https://www.taxis-marseille.fr";

export default function sitemap() {
  const now = new Date();
  const allPosts = getAllPosts();

  // Créer un map pour accéder rapidement aux dates des articles
  const postDatesMap = {};
  allPosts.forEach((post) => {
    postDatesMap[post.slug] = post.date ? new Date(post.date) : now;
  });

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/services/taxi-aeroport-marseille",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/trajets-hotels-evenements",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/marseille-aix-cassis",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/taxi-gare-saint-charles",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/services/chauffeur-prive-marseille",
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
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getAllPostSlugs().map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: postDatesMap[slug] || now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
