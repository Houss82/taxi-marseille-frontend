// app/conditions-utilisation/page.jsx — CONDITIONS D'UTILISATION

export const metadata = {
  title: "Conditions d'utilisation | Taxi Marseille",
  description:
    "Consultez les conditions d'utilisation du service Taxi Marseille. Règles et modalités pour l'utilisation de nos services de transport.",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/conditions-utilisation",
  },
};

import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react";

export default function ConditionsUtilisation() {
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
              Conditions d&apos;utilisation
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <p className="text-gray-800 leading-relaxed text-lg">
                Les présentes conditions d&apos;utilisation régissent l&apos;utilisation
                du site web et des services proposés par{" "}
                <strong className="font-bold text-accent text-xl">
                  Taxi Marseille
                </strong>
                . En accédant à notre site ou en utilisant nos services, vous
                acceptez d&apos;être lié par ces conditions.
              </p>
            </div>

            {/* Article 1 */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-accent-foreground font-bold">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Acceptation des conditions
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    L&apos;utilisation de nos services implique l&apos;acceptation
                    pleine et entière des présentes conditions d&apos;utilisation.
                    Si vous n&apos;acceptez pas ces conditions, veuillez ne pas
                    utiliser nos services.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Description des services
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong className="font-bold text-primary text-lg">
                      Taxi Marseille
                    </strong>{" "}
                    propose des services de transport de personnes par véhicule
                    avec chauffeur sur la Côte d&apos;Azur, notamment :
                  </p>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Transferts aéroport Marseille Marignane (MRS)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Trajets vers les gares et hôtels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Déplacements longue distance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>Services de chauffeur privé</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      Réservation et paiement
                    </h2>
                    <div className="space-y-4 text-gray-800">
                      <p className="leading-relaxed">
                        Les réservations peuvent être effectuées en ligne, par
                        téléphone ou par email. Le paiement s&apos;effectue :
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>Par carte bancaire à bord du véhicule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>En espèces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>Par virement bancaire (sur devis)</span>
                        </li>
                      </ul>
                      <div className="bg-white/80 rounded-lg p-4 mt-4">
                        <p className="text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 inline mr-2 text-accent" />
                          Les prix sont indiqués en euros TTC. Des suppléments
                          peuvent s&apos;appliquer pour les trajets de nuit, les
                          jours fériés ou les demandes spéciales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Annulation et modification
                  </h2>
                  <div className="space-y-4 text-gray-800">
                    <p className="leading-relaxed">
                      Les annulations doivent être effectuées au minimum{" "}
                      <strong className="font-bold text-primary">
                        2 heures avant
                      </strong>{" "}
                      l&apos;heure prévue du trajet. En cas d&apos;annulation tardive
                      ou d&apos;absence, des frais peuvent être appliqués.
                    </p>
                    <p className="leading-relaxed">
                      Les modifications de réservation sont possibles selon les
                      disponibilités et peuvent entraîner une révision du tarif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-accent-foreground font-bold">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Responsabilité
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong className="font-bold text-accent">
                      Taxi Marseille
                    </strong>{" "}
                    s&apos;engage à assurer la sécurité et le confort des passagers.
                    Cependant, nous ne pouvons être tenus responsables :
                  </p>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Des retards dus à des circonstances indépendantes de notre
                        volonté (embouteillages, accidents, intempéries)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Des dommages causés aux bagages non surveillés
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Des pertes ou vols d&apos;objets personnels laissés dans le
                        véhicule
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Propriété intellectuelle
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Tous les contenus présents sur ce site (textes, images,
                    logos, graphismes) sont la propriété exclusive de{" "}
                    <strong className="font-bold text-primary">
                      Taxi Marseille
                    </strong>{" "}
                    ou de ses partenaires. Toute reproduction, même partielle, est
                    interdite sans autorisation préalable.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 7 */}
            <div className="bg-linear-to-r from-accent/10 via-white to-primary/10 border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="text-accent-foreground font-bold">7</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Modification des conditions
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="font-bold text-accent">
                      Taxi Marseille
                    </strong>{" "}
                    se réserve le droit de modifier les présentes conditions
                    d&apos;utilisation à tout moment. Les modifications entrent en
                    vigueur dès leur publication sur le site. Il est recommandé de
                    consulter régulièrement cette page.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Questions sur nos conditions d&apos;utilisation ?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                N&apos;hésitez pas à nous contacter pour toute question.
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

