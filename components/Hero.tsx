"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

const navLinks = ["O inwestycji", "Mieszkania", "Lokalizacja", "Kontakt"];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-cream flex flex-col overflow-hidden">
      {/* ── Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.1 }}
        className="w-full flex items-center justify-between py-6 px-8 md:px-12 absolute top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <div className="font-display font-bold text-[15px] tracking-wide text-ink uppercase leading-tight">
          Crocus<br />Hill
        </div>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-10 xl:gap-14 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="font-body font-medium text-[15px] text-ink/70 hover:text-ink transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <a
          href="#kontakt"
          className="hidden md:flex items-center gap-2.5 font-body font-medium text-[14px] text-ink border border-ink/20 px-5 py-2.5 hover:border-ink transition-colors duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Zadzwoń do nas
        </a>
      </motion.nav>

      {/* ── Main Content (Editorial Split) ── */}
      <div className="flex-1 flex items-center pt-32 pb-12 w-full max-w-[1800px] mx-auto px-8 md:px-12 relative z-10 mt-12 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ── Left: Typography & Conversion ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start relative z-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-gold" />
              <span className="font-body font-semibold text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-gold">
                Etap II — W sprzedaży
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-medium text-ink leading-[1.05] tracking-tight text-[clamp(42px,4vw,84px)] mb-6 md:mb-8 whitespace-nowrap">
              Znajdź swój dom<br />
              <span className="italic font-light font-serif text-ink/80 whitespace-normal">przy Jasnych Błoniach</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-body font-light text-[16px] md:text-[18px] leading-[1.6] text-ink/70 max-w-[480px] mb-10 md:mb-12">
              Zaprojektowane z myślą o tych, którzy nie uznają kompromisów. Odkryj przestrzeń, w której natura spotyka się z wielkomiejskim stylem życia.
            </p>

            {/* Conversion Area (CTA + Trust Indicator) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#kontakt"
                className="w-full sm:w-auto bg-ink text-cream font-body font-medium text-[15px] tracking-wide px-10 py-4 lg:py-5 border border-ink hover:bg-cream hover:text-ink transition-all duration-500 text-center"
              >
                Zapytaj o mieszkanie
              </motion.a>
              
              {/* Urgency / Status Indicator */}
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                <span className="font-body font-medium text-[13px] text-ink-muted">
                  200 mieszkań oddanych
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: The Architecture ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease, delay: 0.4 }}
            className="lg:col-span-7 relative h-[50vh] lg:h-full lg:min-h-[80vh] w-full flex items-center justify-end mt-12 lg:mt-0"
          >
            {/* Ghost Logo (Watermark) placed behind the building */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] opacity-15 pointer-events-none select-none -z-10">
              <Image
                src="/logo/logo_crocushill.webp"
                alt=""
                width={1200}
                height={1200}
                className="w-full h-auto object-contain invert opacity-60"
              />
            </div>

            {/* The Building Image */}
            <div className="relative w-full max-w-[1200px] lg:scale-[1.15] lg:translate-x-12 -translate-y-4 lg:-translate-y-6 origin-right drop-shadow-2xl">
              <Image
                src="/heroimg6.png"
                alt="Crocus Hill — osiedle przy Jasnych Błoniach, Szczecin"
                width={2000}
                height={1500}
                priority
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

