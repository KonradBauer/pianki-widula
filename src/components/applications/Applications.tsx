import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { highlight } from "@/lib/highlight";

const APPLICATIONS = [
  {
    title: "Meblarska",
    description: "Kształtki i formatki do kanap, foteli, sof i mebli tapicerowanych",
    image: "/assets/zastosowania/meblarska.png",
  },
  {
    title: "Materacowa",
    description: "Wkłady materacowe 7-strefowe jednostronne i dwustronne profilowane CNC",
    image: "/assets/zastosowania/materacowa.png",
  },
  {
    title: "Dziecięca",
    description: "Formatki do wózków dziecięcych i fotelików samochodowych",
    image: "/assets/zastosowania/dziecieca.webp",
    contain: true,
  },
  {
    title: "Zoologiczna",
    description: "Legowiska, ramposchody, schody dla psów i kotów oraz innych zwierząt",
    image: "/assets/zastosowania/zoologiczna.webp",
    contain: true,
  },
  {
    title: "Sportowa",
    description: "Materace gimnastyczne i asekuracyjne oraz klocki i tory przeszkód dla dzieci",
    image: "/assets/zastosowania/sportowa.jpg",
    contain: true,
  },
  {
    title: "Rehabilitacyjna",
    description: "Materace rehabilitacyjne i przeciwodleżynowe, kliny rehabilitacyjne do ćwiczeń i terapii",
    image: "/assets/zastosowania/rehabilitacyjna.png",
  },
  {
    title: "Motoryzacyjna",
    description: "Materace do kamperów, tirów i przyczep kempingowych",
    image: "/assets/zastosowania/motoryzacyjna.webp",
  },
  {
    title: "Akustyczna",
    description: "Panele akustyczne  - tzw. piramidki piankowe",
    image: "/assets/zastosowania/akustyczna.jpeg",
  },
  {
    title: "Ogrodowa",
    description: "Wkłady do mebli ogrodowych i siedzisk zewnętrznych",
    image: "/assets/zastosowania/ogrodowa.webp",
  },
];

export default function Applications() {
  return (
    <section id="zastosowania" className="section-py bg-white">
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
            {highlight("Nasze pianki tapicerskie i wkłady CNC trafiają do wielu branż. Bezpyłowe cięcie konturowe pozwala realizować nawet najbardziej złożone kształty i formatki - na zamówienie.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, i) => (
            <AnimatedSection key={app.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl overflow-hidden border border-cream/20 shadow-sm h-full group">
                <div className={`relative aspect-[4/3] w-full overflow-hidden ${"contain" in app && app.contain ? "bg-white p-4" : ""}`}>
                  <Image
                    src={app.image}
                    alt={`Branża ${app.title.toLowerCase()}  - pianki tapicerskie`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={"contain" in app && app.contain ? "object-contain transition-transform duration-500 group-hover:scale-105" : "object-cover transition-transform duration-500 group-hover:scale-110"}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-2">
                    Branża {app.title.toLowerCase()}
                  </h3>
                  <p className="text-fluid-sm text-site-text-muted leading-relaxed">
                    {highlight(app.description)}
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
