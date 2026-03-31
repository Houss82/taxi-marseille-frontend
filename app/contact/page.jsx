// ✅ SERVER COMPONENT - Pas de "use client"
// ISR: Revalidate toutes les 24 heures pour le SEO
export const revalidate = 86400

import Link from "next/link"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import ContactForm from "../components/client/ContactForm"
import {
  PHONE_FR,
  PHONE_INTL,
  PHONE_TEL_HREF,
  PHONE_WHATSAPP_HREF,
} from "../lib/phone"

export const metadata = {
  title: "Contact - Taxi Marseille",
  description:
    "Contactez Taxi Marseille 24/7. Téléphone, WhatsApp, Email. Service client réactif. Disponible pour tous vos besoins de transport sur la Provence.",
  keywords:
    "contact taxi marseille, téléphone taxi marseille, whatsapp taxi, email taxi marseille",
}

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      info: `${PHONE_FR} · ${PHONE_INTL}`,
      action: "Appeler",
      href: PHONE_TEL_HREF,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: `${PHONE_FR} · ${PHONE_INTL}`,
      action: "Envoyer",
      href: PHONE_WHATSAPP_HREF,
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@taxis-marseille.fr",
      action: "Écrire",
      href: "mailto:contact@taxis-marseille.fr",
    },
  ]

  return (
    <main className="min-h-screen bg-white">

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nous Contacter</h1>
            <p className="text-xl text-muted-foreground">
              Disponible 24h/24 - 7j/7 — véhicule 8 places sur demande
            </p>
                </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {contactMethods.map((contact, i) => {
              const Icon = contact.icon
              return (
                <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground mb-6">{contact.info}</p>
                  <Link href={contact.href}>
                    <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">
                      {contact.action}
                    </Button>
                  </Link>
                </Card>
              )
            })}
                </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactForm />

            {/* Info Card */}
            <div className="space-y-6">
              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-6">Horaires & Localisation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                      <p className="font-bold">Disponibilité</p>
                      <p className="text-sm text-primary-foreground/80">
                        24 heures par jour, 7 jours par semaine
                      </p>
                  </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                      <p className="font-bold">Localisation</p>
                      <p className="text-sm text-primary-foreground/80">
                        Marseille, Bouches-du-Rhône, France
                      </p>
                  </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                      <p className="font-bold">Service Client</p>
                      <p className="text-sm text-primary-foreground/80">
                        Réponse sous 30 minutes
                      </p>
                </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "WhatsApp"].map((platform) => (
                    <Button key={platform} variant="outline" size="sm">
                      {platform}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

