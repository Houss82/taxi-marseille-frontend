// Fonction utilitaire pour appeler l'API backend
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://taxi-marseille-backend.vercel.app";

export async function createReservation(reservationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error(
        "Réponse serveur invalide. Vérifiez que l’API répond correctement."
      );
    }

    if (!response.ok) {
      throw new Error(
        data.error || "Erreur lors de la création de la réservation"
      );
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && String(error.message).includes("fetch")) {
      throw new Error(
        "Connexion impossible vers l’API (réseau ou blocage CORS). Redéployez le backend avec la dernière version ou ajoutez votre origine dans CORS_ORIGINS sur Vercel."
      );
    }
    console.error("Erreur API:", error);
    throw error;
  }
}
