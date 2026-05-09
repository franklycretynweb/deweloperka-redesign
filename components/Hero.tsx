"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

const navLinks = ["O inwestycji", "Mieszkania", "Lokalizacja", "Kontakt"];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex flex-col overflow-hidden">
      
      {/* ── Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between py-6 px-8 md:px-12 z-50"
      >
        <span className="font-display font-semibold text-[13px] tracking-[0.24em] text-ink uppercase">
          Crocus Hill
        </span>

        <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-body font-medium text-[13px] tracking-wide text-ink/60 hover:text-ink transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="font-body font-medium text-[13px] tracking-wider text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors duration-300"
        >
          Zapytaj o mieszkanie
        </a>
      </motion.nav>

      {/* ── Główny kontener ── */}
      <div className="relative flex-1 flex flex-col justify-center mt-32 md:mt-40 px-4 md:px-8 pb-8">
        
        {/* ── Wrapper na obrazek + wjeżdżający tekst ── */}
        <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem]">
          
          {/* Wielki Tekst (Wyśrodkowany poziomo) */}
          <div className="absolute left-0 w-full z-20 pointer-events-none -top-10 md:-top-16 lg:-top-24 xl:-top-32 flex justify-center">
            <h1 className="font-display font-semibold text-[7vw] leading-[1] tracking-[-0.04em] text-ink m-0 pointer-events-auto whitespace-nowrap text-center">
              <span className="block overflow-hidden pb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.4 }}
                  className="block"
                >
                  Dom przy Jasnych Błoniach.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Obrazek (Pill) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="relative w-full h-[55vh] md:h-[65vh] lg:h-[70vh] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-ink/5 z-10"
          >
            <Image
              src="/heroimg.webp"
              alt="Crocus Hill — osiedle przy Jasnych Błoniach, Szczecin"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 95vw"
            />
            <div className="absolute inset-0 border border-black/5 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none z-10" />

            {/* ── Customowy Widget Lokalizacji (Pinezka) ── */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-20"
            >
              <a
                href="#lokalizacja"
                className="group flex items-center gap-4 p-2 pr-6 rounded-full bg-cream/95 backdrop-blur-md shadow-xl border border-white/50 cursor-pointer transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Okrąg z animowaną ikonką pinu */}
                <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center shrink-0 group-hover:bg-plum transition-colors duration-500 relative">
                  {/* Subtelny puls dla efektu live-location */}
                  <div className="absolute inset-0 rounded-full bg-plum opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300" />
                  
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-cream relative z-10"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                
                {/* Tekst widgetu */}
                <div className="flex flex-col">
                  <span className="font-display font-medium text-[11px] tracking-[0.15em] uppercase text-ink">
                    Jasne Błonia
                  </span>
                  <span className="font-body font-light text-[10.5px] text-ink-muted/80 tracking-wide mt-0.5">
                    100 m od parku
                  </span>
                </div>
              </a>
            </motion.div>

          </motion.div>
        </div>

        {/* Dolna Sekcja (tylko przyciski po prawej) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
          className="relative z-20 mt-8 md:mt-12 px-4 md:px-8 flex justify-center md:justify-end"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
            <a
              href="#etap-1"
              className="group relative overflow-hidden font-body font-medium text-[13px] tracking-wide text-cream bg-ink px-8 py-4 rounded-full transition-all duration-300 hover:bg-ink-muted hover:shadow-lg hover:-translate-y-0.5"
            >
              Etap I — dostępne
            </a>

            <a
              href="#etap-2"
              className="group flex items-center gap-2 font-body font-medium text-[13px] tracking-wide text-ink px-4 py-4 transition-all duration-300 hover:text-ink/60"
            >
              Etap II — przedsprzedaż
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
