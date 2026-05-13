"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20–120 m²", label: "ogrody na parterze" },
  { value: "100 m",     label: "od Jasnych Błoni"  },
  { value: "45–83 m²",  label: "żadnych mikrometraży" },
  { value: "3 min",     label: "do topowej szkoły" },
];

export default function StatsBar() {
  return (
    <div className="relative bg-cream w-full">

      {/* Górna kreska */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-full bg-ink/15 origin-left"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1400px] mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className="relative flex flex-col items-start justify-center
              px-8 md:px-10 lg:px-14 py-10 md:py-12"
          >
            {/* Vertical divider (nie na ostatnim) */}
            {i < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-ink/12" />
            )}
            {/* Mobile: poziomy divider na co drugiej */}
            {i % 2 === 0 && (
              <div className="md:hidden absolute bottom-0 left-6 right-6 h-[1px] bg-ink/12" />
            )}

            {/* Liczba */}
            <span className="font-display font-semibold text-[clamp(28px,3.5vw,52px)] tracking-tight text-ink leading-none mb-3">
              {stat.value}
            </span>

            {/* Label */}
            <span className="font-body font-medium text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-ink-muted">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Dolna kreska */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="h-[1px] w-full bg-ink/15 origin-left"
      />

    </div>
  );
}
