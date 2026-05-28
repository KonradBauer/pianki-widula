"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="o-nas" className="section-py bg-bg">
      <div className="section-px max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
              O firmie
            </span>
            <h2 className="text-fluid-h2 font-playfair text-navy mb-6">
              Pasja do pianki<br />
              <span className="text-navy-light">od lat</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-fluid-body text-site-text-muted mb-6">
              Zajmujemy się przetwórstwem pianki poliuretanowej, a w szczególności
              jej cięciem z wykorzystaniem nowoczesnych maszyn CNC do cięcia
              konturowego, pionowego i poziomego, sterowanych numerycznie.
            </p>
            <p className="text-fluid-body text-site-text-muted mb-8">
              Urządzenia te pozwalają nam na precyzyjne cięcie bloków oraz robienie
              wycięć w oparciu o formatki. Jesteśmy w stanie indywidualnie podejść
              do każdego, nawet najbardziej zaawansowanego projektu, a co
              najważniejsze terminowo wywiązać się z każdej zawartej umowy.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-navy font-semibold text-fluid-sm border-b-2 border-cream pb-0.5 hover:text-navy-light transition-colors"
            >
              Skontaktuj się z nami
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream-light/50 rounded-2xl p-6 border border-cream/30"
                >
                  <div className="text-fluid-h2 font-playfair text-navy font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-fluid-sm text-site-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "15+", label: "Lat doświadczenia" },
  { value: "6", label: "Rodzajów pianek" },
  { value: "100%", label: "Cięcie na wymiar" },
  { value: "PL", label: "Obsługa ogólnopolska" },
];
