// ==============================
// FORMATAÇÃO MONETÁRIA
// ==============================

export function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// ==============================
// INPUT → NUMBER
// ==============================

export function inputParaNumero(valor) {
  if (!valor) return 0;

  return Number(valor.replace(/\./g, "").replace(",", ".")) || 0;
}
