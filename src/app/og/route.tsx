import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#2E2E2E",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Left green accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "10px",
            background: "#5DBE3D",
          }}
        />

        {/* Background circles - top right */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "60px solid rgba(93,190,61,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "60px",
            top: "-40px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "2px solid rgba(93,190,61,0.15)",
          }}
        />

        {/* Foam stack decorative - bottom right */}
        <div
          style={{
            position: "absolute",
            right: "90px",
            bottom: "70px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            alignItems: "flex-end",
          }}
        >
          {[
            { w: 220, color: "rgba(93,190,61,0.35)" },
            { w: 190, color: "rgba(93,190,61,0.25)" },
            { w: 160, color: "rgba(93,190,61,0.18)" },
            { w: 130, color: "rgba(93,190,61,0.12)" },
            { w: 100, color: "rgba(93,190,61,0.08)" },
          ].map((layer, i) => (
            <div
              key={i}
              style={{
                width: `${layer.w}px`,
                height: "26px",
                background: layer.color,
                borderRadius: "6px",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
            gap: "0px",
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: "16px",
              color: "#5DBE3D",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              marginBottom: "24px",
            }}
          >
            Przetwórnia pianek tapicerskich
          </span>

          {/* Company name */}
          <span
            style={{
              fontSize: "78px",
              color: "#FFFFFF",
              fontWeight: "700",
              lineHeight: "1.05",
              marginBottom: "0px",
            }}
          >
            FH Pianki
          </span>
          <span
            style={{
              fontSize: "78px",
              color: "#5DBE3D",
              fontWeight: "700",
              lineHeight: "1.05",
              marginBottom: "36px",
            }}
          >
            Tapicerskie Widuła
          </span>

          {/* Divider */}
          <div
            style={{
              width: "72px",
              height: "4px",
              background: "#5DBE3D",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          />

          {/* Tagline */}
          <span
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "sans-serif",
              marginBottom: "40px",
              lineHeight: "1.5",
            }}
          >
            Kształtki · Formatki · Wkłady materacowe CNC
          </span>

          {/* URL */}
          <span
            style={{
              fontSize: "17px",
              color: "#5DBE3D",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            pianki-widula.pl
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
