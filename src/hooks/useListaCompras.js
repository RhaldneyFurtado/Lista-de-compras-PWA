import { useState, useEffect, useCallback, useMemo } from "react";

// Chave usada no localStorage
const CHAVE_STORAGE = "lista-compras-v1";

// Estado inicial da aplicação
const estadoInicial = {
  modo: "planejamento", // "planejamento" ou "feira"
  estabelecimento: "", // Nome do mercado/local
  itens: [], // Lista de itens
  dataCriacao: null, // Data de criação
};

/**
 * Hook principal da aplicação
 * Controla TODA a lógica da lista de compras
 */
export function useListaCompras() {
  // Estado principal (carrega do localStorage)
  const [lista, setLista] = useState(() => {
    try {
      const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
      return dadosSalvos ? JSON.parse(dadosSalvos) : estadoInicial;
    } catch (erro) {
      console.error("Erro ao carregar dados:", erro);
      return estadoInicial;
    }
  });

  // Salva automaticamente sempre que a lista mudar
  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
    } catch (erro) {
      console.error("Erro ao salvar dados:", erro);
    }
  }, [lista]);

  // Alterna o modo (planejamento / feira)
  const alternarModo = useCallback((novoModo) => {
    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      modo: novoModo,
    }));
  }, []);

  // Adiciona novo item
  const adicionarItemPlanejamento = useCallback((nome) => {
    if (!nome?.trim()) return;

    const novoItem = {
      id: Date.now().toString(), // ID único
      nome: nome.trim(),
      quantidade: 1,
      precoUnitario: 0,
      comprado: false,
      categoria: "geral",
    };

    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      itens: [...estadoAnterior.itens, novoItem],
      dataCriacao: estadoAnterior.dataCriacao || new Date().toISOString(),
    }));
  }, []);

  // Atualiza item (modo feira)
  const atualizarItemFeira = useCallback((id, novosDados) => {
    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      itens: estadoAnterior.itens.map((item) =>
        item.id === id ? { ...item, ...novosDados } : item,
      ),
    }));
  }, []);

  // Remove item
  const removerItem = useCallback((id) => {
    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      itens: estadoAnterior.itens.filter((item) => item.id !== id),
    }));
  }, []);

  // Marca / desmarca como comprado
  const alternarComprado = useCallback((id) => {
    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      itens: estadoAnterior.itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item,
      ),
    }));
  }, []);

  // Limpa toda a lista
  const limparLista = useCallback(() => {
    const confirmar = window.confirm(
      "Tem certeza que deseja limpar toda a lista?",
    );

    if (confirmar) {
      setLista(estadoInicial);
    }
  }, []);

  // Define estabelecimento
  const definirEstabelecimento = useCallback((nome) => {
    setLista((estadoAnterior) => ({
      ...estadoAnterior,
      estabelecimento: nome,
    }));
  }, []);

  // Cálculo dos totais (otimizado)
  const totais = useMemo(() => {
    const itensComprados = lista.itens.filter((item) => item.comprado);

    const itensComPreco = lista.itens.filter((item) => item.precoUnitario > 0);

    const total = itensComPreco.reduce((acumulador, item) => {
      return acumulador + (item.quantidade || 0) * (item.precoUnitario || 0);
    }, 0);

    return {
      total: Number(total.toFixed(2)),
      quantidadeItens: lista.itens.length,
      itensComprados: itensComprados.length,
      itensComPreco: itensComPreco.length,
      restantes: lista.itens.length - itensComprados.length,
    };
  }, [lista.itens]);

  // Retorno do hook
  return {
    lista,
    modo: lista.modo,
    itens: lista.itens,
    estabelecimento: lista.estabelecimento,

    alternarModo,
    adicionarItemPlanejamento,
    atualizarItemFeira,
    removerItem,
    alternarComprado, //  PADRONIZADO
    limparLista,
    definirEstabelecimento, //  PADRONIZADO
    totais,
  };
}
