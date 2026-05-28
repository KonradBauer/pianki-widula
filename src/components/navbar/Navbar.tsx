"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-cream/30"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="section-px max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Logo */}
        <Link href="#hero" className="flex items-center group">
          <div className={`rounded-xl px-3 py-1.5 transition-all duration-300 ${!scrolled ? "bg-white shadow-sm" : ""}`}>
            <Image
              src="/logo-v3.png"
              alt="Pianki Tapicerskie Widuła"
              width={110}
              height={96}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-fluid-sm font-medium transition-colors hover:text-cream relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cream after:transition-all hover:after:w-full ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-navy text-fluid-sm font-semibold hover:bg-cream-light transition-colors"
        >
          Zapytaj o ofertę
        </a>

        {/* Hamburger mobile */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          menuOpen ? "max-h-96 border-b border-cream/30" : "max-h-0"
        }`}
      >
        <ul className="section-px py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block text-navy font-medium text-fluid-sm py-2 border-b border-cream-light/50 hover:text-navy-light transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-navy text-fluid-sm font-semibold hover:bg-cream-light transition-colors"
            >
              Zapytaj o ofertę
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
