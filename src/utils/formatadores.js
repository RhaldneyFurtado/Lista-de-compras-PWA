// ==============================
// FORMATAÇÃO MONETÁRIA
// ==============================

export function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// ==============================
// INPUT → NUMBER
// ==============================

export function inputParaNumero(valor) {
  if (!valor) return 0;

  return Number(valor.replace(/\./g, "").replace(",", ".")) || 0;
}

// ==============================
// CAPITALIZAÇÃO DE TEXTO

export function capitalizarTexto(texto) {
  if (!texto) return "";

  return String(texto)
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((palavra) =>
      palavra ? palavra[0].toUpperCase() + palavra.slice(1) : "",
    )
    .join(" ");
}
