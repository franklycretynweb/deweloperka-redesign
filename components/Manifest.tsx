"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, type TargetAndTransition } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft, ArrowRight,
  Trees, TreePine, Waves,
  Baby, Award, BookOpen, GraduationCap,
  TramFront, TrainFront,
  ShoppingBag, ShoppingBasket,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

const MapboxMap = dynamic(() => import("./MapboxMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-cream-dark animate-pulse" />
  ),
});

// --- Dane ---

const sliderImages = [
  "/mieszkanie1.webp",
  "/mieszkanie2.webp",
  "/mieszkanie3.webp",
  "/mieszkanie4.webp",
];

type Category = "Zieleń" | "Edukacja" | "Transport" | "Zakupy" | "Sport";

// Tylko ikona per kategoria — zero dodatkowych kolorów
const categoryIcon: Record<Category, LucideIcon> = {
  "Zieleń":    Trees,
  "Edukacja":  GraduationCap,
  "Transport": TramFront,
  "Zakupy":    ShoppingBag,
  "Sport":     Dumbbell,
};

// Ikona dopasowana do konkretnego miejsca
const locationIconMap: Record<string, LucideIcon> = {
  "Jasne Błonia":                       Trees,
  "Park Kasprowicza":                   TreePine,
  "Bulwary Odrzańskie":                 Waves,
  "Przedszkole Publiczne nr 2":         Baby,
  "Szkoła Podstawowa nr 54":            BookOpen,
  "Szkoła Podstawowa nr 10":            Award,
  "Uniwersytet Szczeciński":            GraduationCap,
  "Przystanek Tramwajowy (Linie 1, 9)": TramFront,
  "Dworzec Główny PKP":                 TrainFront,
  "Centrum Handlowe Galaxy":            ShoppingBag,
  "Lokalny ryneczek":                   ShoppingBasket,
  "Korty tenisowe":                     Dumbbell,
  "Basen Floating Arena":               Waves,
};

const categories: Category[] = ["Zieleń", "Edukacja", "Transport", "Zakupy", "Sport"];

const locationsData: Record<Category, {
  name: string;
  time: string;
  type: "pieszo" | "rowerem" | "samochodem";
  lat: number;
  lng: number;
}[]> = {
  "Zieleń": [
    { name: "Jasne Błonia",       time: "2 min",  type: "pieszo",   lat: 53.4398, lng: 14.5369 },
    { name: "Park Kasprowicza",   time: "8 min",  type: "pieszo",   lat: 53.4442, lng: 14.5348 },
    { name: "Bulwary Odrzańskie", time: "12 min", type: "rowerem",  lat: 53.4245, lng: 14.5620 },
  ],
  "Edukacja": [
    { name: "Przedszkole Publiczne nr 2", time: "5 min",  type: "pieszo", lat: 53.4385, lng: 14.5390 },
    { name: "Szkoła Podstawowa nr 54",   time: "10 min", type: "pieszo", lat: 53.4350, lng: 14.5320 },
    { name: "Uniwersytet Szczeciński",   time: "15 min", type: "pieszo", lat: 53.4330, lng: 14.5450 },
  ],
  "Transport": [
    { name: "Przystanek Tramwajowy (Linie 1, 9)", time: "4 min",  type: "pieszo",     lat: 53.4370, lng: 14.5400 },
    { name: "Dworzec Główny PKP",                 time: "10 min", type: "samochodem", lat: 53.4180, lng: 14.5500 },
  ],
  "Zakupy": [
    { name: "Centrum Handlowe Galaxy", time: "15 min", type: "pieszo", lat: 53.4320, lng: 14.5550 },
    { name: "Lokalny ryneczek",        time: "5 min",  type: "pieszo", lat: 53.4410, lng: 14.5300 },
  ],
  "Sport": [
    { name: "Korty tenisowe",       time: "7 min", type: "pieszo",     lat: 53.4460, lng: 14.5310 },
    { name: "Basen Floating Arena", time: "8 min", type: "samochodem", lat: 53.4340, lng: 14.5580 },
  ],
};

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

export default function Manifest() {
  const [activeCategory, setActiveCategory] = useState<Category>("Zieleń");
  const [isKeyholeDone, setIsKeyholeDone] = useState(false);

  const CatIcon = categoryIcon[activeCategory];

  return (
    <section className="relative bg-cream pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden z-20 border-t border-ink/5">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">

        {/* ── Top Manifest Part ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-16 md:mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col xl:pr-12"
          >
            <h2 className="font-display font-medium text-[clamp(36px,4vw,64px)] leading-[1.05] tracking-tight text-ink mb-12 md:mb-16">
              Zaprojektowaliśmy domy, nie{" "}
              <span className="italic font-light font-serif text-ink/70">jednostki inwestycyjne.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body font-light text-[16px] md:text-[17px] leading-[1.8] text-ink/70">
                W czasach, gdy rynek nieruchomości kurczy się do mikrometraży, my wybieramy przestrzeń. Crocus Hill to odpowiedź na potrzebę prawdziwego, komfortowego życia w centrum miasta. Żadnych kompromisów, żadnych półśrodków.
              </p>
              <p className="font-body font-light text-[16px] md:text-[17px] leading-[1.8] text-ink/70">
                Każdy apartament został zaplanowany tak, by wpuszczać maksymalną ilość światła z widokiem na starodrzew Jasnych Błoni. To architektura, która szanuje swoich mieszkańców i historyczny kontekst najpiękniejszej dzielnicy Szczecina.
              </p>
            </div>
          </motion.div>

          {/* Right — Keyhole image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ maskSize: "100% 100%" } as TargetAndTransition}
              whileInView={{ maskSize: "2000% 2000%" } as TargetAndTransition}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.6, 0.05, 0.2, 1], delay: 0.8 }}
              onAnimationComplete={() => setIsKeyholeDone(true)}
              className="relative w-full max-w-[700px] aspect-[3/4] mask-keyhole bg-ink/5 overflow-hidden transform-gpu group"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: [0.6, 0.05, 0.2, 1], delay: 0.8 }}
                className="absolute inset-0 w-full h-full transform-gpu"
              >
                <Image
                  src="/bedroom.webp"
                  alt="Wnętrze apartamentu Crocus Hill"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <AnimatePresence>
                {isKeyholeDone && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-between p-4 md:p-6 pointer-events-none"
                  >
                    <button className="w-12 h-12 bg-cream/80 backdrop-blur-sm rounded-full flex items-center justify-center text-ink hover:bg-cream transition-colors shadow-sm pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Poprzednie">
                      <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>
                    <button className="w-12 h-12 bg-cream/80 backdrop-blur-sm rounded-full flex items-center justify-center text-ink hover:bg-cream transition-colors shadow-sm pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Następne">
                      <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-[1px] bg-ink/10 origin-left mb-12 md:mb-16"
        />

        {/* ── Text & Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left text — na mobile pierwszy, na desktop order-last */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 lg:order-last flex flex-col justify-center"
          >
            <h3 className="font-display font-medium text-[clamp(28px,3vw,44px)] leading-[1.2] text-ink mb-10">
              <span className="whitespace-nowrap">&ldquo;Szczecin ma wiele dzielnic.</span><br />
              <span className="italic font-light font-serif text-ink/70">Tylko jedna nazywa się Małym Paryżem.&rdquo;</span>
            </h3>
            <p className="font-body font-light text-[17px] md:text-[19px] leading-[1.8] text-ink/75 max-w-[500px]">
              Jasne Błonia to najbardziej urokliwa część centrum. Aleje lip, willowa zabudowa, cisza mimo centrum. 100 metrów stąd.
            </p>
          </motion.div>

          {/* Right map card — na desktop order-first (po lewej) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 lg:order-first flex flex-col bg-[#F5F0E8] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink/5"
          >
            {/* ── Tabs ── */}
            <div className="flex overflow-x-auto hide-scrollbar border-b border-ink/8 bg-[#F5F0E8]">
              {categories.map((cat) => {
                const Icon = categoryIcon[cat];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      flex-shrink-0 flex items-center gap-2.5 px-5 lg:px-6 py-4
                      font-body font-medium text-[14px] transition-all duration-200 relative
                      ${isActive ? "text-ink" : "text-ink/40 hover:text-ink/65"}
                    `}
                  >
                    {/* Tab icon */}
                    <span className={`
                      flex items-center justify-center w-[26px] h-[26px] rounded-lg transition-all duration-200
                      ${isActive ? "bg-ink" : "bg-ink/8"}
                    `}>
                      <Icon
                        size={13}
                        strokeWidth={2}
                        className={isActive ? "text-cream" : "text-ink/50"}
                      />
                    </span>
                    <span>{cat}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMapTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* List & Map */}
            <div className="flex flex-col md:flex-row h-[420px] lg:h-[500px]">

              {/* ── POI List ── */}
              <div className="w-full md:w-[42%] bg-white flex flex-col overflow-y-auto hide-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col divide-y divide-ink/5"
                  >
                    {locationsData[activeCategory].map((loc, idx) => {
                      const LocIcon = locationIconMap[loc.name] ?? CatIcon;
                      return (
                        <motion.div
                          key={loc.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.28, delay: idx * 0.06 }}
                          className="flex items-center gap-4 px-6 py-5 group hover:bg-ink/[0.025] transition-colors cursor-default"
                        >
                          {/* Icon — ink monochrome */}
                          <div className="
                            flex-shrink-0 flex items-center justify-center
                            w-11 h-11 rounded-xl bg-ink/6
                            group-hover:bg-ink/10 transition-colors duration-200
                          ">
                            <LocIcon
                              size={20}
                              strokeWidth={1.75}
                              className="text-ink/55 group-hover:text-ink/80 transition-colors duration-200"
                            />
                          </div>

                          {/* Name + mode */}
                          <div className="flex flex-col min-w-0">
                            <span className="font-body font-medium text-[15px] text-ink leading-snug truncate">
                              {loc.name}
                            </span>
                            <span className="font-body font-light text-[13px] text-ink/40 mt-0.5">
                              {loc.type}
                            </span>
                          </div>

                          {/* Time — right-aligned, minimal */}
                          <div className="ml-auto flex-shrink-0">
                            <span className="font-display font-medium text-[14px] text-ink/60 tabular-nums">
                              {loc.time}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Mapbox ── */}
              <div className="w-full md:w-[58%] relative h-full border-l border-ink/5">
                <MapboxMap
                  locations={locationsData[activeCategory]}
                  mapboxToken={mapboxToken}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
