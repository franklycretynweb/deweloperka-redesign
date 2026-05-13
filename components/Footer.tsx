"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "O inwestycji", href: "#o-inwestycji" },
  { label: "Mieszkania",   href: "#mieszkania"   },
  { label: "Lokalizacja",  href: "#lokalizacja"  },
  { label: "Kontakt",      href: "#kontakt"      },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream">

      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-full origin-left"
        style={{ backgroundColor: "rgba(201,169,110,0.35)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-12 md:pb-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-28">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5"
          >
            <div className="mb-6">
              <Image
                src="/logo/logo_crocushill.webp"
                alt="Crocus Hill"
                width={240}
                height={90}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-body font-light text-[15px] text-cream/50 leading-[1.7] max-w-[300px]">
              Mieszkania przy Jasnych Błoniach w centrum Szczecina.
              45–83 m², bez mikrometraży, z ogrodami na parterze.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-10">
              <a
                href="https://www.facebook.com/profile.php?id=61554785673639"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-cream/15 flex items-center justify-center
                  hover:border-cream/40 hover:bg-cream/5 transition-all duration-200"
              >
                {/* Facebook icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-cream/60">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/master_house_deweloper/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-cream/15 flex items-center justify-center
                  hover:border-cream/40 hover:bg-cream/5 transition-all duration-200"
              >
                {/* Instagram icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-cream/60">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Nav column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-cream/35 mb-7">
              Nawigacja
            </p>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body font-light text-[15px] text-cream/65 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-4"
          >
            <p className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-cream/35 mb-7">
              Biuro sprzedaży
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-body font-light text-[15px] text-cream/65 leading-relaxed">
                ul. Lutniana 38/70<br />
                71-425 Szczecin
              </p>
              <a
                href="tel:+48539969696"
                className="font-body font-light text-[15px] text-cream/65 hover:text-cream transition-colors duration-200"
              >
                +48 539 96 96 96
              </a>
              <a
                href="mailto:office@master-house.com.pl"
                className="font-body font-light text-[15px] text-cream/65 hover:text-cream transition-colors duration-200"
              >
                office@master-house.com.pl
              </a>
              <p className="font-body font-light text-[13px] text-cream/35">
                Pn – Pt &nbsp;08:00 – 16:00
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <p className="font-body font-light text-[12px] text-cream/30 leading-relaxed">
            © {new Date().getFullYear()} Master House Sp. z o.o. Sp. K. &nbsp;·&nbsp;
            KRS: 0000438125 &nbsp;·&nbsp; NIP: 955-234-09-80
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body font-light text-[12px] text-cream/30 hover:text-cream/55 transition-colors duration-200"
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              className="font-body font-light text-[12px] text-cream/30 hover:text-cream/55 transition-colors duration-200"
            >
              RODO
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
