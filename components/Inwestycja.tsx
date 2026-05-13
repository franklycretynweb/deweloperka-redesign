"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const lineAnim: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Inwestycja() {
  return (
    <section id="inwestycja" className="relative bg-cream pt-10 md:pt-16 pb-24 md:pb-48 overflow-hidden z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ── Eyebrow ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <div className="w-12 h-[1px] bg-ink-muted/50" />
          <span className="font-display font-semibold text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-ink-muted">
            O inwestycji
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full"
        >
          <h2 className="font-display font-semibold text-[9vw] md:text-[7vw] lg:text-[6vw] xl:text-[5.5vw] leading-[0.95] tracking-[-0.03em] text-ink">
            <div className="overflow-hidden pb-2 md:pb-4">
              <motion.div variants={fadeUp}>Sto metrów od Jasnych Błoni.</motion.div>
            </div>
            <div className="overflow-hidden pb-2 md:pb-4 lg:ml-[15vw]">
              <motion.div variants={fadeUp} className="text-ink/40">
                Własny ogród w centrum miasta.
              </motion.div>
            </div>
          </h2>
        </motion.div>

        {/* ── Description + Decorative Element ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mt-20 md:mt-32"
        >
          {/* Zdjęcie inwestycji */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:block lg:w-[40%]"
          >
            <div className="relative w-[340px] h-[240px] rounded-2xl overflow-hidden ml-8">
              <Image
                src="/inwestycjaimg.webp"
                alt="Crocus Hill — inwestycja"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-[60%] lg:pr-8 flex justify-start lg:justify-end">
            <motion.p 
              variants={fadeUp} 
              className="font-body font-light text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.35] text-ink/80 text-left max-w-[650px] text-balance"
            >
              Budynek zaprojektowany tak, żeby cieszyć wyglądem za rok i za dwadzieścia lat. Bez kompromisów między tym, co ładne, a tym, co funkcjonalne.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Stats Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 md:mt-48 w-full"
        >
          {/* Top Line */}
          <motion.div variants={lineAnim} className="h-[1px] w-full bg-ink/20 origin-left" />

          {/* 
            Zmniejszamy poziomy padding (pr-4 zamiast pr-12 na tabletach), 
            aby zrobić więcej przestrzeni na fizycznie powiększone liczby!
          */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Stat 1 */}
            <motion.div variants={fadeUp} className="py-12 md:py-16 md:pr-4 lg:pr-8 xl:pr-10 relative flex flex-col justify-center overflow-hidden">
              <div className="font-display font-semibold text-[18vw] md:text-[4.5vw] lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[6.5rem] tracking-tight text-ink mb-3 md:mb-5 whitespace-nowrap">
                100 m
              </div>
              <div className="font-body font-medium text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-ink-muted uppercase tracking-[0.2em]">
                od Jasnych Błoni
              </div>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-ink/20" />
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-ink/20" />
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={fadeUp} className="py-12 md:py-16 md:px-4 lg:px-8 xl:px-10 relative flex flex-col justify-center overflow-hidden">
              <div className="font-display font-semibold text-[18vw] md:text-[4.5vw] lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[6.5rem] tracking-tight text-ink mb-3 md:mb-5 whitespace-nowrap">
                do 120 m²
              </div>
              <div className="font-body font-medium text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-ink-muted uppercase tracking-[0.2em]">
                ogród na parterze
              </div>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-ink/20" />
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-ink/20" />
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={fadeUp} className="py-12 md:py-16 md:pl-4 lg:pl-8 xl:pl-10 flex flex-col justify-center overflow-hidden">
              <div className="font-display font-semibold text-[18vw] md:text-[4.5vw] lg:text-[5vw] xl:text-[5.5vw] 2xl:text-[6.5rem] tracking-tight text-ink mb-3 md:mb-5 whitespace-nowrap">
                VIII 2022
              </div>
              <div className="font-body font-medium text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-ink-muted uppercase tracking-[0.2em]">
                Etap I oddany
              </div>
            </motion.div>
            
          </div>

          {/* Bottom Line */}
          <motion.div variants={lineAnim} className="h-[1px] w-full bg-ink/20 origin-left" />
        </motion.div>

      </div>
    </section>
  );
}
