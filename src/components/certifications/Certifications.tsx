import AnimatedSection from "@/components/ui/AnimatedSection";

const CERTS = [
  {
    title: "OEKO-TEX® Standard 100",
    subtitle: "Klasa I  - bezpieczne dla niemowląt",
    description:
      "Certyfikat potwierdzający, że pianka tapicerska nie zawiera substancji szkodliwych dla zdrowia. Klasa I  - najwyższy poziom bezpieczeństwa, dopuszczony do kontaktu z niemowlętami.",
    icon: "🏅",
    file: "/certyfikaty/oeko-tex-bestpur-2025.pdf" as string | null,
    source: "Certyfikat BESTPUR Polymers",
  },
  {
    title: "Atest higieniczny NIZP-PZH",
    subtitle: "Narodowy Instytut Zdrowia Publicznego",
    description:
      "Atest higieniczny wydany przez Narodowy Instytut Zdrowia Publicznego  - Państwowy Instytut Badawczy. Potwierdza spełnienie wymagań zdrowotnych dla pianek tapicerskich.",
    icon: "📋",
    file: "/certyfikaty/atest-higieniczny-pzh.pdf" as string | null,
    source: "Atest BESTPUR Polymers",
  },
];

export default function Certifications() {
  return (
    <section id="certyfikaty" className="section-py bg-bg">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Certyfikaty
          </span>
          <h2 className="text-fluid-h2 font-playfair text-navy mb-4">
            Certyfikaty i atesty
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-site-text-muted max-w-2xl mx-auto">
            Oferowane przez nas pianki tapicerskie posiadają wymagane certyfikaty
            bezpieczeństwa i atesty higieniczne.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTS.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1}>
              <div className="border-2 border-cream/30 rounded-2xl p-8 h-full flex flex-col gap-4 bg-cream-light/10 hover:border-cream/60 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-cream-light flex items-center justify-center text-3xl shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-1">
                    {cert.title}
                  </h3>
                  <span className="text-cream text-fluid-sm font-medium">
                    {cert.subtitle}
                  </span>
                </div>
                <p className="text-fluid-sm text-site-text-muted leading-relaxed flex-1">
                  {cert.description}
                </p>
                {cert.file ? (
                  <div className="flex flex-col gap-2">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-fluid-sm font-semibold hover:bg-navy-light transition-colors self-start"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      Pobierz certyfikat (PDF)
                    </a>
                    <span className="text-xs text-site-text-muted">{cert.source}</span>
                  </div>
                ) : (
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 text-navy font-semibold text-fluid-sm border-b-2 border-cream pb-0.5 hover:text-navy-light transition-colors self-start"
                  >
                    Certyfikat dostępny na życzenie  - skontaktuj się z nami
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
