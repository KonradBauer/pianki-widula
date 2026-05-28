import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://pianki-widula.pl";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FH Pianki Tapicerskie Jacek Widuła",
  alternateName: "Pianki Tapicerskie Widuła",
  url: SITE_URL,
  telephone: "+48502490104",
  email: "piankapianka@vp.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Władysława Reymonta 136",
    addressLocality: "Kamyk",
    postalCode: "42-125",
    addressCountry: "PL",
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
  description:
    "Sprzedaż pianek tapicerskich do materaców i tapicerki. Wkłady 7-strefowe profilowane CNC, materace do fizjoterapii i domów opieki, wykroje bezpyłowe. Kamyk k. Częstochowy.",
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
          provider: { "@type": "LocalBusiness", name: "FH Pianki Tapicerskie Jacek Widuła" },
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
          provider: { "@type": "LocalBusiness", name: "FH Pianki Tapicerskie Jacek Widuła" },
          areaServed: { "@type": "Country", name: "PL" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wykroje bezpyłowe CNC",
          description:
            "Wykroje piankowe metodą bezpyłową na maszynach CNC. Precyzyjne kontury i czyste krawędzie — dowolne kształty i wymiary według dostarczonej formatki.",
          url: `${SITE_URL}/#realizacje`,
          provider: { "@type": "LocalBusiness", name: "FH Pianki Tapicerskie Jacek Widuła" },
          areaServed: { "@type": "Country", name: "PL" },
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.png" },
  title: "Pianki Tapicerskie Widuła | Kamyk k. Częstochowy",
  description:
    "Firma Handlowa Pianki Tapicerskie Jacek Widuła - sprzedaż pianek do materaców i tapicerki. Wkłady 7-strefowe, materace do fizjoterapii, wykroje bezpyłowe. Cięcie na wymiar. Kamyk k. Częstochowy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pianki Tapicerskie Widuła",
    description:
      "Sprzedaż pianek tapicerskich do materaców i tapicerki. Cięcie na wymiar. Kamyk k. Częstochowy.",
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Pianki Tapicerskie Widuła",
    images: [
      {
        url: "/assets/og_image.png",
        width: 1200,
        height: 630,
        alt: "Pianki Tapicerskie Widuła — Kamyk k. Częstochowy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pianki Tapicerskie Widuła",
    description: "Sprzedaż pianek tapicerskich. Cięcie na wymiar. Kamyk k. Częstochowy.",
    images: ["/assets/og_image.png"],
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
      className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-site-text antialiased">
        {children}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
