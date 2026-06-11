# SEO Action Plan — pianki-widula.pl

**Data:** 2026-06-11 | **Score bazowy:** 52/100 | **Cel:** 75/100

---

## CRITICAL — Napraw natychmiast (blokery indeksacji)

### C1. Napraw certyfikat SSL
**Wpływ:** KRYTYCZNY — bez tego żadna inna praca SEO nie ma sensu  
**Plik:** konfiguracja serwera / hosting panel  
**Działanie:** Odnów lub wymień certyfikat TLS pokrywający `pianki-widula.pl` AND `www.pianki-widula.pl`  
**Weryfikacja:** `curl -I https://pianki-widula.pl` powinien zwrócić 200, nie SSL error

### C2. Wymuś reindeksację po naprawie SSL
**Pliki:** Google Search Console  
**Działanie:**
1. Dodaj pianki-widula.pl do Google Search Console
2. Prześlij sitemap: `https://pianki-widula.pl/sitemap.xml`
3. Użyj URL Inspection na `/` i kliknij "Request indexing"
4. Monitoruj crawl errors przez 7-14 dni

### C3. Napraw godziny pracy — sobota (bug w kodzie)
**Wpływ:** Data integrity — 3 źródła mówią różne rzeczy  
**Plik:** `src/components/contact/Contact.tsx`  
**Działanie:**

```tsx
// ZMIEŃ (linia ~25):
const HOURS = [
  { day: "Poniedziałek - Piątek", hours: "08:00 - 16:00" },
  { day: "Sobota",                hours: "08:00 - 13:00" },  // ← zmień null na ten string
  { day: "Niedziela",             hours: null },
];
```

Potem zaktualizuj **wszystkie 3 źródła**:
1. ✅ `Contact.tsx` HOURS array (powyżej)
2. `layout.tsx` — dodaj sobotę do `openingHoursSpecification` w JSON-LD
3. `public/llms.txt` — już poprawne (`sob 08:00–13:00`), nie zmieniaj

---

## HIGH — Napraw w ciągu tygodnia

### H1. Zaktualizuj JSON-LD LocalBusiness
**Plik:** `src/app/layout.tsx`  
**Dodaj:** `image`, `geo`, `sameAs`, `priceRange`, `legalName`, `logo`, `@id`, `addressRegion`, sobota w hours

Patrz: pełny JSON-LD w `FULL-AUDIT-REPORT.md` sekcja 4.4.

> Przed wdrożeniem: zweryfikuj koordynaty `geo` z URL embeda w `Map.tsx`.  
> Obraz: użyj `/logo.png` jeśli `/assets/og_image.png` nie istnieje.

### H2. Dodaj `VideoObject` schema
**Plik:** `src/app/layout.tsx` lub `src/components/products/ProductionVideo.tsx`  
**Warunek:** Najpierw uzyskaj faktyczną datę przesłania video (`git log --follow -- public/assets/proces-produkcji.mp4`)  
**Działanie:** Dodaj drugi blok `<script type="application/ld+json">` z VideoObject (patrz raport sekcja 4.3)

### H3. Wgraj video na YouTube
**Wpływ:** Najwyższa korelacja z cytowalnością przez AI (~0.737)  
**Plik:** `src/components/products/ProductionVideo.tsx` (po wgraniu)  
**Działanie:**
1. Wgraj `public/assets/proces-produkcji.mp4` na YouTube
2. Tytuł: "Bezpyłowe cięcie CNC pianek tapicerskich - Widuła Kamyk Częstochowa"
3. Zamień lokalny `<video>` na `<iframe>` YouTube embed
4. Dodaj URL YouTube do `sameAs` w JSON-LD
5. Zaktualizuj VideoObject.contentUrl na YouTube URL

### H4. Napraw "use client" w Hero
**Plik:** `src/components/hero/Hero.tsx`  
**Działanie:** Usuń `"use client"` z pierwszej linii — Hero nie używa żadnych hooków ani event handlerów. Redukuje JS bundle, poprawia FCP/TTI.

### H5. Rozszerz robots.ts o AI crawlers
**Plik:** `src/app/robots.ts`  

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://pianki-widula.pl/sitemap.xml",
  };
}
```

### H6. Zmień email na domenowy
**Wpływ:** Zaufanie B2B — `piankapianka@vp.pl` słabo wygląda w kontekście firmowym  
**Działanie:**
1. Utwórz `kontakt@pianki-widula.pl` (Resend obsługuje własne domeny)
2. Zmień w: `Contact.tsx`, `layout.tsx` JSON-LD, `Footer.tsx`, `api/contact/route.ts`, `llms.txt`

### H7. Dodaj FAQ section
**Wpływ:** +content depth, FAQPage schema, AI citability, B2B conversions  
**Plik:** Nowy `src/components/faq/FAQ.tsx` + wpis w `src/app/page.tsx`  
**Sugerowane pytania:**
```
1. Jakie formaty plików przyjmujecie do cięcia CNC? (DXF, PDF, ...)
2. Jaki jest minimalny wymiar lub minimalna ilość?
3. Jak długo trwa realizacja zamówienia?
4. Czy wysyłacie pianki w całej Polsce?
5. Jaka jest dokładność / tolerancja cięcia CNC?
6. Czy realizujecie zamówienia jednostkowe i hurtowe?
7. Jakie pianki polecacie do materaców ortopedycznych?
8. Jak zamówić wkład na wymiar?
```

### H8. Dodaj właściciela do sekcji "O nas"
**Plik:** `src/components/about/About.tsx`  
**Działanie:** Dodaj 2-3 zdania z imieniem Jacek Widuła, latami pracy w branży, specjalizacją. Opcjonalnie zdjęcie.

---

## MEDIUM — Napraw w ciągu miesiąca

### M1. Napraw sitemap `lastModified`
**Plik:** `src/app/sitemap.ts`  

```ts
// PRZED:
lastModified: new Date()

// PO (użyj statycznej daty ostatniej edycji treści):
lastModified: new Date("2026-06-11")
```

### M2. Dodaj `WebSite` schema
**Plik:** `src/app/layout.tsx`  
Dodaj 3. blok `<script>`:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pianki-widula.pl/#website",
  "url": "https://pianki-widula.pl",
  "name": "Pianki Tapicerskie Widuła",
  "inLanguage": "pl-PL",
  "publisher": { "@type": "Organization", "@id": "https://pianki-widula.pl/#business" }
}
```

### M3. Dodaj referencje klientów
**Plik:** nowa sekcja w Offer lub WhyUs  
**Działanie:** 2-3 cytaty z branżą i nazwą firmy (bez pełnych danych osobowych jeśli B2B)

### M4. Dodaj specyfikacje techniczne pianek
**Plik:** `src/components/foam/FoamTypes.tsx`  
**Działanie:** Rozbuduj karty o gęstość (kg/m³) i twardość (kPa/Newton) dla każdego rodzaju

### M5. Popraw alt text w Applications
**Plik:** `src/components/applications/Applications.tsx`  
**Działanie:** Dodaj pole `alt` do danych `APPLICATIONS[]` zamiast generować z tytułu

### M6. Dodaj sygnał cenowy w Offer
**Plik:** `src/components/offer/Offer.tsx` i `OfferCard.tsx`  
**Działanie:** Przycisk "Zapytaj o wycenę" per karta lub tagline "Wycena indywidualna · Czas realizacji 2-5 dni roboczych"

### M7. Rozszerz llms.txt o FAQ i procesy
**Plik:** `public/llms.txt`  
**Działanie:** Dodaj sekcję `## Zamówienia i proces` z odpowiedziami na 6-8 pytań B2B (patrz H7)

### M8. Usuń nieużywane pliki z public/
**Pliki do usunięcia:**
```
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```
**Zmień nazwę:** `public/pianki sztaplowane.png` → `public/pianki-sztaplowane.png`

### M9. Spraw Google Business Profile
Jeśli nie ma: utwórz GBP na `business.google.com` dla adresu Kamyk.  
Po weryfikacji: dodaj URL GBP do `sameAs` w JSON-LD.

---

## LOW — Backlog

### L1. Popraw H2 headings (keyword optimization)
Kilka H2 jest generycznych — rozważ:
- "Pasja do pianki od lat" → "Pianki tapicerskie CNC - 15 lat doświadczenia"
- "Nasza oferta" → "Oferta cięcia CNC pianek tapicerskich"

### L2. Stwórz podstrony dla kategorii produktów
Największa architektonalna szansa SEO (ale wysokie nakłady):
- `/wykroje-bezpylowe` — "wykroje bezpyłowe CNC"
- `/wklady-7-strefowe` — "wkłady 7-strefowe profilowane"
- `/legowiska-dla-zwierzat` — nieoczekiwanie niszowa fraza z małą konkurencją

### L3. Dodaj `sameAs` dla branżowych katalogów
Firmania.pl, Cylex, PKT.pl, Aleo.com już mają wizytówki — dodaj ich URL do `sameAs[]` w JSON-LD.

### L4. Dodaj `Certification` schema
Po weryfikacji czy Schema.org Certification jest obsługiwane przez Google Rich Results (currently: no rich result, ale sygnał entity).

### L5. Napraw inconsistency rejestru PL
WhyUs karty: "twojego" → "Twojego" (lub "Państwa")

### L6. Preload LCP resource
Po rozwiązaniu SSL i indeksacji — sprawdź CWV w PageSpeed Insights i dodaj `<link rel="preload">` dla LCP resource.

---

## Podsumowanie priorytetów

```
TYDZIEŃ 1:  C1 SSL cert   C2 GSC reindex   C3 sobota bug
TYDZIEŃ 2:  H1 JSON-LD    H4 Hero client   H5 robots.ts
TYDZIEŃ 3:  H7 FAQ        H8 właściciel    H2 VideoObject
TYDZIEŃ 4:  H3 YouTube    H6 email         M1-M5
MIESIĄC 2:  M6-M9 + L1-L3
```

**Szacunkowy wynik po wdrożeniu Critical + High:** 68-72 / 100  
**Po wdrożeniu Medium:** 74-78 / 100
