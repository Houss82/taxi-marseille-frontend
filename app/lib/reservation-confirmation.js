/**
 * Clé sessionStorage : définie uniquement après succès API du formulaire /reservation.
 * La page /merci la lit puis la supprime pour éviter l’accès direct et les doubles conversions.
 */
export const RESERVATION_CONFIRMATION_SESSION_KEY =
  "taxi_marseille_reservation_confirmed_v1";

/** Cookie court (secours si sessionStorage bloqué, ex. mode privé strict) */
export const RESERVATION_CONFIRMATION_COOKIE = "taxi_marseille_merci_ok";

export function setReservationConfirmationFlag() {
  if (typeof window === "undefined") return false;
  try {
    sessionStorage.setItem(RESERVATION_CONFIRMATION_SESSION_KEY, "1");
    return true;
  } catch {
    /* continue */
  }
  try {
    document.cookie = `${RESERVATION_CONFIRMATION_COOKIE}=1; path=/; max-age=120; SameSite=Lax`;
    return true;
  } catch {
    return false;
  }
}

export function consumeReservationConfirmationFlag() {
  if (typeof window === "undefined") return false;

  try {
    if (sessionStorage.getItem(RESERVATION_CONFIRMATION_SESSION_KEY) === "1") {
      sessionStorage.removeItem(RESERVATION_CONFIRMATION_SESSION_KEY);
      return true;
    }
  } catch {
    /* continue */
  }

  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|; )${RESERVATION_CONFIRMATION_COOKIE}=1(?:;|$)`)
    );
    if (match) {
      document.cookie = `${RESERVATION_CONFIRMATION_COOKIE}=; path=/; max-age=0`;
      return true;
    }
  } catch {
    /* ignore */
  }

  return false;
}
