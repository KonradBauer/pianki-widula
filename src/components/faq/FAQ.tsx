import AnimatedSection from "@/components/ui/AnimatedSection";

const FAQ_ITEMS = [
  {
    question: "Jakie formaty plików przyjmujecie do cięcia CNC?",
    answer:
      "Przyjmujemy pliki DXF, PDF oraz zdjecia i szkice z wymiarami. Do cięcia konturowego kształtek najlepsza jest dokumentacja techniczna w formacie DXF. Jeśli nie posiadasz pliku technicznego, możemy opracować go na podstawie przesłanego szkicu lub próbki.",
  },
  {
    question: "Jaki jest minimalny wymiar i minimalna ilość zamówienia?",
    answer:
      "Realizujemy zarówno zamówienia jednostkowe, jak i hurtowe. Nie ma minimalnej ilości - przyjmujemy zamówienia od 1 sztuki. Minimalny wymiar kształtki zależy od rodzaju cięcia i grubości pianki.",
  },
  {
    question: "Jak długo trwa realizacja zamówienia?",
    answer:
      "Standardowy czas realizacji to 2-5 dni roboczych od momentu potwierdzenia zamówienia i dostarczenia dokumentacji. Pilne zamówienia realizujemy w trybie ekspresowym.",
  },
  {
    question: "Czy wysyłacie pianki w całej Polsce?",
    answer:
      "Tak, obsługujemy klientów z całej Polski. Zapewniamy transport bezpośrednio do klienta. Możliwy jest także odbiór osobisty w Kamyku k. Częstochowy.",
  },
  {
    question: "Jaka jest dokładność cięcia CNC?",
    answer:
      "Nasze maszyny CNC zapewniają precyzję cięcia z tolerancją ±1-2 mm. Cięcie bezpyłowe gwarantuje czyste krawędzie bez zadzioru.",
  },
  {
    question: "Jak złożyć zamówienie na cięcie CNC pianki?",
    answer:
      "Najprościej przez formularz kontaktowy lub telefonicznie (+48 502 490 104). Prześlij wymiary, rodzaj pianki i ilość - przygotujemy wycenę. Odpisujemy w ciągu 24 godzin w dni robocze.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-py bg-white">
      <div className="section-px max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-fluid-h2 font-playfair text-navy mb-4">
            Najczęściej zadawane pytania
          </h2>
          <div className="section-divider mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((item, i) => (
            <AnimatedSection key={item.question} delay={i * 0.07}>
              <div className="border border-cream/30 rounded-2xl p-6 h-full bg-cream-light/10 hover:border-cream/60 transition-colors">
                <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-3">
                  {item.question}
                </h3>
                <p className="text-fluid-sm text-site-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
