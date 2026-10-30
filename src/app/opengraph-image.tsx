import { ImageResponse } from "next/og";

/* ------------------------------------------------------------------
   1 OG IMAGE DINÂMICA (padrão)
   1.1 Tamanho e runtime
   1.2 Layout cyberpunk
------------------------------------------------------------------ */
export const runtime = "edge";
export const alt = "VITALIS — Portal Vegano";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* 1.2 Layout cyberpunk */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04070b",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(184,255,47,0.22), transparent 55%), radial-gradient(circle at 88% 8%, rgba(255,45,149,0.18), transparent 55%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 64px 64px, 64px 64px",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(184,255,47,0.6)",
              borderRadius: 14,
              color: "#b8ff2f",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#e9f2ec", fontSize: 30, fontWeight: 900, letterSpacing: -1 }}>
              VITALIS
            </div>
            <div style={{ color: "#9fb0c2", fontSize: 15, letterSpacing: 5 }}>
              PORTAL VEGANO
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#b8ff2f", fontSize: 20, letterSpacing: 6 }}>
            GUIA · RECEITAS · CIÊNCIA
          </div>
          <div
            style={{
              color: "#e9f2ec",
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.03,
              letterSpacing: -2.5,
              maxWidth: 980,
            }}
          >
            Descubra o modo vegano de viver, comer e pensar
          </div>
          <div style={{ color: "#9fb0c2", fontSize: 24, maxWidth: 860 }}>
            Guia de 21 dias gratuito · 120+ receitas brasileiras · calculadora de impacto
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ height: 6, width: 190, background: "#b8ff2f", borderRadius: 99 }} />
          <div style={{ height: 6, width: 90, background: "#22e6ff", borderRadius: 99 }} />
          <div style={{ height: 6, width: 60, background: "#ff2d95", borderRadius: 99 }} />
          <div style={{ color: "#9fb0c2", fontSize: 18, marginLeft: 10 }}>vitalisvegan.com.br</div>
        </div>
      </div>
    ),
    size,
  );
}

/* Índice
   1 OG IMAGE DINÂMICA (padrão)
     1.1 Tamanho e runtime
     1.2 Layout cyberpunk
*/
