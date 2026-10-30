/* ------------------------------------------------------------------
   1 HELPERS DE IMAGEM (Unsplash — uso gratuito)
   1.1 Gerador de URL otimizada
   1.2 Créditos
------------------------------------------------------------------ */

/* 1.1 Gerador de URL otimizada */
export function unsplash(id: string, width = 1200, quality = 72) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/* 1.2 Créditos */
export const IMAGE_CREDIT = "Fotografias: Unsplash (licença de uso gratuito, sem atribuição obrigatória).";

/* Índice
   1 HELPERS DE IMAGEM (Unsplash — uso gratuito)
     1.1 Gerador de URL otimizada
     1.2 Créditos
*/
