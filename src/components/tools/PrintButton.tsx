"use client";

/* ------------------------------------------------------------------
   1 BOTÃO DE IMPRESSÃO (client)
------------------------------------------------------------------ */
export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-primary print:hidden">
      Imprimir / salvar em PDF
    </button>
  );
}

/* Índice
   1 BOTÃO DE IMPRESSÃO (client)
*/
