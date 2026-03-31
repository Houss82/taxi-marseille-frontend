// ✅ SERVER COMPONENT - Pas de "use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">
                  T
                </span>
              </div>
              <span className="font-bold text-lg">Taxi Marseille</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Service de taxi premium sur Marseille et la métropole. Confort,
              ponctualité et disponibilité 24h/24.{" "}
              <span className="text-primary-foreground">
                Véhicule 8 places (Mercedes Classe V) sur réservation.
              </span>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/services/taxi-aeroport-marseille"
                  className="hover:text-accent transition-colors"
                >
                  Taxi aéroport Marseille (MRS)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trajets-hotels-evenements"
                  className="hover:text-accent transition-colors"
                >
                  Hôtels &amp; événements
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marseille-aix-cassis"
                  className="hover:text-accent transition-colors"
                >
                  Aix &amp; Cassis
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-accent transition-colors">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 6 98 76 54 32</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@taxis-marseille.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Marseille, Bouches-du-Rhône</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 disponible</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/conditions-utilisation"
                  className="hover:text-accent transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-accent transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-accent transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; 2026 Taxi Marseille. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
