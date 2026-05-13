"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

const SENSEVR_BASE =
  "https://masterhouse-szczecin-crocushill.sensevr.pl/investment/141";

interface ShowcaseUnit {
  id: number;
  label: string;
  displayName: string;
  area: number;
  roomCount: number;
  floor: number;
  cost: number;
  costPerM2: number;
  thumbnailUrl: string;
  planUrl: string;
}

const showcaseUnits: ShowcaseUnit[] = [
  {
    id: 16370,
    label: "Studio",
    displayName: "D.2.5",
    area: 46.57,
    roomCount: 1,
    floor: 2,
    cost: 675265,
    costPerM2: 14500,
    thumbnailUrl: "/mieszkanie1.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v4/CD/D.2.5.pdf",
  },
  {
    id: 6893,
    label: "Kompakt",
    displayName: "A.4.6",
    area: 46.01,
    roomCount: 2,
    floor: 4,
    cost: 736160,
    costPerM2: 16000,
    thumbnailUrl: "/mieszkanie2.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v1/A.4.6.pdf",
  },
  {
    id: 6895,
    label: "Otwarta kuchnia",
    displayName: "A.4.8",
    area: 51.94,
    roomCount: 2,
    floor: 4,
    cost: 805070,
    costPerM2: 15500,
    thumbnailUrl: "/mieszkanie3.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v1/A.4.8.pdf",
  },
  {
    id: 16356,
    label: "Z ogródkiem",
    displayName: "D.0.9",
    area: 54.36,
    roomCount: 2,
    floor: 0,
    cost: 869760,
    costPerM2: 16000,
    thumbnailUrl: "/mieszkanie4.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v4/CD/D.0.9.pdf",
  },
  {
    id: 6874,
    label: "Kompakt rodzinny",
    displayName: "A.2.9",
    area: 57.46,
    roomCount: 3,
    floor: 2,
    cost: 838916,
    costPerM2: 14600,
    thumbnailUrl: "/mieszkanie5.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v1/A.2.9.pdf",
  },
  {
    id: 6925,
    label: "Sypialnia master",
    displayName: "B.2.9",
    area: 65.04,
    roomCount: 3,
    floor: 2,
    cost: 858528,
    costPerM2: 13200,
    thumbnailUrl: "/mieszkanie6.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v1/B.2.9.pdf",
  },
  {
    id: 16306,
    label: "Przestronny",
    displayName: "C.1.3",
    area: 72.69,
    roomCount: 3,
    floor: 1,
    cost: 1126695,
    costPerM2: 15500,
    thumbnailUrl: "/mieszkanie7.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v4/CD/C.1.3.pdf",
  },
  {
    id: 6928,
    label: "Open plan",
    displayName: "B.3.3",
    area: 82.29,
    roomCount: 4,
    floor: 3,
    cost: 1217892,
    costPerM2: 14800,
    thumbnailUrl: "/mieszkanie8.webp",
    planUrl:
      "https://quptos-web-data.sensevr.pl/ver_2_3/C1/I141/S262/units_floorplan/v1/B.3.3.pdf",
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(price);
}

function UnitCard({ unit }: { unit: ShowcaseUnit }) {
  return (
    <div className="group relative flex flex-col shrink-0 w-[85vw] md:w-[45vw] lg:w-[380px] snap-start">
      {/* Image */}
      <div className="relative aspect-[4/5] w-full bg-cream-dark overflow-hidden">
        <Image
          src={unit.thumbnailUrl}
          alt={`Mieszkanie ${unit.displayName} — ${unit.label}`}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 380px"
        />

        {/* Label badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block font-body font-medium text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 bg-cream/90 text-ink">
            {unit.label}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 z-20">
          <a
            href="#kontakt"
            className="bg-white text-ink px-6 py-2.5 font-body text-[13px] font-medium tracking-wide hover:scale-105 transition-transform"
          >
            Zapytaj o cenę
          </a>
          {unit.planUrl && (
            <a
              href={unit.planUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 text-white px-6 py-2.5 font-body text-[13px] font-medium tracking-wide hover:bg-white/20 transition-colors"
            >
              Pobierz rzut PDF
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col pt-5 pb-2">
        {/* Label + name */}
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="font-display font-semibold text-[20px] md:text-[22px] text-ink tracking-tight">
            {unit.displayName}
          </h3>
          <span className="font-body text-[14px] text-ink/80 font-medium">
            {unit.label}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-ink/80 font-body text-[14px] font-medium mb-3">
          <span>{unit.roomCount} pok.</span>
          <span className="text-ink/40">·</span>
          <span>{unit.area} m²</span>
          <span className="text-ink/40">·</span>
          <span>piętro {unit.floor}</span>
        </div>

        {/* Price */}
        <span className="font-body font-medium text-[17px] md:text-[18px] text-ink tracking-tight">
          {formatPrice(unit.cost)}
        </span>
      </div>
    </div>
  );
}

export default function Mieszkania() {
  return (
    <section
      id="mieszkania"
      className="relative bg-cream pt-20 pb-20 md:pt-28 md:pb-28"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="block font-body font-medium text-[12px] tracking-[0.2em] uppercase text-ink-muted mb-5">
              Mieszkania
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-tight text-ink">
              Od 45 do 83 m².
            </h2>
            <p className="font-display font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-tight text-ink/60 mt-1">
              Osiem układów do wyboru.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="hidden md:flex items-center gap-2 text-ink-muted font-body text-[13px]">
            <span>Przeciągnij</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className="flex gap-5 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-1400px)/2+4rem))] pr-6 md:pr-12 pb-4 no-scrollbar"
      >
        {showcaseUnits.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </motion.div>

      {/* CTA — all apartments */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-14 md:mt-20 text-center"
      >
        <a
          href={SENSEVR_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-body font-semibold text-[13px] tracking-[0.12em] uppercase text-ink border border-ink/30 px-10 py-5 transition-all duration-300 hover:bg-ink hover:text-cream"
        >
          Wszystkie 200 mieszkań — makieta 3D
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
