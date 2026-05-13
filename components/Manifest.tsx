"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, type TargetAndTransition } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MapboxMap = dynamic(() => import("./MapboxMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-cream-dark animate-pulse rounded-r-2xl" />
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

const categories: Category[] = ["Zieleń", "Edukacja", "Transport", "Zakupy", "Sport"];

const locationsData: Record<Category, { name: string; time: string; type: "pieszo" | "rowerem" | "samochodem"; lat: number; lng: number }[]> = {
  "Zieleń": [
    { name: "Jasne Błonia", time: "2 min", type: "pieszo", lat: 53.4398, lng: 14.5369 },
    { name: "Park Kasprowicza", time: "8 min", type: "pieszo", lat: 53.4442, lng: 14.5348 },
    { name: "Bulwary Odrzańskie", time: "12 min", type: "rowerem", lat: 53.4245, lng: 14.5620 },
  ],
  "Edukacja": [
    { name: "Przedszkole Publiczne nr 2", time: "5 min", type: "pieszo", lat: 53.4385, lng: 14.5390 },
    { name: "Szkoła Podstawowa nr 54", time: "10 min", type: "pieszo", lat: 53.4350, lng: 14.5320 },
    { name: "Uniwersytet Szczeciński", time: "15 min", type: "pieszo", lat: 53.4330, lng: 14.5450 },
  ],
  "Transport": [
    { name: "Przystanek Tramwajowy (Linie 1, 9)", time: "4 min", type: "pieszo", lat: 53.4370, lng: 14.5400 },
    { name: "Dworzec Główny PKP", time: "10 min", type: "samochodem", lat: 53.4180, lng: 14.5500 },
  ],
  "Zakupy": [
    { name: "Centrum Handlowe Galaxy", time: "15 min", type: "pieszo", lat: 53.4320, lng: 14.5550 },
    { name: "Lokalny ryneczek", time: "5 min", type: "pieszo", lat: 53.4410, lng: 14.5300 },
  ],
  "Sport": [
    { name: "Korty tenisowe", time: "7 min", type: "pieszo", lat: 53.4460, lng: 14.5310 },
    { name: "Basen Floating Arena", time: "8 min", type: "samochodem", lat: 53.4340, lng: 14.5580 },
  ],
};

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";


export default function Manifest() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("Zieleń");

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section className="relative bg-cream pt-24 pb-24 md:pt-40 md:pb-40 overflow-hidden z-20 border-t border-ink/5">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">
        
        {/* ── Top Manifest Part ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24 md:mb-40">
          {/* ── Left Content ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col xl:pr-12"
          >
            <span className="font-body font-semibold text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-gold mb-8 md:mb-12">
              Manifest Przestrzeni
            </span>
            
            <h2 className="font-display font-medium text-[clamp(36px,4vw,64px)] leading-[1.05] tracking-tight text-ink mb-12 md:mb-16">
              Zaprojektowaliśmy domy, nie <span className="italic font-light font-serif text-ink/70">jednostki inwestycyjne.</span>
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

          {/* ── Right Image (Keyhole Mask) ── */}
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
              className="relative w-full max-w-[700px] aspect-[3/4] mask-keyhole bg-ink/5 overflow-hidden transform-gpu"
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
            </motion.div>
          </motion.div>
        </div>

        {/* ── Umowny Separator ── */}
        <motion.div 
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
           className="w-full h-[1px] bg-ink/10 origin-left mb-16 md:mb-24" 
        />

        {/* ── Slider & Map Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* ── Slider (Left) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-ink/5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={sliderImages[currentSlide]}
                    alt={`Widok z mieszkania ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-cream/80 backdrop-blur-sm rounded-full flex items-center justify-center text-ink hover:bg-cream transition-colors shadow-sm"
                  aria-label="Poprzednie zdjęcie"
                >
                  <ArrowLeft size={20} strokeWidth={1.5} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-cream/80 backdrop-blur-sm rounded-full flex items-center justify-center text-ink hover:bg-cream transition-colors shadow-sm"
                  aria-label="Następne zdjęcie"
                >
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </div>
              
              {/* Pagination indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-cream scale-125' : 'bg-cream/40 hover:bg-cream/60'}`}
                    aria-label={`Przejdź do slajdu ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center px-2">
               <p className="font-body font-medium text-[14px] text-ink-muted tracking-wide uppercase">Wykończenie wnętrz</p>
               <p className="font-body font-light text-[14px] text-ink-muted">{currentSlide + 1} / {sliderImages.length}</p>
            </div>
          </motion.div>


          {/* ── Map (Right) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-ink/5 shadow-sm"
          >
            {/* Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar border-b border-ink/5 bg-cream/30">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-6 py-4 font-body font-medium text-[14px] transition-colors relative ${activeCategory === cat ? 'text-ink' : 'text-ink-muted hover:text-ink/80'}`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTab" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* List & Map Container */}
            <div className="flex flex-col lg:flex-row h-full min-h-[400px]">
              
              {/* List */}
              <div className="w-full lg:w-2/5 p-6 bg-cream/10 border-b lg:border-b-0 lg:border-r border-ink/5 flex flex-col gap-4 overflow-y-auto max-h-[300px] lg:max-h-none">
                <AnimatePresence mode="wait">
                  <motion.div
                     key={activeCategory}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 10 }}
                     transition={{ duration: 0.3 }}
                     className="flex flex-col gap-4"
                  >
                    {locationsData[activeCategory].map((loc, idx) => (
                      <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-ink/5 last:border-0 last:pb-0">
                        <div className="flex items-start gap-2">
                           <div className="mt-1 min-w-[8px] h-[8px] rounded-full bg-gold/70" />
                           <p className="font-body font-medium text-[15px] text-ink leading-snug">{loc.name}</p>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                           <span className="font-body font-light text-[13px] text-ink-muted">{loc.time} {loc.type}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mapbox — lazy loaded, ssr: false */}
              <div className="w-full lg:w-3/5 relative h-[300px] lg:h-auto bg-ink/5">
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

