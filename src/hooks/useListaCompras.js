import { useState, useEffect, useCallback, useMemo } from "react";

// Chave do localStorage
const CHAVE_STORAGE = "lista-compras-v1";

// Estado inicial
const estadoInicial = {
  modo: "planejamento",
  estabelecimento: "",
  itens: [],
  dataCriacao: null,
};

export function useListaCompras() {
  const [lista, setLista] = useState(() => {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    return dados ? JSON.parse(dados) : estadoInicial;
  });

  // Salvar automaticamente
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
  }, [lista]);

  // ADICIONAR ITEM (CORRIGIDO)
  const adicionarItemPlanejamento = useCallback((item) => {
    if (!item?.nome) return;

    const novoItem = {
      id: Date.now().toString(),
      nome: item.nome,
      quantidade: item.quantidade || 1,
      precoUnitario: item.precoUnitario || 0,
      comprado: false,
      categoria: "geral",
    };

    setLista((prev) => ({
      ...prev,
      itens: [...prev.itens, novoItem],
      dataCriacao: prev.dataCriacao || new Date().toISOString(),
    }));
  }, []);

  // REMOVER ITEM
  const removerItem = useCallback((id) => {
    setLista((prev) => ({
      ...prev,
      itens: prev.itens.filter((item) => item.id !== id),
    }));
  }, []);

  // MARCAR COMO COMPRADO
  const alternarComprado = useCallback((id) => {
    setLista((prev) => ({
      ...prev,
      itens: prev.itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item,
      ),
    }));
  }, []);

  // TOTAIS
  const totais = useMemo(() => {
    const total = lista.itens.reduce((acc, item) => {
      return acc + item.quantidade * item.precoUnitario;
    }, 0);

    return {
      total: Number(total.toFixed(2)),
      quantidadeItens: lista.itens.length,
    };
  }, [lista.itens]);

  return {
    lista,
    itens: lista.itens,

    adicionarItemPlanejamento,
    removerItem,
    alternarComprado,
    totais,
  };
}
