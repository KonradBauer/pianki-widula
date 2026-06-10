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
  ],
  taxID: "5741004318",
  description:
    "Przetwórnia pianek tapicerskich Widuła  - bezpyłowe wycinanie kształtek, formatek i wkładów materacowych na maszynach CNC. Pianki HR, Visco, Typ T, RE. Cięcie konturowe. B2B. Kamyk k. Częstochowy.",
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
            "Wykroje piankowe metodą bezpyłową na maszynach CNC. Precyzyjne kontury i czyste krawędzie  - dowolne kształty i wymiary według dostarczonej formatki.",
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
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Pianki Tapicerskie Widuła  - Kamyk k. Częstochowy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Przetwórnia Pianek Widuła - Kształtki CNC",
    description: "Bezpyłowe wycinanie kształtek piankowych CNC. Pianki HR, Visco, Typ T. B2B. Kamyk k. Częstochowy.",
    images: ["/og"],
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
        {/* JSON-LD: safe — jsonLd is a hardcoded static object, JSON.stringify escapes all output */}
        <script type="application/ld+json" suppressHydrationWarning
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-site-text antialiased">
        {children}
      </body>
    </html>
  );
}
