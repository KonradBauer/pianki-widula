import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CERTS = [
  {
    title: "OEKO-TEX® Standard 100",
    subtitle: "Klasa I - bezpieczne dla niemowląt",
    description:
      "Certyfikat potwierdzający, że pianka tapicerska nie zawiera substancji szkodliwych dla zdrowia. Klasa I - najwyższy poziom bezpieczeństwa, dopuszczony do kontaktu z niemowlętami.",
    image: "/certyfikaty/oeko.jpg",
  },
  {
    title: "Atest higieniczny NIZP-PZH",
    subtitle: "Narodowy Instytut Zdrowia Publicznego",
    description:
      "Atest higieniczny wydany przez Narodowy Instytut Zdrowia Publicznego - Państwowy Instytut Badawczy. Potwierdza spełnienie wymagań zdrowotnych dla pianek tapicerskich.",
    image: "/certyfikaty/atest.jpg",
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
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-white shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
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
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-fluid-sm font-semibold hover:bg-navy-light transition-colors self-start"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Zobacz certyfikat
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
