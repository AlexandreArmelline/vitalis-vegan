"use client";

/* ------------------------------------------------------------------
   1 PÁGINA DE ERRO GLOBAL
   1.1 Fallback de erro do App Router
------------------------------------------------------------------ */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          background: "#04070b",
          color: "#e9f2ec",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <p style={{ color: "#ff2d95", fontSize: 12, letterSpacing: 4, textTransform: "uppercase" }}>
          erro inesperado
        </p>
        <h1 style={{ fontSize: 32, margin: 0 }}>Algo saiu do eixo.</h1>
        <p style={{ color: "#9fb0c2", maxWidth: 420, fontSize: 14, lineHeight: 1.6 }}>
          Um erro inesperado aconteceu. Tente recarregar — se persistir, avise pelo formulário de
          contato.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: 8,
            background: "#b8ff2f",
            color: "#06140a",
            border: "none",
            borderRadius: 6,
            padding: "12px 22px",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Recarregar
        </button>
      </body>
    </html>
  );
}

/* Índice
   1 PÁGINA DE ERRO GLOBAL
     1.1 Fallback de erro do App Router
*/
