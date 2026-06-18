import AnimatedSection from "@/components/ui/AnimatedSection";
import { highlight } from "@/lib/highlight";

const FOAM_TYPES = [
  {
    type: "Typ T",
    name: "Pianka standardowa i trudnopalna",
    description:
      "Pianka poliuretanowa standardowa (Typ T) to podstawowy materiał w branży meblarskiej i materacowej. Produkowana metodą ciagłego spieniania, dostępna w gęstościach 20-45 kg/m³ i twardościach 15-40 N/314 cm² wg normy PN-EN ISO 2439. Wersja trudnopalna spełnia normy PN-EN 1021-1 i PN-EN 1021-2 - wymagane obowiązkowo w hotelach, restauracjach, biurach i środkach transportu publicznego. W przetwórni Widuła tniemy piankę Typ T bezpyłowo na maszynach CNC z tolerancją ±1-2 mm. Dostępna w arkuszach i blokach, cięta na kształtki, formatki i pasy według dokumentacji klienta w formacie DXF, PDF lub szkicu z wymiarami. Minimalne zamówienie: 1 sztuka. Czas realizacji: 2-5 dni roboczych.",
  },
  {
    type: "Typ HR",
    name: "Pianka wysokoelastyczna i trudnopalna",
    description:
      "Pianka wysokoelastyczna HR (High Resilience) wyróżnia się współczynnikiem odbicia sprężystego powyżej 45% - znacznie wyższym niż pianki standardowe (25-35%), mierzonym wg PN-EN ISO 8307. Parametr ten decyduje o trwałości i komforcie materaca lub siedziska przez lata użytkowania. Dostępna w gęstościach 25-80 kg/m³ i twardościach 15-55 N/314 cm². Wysoka sprężystość eliminuje efekt trwałego ugniotu - materac lub siedzisko wraca do pierwotnego kształtu nawet po wieloletnim codziennym użytkowaniu. Główne zastosowania: wkłady 7-strefowe profilowane CNC, siedziska i oparcia mebli tapicerowanych premium, wkłady rehabilitacyjne. Dostępna także w wersji trudnopalnej HR-T (norma PN-EN 1021).",
  },
  {
    type: "Visco / Memory",
    name: "Pianka termoelastyczna",
    description:
      "Pianka termoelastyczna Visco (zwana Memory lub Tempur) odkształca się pod wpływem ciepła i ciężaru ciała - temperatura ok. 37°C zmiękcza strukturę komórkową, która powoli wraca do kształtu po zwolnieniu nacisku (czas powrotu: 5-10 sekund). Gęstość dostępna w zakresie 50-80 kg/m³. Wyższa gęstość przekłada się na lepsze dopasowanie i dłuższą trwałość produktu. Stosowana w materacach ortopedycznych, kształtkach przeciwodleżynowych (szpitale, domy opieki, hospicja), wkładach rehabilitacyjnych i poduszkach ergonomicznych. Wymaga podkładu z pianki HR lub sprężyn - nie stosuje się jako samodzielny materac. W przetwórni Widuła tniemy Visco na kształtki i wkłady wg dokumentacji DXF lub szkicu.",
  },
  {
    type: "Typ RE",
    name: "Pianka wtórnie spieniana",
    description:
      "Pianka wtórnie spieniana RE (Recycled) produkowana jest z rozdrobnionych odpadów piankowych sklejonych żywicą poliuretanową i sprasowanych pod ciśnieniem. Gęstość wynosi 40-100 kg/m³ - wyższa niż większości pianek pierwotnych, co przekłada się na dużą odporność na ściskanie. Współczynnik odbicia sprężystego jest niski (10-20%), dlatego RE stosuje się tam gdzie potrzebne jest twarde wypełnienie bez wymagań komfortowych. Zastosowania: dna materaców sportowych, podkłady pod dywany, podłogi siłowni, maty ochronne, wypełnienia mebli ogrodowych. Materiał ekologiczny - zmniejsza ilość odpadów piankowych. W przetwórni Widuła dostępna w arkuszach i blokach, cięta CNC na formatki i kształtki na zamówienie.",
  },
];

export default function FoamTypes() {
  return (
    <section id="rodzaje-pianek" className="section-py bg-navy">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Materiały
          </span>
          <h2 className="text-fluid-h2 font-playfair text-white mb-4">
            Jakie rodzaje pianek tapicerskich oferujemy?
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-white/60 max-w-2xl mx-auto">
            {highlight("Oferujemy pianki poliuretanowe wszystkich klas - od standardowych po specjalistyczne. Każdy typ dostępny w różnych twardościach i gęstościach, cięty bezpyłowo na maszynach CNC.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FOAM_TYPES.map((foam, i) => (
            <AnimatedSection key={foam.type} delay={i * 0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/8 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-cream-light text-navy">
                  {foam.type}
                </span>
                <h3 className="text-fluid-h3 font-playfair text-white font-semibold mb-3">
                  {foam.name}
                </h3>
                <p className="text-fluid-sm text-white/60 leading-relaxed">
                  {foam.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
