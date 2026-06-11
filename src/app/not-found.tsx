import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Strona nie znaleziona | Pianki Widuła",
  description: "Strona, której szukasz, nie istnieje.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center section-px text-center">
      <p className="text-[8rem] leading-none font-bold text-cream-light select-none">
        404
      </p>

      <h1 className="text-fluid-h2 font-playfair text-navy mt-4 mb-3">
        Strona nie znaleziona
      </h1>

      <p className="text-fluid-body text-site-text-muted max-w-md mb-10">
        Strona, której szukasz, nie istnieje lub została przeniesiona.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-cream text-white font-semibold px-7 py-3 rounded-full hover:bg-navy-light transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Powrót na stronę główną
      </Link>
    </div>
  );
}
