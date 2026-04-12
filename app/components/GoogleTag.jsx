import Script from "next/script";
import { GOOGLE_ADS_AW_ID } from "../lib/google-ads-conversion";

/**
 * Balise Google (gtag.js) — une seule fois sur tout le site (layout).
 * Recommandation Google : copier après &lt;head&gt; ; en App Router, début du &lt;body&gt; + next/script.
 * Mesure / remarketing ; l’événement conversion est ajouté séparément sur /merci uniquement.
 *
 * EEE : pour le mode Consentement (CMP), voir
 * https://support.google.com/google-ads/answer/10000067
 */
export default function GoogleTag() {
  const id = GOOGLE_ADS_AW_ID?.trim();
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(id)});
        `}
      </Script>
    </>
  );
}
