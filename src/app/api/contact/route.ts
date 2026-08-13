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

  const name = (body.name as string).trim();
  const email = (body.email as string).trim();
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = (body.message as string).trim();

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const html = `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px">
        <tr><td style="background:#2E2E2E;padding:24px 32px">
          <span style="color:#5DBE3D;font-size:12px;letter-spacing:3px;text-transform:uppercase">pianki-widula.pl</span>
          <h1 style="color:#ffffff;margin:8px 0 0;font-size:20px;font-weight:700">Nowe zapytanie ze strony</h1>
        </td></tr>
        <tr><td style="padding:32px">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eeeeee">
              <span style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px">Imię i nazwisko</span><br/>
              <span style="color:#1a1a1a;font-size:16px;font-weight:600">${esc(name)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eeeeee">
              <span style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px">Email</span><br/>
              <a href="mailto:${esc(email)}" style="color:#5DBE3D;font-size:15px">${esc(email)}</a>
            </td></tr>
            ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eeeeee">
              <span style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px">Telefon</span><br/>
              <a href="tel:${esc(phone)}" style="color:#5DBE3D;font-size:15px">${esc(phone)}</a>
            </td></tr>` : ""}
            <tr><td style="padding:10px 0">
              <span style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px">Wiadomość</span><br/>
              <p style="color:#1a1a1a;font-size:15px;line-height:1.6;margin:8px 0 0;white-space:pre-wrap">${esc(message)}</p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f9f9f9;padding:16px 32px;text-align:center">
          <span style="color:#aaa;font-size:11px">FH Pianki Tapicerskie Jacek Widuła · pianki-widula.pl</span>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Formularz Widuła", email: process.env.BREVO_SENDER_EMAIL },
      to: [{ email: "piankapianka@vp.pl" }],
      replyTo: { email, name },
      subject: `Zapytanie od ${name} - pianki-widula.pl`,
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    const debugBody = await res.text();
    return NextResponse.json({ error: "Email send failed", debugStatus: res.status, debugBody, hasKey: !!process.env.BREVO_API_KEY, hasSender: !!process.env.BREVO_SENDER_EMAIL }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
