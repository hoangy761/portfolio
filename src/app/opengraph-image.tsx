import { ImageResponse } from "next/og";

export const alt = "0xWhyZi — DeFi Fullstack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(145deg, #E8EFF1 0%, #F5F8F9 45%, #DCE8EA 100%)",
          color: "#0B171C",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#0F766E",
            fontWeight: 600,
          }}
        >
          Portfolio CV
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            0xWhyZi
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#33484F",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Bùi Hoàng Ý · Fullstack TypeScript engineer for DeFi systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#5A6E76",
          }}
        >
          <div>Wallet admin · Perp bots · EVM + Solana</div>
          <div style={{ color: "#0F766E", fontWeight: 600 }}>@0xWhyZi</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
