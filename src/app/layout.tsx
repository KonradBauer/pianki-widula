import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "Pianki Tapicerskie Widuła | Kamyk k. Częstochowy",
  description:
    "Firma Handlowa Pianki Tapicerskie Jacek Widuła - sprzedaż pianek do materaców i tapicerki: HR, Visco, PUR, lateks, kokos. Cięcie na wymiar. Kamyk k. Częstochowy.",
  keywords: [
    "pianki tapicerskie",
    "pianka do materaca",
    "pianka HR",
    "pianka visco",
    "pianka PUR",
    "pianka lateksowa",
    "kokos do materaca",
    "Kamyk",
    "Częstochowa",
    "cięcie pianki na wymiar",
  ],
  openGraph: {
    title: "Pianki Tapicerskie Widuła",
    description:
      "Sprzedaż pianek tapicerskich do materaców i tapicerki. Cięcie na wymiar. Kamyk k. Częstochowy.",
    type: "website",
    locale: "pl_PL",
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
      className={`${geistSans.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-site-text antialiased">
        {children}
      </body>
    </html>
  );
}
