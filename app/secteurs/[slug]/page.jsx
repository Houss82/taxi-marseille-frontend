import SEOBreadcrumb from "@/app/components/SEOBreadcrumb";
import { PHONE_FR, PHONE_TEL_HREF } from "@/app/lib/phone";
import { getAllPosts } from "@/lib/blog";
import { Car, CheckCircle, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectorData, sectorSlugs } from "./data";

export async function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    return {};
  }

  const baseTitle = data.hero?.title || `Taxi ${data.cityName} Marseille`;
  const title = `${baseTitle} | Taxi Marseille`;
  const description =
    data.introduction?.[0]?.slice(0, 155) ??
    `Taxi Marseille — service taxi pour ${data.cityName}.`;
  const canonical = `https://www.taxis-marseille.fr/secteurs/${data.slug}`;

  const imageForMeta = data.hero?.image?.startsWith("http")
    ? data.hero.image
    : `https://www.taxis-marseille.fr${data.hero?.image || "/taxi-Marseille-logo.png"}`;

  return {
    title,
    description,
    keywords: [
      `taxi ${data.cityName.toLowerCase()} marseille`,
      `taxi ${data.cityName.toLowerCase()}`,
      "taxi marseille",
      "chauffeur privé marseille",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: imageForMeta,
          width: 1200,
          height: 630,
          alt: data.hero?.imageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageForMeta],
    },
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SecteurPage({ params }) {
  const { slug } = await params;
  const data = sectorData[slug];

  if (!data) {
    notFound();
  }

  const allPosts = getAllPosts();
  const keyword = data.cityName.toLowerCase();
  const relatedPosts = allPosts
    .filter((post) => {
      const slugMatch = post.slug?.toLowerCase().includes(data.slug);
      const titleMatch = post.title?.toLowerCase().includes(keyword);
      const excerptMatch = post.excerpt?.toLowerCase().includes(keyword);
      return slugMatch || titleMatch || excerptMatch;
    })
    .slice(0, 3);
  const fallbackPosts =
    relatedPosts.length > 0 ? relatedPosts : allPosts.slice(0, 3);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const breadcrumbItems = [
    {
      name: "Secteurs",
      url: "/secteurs",
      title: "Secteurs desservis à Marseille",
    },
    {
      name: data.cityName,
      url: `/secteurs/${data.slug}`,
      title: `Taxi ${data.cityName} Marseille`,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b mt-20 sm:mt-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-12">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6 shadow-sm">
              <MapPin className="w-4 h-4" />
              <span>Secteur Taxi Marseille</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              {data.hero.title}
            </h1>
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-accent via-sky-600 to-amber-500 bg-clip-text text-transparent mb-4 leading-tight">
              {data.hero.highlight}
            </h2>
            <h2 className="text-2xl text-accent font-bold mb-6">
              {data.hero.subtitle}
            </h2>

            {data.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative h-72 sm:h-96 rounded-3xl shadow-2xl border-2 border-accent/30 overflow-hidden">
            <Image
              src={data.hero.image}
              alt={data.hero.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 right-6 bg-gradient-to-br from-accent to-sky-800 text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white/20">
              <p className="text-xs text-white/80 uppercase tracking-wider font-semibold mb-1">
                Disponible
              </p>
              <p className="text-2xl font-black">24h/24 – 7j/7</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-2xl border-2 border-accent/40">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold">
                    Note
                  </div>
                  <div className="text-lg font-black text-gray-900">4,9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-10">
        {data.secondaryIntro?.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        ))}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Pour réserver un{" "}
          <Link
            href="/"
            className="underline font-semibold text-accent hover:text-sky-700"
          >
            taxi à Marseille
          </Link>
          , appelez le{" "}
          <a
            href={PHONE_TEL_HREF}
            className="font-semibold text-accent hover:text-sky-700"
          >
            {PHONE_FR}
          </a>{" "}
          ou utilisez notre formulaire en ligne.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="bg-gradient-to-br from-white to-accent/5 rounded-3xl shadow-2xl border-2 border-accent/20 p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-sky-800 rounded-xl flex items-center justify-center shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              {data.servicesTitle}
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {data.services.map((service, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 bg-white/80 backdrop-blur-sm border-2 border-accent/10 rounded-2xl px-5 py-4 shadow-md hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-sky-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Secteur couvert
        </h2>
        <p className="text-gray-700 mb-4">{data.coverageDescription}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.coverageAreas.map((area) => (
            <div
              key={area}
              className="group bg-white border-2 border-gray-200 rounded-xl px-5 py-4 text-gray-700 shadow-md hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Zone d&apos;intervention
        </h2>
        <p className="text-gray-700 mb-4">{data.map.description}</p>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            src={data.map.embedUrl}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5 mt-4 text-gray-900">
          ℹ️ {data.map.info}
        </div>
      </section>

      {Array.isArray(data.infoCards) && data.infoCards.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="grid md:grid-cols-2 gap-6">
            {data.infoCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-accent mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi choisir Taxi Marseille pour ce secteur ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.sellingPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-5 shadow">
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {data.faq.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {fallbackPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                À lire aussi pour organiser votre trajet {data.cityName}
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Guides pratiques autour de Marseille : aéroport MRS, Vieux-Port,
                Joliette, port de croisière et quartiers voisins.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Tous nos articles
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {fallbackPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  />
                  {post.category && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-accent text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    Lire l&apos;article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 mt-16 mb-16">
        <div className="bg-gradient-to-br from-accent to-sky-800 text-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Prêt à réserver votre taxi à {data.cityName} ?
              </h2>
              <p className="text-lg text-white/90">
                Contactez-nous par téléphone ou réservez en ligne. Nous vous
                confirmerons l&apos;horaire précis et le type de véhicule
                adapté.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_TEL_HREF}
                className="flex-1 text-center px-6 py-4 bg-white text-accent rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                📞 {PHONE_FR}
              </a>
              <Link
                href="/reservation"
                className="flex-1 text-center px-6 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-accent transition-colors"
              >
                Réservation en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

