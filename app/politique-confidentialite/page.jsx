// app/politique-confidentialite/page.jsx — POLITIQUE DE CONFIDENTIALITÉ

export const metadata = {
  title: "Politique de confidentialité | Taxi Marseille",
  description:
    "Découvrez comment Taxi Marseille protège vos données personnelles. Politique de confidentialité conforme au RGPD.",
  alternates: {
    canonical: "https://www.taxis-marseille.fr/politique-confidentialite",
  },
};

import { Lock, Shield, Eye, Database, Mail, AlertCircle } from "lucide-react";

export default function PolitiqueConfidentialite() {
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
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Protection des Données
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Politique de confidentialité
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
                <strong className="font-bold text-accent text-xl">
                  Taxi Marseille
                </strong>{" "}
                s&apos;engage à protéger la confidentialité et la sécurité de vos
                données personnelles. Cette politique de confidentialité explique
                comment nous collectons, utilisons, stockons et protégeons vos
                informations conformément au{" "}
                <strong className="font-bold text-primary text-lg">
                  Règlement Général sur la Protection des Données (RGPD)
                </strong>
                .
              </p>
            </div>

            {/* Article 1 */}
            <div className="relative pl-6 border-l-4 border-accent bg-linear-to-r from-accent/5 to-transparent py-6 rounded-r-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Données collectées
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Nous collectons les données suivantes lorsque vous utilisez
                    nos services :
                  </p>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Données d&apos;identification :</strong>{" "}
                        nom, prénom, numéro de téléphone, adresse email
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Données de réservation :</strong>{" "}
                        adresses de départ et d&apos;arrivée, dates et heures de
                        trajet, nombre de passagers
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Données de paiement :</strong>{" "}
                        informations nécessaires au traitement des paiements
                        (gérées par nos prestataires sécurisés)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Données de navigation :</strong>{" "}
                        adresse IP, type de navigateur, pages visitées (via cookies)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Utilisation des données
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Vos données personnelles sont utilisées pour :
                  </p>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Traiter et gérer vos réservations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Vous contacter concernant votre réservation (confirmations,
                        modifications, annulations)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Améliorer nos services et votre expérience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Respecter nos obligations légales et réglementaires
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        Vous envoyer des communications marketing (avec votre
                        consentement)
                      </span>
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
                      Protection et sécurité
                    </h2>
                    <div className="space-y-4 text-gray-800">
                      <p className="leading-relaxed">
                        <strong className="font-bold text-accent">
                          Taxi Marseille
                        </strong>{" "}
                        met en œuvre des mesures techniques et organisationnelles
                        appropriées pour protéger vos données contre :
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>L&apos;accès non autorisé</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>La perte ou la destruction accidentelle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>La divulgation non autorisée</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>La modification non autorisée</span>
                        </li>
                      </ul>
                      <div className="bg-white/80 rounded-lg p-4 mt-4">
                        <p className="text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 inline mr-2 text-accent" />
                          Vos données sont stockées sur des serveurs sécurisés et
                          ne sont accessibles qu&apos;aux personnes autorisées.
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
                    Partage des données
                  </h2>
                  <div className="space-y-4 text-gray-800">
                    <p className="leading-relaxed">
                      Vos données personnelles ne sont jamais vendues à des tiers.
                      Nous pouvons partager vos informations uniquement avec :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Nos prestataires de services (paiement, hébergement) qui
                          agissent en notre nom et sont soumis à des obligations de
                          confidentialité
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          Les autorités compétentes si la loi l&apos;exige
                        </span>
                      </li>
                    </ul>
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
                    Vos droits (RGPD)
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Droit d&apos;accès :</strong>{" "}
                        Vous pouvez demander une copie de vos données personnelles
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Droit de rectification :</strong>{" "}
                        Vous pouvez corriger vos données inexactes
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Droit à l&apos;effacement :</strong>{" "}
                        Vous pouvez demander la suppression de vos données
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Droit à la portabilité :</strong>{" "}
                        Vous pouvez récupérer vos données dans un format structuré
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <div>
                        <strong className="font-bold">Droit d&apos;opposition :</strong>{" "}
                        Vous pouvez vous opposer au traitement de vos données
                      </div>
                    </li>
                  </ul>
                  <div className="bg-white/80 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <Mail className="w-4 h-4 inline mr-2 text-accent" />
                      Pour exercer vos droits, contactez-nous à{" "}
                      <a
                        href="mailto:contact@taxis-marseille.fr"
                        className="text-accent font-bold hover:underline"
                      >
                        contact@taxis-marseille.fr
                      </a>
                    </p>
                  </div>
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
                    Cookies
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Notre site utilise des cookies pour améliorer votre expérience
                    de navigation. Vous pouvez gérer vos préférences de cookies
                    dans les paramètres de votre navigateur. Les cookies essentiels
                    sont nécessaires au fonctionnement du site et ne peuvent pas
                    être désactivés.
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
                    Durée de conservation
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                    Vos données sont conservées pendant la durée nécessaire aux
                    finalités pour lesquelles elles ont été collectées, et en
                    conformité avec les obligations légales. Les données de
                    réservation sont conservées pendant{" "}
                    <strong className="font-bold text-primary">3 ans</strong> à
                    compter de la dernière utilisation de nos services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Questions sur la protection de vos données ?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Notre équipe est à votre disposition pour répondre à vos questions.
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

