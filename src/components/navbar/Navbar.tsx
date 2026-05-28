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
        <Link href="#hero" className="relative z-50 flex items-center group" onClick={handleNavClick}>
          {/* mobile */}
          <Image
            src="/favicon.png"
            alt="Pianki Tapicerskie Widuła"
            width={40}
            height={40}
            className="md:hidden object-contain rounded-lg"
          />
          {/* desktop */}
          <div className={`hidden md:block rounded-xl px-3 py-1.5 transition-all duration-300 ${!scrolled ? "bg-white shadow-sm" : ""}`}>
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
          className={`md:hidden flex flex-col gap-1.5 p-2 z-50 relative ${
            menuOpen ? "text-white" : scrolled ? "text-navy" : "text-white"
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

      {/* Mobile menu — full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy flex flex-col transition-[transform,opacity] duration-300 ease-in-out ${
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links — center */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`text-white font-playfair text-3xl font-semibold py-3 border-b border-white/10 w-full text-center hover:text-cream transition-[color,opacity,transform] duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className={`mt-6 px-8 py-3.5 rounded-full bg-cream text-navy font-semibold text-lg hover:bg-cream-light transition-[background-color,opacity,transform] duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 50}ms` : "0ms" }}
          >
            Zapytaj o ofertę
          </a>
        </nav>

        {/* Socials — bottom */}
        <div
          className={`pb-10 flex flex-col items-center gap-4 transition-[opacity,transform] duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: menuOpen ? "380ms" : "0ms" }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Znajdź nas</span>
          <a
            href="https://www.facebook.com/profile.php?id=100080380672291"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
          >
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
