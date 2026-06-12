import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #111111 0%, #1e2d14 50%, #0f1f0a 100%)",
        }}
      >
        {/* Noise texture overlay via radial gradients */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(93,190,61,0.12) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 20% 80%, rgba(93,190,61,0.07) 0%, transparent 60%)",
        }} />

        {/* Large faint circle */}
        <div style={{
          position: "absolute",
          right: "-120px", top: "-120px",
          width: "600px", height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(93,190,61,0.15)",
        }} />
        <div style={{
          position: "absolute",
          right: "-60px", top: "-60px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(93,190,61,0.10)",
        }} />

        {/* Left green accent bar */}
        <div style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: "6px",
          background: "linear-gradient(180deg, #5DBE3D 0%, #3d8a28 100%)",
        }} />

        {/* Content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px 60px 86px",
          gap: "0px",
          flex: 1,
        }}>
          {/* Logo on white pill */}
          <div style={{
            display: "flex",
            background: "rgba(255,255,255,0.97)",
            borderRadius: "16px",
            padding: "18px 28px",
            marginBottom: "36px",
            alignSelf: "flex-start",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="FH Pianki Tapicerskie Widula"
              width={520}
              height={110}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Green divider */}
          <div style={{
            width: "56px", height: "3px",
            background: "#5DBE3D",
            borderRadius: "2px",
            marginBottom: "24px",
          }} />

          {/* Tagline */}
          <span style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "serif",
            fontWeight: "400",
            lineHeight: "1.4",
            marginBottom: "12px",
            letterSpacing: "0.5px",
          }}>
            Przetwórnia pianek tapicerskich
          </span>

          <span style={{
            fontSize: "20px",
            color: "rgba(93,190,61,0.85)",
            fontFamily: "sans-serif",
            fontWeight: "400",
            letterSpacing: "2px",
            marginBottom: "36px",
          }}>
            KSZTAŁTKI · FORMATKI · WKŁADY CNC
          </span>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{
                fontSize: "20px",
                color: "#5DBE3D",
                fontFamily: "sans-serif",
                fontWeight: 600,
              }}>
                +48 502 490 104
              </span>
              <span style={{ color: "rgba(93,190,61,0.4)", fontSize: "14px" }}>·</span>
              <span style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "sans-serif",
              }}>
                piankapianka@vp.pl
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                fontFamily: "sans-serif",
                letterSpacing: "0.5px",
              }}>
                ul. Reymonta 136, Kamyk k. Częstochowy
              </span>
              <span style={{ color: "rgba(93,190,61,0.3)", fontSize: "12px" }}>·</span>
              <span style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "sans-serif",
                letterSpacing: "1px",
              }}>
                pianki-widula.pl
              </span>
            </div>
          </div>
        </div>

        {/* Right — stacked foam layers decorative */}
        <div style={{
          position: "absolute",
          right: "80px",
          bottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "8px",
        }}>
          {[
            { w: 200, opacity: 0.45 },
            { w: 170, opacity: 0.32 },
            { w: 140, opacity: 0.22 },
            { w: 110, opacity: 0.14 },
            { w: 80,  opacity: 0.08 },
          ].map((l, i) => (
            <div key={i} style={{
              width: `${l.w}px`,
              height: "24px",
              borderRadius: "6px",
              background: `rgba(93,190,61,${l.opacity})`,
            }} />
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
