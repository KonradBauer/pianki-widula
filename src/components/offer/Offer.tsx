import AnimatedSection from "@/components/ui/AnimatedSection";
import OfferCard from "./OfferCard";

const PRODUCTS = [
  {
    name: "Pianka HR",
    subtitle: "High Resilience",
    description:
      "Pianka wysokoelastyczna stosowana w wkładach 7-strefowych i materacach rehabilitacyjnych. Precyzyjnie profilowana na maszynach CNC - zapewnia optymalne wsparcie każdej strefy ciała.",
    properties: ["Wkłady 7-strefowe", "Materace rehab.", "Profilowanie CNC", "Wysoka trwałość"],
    icon: "🛏️",
  },
  {
    name: "Pianka T",
    subtitle: "T-25 / T-30",
    description:
      "Podstawowy materiał do wykrojów bezpyłowych i wkładów do materacy. Cięcie konturowe, pionowe i poziome na maszynach CNC - realizujemy dowolne kształty i wymiary.",
    properties: ["Wykroje bezpyłowe", "Cięcie CNC", "T-25 / T-30", "Dowolne wymiary"],
    icon: "✂️",
  },
  {
    name: "Pianka Visco",
    subtitle: "Memory Foam",
    description:
      "Pianka termoelastyczna do wkładów 7-strefowych dla placówek medycznych i domów opieki. Redukuje punkty nacisku - szczególnie zalecana w profilaktyce odleżyn.",
    properties: ["Domy opieki", "Profilaktyka odleżyn", "7-strefowe", "Antyalergiczna"],
    icon: "🌙",
  },
  {
    name: "Pianka PUR",
    subtitle: "Poliuretanowa",
    description:
      "Wszechstronny materiał do wykrojów i wkładów na zamówienie. Cięcie bezpyłowe na maszynach CNC pozwala uzyskać precyzyjne kształty zgodnie z dostarczoną formatką.",
    properties: ["Wykroje na zamówienie", "Cięcie bezpyłowe", "Różne gęstości", "Przemysłowa"],
    icon: "⚙️",
  },
  {
    name: "Lateks",
    subtitle: "Naturalny",
    description:
      "Pianka lateksowa do wkładów materacowych najwyższej klasy. Stosowana w materacach dla szpitali i domów opieki - naturalna, odporna na grzyby i roztocza.",
    properties: ["Szpitale", "Antyalergiczna", "Antygrzybicza", "Naturalna"],
    icon: "🌿",
  },
  {
    name: "Mata kokosowa",
    subtitle: "Włókno kokosowe",
    description:
      "Twarda warstwa bazowa do materacy i wkładów 7-strefowych. Zapewnia stabilne podparcie i wentylację - stosowana jako pierwsza strefa od podstawy materaca.",
    properties: ["Warstwa bazowa", "7-strefowe", "Przewiewna", "Naturalna"],
    icon: "🥥",
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
