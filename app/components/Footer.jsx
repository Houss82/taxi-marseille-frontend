// ✅ SERVER COMPONENT - Pas de "use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_FR, PHONE_TEL_HREF } from "../lib/phone";

/** Lien footer : zone pleine largeur + curseur main (inline par défaut = flèche sur le vide à côté du texte) */
const navLink =
  "block w-full cursor-pointer hover:text-accent transition-colors";

const footerBarLink =
  "cursor-pointer hover:text-accent transition-colors inline-block";

/** Ligne contact : flex pour aligner icône + texte sur toute la largeur */
const contactLink =
  "flex w-full items-center gap-2 cursor-pointer hover:text-accent transition-colors";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/taxi-Marseille-logo.png"
                alt="Taxi Marseille"
                width={32}
                height={32}
                className="h-8 w-8 object-contain shrink-0"
              />
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
                <Link href="/services/taxi-aeroport-marseille" className={navLink}>
                  Taxi aéroport Marseille (MRS)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trajets-hotels-evenements"
                  className={navLink}
                >
                  Hôtels &amp; événements
                </Link>
              </li>
              <li>
                <Link href="/services/marseille-aix-cassis" className={navLink}>
                  Aix &amp; Cassis
                </Link>
              </li>
              <li>
                <Link href="/services/taxi-gare-saint-charles" className={navLink}>
                  Gare Saint-Charles
                </Link>
              </li>
              <li>
                <Link href="/services/chauffeur-prive-marseille" className={navLink}>
                  Chauffeur privé
                </Link>
              </li>
              <li>
                <Link href="/reservation" className={navLink}>
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href={PHONE_TEL_HREF} className={`${contactLink} font-medium`}>
                  <Phone className="w-4 h-4 shrink-0 pointer-events-none" />
                  {PHONE_FR}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@taxis-marseille.fr"
                  className={contactLink}
                >
                  <Mail className="w-4 h-4 shrink-0 pointer-events-none" />
                  contact@taxis-marseille.fr
                </a>
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
                <Link href="/conditions-utilisation" className={navLink}>
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className={navLink}>
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className={navLink}>
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; 2026 Taxi Marseille. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className={footerBarLink}>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
