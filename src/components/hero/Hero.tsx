"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #4D9028 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #3D7A1F 0%, transparent 50%)`,
        }}
      />

      {/* Geometric decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 600 800" fill="none" className="w-full h-full">
          <rect x="100" y="50" width="400" height="400" stroke="#4D9028" strokeWidth="1" transform="rotate(15 300 250)" />
          <rect x="150" y="100" width="300" height="300" stroke="#4D9028" strokeWidth="0.5" transform="rotate(30 300 250)" />
        </svg>
      </div>

      <div className="relative z-10 section-px max-w-5xl mx-auto text-center">
        <span
          className="animate-in-fade inline-block px-4 py-1.5 rounded-full border border-cream/40 text-cream text-fluid-sm font-medium mb-6 tracking-wide uppercase"
          style={{ animationDelay: "0s" }}
        >
          Od lat w branży tapicerskiej
        </span>

        <h1
          className="animate-in-up text-fluid-hero font-playfair text-white mb-6 leading-tight"
          style={{ animationDelay: "0.12s" }}
        >
          Pianki tapicerskie{" "}
          <span className="text-cream italic">najwyższej jakości</span>
        </h1>

        <p
          className="animate-in-up text-fluid-body text-white/70 max-w-2xl mx-auto mb-10"
          style={{ animationDelay: "0.26s" }}
        >
          Sprzedaż pianek do materaców i tapicerki - HR, Visco, PUR, lateks, kokos.
          Cięcie na wymiar. Obsługujemy klientów indywidualnych i firmy.
        </p>

        <div
          className="animate-in-up flex flex-wrap gap-4 justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#oferta"
            className="px-8 py-4 rounded-full bg-cream text-navy font-semibold text-fluid-sm hover:bg-cream-light transition-all hover:scale-105 shadow-lg shadow-cream/20"
          >
            Zobacz ofertę
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-fluid-sm hover:bg-white/10 transition-all"
          >
            Skontaktuj się
          </a>
        </div>

      </div>
    </section>
  );
}
