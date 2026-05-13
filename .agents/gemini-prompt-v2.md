# Crocus Hill — Prompt v2 (od zera, bez powiązania z istniejącym kodem)
> AI Studio: Gemini 2.5 Pro | Temperature: 0.7 | Max tokens: 65536 | Thinking: ON

---

## STRATEGIA UŻYCIA

Ten prompt jest zoptymalizowany jako **Runda 1** — budujesz 5 najważniejszych konwersyjnie
sekcji najpierw, reszta w osobnych promptach. Nie proś o wszystko naraz.

**Runda 1** (ten prompt): Nav + Hero + Mieszkania + Kontakt + Footer
**Runda 2** (kolejny prompt): Stats + Inwestycja + Lokalizacja (Mapbox) + Testimonials
**Runda 3**: Wspolpraca + Etap3 + types + animacje

---

## [SYSTEM PROMPT]

You are a world-class frontend engineer and UI designer. You have spent 10 years building award-winning websites for premium European real estate developers — projects featured on Awwwards, CSS Design Awards, and covered in Dezeen. You understand conversion psychology deeply: you know that the average Polish homebuyer visits 8 websites before calling, that 75% arrive on mobile, and that a site that fails to show prices immediately loses 40% of visitors instantly.

You write code that is simultaneously beautiful, fast, and conversion-optimized. Your HTML is semantic. Your TypeScript has zero `any` types. Your animations feel crafted, not copied from a template. You never produce generic AI-looking output.

You are building a portfolio showcase for a senior frontend developer — this needs to look like it was built by someone who charges €15,000 for a project, not someone who used a template.

---

## [USER PROMPT — RUNDA 1]

Build the first 5 sections of a premium homepage for **Crocus Hill** — a residential development in Szczecin, Poland. This is a greenfield project. No existing code. Start from scratch with your best work.

---

### 1. TECH STACK

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-first config with `@theme inline`, no tailwind.config.js)
- **Framer Motion 12** for animations
- **next/font** or local fonts for typography
- **next/image** for all images

No additional UI libraries (no shadcn, no radix, no headlessui). Build everything custom.

---

### 2. DESIGN DIRECTION — READ THIS CAREFULLY

The feeling should evoke: **a luxury Scandinavian architecture studio that moved to Poland**. Think the editorial calm of a Wallpaper* magazine spread. Think the confidence of a Copenhagen property developer. Decidedly NOT a generic Polish developer site with purple buttons and Arial.

**Mood board in words:**
- Unhurried. Every element has room to breathe.
- Typographically driven. The headline is the hero, not just the photo.
- Warm cream, not cold white. Ink-dark, not jet-black.
- One strong accent color used surgically — not splashed everywhere.
- Photos support the typography, not the other way around.
- Feels like you're reading a premium magazine while shopping for an apartment.

**Color system (define in CSS @theme):**
```
cream:       #F5F0E8   /* page background */
cream-dark:  #EDE6D6   /* alternating sections */
ink:         #2C2420   /* primary text */
ink-muted:   #7A6E68   /* secondary text, labels */
plum:        #8B5E9E   /* ONE accent — CTAs only */
plum-light:  #C4A8D4   /* hover states */
plum-pale:   #EDE4F4   /* subtle tinted backgrounds */
gold:        #C9A96E   /* sparse premium accent — max 2 uses per page */
white:       #FFFFFF   /* card surfaces */
```

**Typography system:**
Use Google Fonts or system fonts that feel premium and editorial:
- **Display/Headlines**: `Playfair Display` (serif, dramatic, editorial) — or if you prefer sans: `DM Sans` at heavy weight
- **Body**: `Inter` or `DM Sans` at regular weight
- **Accent**: Consider one italic serif word in key headlines for personality

All headline sizes: `clamp()` for fluid scaling.
Letter spacing on headlines: tight (`-0.02em` to `-0.04em`).
Line height on headlines: `0.95` to `1.05`.

**Spacing philosophy:**
Section padding: `py-32 lg:py-40`. This is more than you think you need. Use it.
Content max-width: `max-w-7xl mx-auto px-6 lg:px-12`.
Card gaps: generous (`gap-6` to `gap-8`).

---

### 3. PROJECT DATA — USE EXACTLY AS PROVIDED

```typescript
// ─── INVESTMENT ────────────────────────────────────────────
const investment = {
  name: "Crocus Hill",
  tagline: "Centrum bez kompromisów.",
  subline: "350 mieszkań, 0 mikrometraży. Centrum Szczecina, zanim centrum stało się za drogie.",
  address: "ul. Jerzego Janosika 2–3A, Szczecin",
  neighborhood: "Jasne Błonia",
  distanceToCenter: "5 min pieszo",
  distanceToSchool: "3 min pieszo",
  highlights: [
    "100 m od Jasnych Błoni",
    "Brak mikrometraży — od 45 m²",
    "Ogródki do 120 m² na parterze",
    "Etap I i II już gotowe do odbioru",
  ],
}

// ─── DEVELOPER ─────────────────────────────────────────────
const developer = {
  name: "Master House",
  legalName: "Master House Sp. z o.o. Sp. K.",
  phone: "+48 539 96 96 96",
  email: "office@master-house.com.pl",
  officeAddress: "ul. Lutniana 38/70, 71-425 Szczecin",
  hours: "Pn–Pt 08:00–16:00",
  yearsActive: 10,
  completedProjects: 3,
  unitsDelivered: 200,
}

// ─── APARTMENTS (Etap II — w sprzedaży) ────────────────────
const apartments = [
  {
    id: "D.2.5",
    label: "Studio",
    badge: null,
    rooms: 1,
    area: 45.2,
    floor: 2,
    price: 675265,
    pricePerSqm: 14940,
    status: "available",  // "available" | "reserved" | "sold"
    hasGarden: false,
    hasLoggia: true,
    image: "/apartments/apt-studio.jpg",
  },
  {
    id: "D.3.1",
    label: "Kompakt",
    badge: null,
    rooms: 2,
    area: 52.8,
    floor: 3,
    price: 739200,
    pricePerSqm: 14000,
    status: "available",
    hasGarden: false,
    hasLoggia: true,
    image: "/apartments/apt-kompakt.jpg",
  },
  {
    id: "C.0.2",
    label: "Z ogródkiem",
    badge: "Ostatnie sztuki",
    rooms: 2,
    area: 58.4,
    floor: 0,
    price: 818000,
    pricePerSqm: 14006,
    status: "reserved",
    hasGarden: true,
    hasLoggia: false,
    image: "/apartments/apt-ogrodek.jpg",
  },
  {
    id: "D.1.3",
    label: "Rodzinny",
    badge: null,
    rooms: 3,
    area: 67.1,
    floor: 1,
    price: 939000,
    pricePerSqm: 13994,
    status: "available",
    hasGarden: false,
    hasLoggia: true,
    image: "/apartments/apt-rodzinny.jpg",
  },
  {
    id: "C.0.4",
    label: "Premium ogród",
    badge: "Wyróżnione",
    rooms: 3,
    area: 72.0,
    floor: 0,
    price: 1008000,
    pricePerSqm: 14000,
    status: "sold",
    hasGarden: true,
    hasLoggia: false,
    image: "/apartments/apt-premium.jpg",
  },
  {
    id: "D.4.2",
    label: "Wysoki standard",
    badge: null,
    rooms: 3,
    area: 74.5,
    floor: 4,
    price: 1043000,
    pricePerSqm: 14000,
    status: "available",
    hasGarden: false,
    hasLoggia: true,
    image: "/apartments/apt-wysoki.jpg",
  },
  {
    id: "D.2.7",
    label: "4-pokojowy",
    badge: null,
    rooms: 4,
    area: 79.3,
    floor: 2,
    price: 1110000,
    pricePerSqm: 13997,
    status: "available",
    hasGarden: false,
    hasLoggia: true,
    image: "/apartments/apt-4pok.jpg",
  },
  {
    id: "C.0.8",
    label: "Penthouse z ogrodem",
    badge: "Ostatni",
    rooms: 4,
    area: 83.0,
    floor: 0,
    price: 1217892,
    pricePerSqm: 14673,
    status: "available",
    hasGarden: true,
    hasLoggia: false,
    image: "/apartments/apt-penthouse.jpg",
  },
]
```

---

### 4. WHAT TO BUILD — RUNDA 1

Build these 5 components. One file each. Make them production-perfect.
The other sections come in the next prompt — don't rush, don't stub.

---

#### COMPONENT A: `components/Nav.tsx`

A sticky navigation that changes character on scroll.

**Behavior:**
- Over hero (scrollY < 80px): fully transparent background, white text, logo white
- After scroll: `bg-[--color-cream]/95 backdrop-blur-md`, ink text, thin bottom border, subtle shadow
- Transition: 300ms ease, smooth

**Desktop layout (lg+):**
```
[CROCUS HILL wordmark]    O inwestycji · Mieszkania · Lokalizacja · Kontakt    [Umów wizytę →]
```

**Mobile layout (< lg):**
```
[CROCUS HILL wordmark]                                                          [☰]
```

**Mobile drawer:**
- Slides down from top, full viewport width
- bg-cream, ink text
- Items: O inwestycji / Mieszkania / Lokalizacja / Kontakt
- Divider line
- Phone number: 539 96 96 96 (clickable tel: link)
- CTA button: "Umów wizytę"
- Animated: `AnimatePresence` + height/opacity transition

**CTA button (desktop):**
- Text: "Umów wizytę"
- Style: plum background, cream text, `px-5 py-2.5`, rounded-full
- Hover: plum-light bg, smooth transition

**Logo:**
- Text: "CROCUS HILL" in display font, uppercase, tracked
- Or use `/public/logo.svg` if it exists

**All nav links:** smooth scroll anchors (`#mieszkania`, `#kontakt`, etc.)

---

#### COMPONENT B: `components/Hero.tsx`

This is the make-or-break first impression. Take your time with it.

**Layout concept — split screen, typographic-led:**
```
┌─────────────────────────────────┬──────────────────────────────┐
│                                 │                              │
│  [small eyebrow text]           │                              │
│                                 │   [BUILDING PHOTO]           │
│  Twój dom                       │   absolute, fills right 55%  │
│  przy Jasnych                   │   of viewport height         │
│  Błoniach.                      │                              │
│                                 │                              │
│  [subline, 2 lines]             │                              │
│                                 │                              │
│  [CTA 1] [CTA 2]                │                              │
│                                 │                              │
│  ─────────────────────────      │                              │
│  od 675 265 zł   Etap II ·      │                              │
│                  gotowy         │                              │
└─────────────────────────────────┴──────────────────────────────┘
```

**Headline:**
- "Twój dom przy Jasnych Błoniach."
- Display font (Playfair Display or DM Sans Heavy), size: `clamp(52px, 7vw, 112px)`
- Line height: 1.0
- Color: ink
- One word in italic serif for personality — wrap "Błoniach" in `<em>` styled with Playfair Display italic
- Animates in: each line slides up from 20px with fade, staggered 0.15s

**Eyebrow (above headline):**
- "Szczecin · Jasne Błonia · Etap II w sprzedaży"
- 11px, uppercase, tracked 0.2em, ink-muted
- Subtle horizontal line before it

**Subline:**
- "350 mieszkań, 0 mikrometraży."
- "Centrum Szczecina, zanim centrum stało się za drogie."
- Satoshi/Inter 400, 18px, ink-muted, line-height 1.6
- max-width: 480px

**CTA 1 (primary):** "Zobacz dostępne mieszkania →"
- plum background, cream text
- `px-7 py-3.5`, rounded-full
- Hover: scale(1.02) + plum-light
- Links to `#mieszkania`

**CTA 2 (secondary):** "Umów wizytę w biurze"
- Outlined: border-ink, ink text
- Same size
- Links to `#kontakt`

**Bottom bar (pinned to hero bottom):**
- Left: "od 675 265 zł" — in display font, large
- Right: "Etap I i II · gotowe do zamieszkania"
- Divider line above
- Both in ink-muted / ink mix

**Image:**
- `src="/hero.jpg"` (placeholder path — use next/image with fill)
- Right side of the screen, absolutely positioned
- On mobile: full bleed below the text, 60vh height
- Priority, eager loading

**Background:** cream

**Scroll indicator:**
- Bottom center: small animated arrow or "↓ Scroll" text
- Fades out after 300px scroll (useScroll)

---

#### COMPONENT C: `components/Mieszkania.tsx`

The highest-converting section. This is where buyers qualify themselves.

**Legal requirement (non-negotiable):**
Every card MUST show:
- `cena całkowita brutto` (formatted with PLN, no decimals)
- `cena za m² brutto` (formatted)
- Status badge
- Note below grid: *"Ceny brutto zawierają VAT. Zgodnie z Ustawą Deweloperską z 11.07.2025."*

**Price formatting:**
```typescript
const formatPrice = (n: number) =>
  new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(n)
```

**Section header:**
- Eyebrow: "OFERTA MIESZKAŃ"
- Headline: "Od 45 do 83 m². Osiem układów." (split across 2 lines, editorial style)
- Subline: "Przefiltruj i znajdź swoje mieszkanie."

**Filter bar (sticky within section, `position: sticky, top: 72px`):**
```
Pokoje: [Wszystkie] [1] [2] [3] [4]     |     [🌿 Z ogródkiem]     |     Wyczyść filtry
```
- Pill buttons, plum when active, cream-dark bg when inactive
- Garden toggle: subtle animated switch
- Smooth filter with `AnimatePresence` + `layout` on grid
- Show count: "Wyświetlam 6 z 8 mieszkań"

**Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
Gap: `gap-6`

**ApartmentCard:**
```
┌──────────────────────────────┐
│ [image, aspect 4/3]          │
│ [STATUS BADGE — top right]   │
│ [BADGE label — top left]     │
├──────────────────────────────┤
│ D.2.5              [PDF ↓]   │
│ Studio                       │
│ 1 pok. · 2. piętro · 45,2 m²│
│                              │
│ 675 265 zł         brutto    │  ← display font, ink, prominent
│ 14 940 zł / m²               │  ← smaller, ink-muted
│                              │
│ [🏡 Ogródek] lub [🏗 Loggia] │
│                              │
│ ─────────────────────────    │
│ [Zarezerwuj termin →]        │  ← appears on hover, plum bg
└──────────────────────────────┘
```

**Status badges:**
- `available`: small green dot + "Dostępne"
- `reserved`: amber dot + "Zarezerwowane"
- `sold`: red dot + "Sprzedane" (card opacity 0.6, price strikethrough)

**Special badge (if apartment has `badge` property):**
- "Ostatnie sztuki" → plum background
- "Wyróżnione" → gold background
- "Ostatni" → plum background

**Hover state on card:**
- Subtle lift: `translateY(-4px)`, stronger shadow
- "Zarezerwuj termin →" button slides up from bottom

**Legend below grid:**
```
● Dostępne (5)    ● Zarezerwowane (1)    ● Sprzedane (1)
* Ceny brutto zawierają VAT. Zgodnie z Ustawą Deweloperską z dnia 11.07.2025.
```

---

#### COMPONENT D: `components/Kontakt.tsx`

**Layout (2 columns on desktop, stacked on mobile):**

Left column (55%): contact form
Right column (45%): office info card

**Form — friction-reduced to 3 fields only:**
1. `Imię` — text input, required
2. `Telefon` — tel input, placeholder "+48 ___", required
3. `Interesuję się` — styled select:
   - "Mieszkania Etap II — dostępne od zaraz"
   - "Etap III — chcę być na liście pierwszeństwa"
   - "Wykończenie pod klucz"
   - "Mam pytanie ogólne"

**Submit button:**
- Full width on mobile, auto on desktop
- Text: "Chcę poznać szczegóły →"
- plum background, cream text, `py-4`, rounded-full
- Loading state: spinner in button, text "Wysyłam..."
- Success state: green checkmark + "Odezwiemy się dziś!"

**Below button:**
- "Lub zadzwoń teraz: **+48 539 96 96 96**" (bold phone number, tel: link)
- "Odpowiemy w ciągu 24 godzin roboczych"
- RODO text (1 line, 12px, ink-muted)

**Right column — office card:**
- Cream-dark background, rounded-2xl, p-8
- Company: "Master House"
- Address: ul. Lutniana 38/70, Szczecin
- Hours: Pn–Pt 08:00–16:00
- Phone (clickable)
- Email (clickable)
- CTA: "Zobacz w Google Maps →" (external link icon)
- Small embedded static map image OR a placeholder with gradient bg showing location pin icon

---

#### COMPONENT E: `components/Footer.tsx`

**Layout:**
```
[CROCUS HILL wordmark]        [O inwestycji] [Mieszkania]      [539 96 96 96]
                              [Lokalizacja]  [Kontakt]         [office@...]
                              [Galeria]

─────────────────────────────────────────────────────────────────────────────
© 2025 Master House Sp. z o.o. Sp. K.  ·  Polityka prywatności  ·  RODO
```
- Background: ink (dark, inverts color)
- Text: cream and cream/60
- Logo in cream
- Subtle gold accent line at the top of footer (`border-t border-gold/30`)

---

### 5. ANIMATION SYSTEM

Implement these animation patterns consistently across all 5 components:

```typescript
// Reusable variants — define once, use everywhere
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}
```

- **Hero:** staggered entrance on mount — eyebrow (0s), line 1 (0.1s), line 2 (0.2s), subline (0.4s), CTAs (0.6s), bottom bar (0.8s)
- **All other sections:** `whileInView` + `viewport={{ once: true, margin: "-80px" }}`
- **Cards:** stagger with `custom={index}` prop, 0.05s between each
- **Nav mobile drawer:** `AnimatePresence` with height animation
- **Filter transitions:** Framer Motion `layout` prop on grid + `AnimatePresence` for removed cards
- **Form button states:** scale micro-interaction on hover/press

---

### 6. MOBILE-FIRST DETAILS

These are non-negotiable. Polish buyers are on mobile 70% of the time.

- **Nav:** hamburger 44×44px touch target minimum
- **Hero:** on mobile — text stacks above image, headline `clamp(40px, 10vw, 72px)`
- **Apartment cards:** single column on mobile, no hover-only content (show CTA button always below price on mobile)
- **Form:** full-width inputs, `font-size: 16px` minimum (prevents iOS zoom)
- **Contact form submit button:** full width on mobile
- **Footer:** single column on mobile

---

### 7. PERFORMANCE

- `<Image>` with `priority` and `loading="eager"` on hero only
- All other images: lazy (default next/image behavior)
- All animations: `will-change: transform` only where needed, not globally
- No unnecessary `useEffect` — prefer CSS where possible
- Form state: minimal `useState` (name, phone, interest, loading, success)

---

### 8. WHAT NOT TO DO

- ❌ Generic copy — no "doskonała lokalizacja", "nowoczesne rozwiązania", "wysokiej jakości"
- ❌ Tailwind classes on hover that could be CSS transitions
- ❌ `any` TypeScript type anywhere
- ❌ Bootstrap-looking cards (no thick colored header bars)
- ❌ Gradient hero backgrounds (use cream + photo, not gradients)
- ❌ CTAs that say "Wyślij", "Kontakt", "Kliknij tutaj"
- ❌ `overflow-hidden` on body or html element
- ❌ More than 2 font weights in any single component
- ❌ Fake "loading" spinners that spin forever
- ❌ Lorem ipsum anywhere — use the real copy provided
- ❌ Placeholder `#` hrefs — use proper anchors or `href="tel:+48539969696"`
- ❌ Console.logs in production code

---

### 9. OUTPUT FORMAT

Output one file at a time in this exact format:

```
// ════════════════════════════════════════════════
// FILE: app/globals.css
// Purpose: CSS custom properties, @theme tokens,
//          base styles, font imports
// ════════════════════════════════════════════════

[complete file content — never truncate]
```

Output order:
1. `app/globals.css` (fonts, @theme, base styles)
2. `app/layout.tsx` (metadata, font setup, body)
3. `app/page.tsx` (imports all 5 components)
4. `components/Nav.tsx`
5. `components/Hero.tsx`
6. `components/Mieszkania.tsx`
7. `components/Kontakt.tsx`
8. `components/Footer.tsx`

**After each file:** write one sentence: `✓ [filename] — [what it does in plain words]`

**After all files:** write a section called `## Architektura i decyzje` covering:
- Font choices and why
- Any assumptions made
- What's coming in Runda 2
- 3 things that could be improved with more context

---

### 10. BEFORE YOU START

Before writing any code, write 3 sentences:
1. The visual direction you're taking and why
2. Your biggest design decision in the Hero component
3. One thing in this prompt you're interpreting liberally

Then write the code. Do not truncate any file.
```

---

## RUNDA 2 PROMPT (użyj po ukończeniu Rundy 1)

```
Continue building the Crocus Hill homepage. The first 5 components 
(Nav, Hero, Mieszkania, Kontakt, Footer) are complete and look great.

Now build:
- components/Stats.tsx — 4 animated counter stats with dividers
- components/Inwestycja.tsx — 2-column about section with stage timeline
- components/Lokalizacja.tsx — Mapbox map + POI walking distances

Use the same design system, animation patterns, and code style as the 
existing components. Same spacing, same font usage, same hover behaviors.

[wklej tu kod z Rundy 1 jako kontekst]
```

---

## RUNDA 3 PROMPT

```
Final sections for Crocus Hill:
- components/Testimonials.tsx — 3 customer quotes, stars, animated
- components/Wspolpraca.tsx — "wykończenie pod klucz" partnership CTA block
- components/Etap3.tsx — pre-sale email capture for Stage III
- types/index.ts — all shared TypeScript interfaces

[wklej tu kod z Rundy 1+2]
```
