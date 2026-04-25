// ==============================
// HOOK DE LISTA (VERSÃO FIREBASE)
// ==============================

import { useCallback, useMemo } from "react";

/**
 * ⚠️ IMPORTANTE:
 * Este hook NÃO usa mais localStorage.
 * Ele só manipula dados que vêm do Firestore.
 */
export function useListaComprasFirestore(setLista) {
  // ==============================
  // ALTERAR MODO
  // ==============================
  const alternarModo = useCallback(
    (modo) => {
      setLista((prev) => ({
        ...prev,
        modo,
      }));
    },
    [setLista],
  );

  // ==============================
  // ADICIONAR ITEM (PLANEJAMENTO)
  // ==============================
  const adicionarItemPlanejamento = useCallback(
    (item) => {
      if (!item?.nome) return;

      const novoItem = {
        id: Date.now().toString(),
        nome: item.nome,
        quantidade: Number(item.quantidade || 1),

        // preço em centavos (evita erro de float)
        precoUnitario: 0,

        comprado: false,
      };

      setLista((prev) => ({
        ...prev,
        itens: [...(prev.itens || []), novoItem],
      }));
    },
    [setLista],
  );

  // ==============================
  // ATUALIZAR ITEM (FEIRA)
  // ==============================
  const atualizarItemFeira = useCallback(
    (id, dados) => {
      setLista((prev) => ({
        ...prev,
        itens: (prev.itens || []).map((item) =>
          item.id === id ? { ...item, ...dados } : item,
        ),
      }));
    },
    [setLista],
  );

  // ==============================
  // REMOVER ITEM
  // ==============================
  const removerItem = useCallback(
    (id) => {
      setLista((prev) => ({
        ...prev,
        itens: (prev.itens || []).filter((item) => item.id !== id),
      }));
    },
    [setLista],
  );

  // ==============================
  // TOGGLE COMPRADO
  // ==============================
  const alternarComprado = useCallback(
    (id) => {
      setLista((prev) => ({
        ...prev,
        itens: (prev.itens || []).map((item) =>
          item.id === id ? { ...item, comprado: !item.comprado } : item,
        ),
      }));
    },
    [setLista],
  );

  // ==============================
  // TOTAIS
  // ==============================
  const calcularTotais = useMemo(() => {
    return (itens = []) => {
      const totalCentavos = itens.reduce((acc, item) => {
        return acc + item.quantidade * (item.precoUnitario || 0);
      }, 0);

      return {
        total: totalCentavos / 100,
        quantidadeItens: itens.length,
        itensComprados: itens.filter((i) => i.comprado).length,
      };
    };
  }, []);

  // ==============================
  // EXPORTAÇÃO
  // ==============================
  return {
    alternarModo,
    adicionarItemPlanejamento,
    atualizarItemFeira,
    removerItem,
    alternarComprado,
    calcularTotais,
  };
}
