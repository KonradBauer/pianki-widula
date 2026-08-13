"use client";

import { useState, FormEvent } from "react";

interface Fields {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Imię i nazwisko jest wymagane";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Nieprawidłowy adres email";
  if (f.message.trim().length < 10) e.message = "Wiadomość musi mieć co najmniej 10 znaków";
  if (!f.consent) e.consent = "Zgoda jest wymagana";
  return e;
}

const EMPTY: Fields = { name: "", email: "", phone: "", message: "", consent: false };

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setFields((prev) => ({ ...prev, [k]: value }));
    if (errors[k as keyof Errors]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setSubmitState("success");
      setFields(EMPTY);
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-fluid-h3 font-playfair text-navy font-semibold mb-2">
          Wiadomość wysłana!
        </h3>
        <p className="text-fluid-sm text-site-text-muted mb-6">
          Odezwiemy się tak szybko jak to możliwe.
        </p>
        <button
          onClick={() => setSubmitState("idle")}
          className="text-navy font-medium text-fluid-sm underline decoration-cream hover:text-navy-light"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Imię i nazwisko *" error={errors.name}>
          <input
            type="text"
            value={fields.name}
            onChange={set("name")}
            placeholder="Jan Kowalski"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="jan@example.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Telefon (opcjonalnie)">
        <input
          type="tel"
          value={fields.phone}
          onChange={set("phone")}
          placeholder="+48 000 000 000"
          className={inputClass(false)}
        />
      </Field>

      <Field label="Wiadomość *" error={errors.message}>
        <textarea
          value={fields.message}
          onChange={set("message")}
          rows={5}
          placeholder="Opisz czego szukasz - rodzaj pianki, wymiary, ilość…"
          className={inputClass(!!errors.message) + " resize-none"}
        />
      </Field>

      <Field error={errors.consent}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={fields.consent}
            onChange={set("consent")}
            className="mt-1 w-4 h-4 accent-navy rounded"
          />
          <span className="text-xs text-site-text-muted leading-relaxed">
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez FH Pianki
            Tapicerskie Jacek Widuła w celu odpowiedzi na niniejsze zapytanie,
            zgodnie z{" "}
            <a
              href="/polityka-prywatnosci"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cream hover:text-navy"
            >
              Polityką Prywatności
            </a>
            .
          </span>
        </label>
      </Field>

      {submitState === "error" && (
        <p className="text-red-500 text-fluid-sm">
          Wystąpił błąd. Spróbuj ponownie lub zadzwoń: +48 502 490 104.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="cursor-pointer w-full py-4 rounded-full bg-navy text-white font-semibold text-fluid-sm hover:bg-navy-light transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitState === "loading" ? "Wysyłanie…" : "Wyślij wiadomość"}
      </button>
    </form>
    </div>
  );
}

function Field({ label, error, children }: { label?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-navy tracking-wide uppercase">{label}</label>}
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-fluid-sm bg-white text-site-text placeholder-site-text-muted outline-none transition-all focus:ring-2 focus:ring-navy/20 ${
    hasError ? "border-red-300 focus:border-red-400" : "border-cream/40 focus:border-navy/40"
  }`;
}
