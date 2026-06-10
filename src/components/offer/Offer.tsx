import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import OfferCard from "./OfferCard";
import { highlight } from "@/lib/highlight";

const PRODUCTS = [
  {
    name: "Producenci mebli tapicerowanych",
    subtitle: "Kanapy · Fotele · Sofy · Meble ogrodowe",
    description:
      "Precyzyjnie cięte kształtki i formatki piankowe dla producentów mebli tapicerowanych. Pianki poliuretanowe standardowe, trudnopalne (Typ T) i wysokoelastyczne (HR)  - dowolne wymiary i kształty.",
    properties: ["Kanapy", "Fotele", "Sofy", "Meble ogrodowe"],
    icon: "🛋️",
    image: "/assets/oferta/meble-tapicerowane.jpeg",
  },
  {
    name: "Producenci materaców",
    subtitle: "Wkłady 7-strefowe · Rehabilitacja · CNC",
    description:
      "Wkłady materacowe 7-strefowe profilowane CNC, wkłady do fizjoterapii i rehabilitacji, materace do kamperów i tirów. Pianki HR, Visco/Memory i RE  - każda twardość i gęstość.",
    properties: ["Wkłady 7-strefowe", "Fizjoterapia", "Kampery", "Sportowe"],
    icon: "🛏️",
    image: "/assets/oferta/materace.jpeg",
  },
  {
    name: "Pozostałe zastosowania",
    subtitle: "Dziecięca · Zoologiczna · Akustyczna",
    description:
      "Pianki do wózków dziecięcych, fotelików, legowisk dla zwierząt, paneli akustycznych (piramidki) i wielu innych. Bezpyłowe cięcie CNC umożliwia realizację nawet najbardziej złożonych kształtów.",
    properties: ["Wózki dziecięce", "Legowiska", "Panele akustyczne", "Foteliki"],
    icon: "📦",
    image: "/assets/oferta/pozostale.jpeg",
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="section-py bg-navy">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Oferta
          </span>
          <h2 className="text-fluid-h2 font-playfair text-white mb-4">
            Nasza oferta
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-white/60 max-w-2xl mx-auto">
            {highlight("Precyzyjne cięcie CNC pianek tapicerskich dla producentów mebli, materaców i wielu innych branż. Kształtki, formatki i wkłady materacowe - bezpyłowo, na wymiar, według Twojej specyfikacji.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <OfferCard key={product.name} {...product} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto">
            <Image
              src="/assets/Pianki do mebli tapicerowanych.png"
              alt="Pianki do mebli tapicerowanych - FH Pianki Widuła"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <p className="text-white/50 text-fluid-sm mb-6">
            Nie znalazłeś tego, czego szukasz? Skontaktuj się - mamy więcej w ofercie.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cream/40 text-cream font-semibold text-fluid-sm hover:bg-cream/10 transition-all"
          >
            Zapytaj o dostępność
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
