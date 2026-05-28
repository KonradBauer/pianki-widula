import AnimatedSection from "@/components/ui/AnimatedSection";
import OfferCard from "./OfferCard";

const PRODUCTS = [
  {
    name: "Wkłady do fizjoterapii",
    subtitle: "Szpitale · Domy opieki · Rehabilitacja",
    description:
      "Specjalistyczne wkłady i materace piankowe do placówek medycznych, szpitali i domów opieki. Wykonane z pianek o odpowiednich parametrach twardości i gęstości - komfort i wsparcie pacjentów.",
    properties: ["Szpitale", "Domy opieki", "Rehabilitacja", "Na zamówienie"],
    icon: "🏥",
  },
  {
    name: "Wkłady 7-strefowe",
    subtitle: "Ergonomia · Wsparcie kręgosłupa · CNC",
    description:
      "Wkłady do materacy z 7 strefami twardości, precyzyjnie profilowane na maszynach CNC. Każda strefa dostosowana do innej partii ciała - optymalny komfort i wsparcie podczas snu.",
    properties: ["7 stref twardości", "Profilowanie CNC", "Dowolne wymiary", "Ergonomiczne"],
    icon: "🛏️",
  },
  {
    name: "Wykroje bezpyłowe",
    subtitle: "Precyzja CNC · Dowolne kształty · Czyste krawędzie",
    description:
      "Wykroje piankowe wykonywane metodą bezpyłową na maszynach CNC. Precyzyjne kontury i czyste krawędzie - realizujemy dowolne kształty i wymiary według dostarczonej formatki.",
    properties: ["Cięcie bezpyłowe", "Maszyny CNC", "Dowolne kształty", "Czyste krawędzie"],
    icon: "✂️",
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="section-py bg-navy">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Asortyment
          </span>
          <h2 className="text-fluid-h2 font-playfair text-white mb-4">
            Nasza oferta
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-white/60 max-w-2xl mx-auto">
            Oferujemy pełen przekrój pianek tapicerskich - od budżetowych
            po premium. Każdy rodzaj dostępny w różnych grubościach i twardościach.
            Cięcie na wymiar według podanych wymiarów.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <OfferCard key={product.name} {...product} index={i} />
          ))}
        </div>

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
