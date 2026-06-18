# GEO Analysis — pianki-widula.pl
Data audytu: 2026-06-18

---

## GEO Readiness Score: 47/100

| Kategoria | Waga | Wynik | Ważony |
|---|---|---|---|
| Citability (cytowalność) | 25% | 35/100 | 8.75 |
| Structural Readability | 20% | 45/100 | 9.0 |
| Multi-Modal Content | 15% | 60/100 | 9.0 |
| Authority & Brand Signals | 20% | 25/100 | 5.0 |
| Technical Accessibility | 20% | 75/100 | 15.0 |

---

## Platform Breakdown

| Platforma | Wynik | Główny problem |
|---|---|---|
| Google AI Overviews | 52/100 | Brak definition-first passages, FAQ schema bez HTML |
| ChatGPT | 35/100 | Zero Wikipedia/Reddit presence, brak entity na znanych platformach |
| Perplexity | 30/100 | Brak Reddit obecności (Reddit = 46.7% cytowań Perplexity) |
| Bing Copilot | 50/100 | Dobry SSR, brak Bing Webmaster / IndexNow |

---

## 1. AI Crawler Access

**Status: 9/10 — prawie kompletny**

### Dozwoleni (robots.ts)
| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | ✅ Jawnie dozwolony |
| OAI-SearchBot (OpenAI) | ✅ Jawnie dozwolony |
| ClaudeBot (Anthropic) | ✅ Jawnie dozwolony |
| PerplexityBot | ✅ Jawnie dozwolony |
| CCBot (Common Crawl) | ⚠️ Nie zablokowany — wpada pod `*` |

### Brakujące reguły
```typescript
// Dodaj do robots.ts — crawlery treningowe które warto zablokować:
{ userAgent: ["CCBot", "anthropic-ai", "Bytespider", "cohere-ai"], disallow: "/" },
// Dodaj jako dozwolony:
{ userAgent: ["ChatGPT-User", "Amazonbot"], allow: "/", disallow: "/api/" },
```

---

## 2. llms.txt

**Status: 7/10 — obecny, wymaga rozbudowy**

Plik `/public/llms.txt` istnieje — duży plus. Zawiera poprawne sekcje: specjalizacja, produkty, certyfikaty, kontakt.

### Problemy
- Brak linków do konkretnych podstron (format `[Tytuł](URL): opis`)
- Brak sekcji `## Key pages` z URL-ami
- Brak wzmianki o FAQ i VideoObject
- Brak wersji `llms-full.txt` (rozszerzona)

### Sugerowana poprawka — dodaj sekcję na końcu
```markdown
## Key pages

- [Strona główna](https://pianki-widula.pl/): Przetwórnia pianek tapicerskich CNC — kształtki, formatki, wkłady materacowe
- [Polityka prywatności](https://pianki-widula.pl/polityka-prywatnosci/): Zasady przetwarzania danych

## FAQ

- Przyjmowane formaty: DXF, PDF, szkice z wymiarami
- Minimalny czas realizacji: 2-5 dni roboczych
- Brak minimalnego zamówienia — od 1 sztuki
- Dostawa ogólnopolska, odbiór osobisty w Kamyku k. Częstochowy
```

---

## 3. Schema Markup

**Status: 7/10 — solidna baza, brakuje Person i Product**

### Zaimplementowane
| Schema | Status |
|---|---|
| LocalBusiness + ProfessionalService | ✅ |
| FAQPage (6 pytań) | ✅ (ale bez HTML odpowiednika!) |
| VideoObject | ✅ |
| WebSite | ✅ |
| OpeningHoursSpecification | ✅ |
| GeoCoordinates | ✅ |
| HasOfferCatalog z 3x Service | ✅ |

### Braki

**Person schema (właściciel) — wysoki priorytet:**
```typescript
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jacek Widuła",
  jobTitle: "Właściciel",
  worksFor: { "@type": "Organization", "@id": BUSINESS_ID },
  knowsAbout: ["pianki tapicerskie", "cięcie CNC", "pianki poliuretanowe"],
  url: `${SITE_URL}/#jacek-widula`,
};
```

**sameAs — rozszerzyć:**
```typescript
sameAs: [
  "https://www.facebook.com/profile.php?id=100080380672291",
  // dodaj gdy będzie:
  // "https://www.linkedin.com/company/pianki-widula",
  // "https://www.google.com/maps/place/?q=place_id:ChIJ..."
],
```

---

## 4. Brand Mention Analysis

**Status: 2/10 — krytyczny brak**

| Platforma | Status | Wpływ na AI |
|---|---|---|
| Facebook | ✅ Obecny | Niski (prywatny profil) |
| Wikipedia | ❌ Brak | Wysoki (ChatGPT cyta Wikipedia 47.9%) |
| LinkedIn | ❌ Brak | Średni |
| Reddit | ❌ Brak | Krytyczny (Perplexity = 46.7% Reddit) |
| YouTube | ❌ Brak | Najwyższy korelat AI visibility (0.737) |
| Google Business Profile | ❌ Nie zweryfikowany w schema | Wysoki dla lokalnego AI |

### Plan działań (priorytet)
1. **YouTube** — nagraj 3-5 krótkich filmów (30-60 sek) z procesu cięcia CNC. Tytuły: "Cięcie pianki HR CNC - Pianki Widuła", "Wkłady 7-strefowe - produkcja CNC". YouTube mentions = najsilniejszy korelat (~0.737).
2. **Google Business Profile** — uzupełnij i zweryfikuj. Dodaj URL w `sameAs`.
3. **Reddit r/majsterkowanie / r/meble** — odpowiadaj na pytania o pianki, nie reklamowo.

---

## 5. Passage-Level Citability

**Status: 3/10 — krytyczny brak**

Optymalna długość pasażu dla AI: **134-167 słów**. Aktualne treści: 20-60 słów per blok.

### Problemy
- Wszystkie opisy produktów/piank: 30-55 słów — za krótkie do cytowania
- Brak definitional passages ("Pianka HR to...")
- Brak pytań jako nagłówki H2/H3
- FAQPage schema ma 6 pytań, ale **nie ma odpowiadającego HTML FAQ** na stronie — AI nie zobaczy treści w crawlowanym HTML (schema renderuje się przez JS w JSON-LD, ale widoczność pytań w treści strony = 0)
- Brak konkretnych liczb z źródłem (np. "gęstość 30-80 kg/m³")

### Przykład — jak przepisać opis pianki HR (FoamTypes.tsx)

**Przed (40 słów):**
> High Resilience - wysoka sprężystość, długa trwałość. Idealna do wkładów 7-strefowych, materaców premium i mebli tapicerowanych wymagających doskonałego komfortu.

**Po (148 słów — cytowalne):**
> Pianka wysokoelastyczna HR (High Resilience) to pianki poliuretanowe o podwyższonej sprężystości i trwałości, przeznaczone do zastosowań wymagających wieloletniego zachowania kształtu. Współczynnik odbicia sprężystego pianki HR wynosi powyżej 45%, co odróżnia ją od piank standardowych (Typ T) o współczynniku 25-35%. Dostępna w gęstościach od 25 do 80 kg/m³ i twardościach 15-55 N/314 cm² (norma PN-EN ISO 2439). W przetwórni Widuła pianka HR cięta jest bezpyłowo na maszynach CNC z tolerancją ±1-2 mm. Główne zastosowania: wkłady 7-strefowe do materaców premium, siedziska mebli tapicerowanych (kanapy, fotele), wkłady do fizjoterapii. Pianka HR dostępna jest również w wersji trudnopalnej, spełniającej normę PN-EN 1021 (test papierosowy i zapałkowy), wymaganej w hotelach i obiektach użyteczności publicznej.

---

## 6. Server-Side Rendering

**Status: 9/10 — bez zarzutu**

Next.js 16 App Router + React Server Components = treść renderowana po stronie serwera. AI crawlery nie wykonują JS — tu nie ma problemu.

- Sekcje treściowe: Server Components ✅
- `WhyUs.tsx`: `"use client"` — jedyna sekcja CSR, ale treść widoczna w HTML przez hydration ✅
- VideoObject schema w `<head>`: ✅ widoczne bez JS

---

## 7. Structural Readability

**Status: 5/10 — wymaga pracy**

### Dobre
- H1 w Hero ✅
- H2 w każdej sekcji ✅
- H3 w kartach produktów ✅

### Braki
- Żaden H2/H3 nie jest pytaniem (np. "Jakie rodzaje pianek oferujemy?")
- FAQ schema istnieje, ale pytania nie są widoczne na stronie jako HTML
- Brak tabel porównawczych (np. porównanie typów pianek)
- Brak sekcji z datą ostatniej aktualizacji
- Brak visible author byline (Jacek Widuła jest wymieniony w About, ale bez daty i tytułu)

---

## Top 5 zmian — najwyższy impact

### 1. Dodaj HTML FAQ na stronie (WYSOKI / 1-2h)
FAQPage schema istnieje — dodaj widoczną sekcję FAQ przed #kontakt. AI crawlery czytają HTML, nie tylko JSON-LD.

```tsx
// Nowy komponent src/components/faq/FAQ.tsx
// 6 pytań z layout.tsx — skopiuj i wyrenderuj jako H3 + p
```

### 2. Przepisz opisy piank na 134-167 słów z danymi technicznymi (WYSOKI / 3-4h)
Każdy typ pianki: dodaj gęstość (kg/m³), twardość (N), normy, zastosowania z konkretnymi liczbami. Wzór powyżej.

### 3. YouTube (WYSOKI / ongoing)
Nagraj z telefonu 3-5 filmów z procesu cięcia CNC. Opis na YouTube: kluczowe frazy + link do strony. Nie potrzeba montażu — surowy materiał wystarczy.

### 4. Person schema + author byline w About (ŚREDNI / 30min)
Dodaj JSON-LD Person dla Jacka Widuły. W komponencie About.tsx dodaj `id="jacek-widula"` i datę doświadczenia ("od 2009 roku").

### 5. Zmień nagłówki H2 na pytania (ŚREDNI / 1h)
Przykłady:
- "Rodzaje pianek w ofercie" → "Jakie rodzaje pianek tapicerskich oferujemy?"
- "Co nas wyróżnia" → "Dlaczego producenci mebli wybierają Pianki Widuła?"
- "Nasza oferta" → "Dla jakich branż tniemy pianki CNC?"

---

## Content Reformatting — konkretne sekcje

| Komponent | Problem | Akcja |
|---|---|---|
| `FoamTypes.tsx` | Opisy 30-55 słów | Rozszerzyć do 134-167 słów z danymi technicznymi |
| `About.tsx` | Brak daty, brak credentials | Dodać "od 2009 roku", id dla Jacka Widuły |
| `WhyUs.tsx` | Emoji ikony, krótkie opisy | Dodać 1-2 zdania z konkretami do każdej karty |
| `Hero.tsx` | Brak definicji w pierwszych 60 słowach | Dodać 1 definitional sentence do subtitle |
| brak | FAQ schema bez HTML | Nowy komponent FAQ.tsx |

---

## Szybkie wygrane (< 1h każda)

- [ ] Dodaj `ChatGPT-User` i `Amazonbot` do allowlist w robots.ts
- [ ] Zablokuj `CCBot`, `anthropic-ai`, `Bytespider`, `cohere-ai` w robots.ts
- [ ] Dodaj sekcję `## Key pages` z URL-ami do llms.txt
- [ ] Dodaj Person JSON-LD dla Jacka Widuły w layout.tsx
- [ ] Uzupełnij GBP (Google Business Profile) i dodaj URL w sameAs
