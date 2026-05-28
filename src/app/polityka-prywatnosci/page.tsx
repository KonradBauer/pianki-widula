import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Pianki Widuła",
  description: "Polityka prywatności serwisu pianki-widula.pl",
  robots: { index: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="section-px max-w-3xl mx-auto section-py">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-navy text-fluid-sm font-medium mb-10 hover:text-navy-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Powrót na stronę główną
        </Link>

        <h1 className="text-fluid-h2 font-playfair text-navy mb-8">
          Polityka Prywatności
        </h1>
        <p className="text-fluid-sm text-site-text-muted mb-8">
          Polityka prywatności serwisu www.pianki-widula.pl
        </p>

        <div className="prose prose-navy max-w-none space-y-6 text-fluid-body text-site-text leading-relaxed">
          <Section title="1. Informacje ogólne">
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych
            osobowych przekazanych przez Użytkowników w związku z wypełnianiem formularza
            kontaktowego.
          </Section>

          <Section title="2. Administrator danych">
            Administratorem danych osobowych zawartych w serwisie jest FH Pianki Tapicerskie
            Jacek Widuła z siedzibą w 42-125 Kamyk, ul. Władysława Reymonta 136, Poland,
            NIP 5741004318.
          </Section>

          <Section title="3. Bezpieczeństwo danych">
            W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne procedury
            i zalecenia, które mają zapobiec udostępnieniu danych osobom nieupoważnionym.
            Kontrolujemy ich wykonywanie i stale sprawdzamy ich zgodność z odpowiednimi aktami
            prawnymi – ustawą o ochronie danych osobowych, ustawą o świadczeniu usług drogą
            elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach prawa
            wspólnotowego.
          </Section>

          <Section title="4. Podstawa przetwarzania">
            Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz
            w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania
            danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej
            pomiędzy stronami umowy.
          </Section>

          <Section title="5. Pozyskiwanie informacji">
            <p>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniach
            w następujący sposób:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>poprzez dobrowolnie wprowadzone w formularzach informacje</li>
              <li>poprzez gromadzenie plików &quot;cookies&quot;</li>
            </ul>
          </Section>

          <Section title="6. Dobrowolność">
            Serwis zbiera informacje dobrowolnie podane przez użytkownika.
          </Section>

          <Section title="7. Cel przetwarzania">
            Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego
            formularza, np. w celu dokonania procesu obsługi kontaktu informacyjnego.
          </Section>

          <Section title="8. Udostępnianie danych">
            Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani udostępnione osobom
            trzecim, zgodnie z przepisami Ustawy o ochronie danych osobowych.
          </Section>

          <Section title="9. Prawa użytkownika">
            Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej, która je tam
            umieściła. Osoba ta ma również prawo do modyfikacji i zaprzestania przetwarzania
            swoich danych w dowolnym momencie.
          </Section>

          <Section title="10. Zmiany polityki">
            Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności serwisu, na które
            może wpłynąć rozwój technologii internetowej, ewentualne zmiany prawa w zakresie
            ochrony danych osobowych oraz rozwój naszego serwisu internetowego. O wszelkich
            zmianach będziemy informować w sposób widoczny i zrozumiały.
          </Section>

          <Section title="11. Linki zewnętrzne">
            W Serwisie mogą pojawiać się linki do innych stron internetowych. Takie strony
            internetowe działają niezależnie od Serwisu i nie są w żaden sposób nadzorowane
            przez serwis facebook.com. Strony te mogą posiadać własne polityki dotyczące
            prywatności oraz regulaminy, z którymi zalecamy się zapoznać. W razie wątpliwości
            co do któregokolwiek z zapisów niniejszej polityki prywatności jesteśmy do
            dyspozycji – nasze dane znaleźć można w zakładce KONTAKT.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-fluid-h3 font-playfair text-navy font-semibold mb-3">{title}</h2>
      <div className="text-site-text-muted">{children}</div>
    </div>
  );
}
