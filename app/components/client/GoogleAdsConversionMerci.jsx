"use client";

import Script from "next/script";
import {
  GOOGLE_ADS_AW_ID,
  GOOGLE_ADS_CONVERSION_ACTIVE,
  GOOGLE_ADS_SEND_TO,
} from "../../lib/google-ads-conversion";

/**
 * Balises Google Ads — uniquement importées sur la page /merci.
 *
 * Quand vous activerez la conversion :
 * 1. Remplissez GOOGLE_ADS_AW_ID et GOOGLE_ADS_SEND_TO dans app/lib/google-ads-conversion.js
 * 2. Passez GOOGLE_ADS_CONVERSION_ACTIVE à true
 *
 * Option alternative : si Google vous fournit un seul bloc <script> personnalisé,
 * vous pouvez remplacer le contenu ci-dessous par un <Script id="google-ads-custom" ...>
 * avec strategy="afterInteractive" et le snippet exact fourni par Google Ads.
 */
export default function GoogleAdsConversionMerci() {
  const ready =
    GOOGLE_ADS_CONVERSION_ACTIVE &&
    GOOGLE_ADS_AW_ID.length > 0 &&
    GOOGLE_ADS_SEND_TO.length > 0;

  if (!ready) {
    return (
      <>
        {/*
          ═══════════════════════════════════════════════════════════════════
          GOOGLE ADS — Collez ici votre suivi de conversion (quand les IDs sont prêts)

          Méthode A (recommandée) : renseigner app/lib/google-ads-conversion.js
          et passer GOOGLE_ADS_CONVERSION_ACTIVE à true.

          Méthode B : remplacer ce composant par les balises exactes fournies par
          Google (gtag.js + événement conversion), en gardant strategy="afterInteractive"
          sur next/script pour ne charger que sur /merci.

          Référence : https://support.google.com/google-ads/answer/6331314
          ═══════════════════════════════════════════════════════════════════
        */}
      </>
    );
  }

  const awId = GOOGLE_ADS_AW_ID;
  const sendTo = GOOGLE_ADS_SEND_TO;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(awId)}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-merci" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(awId)});
          gtag('event', 'conversion', {
            'send_to': ${JSON.stringify(sendTo)}
          });
        `}
      </Script>
    </>
  );
}
