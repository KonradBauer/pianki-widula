import AnimatedSection from "@/components/ui/AnimatedSection";
import { highlight } from "@/lib/highlight";

const FOAM_TYPES = [
  {
    type: "Typ T",
    name: "Pianka standardowa i trudnopalna",
    description:
      "Pianka poliuretanowa standardowa oraz wersja trudnopalna (T). Podstawowy materiał w branży meblarskiej i materacowej - dostępna w szerokim zakresie twardości i gęstości.",
  },
  {
    type: "Typ HR",
    name: "Pianka wysokoelastyczna i trudnopalna",
    description:
      "High Resilience - wysoka sprężystość, długa trwałość. Idealna do wkładów 7-strefowych, materaców premium i mebli tapicerowanych wymagających doskonałego komfortu.",
  },
  {
    type: "Visco / Memory",
    name: "Pianka termoelastyczna",
    description:
      "Powoli odkształca się pod wpływem ciepła ciała, precyzyjnie dopasowując się do jego kształtu. Stosowana w materacach ortopedycznych i kształtkach rehabilitacyjnych.",
  },
  {
    type: "Typ RE",
    name: "Pianka wtórnie spieniana",
    description:
      "Produkowana z recyklingu odpadów piankowych. Ekonomiczna i ekologiczna - sprawdza się jako wypełnienie w materacach sportowych i różnych podkładach oraz wszędzie tam gdzie nie jest wymagana wysoka elastyczność.",
  },
];

export default function FoamTypes() {
  return (
    <section id="rodzaje-pianek" className="section-py bg-navy">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Materiały
          </span>
          <h2 className="text-fluid-h2 font-playfair text-white mb-4">
            Rodzaje pianek w ofercie
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-white/60 max-w-2xl mx-auto">
            {highlight("Oferujemy pianki poliuretanowe wszystkich klas - od standardowych po specjalistyczne. Każdy typ dostępny w różnych twardościach i gęstościach, cięty bezpyłowo na maszynach CNC.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FOAM_TYPES.map((foam, i) => (
            <AnimatedSection key={foam.type} delay={i * 0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/8 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-cream-light text-navy">
                  {foam.type}
                </span>
                <h3 className="text-fluid-h3 font-playfair text-white font-semibold mb-3">
                  {foam.name}
                </h3>
                <p className="text-fluid-sm text-white/60 leading-relaxed">
                  {foam.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
