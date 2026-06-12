import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://pianki-widula.pl";

const BUSINESS_ID = `${SITE_URL}/#business`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": BUSINESS_ID,
  name: "FH Pianki Tapicerskie Jacek Widuła",
  legalName: "FH Pianki Tapicerskie Jacek Widuła",
  alternateName: "Pianki Tapicerskie Widuła",
  url: SITE_URL,
  telephone: "+48502490104",
  email: "piankapianka@vp.pl",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "Zapytaj o wycenę",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Władysława Reymonta 136",
    addressLocality: "Kamyk",
    addressRegion: "Śląskie",
    postalCode: "42-125",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.89966,
    longitude: 19.0088114,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  taxID: "5741004318",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100080380672291",
  ],
  description:
    "Przetwórnia pianek tapicerskich Widuła - bezpyłowe wycinanie kształtek, formatek i wkładów materacowych na maszynach CNC. Pianki HR, Visco, Typ T, RE. Cięcie konturowe. B2B. Kamyk k. Częstochowy.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oferta",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wkłady i materace do fizjoterapii",
          description:
            "Specjalistyczne wkłady i materace piankowe dla szpitali, domów opieki i placówek rehabilitacyjnych. Wykonane z pianek o odpowiednich parametrach twardości i gęstości.",
          url: `${SITE_URL}/#realizacje`,
          provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID },
          areaServed: { "@type": "Country", name: "PL" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wkłady 7-strefowe profilowane CNC",
          description:
            "Wkłady do materaców z 7 strefami twardości, precyzyjnie profilowane na maszynach CNC. Ergonomiczne wsparcie każdej partii ciała, dowolne wymiary.",
          url: `${SITE_URL}/#realizacje`,
          provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID },
          areaServed: { "@type": "Country", name: "PL" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wykroje bezpyłowe CNC",
          description:
            "Wykroje piankowe metodą bezpyłową na maszynach CNC. Precyzyjne kontury i czyste krawędzie - dowolne kształty i wymiary według dostarczonej formatki.",
          url: `${SITE_URL}/#realizacje`,
          provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID },
          areaServed: { "@type": "Country", name: "PL" },
        },
      },
    ],
  },
};

const jsonLdVideo = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Proces produkcji kształtek piankowych CNC - Pianki Tapicerskie Widuła",
  description:
    "Bezpyłowe cięcie CNC kształtek, formatek i wkładów materacowych w przetwórni Pianki Tapicerskie Widuła w Kamyku k. Częstochowy. Maszyny CNC, cięcie konturowe, pianki HR, Visco, Typ T, RE.",
  thumbnailUrl: `${SITE_URL}/logo.png`,
  contentUrl: `${SITE_URL}/assets/proces-produkcji.mp4`,
  uploadDate: "2026-05-28",
  publisher: {
    "@type": "Organization",
    "@id": BUSINESS_ID,
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Pianki Tapicerskie Widuła",
  inLanguage: "pl-PL",
  publisher: {
    "@type": "Organization",
    "@id": BUSINESS_ID,
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jakie formaty plików przyjmujecie do cięcia CNC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Przyjmujemy pliki DXF, PDF oraz zdjęcia/szkice z wymiarami. Do cięcia konturowego kształtek najlepsza jest dokumentacja techniczna w formacie DXF. Jeśli nie posiadasz pliku technicznego, możemy opracować go na podstawie przesłanego szkicu lub próbki.",
      },
    },
    {
      "@type": "Question",
      name: "Jaki jest minimalny wymiar i minimalna ilość zamówienia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realizujemy zarówno zamówienia jednostkowe, jak i hurtowe. Nie ma minimalnej ilości - przyjmujemy zamówienia od 1 sztuki. Minimalny wymiar kształtki zależy od rodzaju cięcia i grubości pianki.",
      },
    },
    {
      "@type": "Question",
      name: "Jak długo trwa realizacja zamówienia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardowy czas realizacji to 2-5 dni roboczych od momentu potwierdzenia zamówienia i dostarczenia dokumentacji. Pilne zamówienia realizujemy w trybie ekspresowym.",
      },
    },
    {
      "@type": "Question",
      name: "Czy wysyłacie pianki w całej Polsce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, obsługujemy klientów z całej Polski. Zapewniamy transport bezpośrednio do klienta. Możliwy jest także odbiór osobisty w Kamyku k. Częstochowy.",
      },
    },
    {
      "@type": "Question",
      name: "Jaka jest dokładność cięcia CNC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nasze maszyny CNC zapewniają precyzję cięcia z tolerancją ±1-2 mm. Cięcie bezpyłowe gwarantuje czyste krawędzie bez zadzioru.",
      },
    },
    {
      "@type": "Question",
      name: "Jak złożyć zamówienie na cięcie CNC pianki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najprościej przez formularz kontaktowy lub telefonicznie (+48 502 490 104). Prześlij wymiary, rodzaj pianki i ilość - przygotujemy wycenę. Odpisujemy w ciągu 24 godzin w dni robocze.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: "Przetwórnia Pianek Widuła | Kształtki i Formatki CNC | Częstochowa",
  description:
    "Przetwórnia pianek tapicerskich Widuła - kształtki i formatki CNC, wkłady 7-strefowe, wykroje bezpyłowe. Pianki HR, Visco, Typ T. B2B. Kamyk k. Częstochowy.",
  keywords: [
    "przetwórnia pianek tapicerskich",
    "formatki piankowe",
    "kształtki piankowe CNC",
    "cięcie konturowe pianki",
    "wkłady materacowe CNC",
    "producent pianki Częstochowa",
    "bezpyłowe wycinanie pianki",
    "pianka HR wysokoelastyczna",
    "pianka Visco Memory",
    "pianka RE wtórnie spieniana",
    "wykroje bezpyłowe",
    "pianki tapicerskie B2B",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "hc1xG1d3aYPrkJHGxv8lKvhiVFNsFEaDvDAgXVCEdl4",
  },
  openGraph: {
    title: "Przetwórnia Pianek Widuła - Kształtki i Formatki CNC",
    description:
      "Bezpyłowe wycinanie kształtek i formatek piankowych na maszynach CNC. Pianki HR, Visco, Typ T, RE. B2B. Kamyk k. Częstochowy.",
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Pianki Tapicerskie Widuła",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pianki Tapicerskie Widuła - Kamyk k. Częstochowy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Przetwórnia Pianek Widuła - Kształtki CNC",
    description: "Bezpyłowe wycinanie kształtek piankowych CNC. Pianki HR, Visco, Typ T. B2B. Kamyk k. Częstochowy.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD blocks: safe — all objects are hardcoded static, JSON.stringify escapes output */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-site-text antialiased">
        {children}
      </body>
    </html>
  );
}
