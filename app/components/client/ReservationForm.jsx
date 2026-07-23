"use client";

import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createReservation } from "../../lib/api";
import { FORMSPREE_RESERVATION_URL } from "../../lib/formspree";
import { setReservationConfirmationFlag } from "../../lib/reservation-confirmation";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function ReservationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "1",
    luggage: "0",
    vehicle: "glc",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Indicatif + national : uniquement des chiffres côté API (8–15)
  const extractCountryCode = (raw) => {
    const phone = (raw || "").trim();
    if (!phone) return { indicatifPays: "+33", telephone: "" };

    const digits = phone.replace(/\D/g, "");

    // +33… ou 0033… → national sans le 0 initial (ex. 33612345678 → 612345678)
    if (digits.startsWith("33") && digits.length >= 10) {
      let national = digits.slice(2);
      if (national.startsWith("0")) national = national.slice(1);
      return { indicatifPays: "+33", telephone: national };
    }

    // Numéro français avec 0 initial (10 chiffres)
    if (digits.length >= 10 && digits.startsWith("0")) {
      return { indicatifPays: "+33", telephone: digits.slice(1) };
    }

    if (digits.startsWith("0")) {
      return { indicatifPays: "+33", telephone: digits.slice(1) };
    }

    return { indicatifPays: "+33", telephone: digits };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Extraire l'indicatif pays et le téléphone
      const { indicatifPays, telephone } = extractCountryCode(formData.phone);

      if (!/^\d{8,15}$/.test(telephone)) {
        setError(
          "Numéro invalide : saisissez 8 à 15 chiffres (ex. 06 12 34 56 78 ou +33 6 12 34 56 78)."
        );
        setLoading(false);
        return;
      }

      // Préparer les données pour l'API backend
      const reservationData = {
        nom: formData.name,
        indicatifPays: indicatifPays,
        telephone: telephone,
        email: formData.email || undefined, // Optionnel
        date: formData.date,
        heure: formData.time,
        adresseDepart: formData.from,
        adresseArrivee: formData.to,
        nombreBagages: formData.luggage.toString(),
        nombrePassagers: formData.passengers.toString(),
        vehicule: formData.vehicle, // Toujours envoyer le véhicule sélectionné
        commentaires: formData.notes || undefined, // Optionnel
      };

      // Appeler l'API backend (code existant)
      const result = await createReservation(reservationData);

      if (result.result) {
        // Envoyer également à Formspree pour recevoir les emails (en parallèle, sans bloquer)
        try {
          const formspreeData = {
            type: "Réservation Taxi Marseille",
            name: formData.name,
            phone: `${indicatifPays} ${telephone}`,
            email: formData.email || "Non renseigné",
            from: formData.from,
            to: formData.to,
            date: formData.date,
            time: formData.time,
            passengers: formData.passengers,
            luggage: formData.luggage,
            vehicle:
              formData.vehicle === "glc"
                ? "Mercedes SUV"
                : formData.vehicle === "vito"
                  ? "Mercedes van 8 places"
                  : formData.vehicle,
            notes: formData.notes || "Aucune note",
          };

          await fetch(FORMSPREE_RESERVATION_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formspreeData),
          });
        } catch (formspreeError) {
          // Ne pas bloquer le processus si Formspree échoue
          console.warn("Erreur Formspree (non bloquant):", formspreeError);
        }

        const flagOk = setReservationConfirmationFlag();
        if (flagOk) {
          router.push("/merci");
        } else {
          setError(
            "Impossible de finaliser la redirection depuis ce navigateur. Votre réservation a bien été enregistrée — appelez-nous si besoin."
          );
        }
      }
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur lors de la soumission:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8">
      {error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-destructive">{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                Informations Personnelles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+33 7 XX XX XX XX"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Email (optionnel)
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Journey Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Détails du Trajet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Départ
                  </label>
                  <Input
                    type="text"
                    placeholder="Point de départ"
                    required
                    value={formData.from}
                    onChange={(e) =>
                      setFormData({ ...formData, from: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Destination
                  </label>
                  <Input
                    type="text"
                    placeholder="Point d'arrivée"
                    required
                    value={formData.to}
                    onChange={(e) =>
                      setFormData({ ...formData, to: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <Input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Heure
                  </label>
                  <Input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Passengers & Vehicle */}
            <div>
              <h3 className="font-bold text-lg mb-2">Passagers et Véhicule</h3>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">Mercedes van 8 places</strong>{" "}
                disponible : indiquez le nombre de passagers puis choisissez
                « Mercedes van 8 places » ci-dessous.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Passagers
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.passengers}
                    onChange={(e) =>
                      setFormData({ ...formData, passengers: e.target.value })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} passager{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Bagages
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.luggage}
                    onChange={(e) =>
                      setFormData({ ...formData, luggage: e.target.value })
                    }
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} bagage{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Véhicule
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.vehicle}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicle: e.target.value })
                    }
                  >
                    <option value="glc">Mercedes SUV</option>
                    <option value="vito">
                      Mercedes van 8 places (groupes)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Notes Supplémentaires
              </label>
              <textarea
                placeholder="Vos demandes spéciales..."
                className="w-full px-4 py-2 border border-border rounded-md"
                rows={4}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:opacity-90 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                "Envoi en cours..."
              ) : (
                <>
                  <span className="md:hidden">Confirmer</span>
                  <span className="hidden md:inline">
                    Confirmer la Réservation
                  </span>
                </>
              )}
            </Button>
      </form>
    </Card>
  );
}
