"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

type FormState = "idle" | "sending" | "sent";

const interests = [
  "Mieszkania Etap II — dostępne od zaraz",
  "Etap III — chcę być na liście pierwszeństwa",
  "Wykończenie pod klucz",
  "Mam pytanie ogólne",
];

export default function Kontakt() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    // Symulacja wysyłki — do podpięcia pod prawdziwy endpoint
    setTimeout(() => setState("sent"), 1200);
  };

  return (
    <section id="kontakt" className="relative bg-cream border-t border-ink/8">

      {/* Top separator line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-full bg-ink/15 origin-left"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-10 h-[1px] bg-ink-muted/50" />
            <span className="font-display font-semibold text-[11px] md:text-[13px] tracking-[0.2em] uppercase text-ink-muted">
              Kontakt
            </span>
          </motion.div>

          <motion.h2
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="font-display font-semibold text-[clamp(36px,5vw,80px)] leading-[0.97] tracking-tight text-ink"
          >
            Porozmawiajmy<br />
            <span className="italic font-light font-serif text-ink/50">o Twoim mieszkaniu.</span>
          </motion.h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* ── Form ── */}
          <motion.div
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            {state === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start gap-6 py-16"
              >
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-display font-medium text-[clamp(22px,2.5vw,36px)] text-ink leading-snug">
                  Dziękujemy.<br />Odezwiemy się dziś.
                </p>
                <p className="font-body font-light text-[16px] text-ink/55">
                  Możesz też zadzwonić bezpośrednio:{" "}
                  <a href="tel:+48539969696" className="text-ink font-medium hover:text-ink-muted transition-colors">
                    539 96 96 96
                  </a>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted">
                    Imię
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jak masz na imię?"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="
                      w-full bg-transparent border-b border-ink/20 py-4
                      font-body font-light text-[16px] text-ink placeholder:text-ink/30
                      focus:outline-none focus:border-ink transition-colors duration-200
                    "
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+48 ___ ___ ___"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="
                      w-full bg-transparent border-b border-ink/20 py-4
                      font-body font-light text-[16px] text-ink placeholder:text-ink/30
                      focus:outline-none focus:border-ink transition-colors duration-200
                    "
                  />
                </div>

                {/* Interest */}
                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted">
                    Interesuję się
                  </label>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, interest: item }))}
                        className={`
                          font-body text-[13px] px-4 py-2 border transition-all duration-200
                          ${form.interest === item
                            ? "bg-ink text-cream border-ink"
                            : "bg-transparent text-ink/60 border-ink/20 hover:border-ink/50 hover:text-ink"
                          }
                        `}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <motion.button
                    type="submit"
                    disabled={state === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="
                      bg-ink text-cream font-body font-medium text-[14px] tracking-wide
                      px-10 py-4 border border-ink
                      hover:bg-transparent hover:text-ink transition-all duration-400
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {state === "sending" ? "Wysyłam..." : "Chcę poznać szczegóły →"}
                  </motion.button>

                  <p className="font-body font-light text-[12px] text-ink/40 max-w-[260px] leading-relaxed">
                    Lub zadzwoń:{" "}
                    <a href="tel:+48539969696" className="text-ink/60 hover:text-ink transition-colors">
                      539 96 96 96
                    </a>
                    . Odpiszemy w ciągu 24h.
                  </p>
                </div>

                {/* RODO */}
                <p className="font-body font-light text-[11px] text-ink/30 leading-relaxed max-w-[520px]">
                  Administratorem danych jest Master House Sp. z o.o. Sp. K., ul. Lutniana 38/70, 71-425 Szczecin.
                  Dane przetwarzane są w celu odpowiedzi na zapytanie. Przysługuje Ci prawo dostępu, sprostowania
                  i usunięcia danych.
                </p>

              </form>
            )}
          </motion.div>

          {/* ── Office info ── */}
          <motion.div
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col gap-10 lg:pt-2"
          >
            {/* Divider top — desktop only */}
            <div className="hidden lg:block h-[1px] w-full bg-ink/10 mb-2" />

            <div className="flex flex-col gap-8">

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-ink/15">
                  <MapPin size={16} strokeWidth={1.5} className="text-ink/60" />
                </div>
                <div>
                  <p className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    Biuro sprzedaży
                  </p>
                  <p className="font-body font-light text-[15px] text-ink leading-relaxed">
                    ul. Lutniana 38/70<br />71-425 Szczecin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-ink/15">
                  <Clock size={16} strokeWidth={1.5} className="text-ink/60" />
                </div>
                <div>
                  <p className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    Godziny otwarcia
                  </p>
                  <p className="font-body font-light text-[15px] text-ink leading-relaxed">
                    Poniedziałek – Piątek<br />08:00 – 16:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-ink/15">
                  <Phone size={16} strokeWidth={1.5} className="text-ink/60" />
                </div>
                <div>
                  <p className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    Telefon
                  </p>
                  <a
                    href="tel:+48539969696"
                    className="font-body font-light text-[15px] text-ink hover:text-ink-muted transition-colors leading-relaxed block"
                  >
                    +48 539 96 96 96
                  </a>
                  <a
                    href="tel:+48539979797"
                    className="font-body font-light text-[15px] text-ink hover:text-ink-muted transition-colors leading-relaxed block"
                  >
                    +48 539 97 97 97
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-ink/15">
                  <Mail size={16} strokeWidth={1.5} className="text-ink/60" />
                </div>
                <div>
                  <p className="font-body font-medium text-[12px] uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    E-mail
                  </p>
                  <a
                    href="mailto:office@master-house.com.pl"
                    className="font-body font-light text-[15px] text-ink hover:text-ink-muted transition-colors"
                  >
                    office@master-house.com.pl
                  </a>
                </div>
              </div>

            </div>

            {/* Divider bottom */}
            <div className="h-[1px] w-full bg-ink/10 mt-2" />

            <p className="font-body font-light text-[13px] text-ink/40 leading-relaxed">
              Lokalizacja inwestycji:<br />
              ul. Jerzego Janosika 2, 2A, 3, 3A<br />
              71-424 Szczecin
            </p>

          </motion.div>

        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-full bg-ink/15 origin-left"
      />

    </section>
  );
}
