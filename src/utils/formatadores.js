// Função para formatar valores em moeda brasileira (Real)
export function formatarMoeda(valor) {
  // Converte o valor para número (evita erro com texto ou vazio)
  const valorNumerico = Number(valor) || 0;

  // Formata o valor como moeda (R$ 0,00)
  return new Intl.NumberFormat("pt-BR", {
    style: "currency", // Define como moeda
    currency: "BRL", // Moeda brasileira
  }).format(valorNumerico); // Aplica formatação
}

// Função para formatar números (ex: 1000 → 1.000)
export function formatarNumero(numero) {
  // Garante que é número válido
  const numeroConvertido = Number(numero) || 0;

  // Formata no padrão brasileiro
  return new Intl.NumberFormat("pt-BR").format(numeroConvertido);
}

// Função para retornar a data atual formatada (dd/mm/aaaa)
export function obterDataAtualFormatada() {
  // Pega a data atual
  const dataAtual = new Date();

  // Retorna formatada no padrão brasileiro
  return dataAtual.toLocaleDateString("pt-BR", {
    day: "2-digit", // Dia com 2 dígitos
    month: "2-digit", // Mês com 2 dígitos
    year: "numeric", // Ano completo
  });
}
