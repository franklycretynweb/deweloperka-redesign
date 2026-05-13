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

function roomsLabel(count: number): string {
  if (count === 1) return "1 pokój";
  if (count < 5) return `${count} pokoje`;
  return `${count} pokoi`;
}

function UnitCard({ unit, index }: { unit: ShowcaseUnit; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full bg-cream overflow-hidden">
        <Image
          src={unit.thumbnailUrl}
          alt={`Mieszkanie ${unit.displayName} — ${unit.label}`}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Label badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block font-body font-medium text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full bg-cream/90 text-ink">
            {unit.label}
          </span>
        </div>

        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px] z-20">
          <a
            href="#kontakt"
            className="bg-white text-ink px-6 py-2.5 rounded-full font-body text-[13px] font-medium tracking-wide hover:scale-105 transition-transform"
          >
            Zapytaj o cenę
          </a>
          {unit.planUrl && (
            <a
              href={unit.planUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/60 text-white px-6 py-2.5 rounded-full font-body text-[13px] font-medium tracking-wide hover:bg-white/20 transition-colors"
            >
              Pobierz rzut PDF
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 md:p-6 bg-white">
        {/* Name + price */}
        <div className="flex justify-between items-baseline gap-4 mb-4">
          <h3 className="font-body text-[15px] md:text-[16px] text-ink font-medium tracking-tight">
            {unit.displayName}
          </h3>
          <span className="font-body text-[15px] md:text-[16px] text-ink font-medium tracking-tight whitespace-nowrap">
            {formatPrice(unit.cost)}
          </span>
        </div>

        {/* Stats row — compact with icons */}
        <div className="flex items-center justify-between text-ink-muted">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
              <path d="M2 20V8l10-6 10 6v12" />
              <path d="M9 20V14h6v6" />
            </svg>
            <span className="font-body text-[12px]">{unit.roomCount} pok.</span>
          </div>

          <span className="text-ink/15">·</span>

          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
              <path d="M21 21H3V3" />
              <path d="M21 3v18" />
              <path d="M3 3h18" />
              <path d="M7 7h6v6H7z" />
            </svg>
            <span className="font-body text-[12px]">{unit.area} m²</span>
          </div>

          <span className="text-ink/15">·</span>

          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-60">
              <path d="M22 5v17H5" />
              <path d="M5 22V17H10V12H15V7H22" />
            </svg>
            <span className="font-body text-[12px]">p. {unit.floor}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Mieszkania() {
  return (
    <section
      id="mieszkania"
      className="relative bg-cream-dark pt-24 md:pt-32 pb-24 md:pb-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="block font-body font-medium text-[12px] tracking-[0.2em] uppercase text-ink-muted mb-5">
              Mieszkania
            </span>
            <h2 className="font-display font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-tight text-ink">
              Od 45 do 83 m².
            </h2>
            <p className="font-display font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-tight text-ink/30 mt-1">
              Osiem układów do wyboru.
            </p>
          </motion.div>
        </div>

        {/* Grid — 8 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {showcaseUnits.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} />
          ))}
        </div>

        {/* CTA — all apartments */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-16 md:mt-24 text-center"
        >
          <a
            href={SENSEVR_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body font-medium text-[13px] tracking-[0.12em] uppercase text-ink border border-ink/15 px-10 py-5 transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            Wszystkie 200 mieszkań — makieta 3D
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
