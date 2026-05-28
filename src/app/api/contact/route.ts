import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: unknown;
  email: unknown;
  phone?: unknown;
  message: unknown;
  consent: unknown;
}

function validate(body: ContactPayload): string | null {
  if (typeof body.name !== "string" || body.name.trim().length < 2) return "Invalid name";
  if (typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return "Invalid email";
  if (typeof body.message !== "string" || body.message.trim().length < 10) return "Invalid message";
  if (body.consent !== true) return "Consent required";
  return null;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactPayload;
  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const name = body.name as string;
  const email = body.email as string;
  const phone = typeof body.phone === "string" ? body.phone : "";
  const message = body.message as string;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Formularz Widula <onboarding@resend.dev>",
      to: "piankapianka@vp.pl",
      reply_to: email,
      subject: `Nowe zapytanie od ${name}`,
      html: `
        <h2>Nowe zapytanie ze strony pianki-widula.pl</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        <hr />
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
