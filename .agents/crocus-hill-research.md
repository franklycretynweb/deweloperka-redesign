# Crocus Hill — Baza wiedzy projektowej
> Plik referencyjny dla wszystkich decyzji designerskich i copywritingowych.
> Ostatnia aktualizacja: maj 2026. Używać przy każdej nowej sekcji, komponencie lub tekście.

---

## 1. ANALIZA OBECNEJ STRONY crocushill.pl

### Struktura nawigacji (menu główne)
- O inwestycji
- Oferta mieszkań → Mieszkania Etap 1 / Etap 2 / Miejsca postojowe / Komórki lokatorskie
- Makieta 3D
- Dla klienta → Wykończenie pod klucz / Finansowanie
- Mapa osiedla
- Lokalizacja
- Galeria zdjęć
- O nas
- Kontakt

### CO DZIAŁA ✅
- **Wizualizacja architektoniczna jako hero** — nowoczesny budynek, czysty biały design, widoczna zieleń
- **Dwukolorowy CTA na hero** — dwa przyciski „ETAP 1 – zobacz mieszkania" i „ETAP 2 – zobacz mieszkania", fioletowe, kontrastowe
- **Logo z charakterem** — inicjały CH w szylcie, serif font, klasyczny feel
- **Podstrona „Dla klienta"** — wykończenie pod klucz z partnerem Lafrentz Home, konkretne widełki cenowe (1149–2769 zł/m²), wyróżnienie na tle konkurencji
- **Dane kontaktowe kompletne** — dwa numery telefonu, email, adres biura i inwestycji, godziny otwarcia, Google Maps
- **Opis inwestycji z konkretnymi danymi** — metraże 45–83 m², etapowanie (A+B / C+D / E), daty, liczba mieszkań
- **USP "brak mikrometraży"** — explicite wymieniony jako zaleta, świadome pozycjonowanie
- **Lokalizacja Jasne Błonia** — nazwana z dumą, wzmianka o "małym Paryżu", topowej szkole podstawowej

### CO NIE DZIAŁA ❌
- **Brak cen na stronie głównej** — od 11 września 2025 r. jawność cen jest OBOWIĄZKIEM PRAWNYM; ryzyko kary do 10% rocznego obrotu
- **Podstrony /galeria, /lokalizacja, /o-nas, /makieta-3d** — przy odczycie tekstowym zwracają tylko ekran zgody cookies, prawdopodobnie zbudowane w całości na JavaScripcie bez SSR; nieindeksowalne przez Google
- **Cookie banner blokuje content** — wyskakuje natychmiast nad fold, zasłania treść i wizualizację
- **Brak filtrów/wyszukiwarki mieszkań** — użytkownik nie może samodzielnie filtrować po metrażu, pokojach, piętrze, cenie
- **Brak statusów mieszkań** (dostępne/zarezerwowane/sprzedane) widocznych na listingu
- **Brak testimoniali/opinii klientów** — żaden element social proof na żadnej podstronie
- **Brak liczników / dowodów ukończonych etapów** — Etap I i II ukończone, a strona tego nie eksponuje
- **Brak widoków z góry / planu sytuacyjnego** — użytkownik nie wie gdzie dokładnie stoją budynki A–E
- **Copy na podstronie „Dla klienta"** — SEO-generyczny, pełen klisz ("Wierzymy, że każdy zasługuje na..."), nie pasuje do tonu reszty strony
- **Brak sekcji O Deweloperze z dowodem jakości** — Master House Sp. z o.o. Sp. K. — dla klienta to anonimowa spółka
- **Nawigacja zbyt rozbudowana** — 9 pozycji w menu + podmenu; brak jasnej hierarchii
- **Mobile UX nieznany** — podstrony /lokalizacja i /galeria renderują się przez JS, prawdopodobnie problemy mobilne
- **Blog** — wymieniony w nawigacji stopki, ale nie w głównym menu; nierozwinięty
- **Formularz kontaktowy** — podstawowy, bez propozycji wartości ("Odpiszemy w ciągu 24h", "Zadzwonimy dziś")
- **Etap III brak informacji** — "Informacje wkrótce" to stracona okazja na zbieranie leadów (formularz pre-sale)

### CZEGO BRAKUJE 🔴
- Kalkulator finansowania / zdolności kredytowej (lub link do partnera)
- Wirtualny spacer 3D / tour po mieszkaniu
- FAQ dla kupujących (proces zakupu, co zawiera cena, kiedy odbiór kluczy)
- Mapa z punktami usług w okolicy (szkoły, sklepy, komunikacja) — interaktywna
- Sekcja "Dlaczego warto kupić właśnie teraz" (argument rynkowy / antyobiekcyjny)
- Historia firmy / portfolio wcześniejszych realizacji dewelopera
- Zdjęcia prawdziwe (nie tylko wizualizacje) — ukończone etapy I i II już istnieją
- Licznik: ile mieszkań sprzedanych / ile zostało

---

## 2. RYNEK — KONTEKST SZCZECIN 2024/2025

### Ceny mieszkań (dane aktualne)
- Cena ofertowa nowe budownictwo: **~12 100–13 100 zł/m²** (dane NBP Q2 2024 + Otodom Analytics)
- Szczecin = **6. najdroższe miasto w Polsce** (Otodom Analytics 2024)
- Poziom porównywalny z Wrocławiem i Krakowem
- Rynek stabilny w 2025–2026, lekka stagnacja r/r
- Możliwa negocjacja: realny rabat 3–7%, czasem do 10%
- Śródmieście (okolica Jasnych Błoni) — **jedne z wyższych cen w mieście**

### Kontekst prawny (OBOWIĄZKOWE od 11.07.2025)
Ustawa o jawności cen (nowelizacja ustawy deweloperskiej):
- **Deweloper MUSI** publikować na stronie www: cenę brutto za m², cenę całkowitą lokalu z VAT, ceny pomieszczeń przynależnych, dodatkowe opłaty
- Status każdego lokalu: dostępny / zarezerwowany / sprzedany — z aktualizacją na bieżąco
- Historia zmian cen z datami
- Dane kontaktowe dewelopera, adres biura i inwestycji
- Codzienna aktualizacja + raportowanie do dane.gov.pl
- Kara: do **10% rocznego obrotu** za naruszenie
- **Strona Crocus Hill tego nie spełnia** — to krytyczne ryzyko

---

## 3. PROFIL KUPUJĄCEGO MIESZKANIE W SZCZECINIE

### Segment A: Para / Młoda rodzina (CORE TARGET — ok. 55% kupujących)
- Wiek: 28–38 lat
- Sytuacja: para po ślubie lub przed nim, pierwsze lub drugie wspólne M, dziecko w planach lub już jest
- Finansowanie: kredyt hipoteczny (80–90% przypadków), często z wsparciem rodziców na wkład własny
- Motywacja: stabilność, własne "M", lepsza szkoła dla dziecka, wyjście z wynajmu
- Co ich przyciąga w Crocus Hill: **lokalizacja (centrum, Jasne Błonia, topowa szkoła)**, ogródki parterowe, brak mikrometraży, zielone osiedle
- Główne obawy: cena całkowita (rata kredytu vs. czynsz), termin oddania, standard wykończenia, sąsiedztwo
- Jak szukają: Otodom → strona dewelopera → telefon; dużo porównują; decyzja 2–6 miesięcy
- Co buduje zaufanie: ukończone etapy, zdjęcia prawdziwe, opinie mieszkańców, przejrzyste ceny

### Segment B: Singiel / Singlowa para (ok. 25% kupujących)
- Wiek: 25–35 lat
- Sytuacja: stabilna praca (często IT, korporacja), wysoka zdolność kredytowa, nie chce płacić na czynsz
- Finansowanie: samodzielny kredyt lub wspólny z partnerem; część płaci gotówką
- Motywacja: inwestycja + własne M, centrum = wygoda życia bez auta, prestiż adresu
- Co ich przyciąga w Crocus Hill: lokalizacja Śródmieście, design budynku, "klimat" Jasnych Błoni
- Główne obawy: "czy inwestycja jest warta ceny?", "co z etapem III (sąsiedztwo)?", dostępność komunikacji
- Jak szukają: bardzo researchy online; porównują z rynkiem wtórnym; ważny jest design strony

### Segment C: Inwestor / Kupno pod wynajem (ok. 15% kupujących)
- Wiek: 35–55 lat
- Sytuacja: posiada kapitał lub kredyt inwestycyjny, kupuje jako lokatę lub pod wynajem
- Motywacja: zysk z wynajmu, stabilna lokata kapitału, centrum = wysoki czynsz najmu
- Co ich przyciąga: cena/metr vs. rynek, lokalizacja premium, gotowość do zamieszkania (etap I i II ukończone)
- Główne obawy: ROI, ryzyko pustostanu, koszty utrzymania, administracja
- Jak szukają: kalkulatory, porównanie stóp zwrotu, ważne dane twarde (cena, metraż, cena najmu)

### Segment D: Klient "upgradeowy" (ok. 5%)
- Zamiana starszego mieszkania na nowsze / większe
- Motywacja: standard, lokalizacja, dzieci, przestrzeń
- Zazwyczaj rozważny, długo decyduje, lubi oglądać osobiście

### Kluczowy insight demograficzny
> **70% wszystkich nabywców mieszkań w Polsce ma 25–44 lata.**
> Kupują pierwsze M w wieku ~30–34 lata, najczęściej poprzez kredyt hipoteczny.
> W Polsce silna kulturowa preferencja własności vs. najmu.

---

## 4. PSYCHOLOGIA KUPUJĄCEGO — CO DZIAŁA, CO NIE

### Czynniki budujące zaufanie (w kolejności ważności)
1. **Ukończone realizacje z prawdziwymi zdjęciami** — nie tylko wizualizacje
2. **Przejrzyste ceny** — brak cen = sygnał ostrzegawczy; "coś ukrywają"
3. **Opinie prawdziwych mieszkańców** — Google Reviews, cytaty z imionami
4. **Historia i wiarygodność dewelopera** — ile lat na rynku, ile mieszkań, kto stoi za spółką
5. **Jasny harmonogram** — daty, etapy, kiedy odbiór kluczy
6. **Lokalizacja udowodniona mapą** — nie opisem, lecz prawdziwą mapą z odległościami
7. **Responsywność i szybkość strony** — wolna strona = amatorski deweloper
8. **Komunikacja** — szybka odpowiedź (email/telefon) buduje zaufanie przed zakupem

### Główne obiekcje (i jak je zbijać)
| Obiekcja | Jak adresować na stronie |
|---|---|
| "Za drogo" | Kalkulator raty kredytowej, porównanie do rynku wtórnego, ROI dla inwestorów |
| "Czy to bezpieczne?" | Historia dewelopera, ukończone etapy, DFG/Mieszkaniowy Rachunek Powierniczy |
| "Kiedy klucze?" | Jasna oś czasu, status etapów, "Etap I i II już oddane" |
| "Co się buduje obok?" | Mapa osiedla docelowego, wizja całego kompleksu |
| "Czy coś jeszcze zostało?" | Live status lokali, "zostało X z Y mieszkań" |
| "Nie znam tej firmy" | Kim jesteśmy, ile lat, ile zbudowaliśmy, team |
| "Wykończenie będzie drogą gehienną" | Oferta pod klucz z konkretnymi cenami, gotowe pakiety |

### Co odstrasza na stronie
- Brak cen (podejrzenie zawyżania)
- Tylko wizualizacje bez zdjęć prawdziwych (czy budynek istnieje?)
- Brak opinii / testimoniali
- Wolne ładowanie
- Strona wyglądająca na sprzed 5 lat
- Skomplikowana nawigacja
- Nachalny formularz kontaktowy bez wartości
- Cookie banner zasłaniający treść

---

## 5. STANDARDY RYNKOWE — POLSKIE STRONY DEWELOPERSKIE

### Must-have (standard rynkowy 2025)
- [ ] Wyszukiwarka/filtr mieszkań (metraż, pokoje, piętro, cena, status)
- [ ] Karty lokali z rzutem, metrażem, ceną, statusem
- [ ] Interaktywny plan osiedla / mapa budynków
- [ ] Galeria zdjęć (wizualizacje + prawdziwe)
- [ ] Formularz kontaktowy + dane biura sprzedaży
- [ ] Responsywność mobilna
- [ ] Mapa lokalizacji z punktami POI
- [ ] Ceny brutto (obowiązek prawny od 11.07.2025)
- [ ] Status lokali na bieżąco
- [ ] Informacje o deweloperze / spółce

### Nice-to-have (wyróżniają najlepsze)
- Wirtualny spacer 3D / tour po mieszkaniu
- Kalkulator kredytowy / raty
- Chatbot / live chat
- Blog z treściami lifestyle i poradnikami
- Video z budowy / timelapse
- Program lojalnościowy / polecenie znajomego
- Integracja z CRM (auto-lead nurturing)
- Porównywarka mieszkań (dodaj do porównania)
- Historia zmian cen (transparentność)
- Widok z okna (wizualizacja ze szczególnego piętra)

### Co większość robi źle (błędy rynkowe)
1. Ukrywanie cen ("zapytaj o cenę") — tracą klientów, którzy nie dzwonią
2. Brak mobilnego UX — ponad 60% ruchu z mobile
3. SEO-generyczne teksty zamiast prawdziwego copy
4. Brak social proof — żadnych opinii, jakby klientów nie było
5. Slow loading — JS-heavy bez SSR
6. Zdjęcia tylko wizualizacje — brak dowodów wykonania
7. Skomplikowane menu zamiast jasnej ścieżki do oferty
8. Brak FAQ — kupujący dzwonią z pytaniami, które mogłyby być na stronie

---

## 6. ZAGRANICZNE BENCHMARKI — CO ROBIĄ NAJLEPSI

### Trendy premium real estate (Europa, 2024)
- **Minimalistyczny design z dużymi zdjęciami** — białe tła, dużo white space, typografia jako element designu
- **Video hero** — krótki pętlowy film z wnętrz lub okolicy zamiast statycznej wizualizacji
- **Storytelling jako architektura strony** — scrollowanie jako narracja: "poznaj dzielnicę → wejdź do budynku → obejrzyj mieszkanie → wyobraź sobie swoje życie"
- **Interaktywne plany pięter** — kliknij na piętro, wybierz lokal, obejrzyj rzut
- **Lifestyle > spec sheet** — zdjęcia ludzi, kawy, spaceru, parku, nie tylko ścian i podłóg
- **Social proof na wczesnym etapie** — "X rodzin już wybrało swoje M"
- **Sticky CTA** — przycisk kontaktu/rezerwacji zawsze widoczny podczas scrollowania
- **Personalizacja** — "Dla rodziny / Dla singla / Dla inwestora" jako ścieżki na stronie

### Kluczowe wzorce UX (international best practice)
- **F-pattern dla stron tekstowych, Z-pattern dla stron wizualnych** — homepage Crocus Hill to Z-pattern
- **CTAs above the fold** — boost konwersji do 84%
- **Kontrast przycisków** — zmiana koloru CTA może podnieść CTR o 32%
- **Personalized CTAs** — "Umów spotkanie w biurze" > "Kontakt" (+202% skuteczności)
- **Testimonials po sekcji oferty** — naturalny flow: "widzę co oferują → weryfikuję czy warto zaufać"
- **Form friction reduction** — mniej pól = więcej konwersji; imię + telefon wystarczy
- **Trust badges** — certyfikaty, lata na rynku, liczba oddanych mieszkań

---

## 7. UX WZORCE — CUSTOMER JOURNEY

### Typowa ścieżka kupującego mieszkanie (desktop)
1. **Odkrycie** (Otodom/Google/social) → trafienie na stronę
2. **Pierwsze 3 sekundy** — ocena wizualna: czy to wygląda poważnie? Czy jest cennik?
3. **Filtrowanie oferty** — sprawdzenie dostępnych mieszkań przez wyszukiwarkę/filtry
4. **Deep-dive na konkretny lokal** — rzut, metraż, cena, piętro, widok, loggia/ogródek
5. **Weryfikacja dewelopera** — "Kim są ci ludzie? Czy mają ukończone projekty?"
6. **Lokalizacja** — mapa, co jest w okolicy, jak dojadę do pracy
7. **Sprawdzenie finansowania** — "Stać mnie? Jaka rata?"
8. **Kontakt** — telefon lub formularz, ale dopiero po przejściu powyższych kroków

### Mobile journey (inna kolejność)
1. Foto/video hero → emocja
2. Ceny i dostępność
3. Lokalizacja na mapie
4. Kliknięcie w numer telefonu (nie formularz)

### Kluczowe momenty konwersji
- Widok pierwszego rzutu mieszkania z ceną = moment kwalifikacji
- Mapa z zaznaczoną odległością od szkoły/centrum = moment wyobrażenia sobie życia
- Opinia prawdziwego mieszkańca = przełamanie oporu przed "nieznanym deweloperem"
- Kalkulator raty = przejście od "chcę" do "mogę"

---

## 8. SEKCJE HOMEPAGE — MUST-HAVE vs NICE-TO-HAVE

### MUST-HAVE (bez tego strona nie sprzedaje)
| Sekcja | Cel | Priorytet |
|---|---|---|
| **Hero** — wizualizacja + hasło + CTA | Pierwsze wrażenie, retencja | 🔴 Krytyczny |
| **Szybkie kluczowe fakty** — metraże, etapy, lokalizacja | Szybka kwalifikacja | 🔴 Krytyczny |
| **Wyszukiwarka / lista mieszkań** — z filtrami i cenami | Konwersja | 🔴 Krytyczny |
| **Lokalizacja** — interaktywna mapa z POI | Weryfikacja lokalizacji | 🔴 Krytyczny |
| **O inwestycji / etapy** — harmonogram, ukończone etapy | Zaufanie do terminów | 🔴 Krytyczny |
| **Kontakt / CTA do biura** — sticky lub sekcja końcowa | Lead generation | 🔴 Krytyczny |
| **Social proof** — opinie, liczba sprzedanych lokali | Przełamanie oporu | 🟠 Wysoki |
| **O deweloperze** — historia, portfolio, liczby | Trust | 🟠 Wysoki |

### NICE-TO-HAVE (wyróżniają od konkurencji)
| Sekcja | Cel | Priorytet |
|---|---|---|
| **Galeria / zdjęcia prawdziwe** ukończonych etapów | Dowód jakości | 🟡 Średni |
| **Wirtualny spacer 3D** | Angażowanie, wydłużenie sesji | 🟡 Średni |
| **Kalkulator raty** | Kwalifikacja finansowa | 🟡 Średni |
| **Lifestyle section** — "Twoje życie na Jasnych Błoniach" | Emocje, wyobrażenie | 🟡 Średni |
| **Wykończenie pod klucz** — teaser + CTA | Upsell | 🟡 Średni |
| **FAQ** | Redukcja obiekcji, SEO | 🟡 Średni |
| **Blog / aktualności z budowy** | Trust, SEO | 🟢 Niski |
| **Pre-sale Etap III** — lista zainteresowanych | Lead gen | 🟢 Niski |

---

## 9. BŁĘDY DO UNIKNIĘCIA W REDESIGNIE

### Błędy krytyczne (prawne i konwersyjne)
1. **Brak cen** — naruszenie prawa + utrata leadów; ceny muszą być jawne, z VAT, na bieżąco
2. **Brak statusów lokali** — obowiązek prawny + frustracja użytkownika
3. **Tylko wizualizacje bez prawdziwych zdjęć** — etapy I i II są ukończone, mamy się czym chwalić
4. **Cookie consent zasłaniający hero** — blokuje pierwsze wrażenie
5. **Strona nieindeksowalna** — treść ładowana przez JS bez SSR = niewidzialna dla Google

### Błędy UX
6. **Brak filtrów w ofercie mieszkań** — użytkownik musi przeglądać wszystko ręcznie
7. **Zbyt długa nawigacja** — 9 pozycji to za dużo; priorytetyzacja
8. **CTA bez wartości** — "Kontakt" zamiast "Sprawdź dostępne mieszkania"
9. **Formularz z za dużą liczbą pól** — wystarczy imię + telefon na pierwszym etapie
10. **Brak sticky CTA** — po zejściu ze strony głównej użytkownik gubi się

### Błędy wizerunkowe
11. **Anonimowy deweloper** — Master House Sp. z o.o. Sp. K. to spółka, nie marka; brak twarzy, historii
12. **Brak testimoniali** — jakby nikt nigdy nie kupił mieszkania w Crocus Hill
13. **SEO-generyczne copy** — "wierzymy że każdy zasługuje na..." nie buduje żadnej wartości
14. **Ton zbyt formalny w niektórych miejscach, zbyt casualowy w innych** — niespójna komunikacja

---

## 10. REKOMENDACJE COPY

### Pozycjonowanie marki
**Crocus Hill = centrum bez kompromisów**
- Nie "mieszkania w centrum" (wszyscy to mówią)
- Tak: "Centrum Szczecina, zanim centrum stanie się za drogie"
- Tak: "Jasne Błonia — dzielnica, która nic nie udaje"
- Tak: "Żaden mikrometraż. Żaden kompromis."

### Ton komunikacji
- **Pewny siebie, nie nachalny** — wiemy że oferta jest dobra, nie musimy przekonywać
- **Konkretny, nie ogólnikowy** — dane, liczby, fakty zamiast przymiotników
- **Bliski, nie korporacyjny** — "Twoje" nie "Państwa", ale z zachowaniem powagi
- **Lokalny z dumą** — Szczecin, Jasne Błonia, "mały Paryż" to atuty, nie przeprosiny za małe miasto
- **Transparentny** — ceny widoczne, harmonogram jasny, bez "cena do uzgodnienia"

### Kluczowe hasła (do testowania)
- "Twoje miejsce w centrum Szczecina"
- "Jasne Błonia. Twój adres na lata."
- "Od 45 do 83 m². Przestrzeń na prawdziwe życie."
- "Centrum, zieleń, cisza. Nie ma drugiego takiego miejsca."
- "Etap I i II sprzedane. Zostały ostatnie mieszkania Etapu II."
- "Mieszkasz tu od zaraz — Etap II gotowy do odbioru"

### Czego unikać w copy
- Klisz: "doskonała lokalizacja", "wysokiej jakości", "luksusowe", "nowoczesne", "dla wymagających"
- Ogólników: "inwestujemy w przyszłość", "każdy zasługuje na komfort"
- Pasywnego głosu: "mieszkania zostały zaprojektowane" → "zaprojektowaliśmy"
- Nadużywania wykrzykników
- Angielskich wtrąceń bez sensu w polskim tekście
- Ukrywania cen za formularzami
- Straszenia terminami i obowiązkowymi opłatami przed podaniem wartości

### Copy dla kluczowych CTA
| Element | Złe | Dobre |
|---|---|---|
| Hero button | "Sprawdź ofertę" | "Zobacz dostępne mieszkania" |
| Kontakt hero | "Kontakt" | "Umów wizytę w biurze" |
| Formularz | "Wyślij" | "Chcę poznać szczegóły" |
| Sticky CTA | "Kontakt" | "Zadzwoń: 539 96 96 96" |
| Pre-sale Etap III | — | "Zapisz się na listę pierwszeństwa" |

---

## 11. PRIORYTETOWA LISTA ZMIAN (do wdrożenia w redesignie)

### Sprint 1 — Prawne i krytyczne
- [ ] Jawność cen na każdej karcie lokalu (obowiązek prawny)
- [ ] Status lokali: dostępny / zarezerwowany / sprzedany
- [ ] Historia zmian cen (min. log)
- [ ] SSR/SSG dla wszystkich podstron (indexowalność)

### Sprint 2 — Konwersja
- [ ] Wyszukiwarka/filtry mieszkań
- [ ] Sticky CTA (telefon + umów wizytę)
- [ ] Social proof — sekcja opinii/testimoniali
- [ ] Hero z wyraźnym value proposition i ceną od...
- [ ] Uproszczenie nawigacji do max. 5–6 pozycji

### Sprint 3 — Trust & Wyróżnienie
- [ ] Sekcja "O deweloperze" z historią i liczbami
- [ ] Galeria zdjęć prawdziwych ukończonych etapów
- [ ] FAQ
- [ ] Kalkulator raty / link do partnera finansowego
- [ ] Pre-sale formularz dla Etapu III

### Sprint 4 — Premium
- [ ] Wirtualny spacer 3D
- [ ] Interaktywna mapa osiedla
- [ ] Lifestyle section ("Twoje życie na Jasnych Błoniach")
- [ ] Blog / aktualności z budowy
- [ ] Video hero

---

## 12. METRYKI DO ŚLEDZENIA PO REDESIGNIE

- Liczba wypełnionych formularzy kontaktowych
- Liczba kliknięć w numer telefonu (mobile)
- Czas na stronie (docel. > 2 min)
- Bounce rate (docel. < 50%)
- Strony/sesja (docel. > 3)
- Konwersja: wizyta → formularz (docel. 2–5%)
- Pozycja w Google na: "mieszkania Szczecin centrum", "Jasne Błonia mieszkania", "nowe mieszkania Szczecin"

---

*Plik stworzony na podstawie: analizy crocushill.pl, researchu rynku nieruchomości w Polsce i Szczecinie, analizy UX stron deweloperskich (PL i EU), badań demograficznych kupujących mieszkania w Polsce, regulacji prawnych (ustawa deweloperska 2025), benchmarku Murapol i standardów branżowych.*
