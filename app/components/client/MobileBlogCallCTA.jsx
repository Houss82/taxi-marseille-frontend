"use client";

import { PHONE_FR, PHONE_TEL_HREF } from "@/app/lib/phone";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMobileMenu } from "./MobileMenuContext";

/** Seuil de scroll avant affichage sur la page d'accueil (en px). */
const HOME_SCROLL_THRESHOLD = 240;

const spring = {
  type: "spring",
  damping: 26,
  stiffness: 320,
  mass: 0.85,
};

/**
 * Bandeau CTA appel + réservation — mobile uniquement.
 * Entrée (spring) + animations continues CSS (dégradé, lueur, aurore, brillance) si motion OK.
 */
export default function MobileBlogCallCTA() {
  const reduce = useReducedMotion();
  const { isMobileMenuOpen } = useMobileMenu();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  /** Sur la home : masqué tant qu'on n'a pas scrollé.
   *  Sur les autres pages : visible d'emblée. */
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    setIsVisible(window.scrollY > HOME_SCROLL_THRESHOLD);

    const handleScroll = () => {
      setIsVisible(window.scrollY > HOME_SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  /* Masqué quand le menu burger est ouvert (z-index + chevauchement du CTA menu) */
  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="mobile-cta"
          className="fixed inset-x-0 bottom-0 z-100 md:hidden"
          role="complementary"
          aria-label="Actions rapides : appeler ou réserver"
          initial={reduce ? false : { y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "120%", opacity: 0 }}
          transition={reduce ? { duration: 0 } : spring}
        >
      <div className="pointer-events-none mx-auto max-w-lg px-3 pt-2">
        <motion.div
          className={`pointer-events-auto relative overflow-hidden rounded-[1.35rem] border border-white/40 bg-white/70 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-2xl ${!reduce ? "mobile-cta-shell--animated" : "shadow-[0_-12px_40px_-8px_rgba(15,23,42,0.18)]"}`}
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.05 }}
        >
          {!reduce && (
            <div className="mobile-cta-aurora-blob" aria-hidden />
          )}
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-80"
            aria-hidden
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 50%, rgba(37,99,235,0.06) 100%)",
            }}
          />
          <div className="relative z-1">
            <motion.p
              className={`mb-2.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500 ${!reduce ? "mobile-cta-label--animated" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { delay: 0.12, duration: 0.35, ease: [0.22, 1, 0.36, 1] }
              }
            >
              Une question · réponse immédiate
            </motion.p>
            <div className="flex gap-2.5">
              <motion.a
                href={PHONE_TEL_HREF}
                className={`group relative flex min-h-[3.35rem] flex-1 items-center gap-2.5 overflow-hidden rounded-2xl px-3 py-2 text-white shadow-lg shadow-cyan-500/25 ${!reduce ? "mobile-cta-call-bg" : "bg-linear-to-br from-cyan-500 via-cyan-600 to-blue-700"}`}
                initial={reduce ? false : { opacity: 0, x: -18, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay: 0.2, type: "spring", damping: 22, stiffness: 400 }
                }
                whileTap={{ scale: 0.97 }}
                whileHover={reduce ? {} : { scale: 1.02 }}
              >
                {!reduce && (
                  <span className="mobile-cta-shimmer-layer" aria-hidden />
                )}
                <span
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/15"
                  aria-hidden
                />
                <motion.span
                  className="relative z-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 shadow-inner"
                  aria-hidden
                  animate={
                    reduce
                      ? {}
                      : {
                          rotate: [0, -10, 10, -5, 0],
                        }
                  }
                  transition={
                    reduce
                      ? {}
                      : {
                          duration: 2.4,
                          repeat: Infinity,
                          repeatDelay: 5,
                          ease: "easeInOut",
                        }
                  }
                >
                  <Phone
                    className="h-5 w-5 drop-shadow"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </motion.span>
                <span className="relative z-1 min-w-0 flex-1 text-left">
                  <span className="block text-[0.7rem] font-medium text-cyan-50">
                    Appeler maintenant
                  </span>
                  <span className="font-mono text-[0.95rem] font-bold tracking-wide tabular-nums">
                    {PHONE_FR}
                  </span>
                </span>
              </motion.a>

              <motion.div
                className="w-21 shrink-0"
                initial={reduce ? false : { opacity: 0, x: 18, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay: 0.28, type: "spring", damping: 22, stiffness: 400 }
                }
              >
                <Link
                  href="/reservation"
                  className="flex min-h-[3.35rem] w-full flex-col items-center justify-center gap-0.5 rounded-2xl border border-slate-200/90 bg-white/85 text-slate-800 shadow-sm"
                >
                  <motion.span
                    className="flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-2"
                    whileTap={{ scale: 0.94 }}
                    whileHover={reduce ? {} : { scale: 1.06 }}
                  >
                    <Calendar
                      className="h-[1.15rem] w-[1.15rem] text-cyan-600"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-center text-[0.65rem] font-bold leading-tight">
                      Réserver
                    </span>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
          </motion.div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
