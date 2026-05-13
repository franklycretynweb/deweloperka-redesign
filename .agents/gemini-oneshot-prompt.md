# ONE-SHOT PROMPT: Crocus Hill — Full Homepage Redesign
> Gotowy do wklejenia w Google AI Studio (Gemini 2.5 Pro)
> Temperatura: 1.0 | Max output: 65536 tokens | Thinking: ON

---

## JAK UŻYWAĆ

1. Otwórz https://aistudio.google.com
2. Wybierz model: **Gemini 2.5 Pro**
3. System instructions: wklej sekcję `[SYSTEM]`
4. User turn: wklej sekcję `[USER PROMPT]`
5. Temperature: 1.0, Max tokens: 65536, Thinking: enabled
6. Kliknij Run

---

## [SYSTEM]

You are an elite senior frontend engineer with 12 years of experience specializing in high-converting real estate developer websites in Central Europe. You have built award-winning (Awwwards SOTD) property websites and understand both pixel-perfect premium UI and the psychology of Polish homebuyers.

Your code is production-grade: semantic HTML, accessible, performant, mobile-first, fully typed TypeScript. You write components that look like they were designed by a luxury brand agency and coded by a principal engineer at Vercel. You never produce generic AI-looking output — every detail feels intentional and crafted.

You are obsessed with conversion rate optimization. You know that CTAs placed above the fold boost conversions by up to 84%. You know that personalized CTAs outperform generic ones by 202%. You know that 75% of real estate searches happen on mobile. You build for humans making the most important financial decision of their lives.

---

## [USER PROMPT]

Build me the complete, production-ready homepage for **Crocus Hill** — a premium residential development in Szczecin, Poland. This is a portfolio showcase piece demonstrating world-class frontend skills on a real Polish real estate project.

---

### TECH STACK (strict — do not change)

- **Next.js 16** App Router, TypeScript, `"use client"` only where needed
- **Tailwind CSS v4** with `@theme inline` (no config file, tokens defined in CSS)
- **Framer Motion 12** for all animations
- **react-map-gl 8 + mapbox-gl 3** for the map section
- **Local fonts** already configured in layout: `--font-display` (ClashDisplay), `--font-body` (Satoshi), and `BespokeSerif`, `Gambarino` loaded as CSS variables

Output format: **one file per component**. List every file path, then its full content. Start with globals.css additions if needed, then layout.tsx changes if needed, then page.tsx, then each component.

---

### EXISTING DESIGN SYSTEM (already in globals.css — use these exact tokens)

```css
--color-cream: #F5F0E8;       /* main background */
--color-cream-dark: #EDE6D6;  /* section alt background */
--color-ink: #2C2420;         /* primary text */
--color-ink-muted: #7A6E68;   /* secondary text */
--color-plum: #8B5E9E;        /* primary accent — USE THIS for CTAs */
--color-plum-light: #C4A8D4;  /* hover states */
--color-plum-pale: #EDE4F4;   /* subtle backgrounds */
--color-gold: #C9A96E;        /* premium accent — use sparingly */
```

**Typography rules:**
- Headlines: `font-[family-name:var(--font-display)]` (ClashDisplay) — tracking tight, weight 600–700
- Body: `font-[family-name:var(--font-body)]` (Satoshi) — weight 400–500
- Decorative serif accents: BespokeSerif or Gambarino — use for 1–2 word italic accents only
- Fluid type: use `clamp()` for all headline sizes
- Logo in nav: use `/public/logo/logo_crocushill.webp` as `<Image>` — it exists

---

### PROJECT FACTS (hardcoded data — use exactly)

```typescript
// Investment data
const investment = {
  name: "Crocus Hill",
  tagline: "Centrum bez kompromisów.",
  address: "ul. Jerzego Janosika 2, 2A, 3, 3A — Szczecin, Jasne Błonia",
  neighborhood: "Jasne Błonia",
  city: "Szczecin",
  coordinates: { lat: 53.4288, lng: 14.5522 }, // approximate Jasne Błonia
  stats: [
    { value: "100 m", label: "od Jasnych Błoni" },
    { value: "45–83 m²", label: "metraże mieszkań" },
    { value: "120 m²", label: "max ogród na parterze" },
    { value: "350", label: "łącznie mieszkań" },
  ],
  stages: [
    { name: "Etap I", buildings: "A i B", units: 100, status: "delivered", deliveryDate: "sierpień 2022" },
    { name: "Etap II", buildings: "C i D", units: 100, status: "delivered", deliveryDate: "styczeń 2024" },
    { name: "Etap III", buildings: "E", units: 150, status: "presale", deliveryDate: "wkrótce" },
  ],
  developer: {
    name: "Master House Sp. z o.o. Sp. K.",
    phone1: "+48 539 96 96 96",
    phone2: "+48 539 97 97 97",
    email: "office@master-house.com.pl",
    officeAddress: "ul. Lutniana 38/70, 71-425 Szczecin",
    hours: "Pn–Pt 08:00–16:00",
    website: "master-house.com.pl",
  },
}

// Available apartments (Etap II — currently on sale)
const apartments = [
  { id: "D.2.5", label: "Studio", rooms: 1, area: 45.2, floor: 2, price: 675265, pricePerSqm: 14940, status: "available", hasGarden: false, hasLoggia: true, pdfUrl: "https://quptos-web-data.sensevr.pl/..." },
  { id: "D.3.1", label: "Kompakt", rooms: 2, area: 52.8, floor: 3, price: 739200, pricePerSqm: 14000, status: "available", hasGarden: false, hasLoggia: true, pdfUrl: "..." },
  { id: "C.0.2", label: "Z ogródkiem", rooms: 2, area: 58.4, floor: 0, price: 818000, pricePerSqm: 14006, status: "reserved", hasGarden: true, hasLoggia: false, pdfUrl: "..." },
  { id: "D.1.3", label: "Rodzinny", rooms: 3, area: 67.1, floor: 1, price: 939000, pricePerSqm: 13994, status: "available", hasGarden: false, hasLoggia: true, pdfUrl: "..." },
  { id: "C.0.4", label: "Z ogrodem premium", rooms: 3, area: 72.0, floor: 0, price: 1008000, pricePerSqm: 14000, status: "sold", hasGarden: true, hasLoggia: false, pdfUrl: "..." },
  { id: "D.4.2", label: "Wysoki standard", rooms: 3, area: 74.5, floor: 4, price: 1043000, pricePerSqm: 14000, status: "available", hasGarden: false, hasLoggia: true, pdfUrl: "..." },
  { id: "D.2.7", label: "Duży 4-pok.", rooms: 4, area: 79.3, floor: 2, price: 1110000, pricePerSqm: 13997, status: "available", hasGarden: false, hasLoggia: true, pdfUrl: "..." },
  { id: "C.0.8", label: "Penthouse ogród", rooms: 4, area: 83.0, floor: 0, price: 1217892, pricePerSqm: 14673, status: "available", hasGarden: true, hasLoggia: false, pdfUrl: "..." },
]

// Testimonials
const testimonials = [
  { name: "Marta i Jakub K.", stage: "Etap I", quote: "Wybraliśmy Crocus Hill ze względu na lokalizację. Po dwóch latach mieszkamy tu i nie wyobrażam sobie, że mogliśmy trafić gdzie indziej. Szkoła dla córki 3 minuty pieszo, Jasne Błonia 5 minut.", rating: 5 },
  { name: "Tomasz W.", stage: "Etap II", quote: "Ogródek przy parterowym mieszkaniu w centrum miasta to coś, w co nie wierzyłem, że jest możliwe. Kupuję tu drugie mieszkanie — tym razem inwestycyjnie.", rating: 5 },
  { name: "Anna i Piotr M.", stage: "Etap I", quote: "Wykończenie pod klucz przez Lafrentz Home — to był strzał w dziesiątkę. Wprowadziliśmy się bez jednego dnia remontu. Polecam każdemu.", rating: 5 },
]

// Map POIs (for Mapbox)
const pois = [
  { name: "Jasne Błonia", type: "park", coords: [14.5508, 53.4295] },
  { name: "SP nr 10 (top szkoła w PL)", type: "school", coords: [14.5531, 53.4302] },
  { name: "Centrum handlowe Galaxy", type: "shopping", coords: [14.5556, 53.4265] },
  { name: "Urząd Marszałkowski", type: "landmark", coords: [14.5481, 53.4314] },
  { name: "Przychodnia Centrum", type: "health", coords: [14.5501, 53.4278] },
  { name: "Przystanek tramwajowy", type: "transport", coords: [14.5519, 53.4280] },
]
```

---

### PAGE ARCHITECTURE (build ALL of these sections in order)

Build a single `app/page.tsx` that imports and renders these components in sequence:

1. **`<Nav />`** — sticky, transparent→solid on scroll, logo image, 4 links + CTA button
2. **`<Hero />`** — fullscreen, building visualization, headline, subline, 2 CTAs, scroll indicator
3. **`<Stats />`** — 4 animated counters, visual dividers
4. **`<Inwestycja />`** — 2-column, photo + text, staged timeline with status badges
5. **`<Mieszkania />`** — apartment grid with FILTERS (rooms, area, price range, garden toggle), cards with legal-compliant price display
6. **`<Lokalizacja />`** — full-width Mapbox map + POI list + walking distance indicators
7. **`<Testimonials />`** — 3 testimonial cards, star ratings, animated entry
8. **`<Wspolpraca />`** — wykończenie pod klucz CTA block (Lafrentz Home partnership)
9. **`<Etap3 />`** — pre-sale capture form for Etap III ("Zapisz się na listę pierwszeństwa")
10. **`<Kontakt />`** — contact form + office info + embedded map
11. **`<Footer />`** — links, legal, social, copyright

---

### CRITICAL REQUIREMENTS (non-negotiable)

**LEGAL — Polish Developer Act 2025 (ustawa deweloperska):**
- Every apartment card MUST display: `cena całkowita brutto`, `cena za m² brutto`, status badge
- Status badge colors: `available` = green, `reserved` = amber, `sold` = red/strikethrough
- Price must use `Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 })`

**CONVERSION (implement all):**
- Sticky nav CTA button always visible: "Zadzwoń: 539 96 96 96" on mobile (tel: link), "Umów wizytę" on desktop
- Hero: primary CTA = "Zobacz dostępne mieszkania" (anchor to #mieszkania), secondary = "Umów wizytę w biurze" (anchor to #kontakt)
- Apartment cards: hover reveals "Zarezerwuj termin" button (NOT "Zapytaj o cenę" — prices are visible)
- Contact form: only 3 fields — imię, telefon, dropdown "Interesuję się" (Etap II/Etap III/Ogólne) — reduce friction
- Pre-sale form (Etap III): 2 fields — email, telefon — with "Powiadom mnie jako pierwszego"
- After testimonials section: place a conversion CTA block

**MOBILE-FIRST (all breakpoints):**
- Nav: hamburger menu on mobile (`<` lg), smooth slide-down drawer
- Apartment grid: 1 col mobile → 2 col tablet → 3 col desktop
- Hero headline: `clamp(40px, 8vw, 96px)`
- Map: 400px height mobile, 600px desktop
- All touch targets: minimum 44×44px

**ANIMATIONS (Framer Motion):**
- Nav: fade in on mount
- Hero: staggered entrance — image (0.2s), headline (0.4s), subline (0.6s), CTAs (0.8s)
- Stats: count-up animation on scroll entry (use `useInView`)
- Section reveals: `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- Apartment cards: stagger 0.05s per card
- Testimonials: horizontal scroll on mobile, grid on desktop
- Map POI markers: pulse animation (subtle CSS keyframe)

**TYPOGRAPHIC DETAILS:**
- Section eyebrows: ClashDisplay 300, uppercase, letter-spacing 0.2em, `--color-ink-muted`, 11–12px
- Section headlines: ClashDisplay 600–700, tight tracking, fluid size
- Decorative italic accent in 1 headline: use BespokeSerif for a single word (e.g., "Jasnych *Błoniach*")
- Body: Satoshi 400–500, 16–18px, line-height 1.6
- Price: ClashDisplay 600, ink color, monospaced-feel
- Numbers/stats: ClashDisplay 700, large, `--color-plum` accent

**VISUAL LANGUAGE:**
- Background: `--color-cream` main, `--color-cream-dark` for alternating sections
- Plum as primary accent: CTAs, active states, stat numbers, badges
- Gold (`--color-gold`) only for: premium badge on featured apartment, 1 decorative line/border
- Images: all use Next.js `<Image>` with proper `alt`, `priority` on hero
- Cards: `bg-white` with subtle `shadow-sm`, `rounded-2xl`, `border border-cream-dark`
- Section spacing: `py-24 lg:py-32` consistently
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`

---

### MIESZKANIA COMPONENT — detailed spec

```
Filters row (sticky within section):
  [Wszystkie] [1 pok.] [2 pok.] [3 pok.] [4 pok.]  |  Metraż: [slider 45–83]  |  [Z ogródkiem toggle]

Each ApartmentCard shows:
  ┌─────────────────────────────────┐
  │  [Photo — aspect-ratio 4/3]     │
  │  [STATUS BADGE top-right]       │
  ├─────────────────────────────────┤
  │  D.2.5                    [PDF] │
  │  Studio · 1 pok. · 2. piętro   │
  │  45,2 m²                        │
  │                                 │
  │  675 265 zł          brutto     │
  │  14 940 zł/m²                   │
  │                                 │
  │  [Loggia icon]  [Winda icon]    │
  │                                 │
  │  [Zarezerwuj termin →]  ← hover │
  └─────────────────────────────────┘

Legend below grid:
  🟢 Dostępne (X)   🟡 Zarezerwowane (X)   🔴 Sprzedane (X)
  * Ceny brutto zawierają VAT. Zgodnie z Ustawą Deweloperską z dnia 11.07.2025.
```

---

### NAV COMPONENT — detailed spec

```
Desktop (lg+):
  [LOGO img]    O inwestycji | Mieszkania | Lokalizacja | Kontakt    [Umów wizytę →]

Mobile (< lg):
  [LOGO img]                                               [☰ menu]

Mobile drawer (slide from top, full width):
  O inwestycji
  Mieszkania  
  Lokalizacja
  Kontakt
  ─────────────────
  📞 539 96 96 96
  [Umów wizytę →]

Nav behavior:
  - Transparent with white text over hero
  - After 80px scroll: bg-cream/95 backdrop-blur-md, ink text, shadow-sm
  - Active link: plum underline
  - Smooth transition 300ms
```

---

### LOKALIZACJA COMPONENT — Mapbox spec

```typescript
// Mapbox token placeholder — user will replace
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.YOUR_TOKEN_HERE"

// Map style — use a clean light style
const MAP_STYLE = "mapbox://styles/mapbox/light-v11"

// Initial view
const initialViewState = {
  longitude: 14.5522,
  latitude: 53.4288,
  zoom: 15.5,
}

// Custom marker for the investment
// POI markers with icons by category (use emoji or SVG inline icons)
```

Left side (40%): 
  - Section headline
  - Walking distance chips: "Jasne Błonia 2 min 🌳", "Szkoła SP10 4 min 🏫", "Centrum 5 min 🚶"
  - POI list grouped by category

Right side (60%):
  - react-map-gl Map, NavigationControl
  - Custom marker for Crocus Hill (plum pin)
  - Category markers for POIs

---

### HERO COMPONENT — content

```
Headline (2 lines, ClashDisplay 700):
  "Twój dom
   przy Jasnych *Błoniach*."
   (italic Błoniach = BespokeSerif inline)

Subline (Satoshi 400, ink-muted, max 65 chars/line):
  "350 mieszkań, 0 mikrometraży.
   Centrum Szczecina, zanim centrum stało się za drogie."

Primary CTA: "Zobacz dostępne mieszkania →" → #mieszkania
Secondary CTA: "Umów wizytę w biurze" → #kontakt

Bottom-left tag: "od 675 265 zł" (smallest starting price, formatted)
Bottom-right: "Etap I i II · gotowe do zamieszkania"

Hero image: /heroimg6.png — absolute positioned, fills right 60% of screen
Background: --color-cream
```

---

### CONTACT FORM — spec

Fields:
1. Imię (text, required)
2. Telefon (tel, required, placeholder "+48 ___")
3. Interesuję się (select): "Mieszkania Etap II" | "Etap III — lista oczekujących" | "Wykończenie pod klucz" | "Informacje ogólne"

Submit button: "Chcę poznać szczegóły →" (plum bg, full width on mobile)

Below form:
- "Lub zadzwoń bezpośrednio: +48 539 96 96 96"
- "Odpiszemy w ciągu 24h roboczych"
- RODO micro-copy (1 line, ink-muted 12px)

Office info card (beside form on desktop):
- Address, hours, Google Maps link
- Small inline map or static map image

---

### WHAT NOT TO DO

- ❌ Do NOT use generic copy: "doskonała lokalizacja", "wysokiej jakości", "nowoczesne rozwiązania"
- ❌ Do NOT add shadcn/ui, radix, or any new dependencies — use only what's in package.json
- ❌ Do NOT use `useState` for things that can be CSS (hover states, accordion, etc.) — prefer CSS where possible
- ❌ Do NOT make CTAs say "Kontakt" or "Wyślij" — use the specific copy from specs above
- ❌ Do NOT create a cookie banner or any blocking overlay
- ❌ Do NOT use `overflow-hidden` on `<body>` or `<html>` — it breaks sticky elements
- ❌ Do NOT use `any` TypeScript type — fully type everything
- ❌ Do NOT put all code in page.tsx — one component per file
- ❌ Do NOT use Tailwind v3 syntax (`bg-[#color]` for non-theme values is fine, but prefer design tokens)

---

### PERFORMANCE REQUIREMENTS

- Hero image: `priority` prop on `<Image>`, `loading="eager"`
- All other images: lazy loading (default)
- Map: lazy import with `dynamic(() => import('./Mapa'), { ssr: false })`
- Framer Motion: import only what you use (`import { motion, useInView } from 'framer-motion'`)
- No console.logs in production code

---

### OUTPUT FORMAT

For each file, output:

```
// ═══════════════════════════════════════════════
// FILE: components/Hero.tsx
// ═══════════════════════════════════════════════

[full file content]
```

Output files in this order:
1. `app/globals.css` — only new additions/changes needed
2. `app/page.tsx` — imports all components, server component
3. `components/Nav.tsx`
4. `components/Hero.tsx`
5. `components/Stats.tsx`
6. `components/Inwestycja.tsx`
7. `components/Mieszkania.tsx` (includes ApartmentCard, FilterBar subcomponents)
8. `components/Mapa.tsx` (Mapbox, dynamic import wrapper)
9. `components/Testimonials.tsx`
10. `components/Wspolpraca.tsx`
11. `components/Etap3.tsx`
12. `components/Kontakt.tsx`
13. `components/Footer.tsx`
14. `types/index.ts` — shared TypeScript interfaces

After all code, add a section **"## Co wdrożyłem"** with:
- List of all implemented features
- Any deviations from spec and why
- What to do next (TODOs)

Begin. Think through the architecture first, then write each file completely. Do not truncate any file.

---

## DODATKOWE WARIACJE PROMPTU

### Wariant A — "Tylko Hero + Nav + Mieszkania" (szybszy output, mniej tokenów)
Zastąp sekcję PAGE ARCHITECTURE:
> Build only: Nav, Hero, Mieszkania (with filters and legal price display), and a minimal Footer. These are the highest-converting sections. Make them production-perfect.

### Wariant B — "Redesign z istniejącego kodu" (przerabiamy, nie piszemy od zera)
Dodaj na początku USER PROMPT:
> Here is the existing codebase. Refactor and extend it — do not rewrite from scratch. Preserve what works (Framer Motion patterns, data structures), fix what doesn't (missing #kontakt section, no price/m², no status badges, no mobile menu, plum color unused), and add what's missing.
> [wklej zawartość: Hero.tsx, Inwestycja.tsx, Mieszkania.tsx, globals.css]

### Wariant C — "Only the thing I'm stuck on" (debug mode)
> I'm building the Mieszkania component for Crocus Hill (Polish real estate). The filter system isn't working correctly — rooms filter and garden toggle conflict when combined. Here's my current code: [wklej]. Fix the filter logic, keep all existing styles, and ensure the price/m² badge is shown on every card per Polish Developer Act 2025 requirements.

---

## DLACZEGO TEN PROMPT DZIAŁA

**Zasady prompt engineeringu które tu zastosowałem:**

1. **Role + Expertise** — "elite senior frontend engineer, 12 years, Awwwards SOTD" → Gemini przyjmuje poziom eksperta, nie produkuje beginner code
2. **Rich Context upfront** — design system, istniejące komponenty, dane projektu → zero zgadywania, zero halucynacji w kolorach/nazwach
3. **Constraints as guardrails** — "no shadcn, no any type, no console.log" → eliminuję typowe AI-isms zanim się pojawią
4. **Specificity over vagueness** — każda sekcja ma dokładną specyfikację layoutu, copy, zachowania → model nie improwizuje
5. **Thinking model activation** — długi prompt z wieloma zależnościami zmusza Gemini 2.5 do wewnętrznego chain-of-thought → lepsza architektura
6. **Examples embedded** — ASCII art layouts, TypeScript interfaces, exact copy → few-shot w jednym prompcie
7. **Legal compliance as hard requirement** — obowiązek prawny to niepodważalny constraint, model go respektuje
8. **Anti-patterns explicit** — sekcja "WHAT NOT TO DO" eliminuje najczęstsze problemy z AI-generated frontend
9. **Output format defined** — "one file per component, FILE: header, then full content" → parseable, kompletny output
10. **Audience psychology baked in** — conversion stats (84% above fold, 202% personalized CTA) jako uzasadnienie decyzji → model rozumie "dlaczego", nie tylko "co"
