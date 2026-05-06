"use client";

import { useEffect, useMemo, useState } from "react";

const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

/**
 * Widget Elfsight pour afficher les avis Google en quasi temps réel.
 *
 * Tu peux soit :
 * - passer le `widgetClassName` (recommandé si tu as le snippet Elfsight déjà prêt),
 * - soit configurer via variables d’environnement Next :
 *   - NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID
 *   - NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_CLASSNAME
 */
export default function ElfsightGoogleReviews({
  widgetClassName,
  className = "",
  containerClassName = "",
  fallbackText,
}) {
  const [isScriptReady, setIsScriptReady] = useState(false);

  const resolvedWidgetClassName = useMemo(() => {
    // Priorité : prop fournie par le snippet Elfsight.
    if (widgetClassName && widgetClassName.trim().length > 0) {
      return widgetClassName.trim();
    }

    // Fallback : variables d’environnement Next.
    const envWidgetId =
      process.env.NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID;
    const envWidgetClassName =
      process.env.NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_CLASSNAME;

    if (envWidgetClassName && envWidgetClassName.trim().length > 0) {
      return envWidgetClassName.trim();
    }
    if (envWidgetId && envWidgetId.trim().length > 0) {
      return `elfsight-app-${envWidgetId}`.trim();
    }
    return "";
  }, [widgetClassName]);

  useEffect(() => {
    // Si aucun widget n'est configuré, on ne charge rien.
    if (!resolvedWidgetClassName) return;

    // Evite de dupliquer le script si la navigation cause plusieurs montages.
    const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existingScript) {
      setIsScriptReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;

    script.onload = () => setIsScriptReady(true);
    document.head.appendChild(script);
  }, [resolvedWidgetClassName]);

  if (!resolvedWidgetClassName) {
    return (
      <div
        className={`rounded-2xl border border-gray-200 bg-gray-50 p-6 ${className}`}
      >
        <p className="text-gray-700 leading-relaxed">
          Avis Google Elfsight : <strong>widget non configuré</strong>.
          Ajoute ton `NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_WIDGET_ID`
          (ou `NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_CLASSNAME`) dans les
          variables d’environnement.
        </p>
        {fallbackText ? (
          <p className="mt-3 text-sm text-gray-600">{fallbackText}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={containerClassName || ""}>
      {/* Div Elfsight : le widget se charge automatiquement via platform.js */}
      <div
        className={resolvedWidgetClassName}
        data-elfsight-app-lazy
        data-elfsight-app-loaded={isScriptReady ? "true" : "false"}
        data-testid="elfsight-google-reviews"
        aria-hidden={!isScriptReady}
      />
    </div>
  );
}

