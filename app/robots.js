const baseUrl = "https://www.taxis-marseille.fr";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ne pas bloquer /_next/ : Google a besoin de /_next/static et /_next/image pour le rendu
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
