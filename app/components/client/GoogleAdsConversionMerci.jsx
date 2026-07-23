"use client";

import Script from "next/script";
import {
  GOOGLE_ADS_CONVERSION_ACTIVE,
  GOOGLE_ADS_SEND_TO,
} from "../../lib/google-ads-conversion";

/**
 * Événement de conversion Google Ads — uniquement sur /merci.
 * La balise globale gtag.js est dans app/components/GoogleTag.jsx (layout) : pas de doublon ici.
 *
 * Coller l’extrait fourni par Google (après la balise globale), ex. :
 * gtag('event', 'conversion', { send_to: 'AW-…/…' });
 */
export default function GoogleAdsConversionMerci() {
  const ready =
    GOOGLE_ADS_CONVERSION_ACTIVE && GOOGLE_ADS_SEND_TO.length > 0;

  if (!ready) {
    return null;
  }

  const sendTo = GOOGLE_ADS_SEND_TO;

  return (
    <Script id="google-ads-conversion-merci" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', { 'send_to': ${JSON.stringify(sendTo)} });
      `}
    </Script>
  );
}
