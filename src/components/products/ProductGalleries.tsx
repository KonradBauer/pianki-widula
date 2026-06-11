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
    id: "wykroje",
    title: "Wykroje bezpyłowe",
    subtitle: "Precyzja CNC · Dowolne kształty · Czyste krawędzie",
    description:
      "Wykroje piankowe wykonywane metodą bezpyłową na sterowanych numerycznie maszynach CNC. Precyzyjne kontury i czyste krawędzie - realizujemy nawet najbardziej zaawansowane projekty.",
    images: [
      ...jpegRange("wykroje", 14),
      "/assets/wykroje/16.png",
      "/assets/wykroje/17.png",
      "/assets/wykroje/18.jpeg",
      "/assets/wykroje/19.jpeg",
      "/assets/wykroje/20.jpeg",
      "/assets/wykroje/21.jpeg",
    ],
    brochure: null as string | null,
  },
  {
    id: "7strefowe",
    title: "Wkłady 7-strefowe profilowane",
    subtitle: "Ergonomia · Wsparcie kręgosłupa · CNC",
    description:
      "Wkłady do materacy z 7 strefami twardości, precyzyjnie profilowane na maszynach CNC. Każda strefa dostosowana do innej partii ciała - optymalny komfort i wsparcie podczas snu.",
    images: [
      "/assets/7strefowe/05.jpeg",
      "/assets/7strefowe/01.jpeg",
      "/assets/7strefowe/02.jpeg",
      "/assets/7strefowe/03.jpeg",
      "/assets/7strefowe/04.jpeg",
      "/assets/7strefowe/06.jpeg",
      "/assets/7strefowe/07.jpeg",
    ],
    brochure: null as string | null,
  },
  {
    id: "legowiska",
    title: "Legowiska dla zwierząt",
    subtitle: "Psy · Koty · Trwałość · Dowolne wymiary",
    description:
      "Wkłady piankowe do legowisk dla psów, kotów i innych zwierząt domowych - wycinane bezpyłowo na maszynach CNC według dowolnego wymiaru i kształtu. Pianki HR i RE odporne na odkształcenia, łatwe do mycia. Idealne dla producentów legowisk i akcesoriów zoologicznych.",
    images: [
      "/assets/legowiska/4.png",
      "/assets/legowiska/1.png",
      "/assets/legowiska/2.png",
      "/assets/legowiska/3.png",
    ],
    brochure: null as string | null,
  },
];

export default function ProductGalleries() {
  return (
    <section id="realizacje" className="bg-bg">
      {SECTIONS.map((section, si) => (
        <div
          key={section.id}
          className="section-py bg-white"
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
