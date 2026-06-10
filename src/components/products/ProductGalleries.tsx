import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProductCarousel from "./ProductCarousel";
import { highlight } from "@/lib/highlight";

function jpegRange(folder: string, count: number) {
  return Array.from({ length: count }, (_, i) =>
    `/assets/${folder}/${String(i + 1).padStart(2, "0")}.jpeg`
  );
}

const SECTIONS = [
  {
    id: "fizjoterapia",
    title: "Materace i wkłady do fizjoterapii",
    subtitle: "Szpitale · Domy opieki · Rehabilitacja",
    description:
      "Produkujemy specjalistyczne materace i wkłady piankowe przeznaczone dla placówek medycznych, szpitali i domów opieki. Wykonane z pianek o odpowiedniej twardości i gęstości, zapewniają komfort i wsparcie dla pacjentów.",
    images: [
      ...jpegRange("fizjoterapia", 7),
      "/assets/fizjoterapia/08.png",
    ],
    brochure: null as string | null,
  },
  {
    id: "7strefowe",
    title: "Wkłady 7-strefowe profilowane",
    subtitle: "Ergonomia · Wsparcie kręgosłupa · CNC",
    description:
      "Wkłady do materacy z 7 strefami twardości, precyzyjnie profilowane na maszynach CNC. Każda strefa dostosowana do innej partii ciała - optymalny komfort i wsparcie podczas snu.",
    images: jpegRange("7strefowe", 7),
    brochure: null as string | null,
  },
  {
    id: "wykroje",
    title: "Wykroje bezpyłowe",
    subtitle: "Precyzja CNC · Dowolne kształty · Czyste krawędzie",
    description:
      "Wykroje piankowe wykonywane metodą bezpyłową na sterowanych numerycznie maszynach CNC. Precyzyjne kontury i czyste krawędzie - realizujemy nawet najbardziej zaawansowane projekty.",
    images: [
      ...jpegRange("wykroje", 14),
      "/assets/wykroje/15.png",
      "/assets/wykroje/16.png",
      "/assets/wykroje/17.png",
      "/assets/wykroje/18.jpeg",
      "/assets/wykroje/19.jpeg",
      "/assets/wykroje/20.jpeg",
      "/assets/wykroje/21.jpeg",
    ],
    brochure: "/assets/WYKROJE CNC.png",
  },
];

export default function ProductGalleries() {
  return (
    <section id="realizacje" className="bg-bg">
      {SECTIONS.map((section, si) => (
        <div
          key={section.id}
          className={`section-py ${si % 2 === 1 ? "bg-cream-light/30" : "bg-bg"}`}
        >
          <div className="section-px max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <AnimatedSection
                direction={si % 2 === 0 ? "left" : "right"}
                className={si % 2 === 1 ? "lg:order-2" : ""}
              >
                <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-3">
                  {section.subtitle}
                </span>
                <h2 className="text-fluid-h2 font-playfair text-navy mb-3">
                  {section.title}
                </h2>
                <div className="section-divider mb-5" />
                <p className="text-fluid-body text-site-text-muted">
                  {highlight(section.description)}
                </p>
                {section.brochure && (
                  <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={section.brochure}
                      alt={`${section.title} - broszura`}
                      width={500}
                      height={500}
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </AnimatedSection>

              <AnimatedSection
                direction={si % 2 === 0 ? "right" : "left"}
                delay={0.15}
                className={si % 2 === 1 ? "lg:order-1" : ""}
              >
                <ProductCarousel images={section.images} title={section.title} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
