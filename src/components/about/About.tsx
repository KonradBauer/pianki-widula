import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { highlight } from "@/lib/highlight";

export default function About() {
  return (
    <section id="o-nas" className="section-py bg-bg">
      <div className="section-px max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
              O nas
            </span>
            <h2 className="text-fluid-h2 font-playfair text-navy mb-6">
              Pasja do pianki<br />
              <span className="text-navy-light">od lat</span>
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-fluid-body text-site-text-muted mb-6">
              {highlight("Specjalizujemy się w precyzyjnym przetwarzaniu pianki tapicerskiej na maszynach CNC, dostarczając najwyższej jakości kształtki, formatki oraz wkłady materacowe dopasowane do Twoich potrzeb.")}
            </p>
            <p className="text-fluid-body text-site-text-muted mb-8">
              {highlight("Wykorzystując zaawansowaną technologię CNC, przekształcamy piankę tapicerską w perfekcyjnie docięte formatki, kształtki i wkłady materacowe 7 strefowe jednostronne i dwustronne - bezpyłowo, precyzyjnie, na wymiar.")}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-navy font-semibold text-fluid-sm border-b-2 border-cream pb-0.5 hover:text-navy-light transition-colors"
            >
              Skontaktuj się z nami
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimatedSection>

          {/* Product photo */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/wykroje/17.png"
                alt="Wykroje bezpyłowe CNC - Pianki Widuła"
                width={600}
                height={750}
                className="w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-navy rounded-lg px-3 py-1.5 flex items-baseline gap-2">
                  <span className="text-cream font-bold text-lg leading-none">{stat.value}</span>
                  <span className="text-white/80 text-xs">{stat.label}</span>
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
