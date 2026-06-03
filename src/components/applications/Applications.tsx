import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const APPLICATIONS = [
  {
    title: "Meblarska",
    description: "Kształtki i formatki do kanap, foteli, sof i mebli tapicerowanych",
    image: "/assets/zastosowania/meblarska.jpeg",
  },
  {
    title: "Materacowa",
    description: "Wkłady materacowe 7-strefowe profilowane CNC",
    image: "/assets/zastosowania/materacowa.jpeg",
  },
  {
    title: "Dziecięca",
    description: "Wkładki do wózków dziecięcych, foteliki samochodowe",
    image: "/assets/zastosowania/dziecieca.jpeg",
  },
  {
    title: "Zoologiczna",
    description: "Legowiska i maty dla psów, kotów i innych zwierząt",
    image: "/assets/zastosowania/zoologiczna.jpeg",
  },
  {
    title: "Sportowa",
    description: "Materace sportowe, maty do ćwiczeń, ochronniki",
    image: "/assets/zastosowania/sportowa.jpeg",
  },
  {
    title: "Rehabilitacyjna",
    description: "Kształtki rehabilitacyjne, podkładki, maty terapeutyczne",
    image: "/assets/zastosowania/rehabilitacyjna.jpeg",
  },
  {
    title: "Motoryzacyjna",
    description: "Materace do kamperów, tirów i przyczep kempingowych",
    image: "/assets/zastosowania/motoryzacyjna.jpeg",
  },
  {
    title: "Akustyczna",
    description: "Panele akustyczne  - tzw. piramidki piankowe",
    image: "/assets/zastosowania/akustyczna.jpeg",
  },
  {
    title: "Ogrodowa",
    description: "Wkłady do mebli ogrodowych i siedzisk zewnętrznych",
    image: "/assets/zastosowania/ogrodowa.jpeg",
  },
];

export default function Applications() {
  return (
    <section id="zastosowania" className="section-py bg-cream-light/30">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Zastosowania
          </span>
          <h2 className="text-fluid-h2 font-playfair text-navy mb-4">
            Zastosowanie pianek
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-site-text-muted max-w-2xl mx-auto">
            Nasze pianki tapicerskie i wkłady CNC trafiają do wielu branż.
            Bezpyłowe cięcie konturowe pozwala realizować nawet najbardziej
            złożone kształty i formatki  - na zamówienie.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, i) => (
            <AnimatedSection key={app.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl overflow-hidden border border-cream/20 shadow-sm card-lift h-full">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={app.image}
                    alt={`Branża ${app.title.toLowerCase()}  - pianki tapicerskie`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-2">
                    Branża {app.title.toLowerCase()}
                  </h3>
                  <p className="text-fluid-sm text-site-text-muted leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
