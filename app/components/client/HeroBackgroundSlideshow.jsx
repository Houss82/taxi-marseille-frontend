"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/** Fichier sur disque en NFD (é = e + accent combiné) — URL doit correspondre */
const CATHEDRALE =
  "/taxi-marseille-Cath\u0065\u0301drale-Sainte-Marie-Majeure.jpeg";

const SLIDE_INTERCONTINENTAL = {
  src: "/taxi-InterContinental-Marseille-cours.jpeg",
  alt: "Taxi Marseille — centre-ville et cours urbains",
};

/** Mobile uniquement : remplace la dernière slide du carrousel */
const SLIDE_BASILIQUE = {
  src: encodeURI("/taxi-marseille-Basilique Notre-Dame-de-la-Garde.jpeg"),
  alt: "Taxi Marseille — Basilique Notre-Dame de la Garde",
};

const DEFAULT_SLIDES = [
  {
    src: CATHEDRALE,
    alt: "Taxi Marseille — Cathédrale Sainte-Marie-Majeure",
  },
  {
    src: "/taxi-marseille-aeroport-marignane.jpeg",
    alt: "Taxi Marseille — aéroport Marseille Marignane (MRS)",
  },
  SLIDE_INTERCONTINENTAL,
];

/** Intervalle entre deux images (ms) — défilement lent */
const INTERVAL_MS = 10000;
/** Durée du fondu entre deux images (ms) */
const FADE_MS = 2000;

const MOBILE_MAX = "(max-width: 767px)";

export default function HeroBackgroundSlideshow({
  slides: slidesProp,
  intervalMs = INTERVAL_MS,
  fadeMs = FADE_MS,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MAX);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const slides = useMemo(() => {
    if (slidesProp) return slidesProp;
    return [
      ...DEFAULT_SLIDES.slice(0, 2),
      isMobile ? SLIDE_BASILIQUE : SLIDE_INTERCONTINENTAL,
    ];
  }, [slidesProp, isMobile]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: i === index ? 1 : 0,
            opacity: i === index ? 1 : 0,
            transition: `opacity ${fadeMs}ms ease-in-out`,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
            quality={85}
          />
        </div>
      ))}
    </div>
  );
}
