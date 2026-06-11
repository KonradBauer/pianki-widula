import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import { NAV_LINKS } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-px max-w-7xl mx-auto section-py">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="rounded-xl px-3 py-2 inline-block" style={{ backgroundColor: '#3D3D3D' }}>
                <Image
                  src="/logo.png"
                  alt="Pianki Tapicerskie Widuła"
                  width={220}
                  height={192}
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
              <FacebookIcon className="w-5 h-5" />
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

        <div className="pt-6 flex flex-col items-center gap-2 text-white/30 text-fluid-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>© {new Date().getFullYear()} Pianki Tapicerskie Jacek Widuła</span>
            <Link href="/polityka-prywatnosci" className="hover:text-cream transition-colors">
              Polityka Prywatności
            </Link>
          </div>
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
        </div>
      </div>
    </footer>
  );
}
