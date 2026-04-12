/**
 * Google Ads — conversion (page /merci uniquement, via GoogleAdsConversionMerci)
 *
 * 1. Google Ads → Outils → Mesures → Conversions → [votre action] → Balise
 * 2. Copiez l’ID de balise (format AW-xxxxxxxxxx) et le libellé send_to (AW-…/…)
 * 3. Renseignez ci-dessous et passez GOOGLE_ADS_CONVERSION_ACTIVE à true
 *
 * Ne chargez aucune URL gtag tant que les IDs ne sont pas valides.
 */
export const GOOGLE_ADS_CONVERSION_ACTIVE = false;

/** Ex. "AW-123456789" — ID de la balise Google Ads */
export const GOOGLE_ADS_AW_ID = "";

/**
 * Libellé complet send_to affiché dans l’extrait d’événement
 * Ex. "AW-123456789/AbCdEfGhIjKlMnOpQrStUvWxYz"
 */
export const GOOGLE_ADS_SEND_TO = "";
