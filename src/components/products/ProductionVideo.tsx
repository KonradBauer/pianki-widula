import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProductionVideo() {
  return (
    <section className="section-py bg-navy">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Zobacz jak pracujemy
          </span>
          <h2 className="text-fluid-h2 font-playfair text-white mb-4">
            Proces produkcji
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-white/60 max-w-xl mx-auto">
            Nowoczesne maszyny <span className="font-bold underline text-cream">CNC</span>,{" "}
            <span className="font-bold underline text-cream">cięcie bezpyłowe</span> i wieloletnie
            doświadczenie - tak powstają precyzyjne kształtki, formatki i wkłady materacowe.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 max-w-4xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"

            >
              <source src="/assets/proces-produkcji.mp4" type="video/mp4" />
            </video>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
