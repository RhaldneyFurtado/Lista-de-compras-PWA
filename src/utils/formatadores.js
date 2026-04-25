// ==============================
// FORMATA PREÇO (centavos → R$)
// ==============================
export function formatarMoeda(valor) {
  const numero = Number(valor) || 0;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numero);
}

// ==============================
// CONVERTE "10,50" → 1050
// ==============================
export function precoParaCentavos(valor) {
  if (!valor) return 0;

  return Math.round(Number(String(valor).replace(",", ".")) * 100);
}

// ==============================
// CENTAVOS → "10,50"
// ==============================
export function centavosParaPreco(valor) {
  return (valor / 100).toFixed(2).replace(".", ",");
}
