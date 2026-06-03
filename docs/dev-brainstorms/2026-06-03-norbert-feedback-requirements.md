---
date: 2026-06-03
topic: norbert-feedback
---

# Korekty i rozszerzenia wg wytycznych Norberta

## Problem

Klient (Norbert) przysłał listę poprawek. Strona wymaga: korekty tekstów O Nas + Hero, dodania nowych sekcji (zastosowania pianek, rodzaje pianek, certyfikaty), przepisania kart oferty, podpięcia lightboxa do karuzeli, aktualizacji SEO i zmiany logo.

## Wymagania

### Teksty i copy

- R1. `About.tsx` — zastąpić oba akapity tekstem klienta: „Specjalizujemy się w precyzyjnym przetwarzaniu pianki tapicerskiej na maszynach CNC..." + „Wykorzystując zaawansowaną technologię CNC...". Nacisk na: przetwórnia pianek tapicerskich + maszyny CNC + bezpyłowe wycinanie.
- R2. `Hero.tsx` — zaktualizować headline i opis, żeby odzwierciedlały nowe pozycjonowanie: przetwórnia, CNC, bezpyłowe cięcie kształtki/formatki/wkłady.
- R3. `ProductionVideo.tsx` — dopisać przy CNC opis „cięcie bezpyłowe!" w tekście sekcji.

### Nowe sekcje

- R4. Nowa sekcja **„Zastosowanie pianek"** (`Applications.tsx`) — 9 branż z placeholderami na zdjęcia (klient dostarczy). Branże: meblarska (kanapy), materacowa (wkłady 7-strefowe), dziecięca (wózki/foteliki), meble ogrodowe, zoologiczna (legowiska), sportowa (materace sportowe), rehabilitacyjna (maty/kształtki), kampery/tiry/przyczepy, panele akustyczne (piramidki).
- R5. Nowa sekcja **„Rodzaje pianek"** (`FoamTypes.tsx`) — 4 typy z nazwą, oznaczeniem i opisem: PU standardowe i trudnopalne (Typ T), wysokoelastyczne (Typ HR), termoelastyczne (Visco/Memory), wtórnie spieniane (Typ RE).
- R6. Nowa sekcja **„Certyfikaty"** (`Certifications.tsx`) — wyświetla certyfikat OEKO-TEX i atesty higieniczne. Pliki/linki dostarczy klient.

### Oferta — przepisanie kart

- R7. `Offer.tsx` — przepisać karty zgodnie z nowym podziałem klienta: karta 1 = producenci mebli tapicerowanych (slot na zdjęcie kanapy, klient dostarczy), karta 2 = producenci materaców, karta 3 = pozostałe zastosowania (dziecięca, sportowa, rehabilitacja, kampery itd.). Zachować obecny 3-kafelkowy układ.

### Galerie produktów

- R8. **Wszystkie karuzele** — podpiąć `Lightbox.tsx` (komponent już istnieje w `src/components/ui/Lightbox.tsx`). Kliknięcie zdjęcia otwiera lightbox z możliwością powiększenia. Priorytet: sekcja 7-strefowe (klient to wymienił wprost).
- R9. **Materace i wkłady** (folder `fizjoterapia`) — zdjęcie `08.jpeg` wymienić na wersję na białym tle. Plik dostarczy klient.
- R10. **Wykroje bezpyłowe** — dodać nowe zdjęcie z załącznika klienta. Plik dostarczy klient (dołożyć jako `15.jpeg`, zaktualizować `count: 15` w `ProductGalleries.tsx`).

### Logo

- R11. Do logo firmy dodać element z wizytówki: „poduszka z dłonią". Klient dostarczy grafikę. Navbar i Footer używają `logo-newv2.png` — podmienić lub dodać nowy wariant.

### SEO

- R12. `layout.tsx` (metadata + JSON-LD) — zaktualizować `title`, `description`, `keywords` z naciskiem na: _przetwórnia pianek tapicerskich_, _formatki piankowe_, _cięcie konturowe_, _kształtki piankowe CNC_, _wkłady materacowe_, B2B. Zaktualizować `description` w JSON-LD `LocalBusiness`.
- R13. `llms.txt` — zaktualizować opis dla AI crawlerów zgodnie z nowym pozycjonowaniem.
- R14. `Hero.tsx` i pozostałe teksty — naturalnie wpleść frazy kluczowe: _producent pianki_, _formatki piankowe_, _cięcie konturowe_, _bezpyłowe wycinanie_.

## Granice scope'u

- Nie projektujemy nowego layoutu strony — dodajemy sekcje w istniejącą strukturę `page.tsx`
- Nie zmieniamy systemu fontów, palet kolorów ani komponentów UI
- Nie implementujemy CMS — teksty hardcoded jak dotychczas
- Certyfikaty: wyświetlamy to co klient dostarczy — nie szukamy certyfikatów samodzielnie
- Zmiana logo zależy od dostarczenia grafiki przez klienta

## Kryteria sukcesu

- Wszystkie teksty O Nas i Hero odzwierciedlają pozycjonowanie: przetwórnia CNC + bezpyłowe cięcie
- Nowe sekcje (R4, R5, R6) widoczne na stronie w odpowiedniej kolejności
- Lightbox działa na wszystkich 3 galeriach (klik na zdjęcie = powiększenie)
- SEO title/description zawierają frazy: „przetwórnia pianek tapicerskich", „formatki piankowe CNC", „cięcie konturowe"
- Strona nie ma błędów TypeScript ani lint

## Kluczowe decyzje

- **Lightbox we wszystkich galeriach, nie tylko 7-strefowe**: tania zmiana, poprawia UX wszędzie
- **`FoamTypes.tsx` jako oddzielna sekcja** (nie wewnątrz Offer): klient wymienia 4 typy z oznaczeniami — zasługuje na własną prezentację
- **`Applications.tsx` z placeholderami na zdjęcia**: klient powie „do każdej branży można dołożyć zdjęcia" — budujemy grid gotowy na obrazy, ale ze stanem bez zdjęcia
- **R9, R10, R11 zależne od klienta**: implementujemy strukturę, podstawiamy pliki gdy klient dostarczy

## Zależności / Założenia

- Klient dostarczy: logo z poduszką, `fizjoterapia/08.jpeg` na białym tle, nowe zdjęcie wykrojów, certyfikaty OEKO-TEX
- `Lightbox.tsx` jest już gotowy — wymaga tylko wpięcia do `ProductCarousel.tsx`
- Kolejność sekcji na stronie do ustalenia: sugestia — FoamTypes po About, Applications po FoamTypes, Certifications przed Footer

## Otwarte pytania

### Do rozwiązania przed planowaniem
_(brak — wszystkie decyzje produktowe podjęte)_

### Odroczone do planowania
- [Dotyczy R4][Techniczne] Czy sekcja Applications używa grid CSS z responsywnym dopasowaniem, czy karuzeli branż?
- [Dotyczy R7][Techniczne] Czy karty oferty mają slot na `<Image>` (next/image) czy placeholder div do późniejszej podmiany?
- [Dotyczy R4, R7][Wymaga researchu] Kolejność nowych sekcji w `page.tsx` — sprawdzić obecny montaż

## Następne kroki
→ `/dev-plan` do planowania technicznego implementacji
