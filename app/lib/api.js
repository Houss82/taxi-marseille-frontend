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

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Erreur lors de la création de la réservation"
      );
    }

    return data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error;
  }
}
