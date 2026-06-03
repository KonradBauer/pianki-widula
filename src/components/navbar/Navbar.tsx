"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/config/navigation";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";

const STAGGER_DELAYS = [
  "delay-[80ms]",
  "delay-[130ms]",
  "delay-[180ms]",
  "delay-[230ms]",
  "delay-[280ms]",
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
    return () => { document.documentElement.classList.remove("overflow-hidden"); };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); return; }
      if (e.key !== "Tab") return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusable = Array.from(
        overlay.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-cream/30"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <nav className="section-px max-w-7xl mx-auto flex items-center justify-between py-2">
          <Link
            href="#hero"
            className="relative z-50 flex items-center group"
            onClick={handleNavClick}
          >
            <div className="md:hidden bg-white rounded-lg px-2 py-1 shadow-sm">
              <Image
                src="/logo.png"
                alt="Pianki Tapicerskie Widuła"
                width={160}
                height={55}
                className="object-contain h-10 w-auto"
              />
            </div>
            <div
              className="hidden md:block rounded-xl px-3 py-1.5 transition-all duration-300 bg-white shadow-sm"
            >
              <Image
                src="/logo.png"
                alt="Pianki Tapicerskie Widuła"
                width={220}
                height={192}
                className="object-contain"
              />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-fluid-sm font-medium transition-colors hover:text-cream relative",
                    "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cream after:transition-all hover:after:w-full",
                    scrolled ? "text-navy" : "text-white"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-fluid-sm font-semibold hover:bg-navy-light transition-all"
          >
            Zapytaj o ofertę
          </a>

          {/* placeholder — zachowuje szerokość hamburger na desktopie */}
          <div className="md:hidden w-10 h-10" aria-hidden="true" />
        </nav>
      </header>

      {/* Hamburger — fixed poza headerem, zawsze na wierzchu */}
      <button
        className={cn(
          "md:hidden fixed top-[18px] right-[clamp(1.25rem,5vw,6rem)] z-[60] flex flex-col gap-1.5 p-2 cursor-pointer",
          menuOpen ? "text-white" : scrolled ? "text-navy" : "text-white"
        )}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
        <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", menuOpen && "opacity-0")} />
        <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Overlay — ponad headerem */}
      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne"
        className={cn(
          "md:hidden fixed inset-0 z-[55] bg-navy flex flex-col transition-transform duration-300 ease-in-out",
          menuOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "text-white font-playfair text-3xl font-semibold py-3 border-b border-white/10 w-full text-center hover:text-cream",
                "transition-[color,opacity,transform] duration-300",
                menuOpen ? cn("opacity-100 translate-y-0", STAGGER_DELAYS[i]) : "opacity-0 translate-y-3 delay-0"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className={cn(
              "mt-6 px-8 py-3.5 rounded-full bg-navy text-white font-semibold text-lg hover:bg-navy-light cursor-pointer",
              "transition-all duration-300",
              menuOpen ? "opacity-100 translate-y-0 delay-[330ms]" : "opacity-0 translate-y-3 delay-0"
            )}
          >
            Zapytaj o ofertę
          </a>
        </nav>

        <div
          className={cn(
            "pb-10 flex flex-col items-center gap-4 transition-[opacity,transform] duration-300",
            menuOpen ? "opacity-100 translate-y-0 delay-[380ms]" : "opacity-0 translate-y-3 delay-0"
          )}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Znajdź nas</span>
          <a
            href="https://www.facebook.com/profile.php?id=100080380672291"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
          >
            <FacebookIcon className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </>
  );
}
