import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#o-nas", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-px max-w-7xl mx-auto section-py">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-xl px-3 py-2 inline-block">
                <Image
                  src="/logo-v3.png"
                  alt="Pianki Tapicerskie Widuła"
                  width={110}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/50 text-fluid-sm leading-relaxed mb-5">
              Firma Handlowa Pianki Tapicerskie Jacek Widuła. Sprzedaż pianek
              do materaców i tapicerki. Cięcie na wymiar.
            </p>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100080380672291"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-cream transition-colors text-fluid-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-fluid-sm tracking-widest uppercase text-white/40 mb-4">
              Nawigacja
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-cream transition-colors text-fluid-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-fluid-sm tracking-widest uppercase text-white/40 mb-4">
              Dane firmy
            </h4>
            <address className="not-italic flex flex-col gap-2 text-white/60 text-fluid-sm">
              <span>FH Pianki Tapicerskie Jacek Widuła</span>
              <span>ul. Władysława Reymonta 136</span>
              <span>42-125 Kamyk</span>
              <a
                href="tel:+48502490104"
                className="hover:text-cream transition-colors"
              >
                +48 502 490 104
              </a>
              <a
                href="mailto:piankapianka@vp.pl"
                className="hover:text-cream transition-colors"
              >
                piankapianka@vp.pl
              </a>
              <span className="mt-1 text-white/30 text-xs">
                NIP: 5741004318 | REGON: 150563741
              </span>
            </address>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-fluid-sm">
          <span>© {new Date().getFullYear()} Pianki Tapicerskie Jacek Widuła</span>
          <span>
            Wykonanie:{" "}
            <a
              href="https://studiocodeart.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              studiocodeart.pl
            </a>
          </span>
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-cream transition-colors"
          >
            Polityka Prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
