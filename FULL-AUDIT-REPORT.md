# SEO Audit Report — pianki-widula.pl

**Data audytu:** 2026-06-11  
**Metoda:** Analiza kodu (strona niedostępna przez HTTPS — patrz sekcja Krytyczne)  
**Stack:** Next.js 16.2.6 · React 19.2 · TypeScript 5 · Tailwind v4

---

## SEO Health Score: 52 / 100

| Kategoria | Waga | Wynik | Ważony |
|---|---|---|---|
| Technical SEO | 22% | 35/100 | 7.7 |
| Content Quality | 23% | 63/100 | 14.5 |
| On-Page SEO | 20% | 70/100 | 14.0 |
| Schema / Structured Data | 10% | 55/100 | 5.5 |
| Performance (CWV) | 10% | 65/100 | 6.5 |
| AI Search Readiness | 10% | 58/100 | 5.8 |
| Images | 5% | 60/100 | 3.0 |
| **TOTAL** | 100% | | **57 / 100** |

> Wynik obniżony do **52** z powodu krytycznego blokera SSL — bez jego naprawy żadne inne optymalizacje nie przyniosą efektów.

---

## Typ firmy

**B2B Service Business** — przetwórnia pianek tapicerskich, cięcie CNC na zamówienie.  
Główna persona: manager zakupów / właściciel w branży meblarskiej, materacowej, zoologicznej.  
Kontekst lokalny: Kamyk k. Częstochowy, obsługa ogólnopolska.

---

## TOP 5 Krytycznych Problemów

1. **Certyfikat SSL nieważny** — `ERR_TLS_CERT_ALTNAME_INVALID` dla `pianki-widula.pl` i `www.pianki-widula.pl`. Strona całkowicie niedostępna przez HTTPS. Googlebot nie może zaindeksować. Wszyscy AI crawlerzy zablokowani.
2. **Stara strona WordPress nadal zaindeksowana** — `www.pianki-widula.pl/index.php/` pojawia się w Google jako aktualny wynik. Nowa strona Next.js niewidoczna w wyszukiwarce.
3. **Godziny pracy — 3-kierunkowa niespójność** — `Contact.tsx` HOURS array pokazuje sobotę jako zamkniętą, `isOpenNow()` zwraca otwarty sob 08:00–13:00, `llms.txt` mówi `sob 08:00–13:00`, JSON-LD nie ma soboty w ogóle.
4. **Brak `image` w LocalBusiness JSON-LD** — wymagane przez Google do wyświetlenia Knowledge Panel. Plik `/assets/og_image.png` nie istnieje w `public/` (tylko dynamiczna trasa `/og`).
5. **Brak treści E-E-A-T** — zero referencji klientów, właściciel (Jacek Widuła) nienaznaczony na stronie, brak specyfikacji technicznych pianek (gęstość, twardość), brak FAQ.

---

## TOP 5 Szybkich Wygranych

1. Napraw godziny sobotnie: ustaw `HOURS` array, JSON-LD i `llms.txt` na jednakowe wartości (30 minut pracy)
2. Dodaj `image`, `geo`, `sameAs` do LocalBusiness JSON-LD (1 godzina)
3. Dodaj FAQ section — 6-8 pytań B2B z odpowiedziami (2 godziny, duży wpływ na AI Search)
4. Zmień email z `piankapianka@vp.pl` na domenowy `kontakt@pianki-widula.pl` (wiarygodność B2B)
5. Wgraj `proces-produkcji.mp4` na YouTube + dodaj `VideoObject` schema (1 godzina, silny sygnał AI)

---

## 1. Technical SEO

### 1.1 SSL / HTTPS — CRITICAL

**Problem:** Certyfikat TLS zgłasza `ERR_TLS_CERT_ALTNAME_INVALID` dla obu wariantów domeny.

- Googlebot blokuje zaindeksowanie HTTPS
- Wszyscy AI crawlerzy (GPTBot, ClaudeBot, PerplexityBot) też blokują
- Przeglądarka pokazuje ostrzeżenie bezpieczeństwa
- Google używa HTTPS jako sygnał rankingowy

**Działanie:** Odnów/zamień certyfikat SSL pokrywający oba: `pianki-widula.pl` i `www.pianki-widula.pl`.

---

### 1.2 Indeksacja — CRITICAL

Wyniki wyszukiwania (2026-06-11):
```
site:pianki-widula.pl → 3 wyniki, wszystkie ze starego WordPressa:
  http://www.pianki-widula.pl/
  http://www.pianki-widula.pl/index.php/map/
  http://www.pianki-widula.pl/index.php/polityka-prywatnosci/
```

Nowa strona Next.js nie pojawiła się jeszcze w Google. Priorytet po naprawie SSL: wymuś recrawl przez Google Search Console.

---

### 1.3 robots.ts — OK z zastrzeżeniami

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://pianki-widula.pl/sitemap.xml
```

Poprawne. **Brak:** wyraźnych reguł dla AI botów (GPTBot, ClaudeBot, PerplexityBot). Wildcard `*` technicznie zezwala, ale brak explict Allow = słabszy sygnał współpracy z platformami AI search. Rozważ dodanie sekcji per-bot.

---

### 1.4 Sitemap — Niskie ryzyko

```ts
// sitemap.ts
lastModified: new Date()  // ← problem
```

`new Date()` zmienia się przy każdym buildzie — Google ignoruje daty zmieniające się co build. Użyj statycznej daty ostatniej edycji treści.

Struktura prawidłowa (2 URL): `/` i `/polityka-prywatnosci`. Trasy `/og`, `/api/contact` słusznie nieobecne.

---

### 1.5 Security Headers — Dobry wynik

| Header | Status |
|---|---|
| X-Content-Type-Options: nosniff | ✅ |
| X-Frame-Options: DENY | ✅ |
| X-XSS-Protection: 1; mode=block | ✅ (deprecated, ale harmless) |
| Referrer-Policy: strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | ✅ |
| Content-Security-Policy | ❌ Brak |
| HSTS (Strict-Transport-Security) | ❌ Brak (server-side) |

---

### 1.6 Canonical — OK

`alternates.canonical: "/"` w `layout.tsx` → `https://pianki-widula.pl/` — poprawne.

---

### 1.7 Pliki statyczne w public/

Nieużywane pliki z szablonu Next.js (powinny być usunięte):
```
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

Plik z spacją w nazwie — unikać:
```
public/pianki sztaplowane.png  ← spacja w nazwie pliku
```

Brak pliku statycznego OG image (`public/assets/og_image.png`) — metadata wskazuje `/og` (dynamiczna trasa). Jeśli `/og` route zawiedzie, nie ma fallbacku.

---

### 1.8 Zbędny "use client" — MEDIUM

`Hero.tsx` ma `"use client"` ale nie używa żadnych hooków ani zdarzeń. Server Component działa tu identycznie, redukuje JS bundle i poprawia FCP/LCP.

---

### 1.9 Not-found.tsx — OK

```tsx
robots: { index: false, follow: false }  // ✅ poprawne
```

---

## 2. Content Quality

**E-E-A-T Score: 51 / 100**

### 2.1 Experience (42/100) — SŁABE

- Wideo produkcji (proces-produkcji.mp4) to silny sygnał doświadczenia — jedyny
- "15+ lat" to nieweryfikowalna statystyka
- Właściciel **Jacek Widuła** wymieniony w JSON-LD, stopce i polityce prywatności — ale NIGDZIE na stronie nie jest przedstawiony
- Brak zdjęć ekipy, hali, maszyn (zdjęcia produktów tylko)

**Fix:** Dodaj 2-3 zdania o właścicielu w sekcji "O nas" z imieniem, latami doświadczenia i specjalizacją.

---

### 2.2 Expertise (58/100) — PRZECIĘTNE

Silne strony:
- Opisy typów pianek (HR, Visco, RE, Typ T) są technicznie poprawne
- Certyfikaty OEKO-TEX Klasa I + NIZP-PZH z PDF do pobrania — very strong signal
- Używanie terminologii branżowej: "cięcie konturowe", "profilowanie CNC", "bezpyłowe"

Luki:
- Zero specyfikacji technicznych: brak gęstości (kg/m³), twardości (kPa), tolerancji cięcia (mm)
- Brak informacji o obsługiwanych formatach plików CNC (DXF? PDF? DWG?)
- Brak informacji o maszynach / wyposażeniu

---

### 2.3 Authoritativeness (32/100) — SŁABE

- Zero referencji klientów — największa luka
- Zero wzmianki medialne / branżowe
- Jeden link wychodzący: Facebook
- Dostawca materialów: "BESTPUR Polymers" wymieniony na certyfikatach ale nie na stronie

---

### 2.4 Trustworthiness (68/100) — DOBRE

Mocne:
- NIP 5741004318 + REGON 150563741 widoczne
- Pełen adres fizyczny, telefon, mapa Google
- Certyfikaty z PDF do pobrania
- Polityka Prywatności

Słabe:
- Email `piankapianka@vp.pl` — darmowy provider = niski prestiż B2B
- Brak odpowiedzi w określonym czasie
- Brak HTTPS (SSL issue)

---

### 2.5 Liczba słów — OK, ale płytko

Szacunkowa liczba słów treści: **~870**. Próg 800 słów dla strony usługowej przekroczony, ale prawie cała treść jest w krótkich kartach (30-50 słów każda). Żadna sekcja nie ma rozbudowanego tekstu akapitowego przekraczającego 60 słów.

Sekcja | Słowa | Ocena
---|---|---
Hero | ~30 | OK (minimalizm)
O nas | ~90 | Thin dla roli trust-building
Rodzaje pianek | ~160 | OK (4 karty)
Zastosowania | ~110 | Thin (etykiety + jednozdaniowce)
Oferta | ~130 | OK
Realizacje | ~120 | OK (visual-primary)
Dlaczego my | ~120 | OK
Certyfikaty | ~80 | Thin
Kontakt | ~30 | Funkcjonalne

---

### 2.6 Pokrycie słów kluczowych

| Fraza | Status |
|---|---|
| pianki tapicerskie CNC | ✅ obecne w wielu miejscach |
| kształtki piankowe | ✅ silne (H1, treść) |
| bezpyłowe cięcie pianki | ✅ hero, galerie |
| wkłady 7-strefowe CNC | ✅ silne |
| wkłady materacowe CNC | ✅ |
| pianka HR Częstochowa | ⚠️ częściowe — "Kamyk k. Częstochowy" jest, ale "Częstochowa" brak w body copy |
| pianka HR śląsk | ❌ brak geo wariantu |
| producent pianki śląsk | ❌ brak |
| tolerancja cięcia CNC pianki | ❌ brak — ważne dla B2B |
| minimum zamówienia pianki | ❌ brak |
| czas realizacji | ❌ brak |

---

### 2.7 Zduplikowana treść między sekcjami

**"O nas" vs "Dlaczego my"** — overlap:
- Obie mówią o precyzji CNC, wieloletnim doświadczeniu, cięciu na wymiar
- Żadna nie dodaje unikalnej wartości w stosunku do drugiej
- Fix: "O nas" = narracja backstory (kto, od kiedy, dlaczego). "Dlaczego my" = weryfikowalne metryki (tolerancje, czas realizacji, zakres)

**Zastosowania (9 kart) vs Oferta (3 karty)** — overlap:
- Oferta ponownie kategoryzuje te same branże bez dodawania informacji
- Fix: Karty oferty powinny zawierać CTA lub sygnał cenowy lub czas realizacji

---

### 2.8 Niespójność rejestru formalności (PL)

- Sekcje Hero, O nas: formalna forma "Twoich"
- Karty WhyUs: małe litery "twojego materaca", "twoje potrzeby"
- B2B: powinno być konsekwentnie "Państwa" lub "Twojego" (kapitalizowane)

---

### 2.9 Brakujące treści — Priorytety

1. **FAQ** (priorytet 1) — min. zamówienie, czas realizacji, formaty plików, tolerancje
2. **Referencje klientów** (priorytet 1) — 2-3 cytaty z branżą (nie potrzeba pełnych nazw)
3. **Właściciel w "O nas"** (priorytet 1) — imię + doświadczenie
4. **Specyfikacje techniczne pianek** (priorytet 2) — gęstość kg/m³, twardość
5. **Sygnał cenowy** (priorytet 2) — "Poproś o wycenę" / "wycena w 24h"
6. **Czas odpowiedzi** (priorytet 2) — "Odpisujemy w ciągu 24h w dni robocze"

---

## 3. On-Page SEO

### 3.1 Title Tag — DOBRY

```
Przetwórnia Pianek Widuła | Kształtki i Formatki CNC | Częstochowa
```
65 znaków, keyword-rich, lokalizacja na końcu. ✅

---

### 3.2 Meta Description — DOBRY

```
Przetwórnia pianek tapicerskich Widuła - kształtki i formatki CNC, wkłady 7-strefowe, wykroje bezpyłowe. Pianki HR, Visco, Typ T. B2B. Kamyk k. Częstochowy.
```
156 znaków, zawiera primary keywords, B2B signal, lokalizację. ✅

---

### 3.3 Nagłówki

```
H1: "Kształtki i formatki cięte CNC"  ✅ keyword-rich, jeden na stronie
H2: "Pasja do pianki od lat"           ⚠️ brak keywordu
H2: "Rodzaje pianek w ofercie"         ✅
H2: "Zastosowanie pianek"              ⚠️ brak keywordu, małe "Zastosowanie" gramatycznie slabsze niż "Zastosowania"
H2: "Nasza oferta"                     ⚠️ zbyt generyczne
H2: "Co nas wyróżnia"                  ⚠️ brak keywordu
H2: "Certyfikaty i atesty"             ✅
H2: "Skontaktuj się z nami"            ✅
```

Brak frazy "pianki tapicerskie CNC" w żadnym H1 ani H2. Primary keyword trafia głównie do treści i meta, nie do struktury nagłówków.

---

### 3.4 OG / Open Graph — UWAGA

`layout.tsx` wskazuje `url: "/og"` dla obrazu OG. Trasa `/og/route.tsx` istnieje i działa. Ale:
- Brak statycznego fallback (`/assets/og_image.png` nie istnieje w `public/`)
- Jeśli `/og` route zawiedzie (edge runtime error, build problem), OG obraz znika całkowicie

---

### 3.5 Sekcja `#realizacje` — OK (false alarm)

`ProductGalleries.tsx` ma `<section id="realizacje">` — anchor istnieje. Linki w JSON-LD do `/#realizacje` są poprawne.

---

## 4. Schema / Structured Data

**Istniejący blok:** `LocalBusiness` + `hasOfferCatalog` z 3 `Service`.

### 4.1 Walidacja — co brakuje

| Property | Status | Impact |
|---|---|---|
| `image` | ❌ Brak | Wymagane przez Google dla Knowledge Panel |
| `geo` (GeoCoordinates) | ❌ Brak | Lokalny SEO, Maps |
| `sameAs` | ❌ Brak | Entity graph, social proof |
| `priceRange` | ❌ Brak | Rekomendowane |
| `logo` | ❌ Brak | Wzmocnienie brandu |
| Saturday w `openingHoursSpecification` | ❌ Brak | Niespójność z llms.txt |
| `@id` na root entity | ❌ Brak | Entity disambiguation |
| `legalName` | ❌ Brak | Pełna nazwa prawna |
| `addressRegion` | ❌ Brak | "Śląskie" |

### 4.2 Typ @type — suboptymalne

`"LocalBusiness"` jest poprawny, ale mniej precyzyjny niż:
```json
"@type": ["LocalBusiness", "ProfessionalService"]
```

### 4.3 Brakujące schematy

| Typ | Możliwość | Rich Result | Priorytet |
|---|---|---|---|
| `VideoObject` | proces-produkcji.mp4 | ✅ Video Carousel | Wysoki |
| `WebSite` + `SearchAction` | Sitelinks searchbox | ✅ | Średni |
| `FAQPage` | Po dodaniu FAQ section | ✅ Restricted | Wysoki |
| `ItemList` produktów | 3 product categories | ✅ | Niski |

### 4.4 Fix — zaktualizowany JSON-LD

> **Przed wdrożeniem:** (1) Sprawdź `geo` koordynaty z embed URL w `Map.tsx`. (2) Napraw sobotę w `Contact.tsx`. (3) Utwórz `/assets/og_image.png` lub zmień `image` na `/logo.png`.

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://pianki-widula.pl/#business",
  "name": "FH Pianki Tapicerskie Jacek Widuła",
  "alternateName": "Pianki Tapicerskie Widuła",
  "legalName": "FH Pianki Tapicerskie Jacek Widuła",
  "url": "https://pianki-widula.pl",
  "telephone": "+48502490104",
  "email": "piankapianka@vp.pl",
  "image": "https://pianki-widula.pl/logo.png",
  "logo": "https://pianki-widula.pl/logo.png",
  "priceRange": "Zapytaj o wycenę",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Władysława Reymonta 136",
    "addressLocality": "Kamyk",
    "addressRegion": "Śląskie",
    "postalCode": "42-125",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.8610,
    "longitude": 18.9630
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "taxID": "5741004318",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100080380672291"
  ],
  "description": "Przetwórnia pianek tapicerskich Widuła - bezpyłowe wycinanie kształtek, formatek i wkładów materacowych na maszynach CNC. Pianki HR, Visco, Typ T, RE. Cięcie konturowe. B2B. Kamyk k. Częstochowy."
}
```

---

## 5. Performance (CWV)

**Brak field data** — strona nie zaindeksowana.  
Ocena na podstawie analizy kodu:

| Aspekt | Status |
|---|---|
| React Compiler (auto-memoization) | ✅ włączony |
| Next.js Image — auto WebP/AVIF | ✅ |
| `sizes` prop na images | ✅ (Applications.tsx) |
| LCP candidate: Hero background | Jest CSS gradient, nie image — dobry |
| Hero "use client" bez powodu | ⚠️ zbędny JS overhead |
| Production video — autoplay/preload | Niezbadane (nie czytano ProductionVideo.tsx) |
| Carousel auto-play timers | ⚠️ Interwałowe timery mogą powodować re-rendery |
| Inter zamiast Plus Jakarta Sans | Fontowa niespójność — brak wpływu na CWV |

**Rekomendacja:** Usuń `"use client"` z `Hero.tsx`. Sprawdź czy `ProductionVideo.tsx` ma `preload="none"` lub `preload="metadata"` na tagu `<video>` — brak tego może powodować duży LCP video fetch.

---

## 6. AI Search Readiness (GEO)

**GEO Score: 58 / 100** (wg subagenta seo-geo)

| Platforma | Wynik | Główna luka |
|---|---|---|
| Google AI Overviews | 52/100 | Brak FAQPage, brak sameAs |
| ChatGPT (web browse) | 45/100 | SSL blokuje; brak YT; brak Wikipedia entity |
| Perplexity | 50/100 | SSL blokuje; brak explicit PerplexityBot Allow |
| Bing Copilot | 58/100 | JSON-LD OK; SSR treść widoczna |

### Kluczowe problemy GEO

1. **SSL blokuje WSZYSTKICH AI crawlerów** — zerowy GEO do czasu naprawy
2. **`WhyUs.tsx` i `Contact.tsx` to "use client"** — crawlerzy bez JS mogą nie widzieć:
   - 6 kart wyróżników (WhyUs)
   - Godzin pracy, adresu, telefonu (Contact)
   - Kompensacja: JSON-LD w layout.tsx ma hours/address
3. **Brak FAQ** — pytania B2B są najczęstszym typem zapytań do AI assistantów
4. **Video produkcji nie na YouTube** — korelacja z cytowalnością przez AI: ~0.737
5. **llms.txt** — dobra jakość, ale brak sekcji Q&A i brak info o procesie zamówienia

### robots.ts — dodaj per-bot rules

```ts
// robots.ts — rozszerzona wersja
rules: [
  {
    userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Bingbot"],
    allow: "/",
    disallow: "/api/",
  },
  {
    userAgent: "*",
    allow: "/",
    disallow: "/api/",
  }
],
```

---

## 7. Images

| Aspekt | Status |
|---|---|
| Next.js `<Image>` — auto WebP/AVIF | ✅ |
| `fill` + `sizes` na gallery images | ✅ |
| Alt text — Hero | Brak (sekcja bez `<img>`, bg CSS) |
| Alt text — About | ✅ "Wykroje bezpyłowe CNC - Pianki Widuła" |
| Alt text — Applications | ⚠️ Generic: "Branża meblarska - pianki tapicerskie" |
| Alt text — Certifications | N/A (brak zdjęć) |
| Favicon | `favicon.svg` (istnieje w public/) — OK |
| OG image (static) | ❌ `og_image.png` nie istnieje w public/ |
| Filename z spacją | ❌ `public/pianki sztaplowane.png` |

**Alt text dla Applications** — przykład poprawy:
```
// PRZED:
alt={`Branża ${app.title.toLowerCase()} - pianki tapicerskie`}
// Wynik: "Branża meblarska - pianki tapicerskie"

// PO:
alt={`${app.description.split(' ').slice(0, 8).join(' ')}...`}
// Lub lepiej — dedykowane pola alt[] w danych
```

---

## 8. Local SEO

| Sygnał | Status |
|---|---|
| JSON-LD LocalBusiness z adresem | ✅ |
| Numer telefonu w JSON-LD | ✅ |
| Godziny pracy Mon-Fri | ✅ |
| Godziny pracy Sobota | ❌ Brak w JSON-LD |
| `geo` koordynaty | ❌ Brak |
| Google Business Profile | Nieznany — brak wzmianki w kodzie |
| NAP spójność (Name/Address/Phone) | ✅ — identyczne w footer, JSON-LD, llms.txt |
| Wizytówki zewnętrzne | Obecne: firmania.pl, cylex-polska.pl, pkt.pl, aleo.com |

**Rekomendacja:** Zweryfikuj/utwórz Google Business Profile — to najwyższy priorytet local SEO po naprawie SSL.

---

## 9. Bugs w kodzie (poza SEO)

1. **`Contact.tsx` — sobota** (linia 26): `isOpenNow()` mówi otwarte sob 08-13, ale HOURS array wyświetla "Zamknięte"
2. **`layout.tsx`** — font ładowany jako `Inter` ale CSS var to `--font-jakarta`. Funkcjonalne ale misleading.
3. **`public/pianki sztaplowane.png`** — spacja w nazwie pliku (bezpieczeństwo/SEO)
4. **Nieużywane Next.js SVG** — `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` w `/public`

---

## Słownik obecnych ID sekcji

```
#hero          → Hero
#o-nas         → About
#rodzaje-pianek → FoamTypes
#zastosowania  → Applications
#oferta        → Offer
#realizacje    → ProductGalleries
#dlaczego-my   → WhyUs
#certyfikaty   → Certifications
#kontakt       → Contact
```

Nawigacja (NAV_LINKS) używa: `#o-nas`, `#zastosowania`, `#oferta`, `#realizacje`, `#certyfikaty`, `#kontakt`.  
`#hero` i `#rodzaje-pianek` i `#dlaczego-my` — istnieją w HTML ale brak w nawigacji.
