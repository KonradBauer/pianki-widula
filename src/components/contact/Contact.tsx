"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "./ContactForm";
import Map from "./Map";

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Adres",
    value: "ul. Władysława Reymonta 136\n42-125 Kamyk",
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "+48 502 490 104",
    href: "tel:+48502490104",
  },
];

const HOURS = [
  { day: "Poniedziałek – Piątek", hours: "08:00 – 16:00" },
  { day: "Sobota",                hours: "08:00 – 13:00" },
  { day: "Niedziela",             hours: null },
];

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  if (day === 0) return false;
  if (day === 6) return hour >= 8 && hour < 13;
  return hour >= 8 && hour < 16;
}

export default function Contact() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    const init = setTimeout(update, 0);
    const timer = setInterval(update, 60_000);
    return () => {
      clearTimeout(init);
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="kontakt" className="section-py bg-bg">
      <div className="section-px max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-cream font-semibold text-fluid-sm tracking-widest uppercase mb-4">
            Kontakt
          </span>
          <h2 className="text-fluid-h2 font-playfair text-navy mb-4">
            Skontaktuj się z nami
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-fluid-body text-site-text-muted max-w-xl mx-auto">
            Masz pytanie o ofertę, ceny lub wymiary? Napisz lub zadzwoń -
            odpiszemy tak szybko jak to możliwe.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream/20 shadow-sm">
              <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-6">
                Napisz do nas
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Map + info */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="flex flex-col gap-6 h-full">
              {/* Info boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#CCCCCC] rounded-xl p-4 border border-navy/20"
                  >
                    <span className="text-xl mb-2 block" aria-hidden="true">{item.icon}</span>
                    <span className="text-xs font-semibold text-navy tracking-widest uppercase block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-fluid-sm text-navy hover:text-navy-light transition-colors whitespace-pre-line break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-fluid-sm text-navy whitespace-pre-line">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-[#CCCCCC] rounded-xl p-4 border border-navy/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl" aria-hidden="true">🕐</span>
                  <span className="text-xs font-semibold text-navy tracking-widest uppercase">
                    Godziny pracy
                  </span>
                  {open !== null && (
                    <span
                      className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${
                        open
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {open ? "Otwarte teraz" : "Zamknięte"}
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-1">
                  {HOURS.map(({ day, hours }) => (
                    <li
                      key={day}
                      className="flex justify-between text-fluid-sm"
                    >
                      <span className="text-navy">{day}</span>
                      {hours ? (
                        <span className="text-navy font-medium">{hours}</span>
                      ) : (
                        <span className="text-red-400 font-medium">Zamknięte</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="flex-1 min-h-64">
                <Map />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
