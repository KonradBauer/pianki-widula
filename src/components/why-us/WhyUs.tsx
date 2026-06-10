"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const FEATURES = [
  {
    icon: "✂️",
    title: "Cięcie na wymiar",
    description:
      "Tniemy pianki dokładnie według podanych wymiarów. Zero odpadów, idealne dopasowanie do twojego materaca lub mebla.",
    animated: false,
  },
  {
    icon: "🏅",
    title: "Sprawdzona jakość",
    description:
      "Współpracujemy wyłącznie z renomowanymi producentami. Każda pianka spełnia normy bezpieczeństwa i wytrzymałości.",
    animated: false,
  },
  {
    icon: "🚚",
    title: "Zapewniamy transport",
    description:
      "Dowozimy zamówienia bezpośrednio do klienta. Nie musisz martwić się o odbiór - zajmiemy się dostawą na terenie całej Polski.",
    animated: true,
  },
  {
    icon: "💬",
    title: "Doradztwo",
    description:
      "Pomożemy dobrać odpowiednią piankę do twoich potrzeb. Nie wiesz co wybrać? Skontaktuj się - doradzimy.",
    animated: false,
  },
  {
    icon: "📐",
    title: "Dowolne wymiary",
    description:
      "Standardowe i niestandardowe rozmiary. Pojedyncze sztuki i zamówienia hurtowe - obsługujemy każde zlecenie.",
    animated: false,
  },
  {
    icon: "🤝",
    title: "Wieloletnie doświadczenie",
    description:
      "Działamy od lat w branży tapicerskiej. Wiemy co robimy i dbamy o to, żeby każdy klient był zadowolony.",
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
            Co nas wyróżnia
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
