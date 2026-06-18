"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const FEATURES = [
  {
    icon: "✂️",
    title: "Cięcie na wymiar",
    description:
      "Tniemy pianki bezpyłowo na maszynach CNC z tolerancją ±1-2 mm. Dostarczysz wymiary w DXF, PDF lub szkicu - przetniemy dokładnie na wymiar, bez zadzioru i bez kurzu piankowego.",
    animated: false,
  },
  {
    icon: "🏅",
    title: "Sprawdzona jakość",
    description:
      "Pianki z certyfikatem OEKO-TEX® Standard 100 Klasa I i atestem higienicznym NIZP-PZH. Każda dostarczona partia spełnia normy bezpieczeństwa i wytrzymałości, w tym normy trudnopalności PN-EN 1021 tam gdzie wymagane.",
    animated: false,
  },
  {
    icon: "🚚",
    title: "Zapewniamy transport",
    description:
      "Dowozimy zamówienia bezpośrednio do hali produkcyjnej klienta - na terenie całej Polski. Możliwy odbiór osobisty w Kamyku k. Częstochowy (pon-pt 08:00-16:00, sob 08:00-13:00).",
    animated: true,
  },
  {
    icon: "💬",
    title: "Doradztwo",
    description:
      "Pomożemy dobrać twardość, gęstość i typ pianki do zastosowania. Nie wiesz czy potrzebujesz HR, Visco czy Typ T? Zadzwoń lub napisz - doradzimy i przygotujemy próbki.",
    animated: false,
  },
  {
    icon: "📐",
    title: "Dowolne wymiary",
    description:
      "Brak minimalnej ilości - przyjmujemy zamówienia od 1 sztuki. Standardowe i niestandardowe wymiary. Realizacja 2-5 dni roboczych, możliwy tryb ekspresowy.",
    animated: false,
  },
  {
    icon: "🤝",
    title: "Wieloletnie doświadczenie",
    description:
      "Firma Jacka Widuły działa w branży przetwórstwa pianek tapicerskich od ponad 15 lat. Setki obsłużonych producentów mebli, materaców i klientów B2B w całej Polsce.",
    animated: false,
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="section-py bg-white">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Dlaczego my
          </span>
          <h2 className="text-fluid-h2 font-playfair text-navy mb-4">
            Dlaczego producenci wybierają Pianki Widuła?
          </h2>
          <div className="section-divider mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 border border-cream/20 shadow-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-3xl mb-5">
                  <span className={feature.animated ? "icon-truck" : ""}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-fluid-sm text-site-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
