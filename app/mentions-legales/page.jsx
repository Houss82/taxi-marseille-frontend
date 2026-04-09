// app/mentions-legales/page.jsx — MENTIONS LÉGALES

export const metadata = {
  title: "Mentions légales | Taxi Marseille",
  description:
    "Mentions légales du site Taxi Marseille. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/mentions-legales",
  },
};

import { Building2, FileText, Globe, Mail, MapPin, Phone } from "lucide-react";
import { GOOGLE_BUSINESS_MAPS_URL } from "../lib/google-business";
import { PHONE_FR, PHONE_INTL, PHONE_TEL_HREF } from "../lib/phone";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-b from-primary/10 via-white to-accent/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Informations Légales
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Mentions légales
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conformément aux dispositions de la loi pour la confiance en
            l&apos;économie numérique
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {/* Éditeur */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Éditeur du site
                  </h2>
                  <div className="space-y-4 text-gray-800">
                    <div>
                      <p className="font-bold text-lg text-accent mb-2">
                        Taxi Marseille
                      </p>
                      <p className="leading-relaxed">
                        Service de transport de personnes avec chauffeur
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Adresse :</p>
                        <p>9 Av. de la Grognarde, 13011 Marseille</p>
                        <p>Bouches-du-Rhône, France</p>
                        <a
                          href={GOOGLE_BUSINESS_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-accent font-medium hover:underline"
                        >
                          Fiche Google Maps
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Téléphone :</p>
                        <p>
                          <a
                            href={PHONE_TEL_HREF}
                            className="text-accent hover:underline font-bold"
                          >
                            {PHONE_FR}
                          </a>
                          <span className="block text-sm text-muted-foreground mt-1">
                            {PHONE_INTL}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Email :</p>
                        <a
                          href="mailto:contact@taxis-marseille.fr"
                          className="text-accent hover:underline font-bold"
                        >
                          contact@taxis-marseille.fr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">DP</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Directeur de publication
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Le directeur de publication est le représentant légal de{" "}
                    <strong className="font-bold text-accent">
                      Taxi Marseille
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Hébergement
                  </h2>
                  <div className="space-y-3 text-gray-800">
                    <p className="leading-relaxed">Ce site est hébergé par :</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-bold mb-2">Vercel Inc.</p>
                      <p className="text-sm">
                        340 S Lemon Ave #4133
                        <br />
                        Walnut, CA 91789
                        <br />
                        États-Unis
                      </p>
                      <p className="text-sm mt-2">
                        Site web :{" "}
                        <a
                          href="https://vercel.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          https://vercel.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      Propriété intellectuelle
                    </h2>
                    <div className="space-y-4 text-gray-800">
                      <p className="leading-relaxed">
                        L&apos;ensemble de ce site relève de la législation
                        française et internationale sur le droit d&apos;auteur
                        et la propriété intellectuelle. Tous les droits de
                        reproduction sont réservés, y compris pour les documents
                        téléchargeables et les représentations iconographiques
                        et photographiques.
                      </p>
                      <p className="leading-relaxed">
                        La reproduction de tout ou partie de ce site sur un
                        support électronique ou autre est formellement interdite
                        sauf autorisation expresse du directeur de publication.
                      </p>
                      <div className="bg-white/80 rounded-lg p-4 mt-4">
                        <p className="text-sm text-gray-700">
                          Les marques et logos présents sur le site sont la
                          propriété de leurs détenteurs respectifs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">!</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Limitation de responsabilité
                  </h2>
                  <div className="space-y-4 text-gray-800">
                    <p className="leading-relaxed">
                      <strong className="font-bold text-primary">
                        Taxi Marseille
                      </strong>{" "}
                      s&apos;efforce d&apos;assurer l&apos;exactitude et la mise
                      à jour des informations diffusées sur ce site, dont elle
                      se réserve le droit de corriger, à tout moment et sans
                      préavis, le contenu.
                    </p>
                    <p className="leading-relaxed">
                      Toutefois,{" "}
                      <strong className="font-bold text-accent">
                        Taxi Marseille
                      </strong>{" "}
                      ne peut garantir l&apos;exactitude, la précision ou
                      l&apos;exhaustivité des informations mises à disposition
                      sur ce site.
                    </p>
                    <p className="leading-relaxed">
                      En conséquence,{" "}
                      <strong className="font-bold text-primary">
                        Taxi Marseille
                      </strong>{" "}
                      décline toute responsabilité :
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Pour toute interruption du site ou des services
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Pour toute survenance de bugs ou erreurs techniques
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Pour tout dommage résultant d&apos;une connexion au
                          site
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Pour tout dommage résultant de l&apos;utilisation du
                          site ou de l&apos;impossibilité de l&apos;utiliser
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens externes */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-accent-foreground font-bold">L</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Liens hypertextes
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Le site peut contenir des liens hypertextes vers
                    d&apos;autres sites présents sur le réseau Internet. Les
                    liens vers ces autres ressources vous font quitter le site{" "}
                    <strong className="font-bold text-accent">
                      Taxi Marseille
                    </strong>
                    .
                  </p>
                  <p className="text-gray-800 leading-relaxed mt-4">
                    Il est possible de créer un lien vers la page d&apos;accueil
                    de ce site sans autorisation expresse de{" "}
                    <strong className="font-bold text-primary">
                      Taxi Marseille
                    </strong>
                    . Aucune autorisation ni demande d&apos;information
                    préalable ne peut être exigée par l&apos;éditeur à
                    l&apos;égard d&apos;un site qui souhaite établir un lien
                    vers le site de l&apos;éditeur.
                  </p>
                </div>
              </div>
            </div>

            {/* Loi applicable */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">⚖</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Loi applicable et juridiction
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Les présentes mentions légales sont régies par le droit
                    français. En cas de litige et à défaut d&apos;accord
                    amiable, le litige sera porté devant les tribunaux français
                    conformément aux règles de compétence en vigueur.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Questions sur nos mentions légales ?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                N&apos;hésitez pas à nous contacter pour toute information
                complémentaire.
              </p>
              <a
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
