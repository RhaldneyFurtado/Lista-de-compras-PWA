// ==============================
// HOOK - HISTÓRICO DE COMPRAS
// ==============================

// Importa hooks do React
import { useState, useEffect } from "react";

// Importa instância do Firestore
import { db } from "../services/firebase";

// Importa funções do Firestore
import {
  collection, // referência para coleção
  getDocs, // busca documentos
  query, // cria consulta
  orderBy, // ordena resultados
} from "firebase/firestore";

/**
 * Hook responsável por:
 * - Buscar o histórico de compras do usuário logado
 * - Ordenar da compra mais recente para a mais antiga
 * - Informar estado de carregamento
 *
 * @param {Object} usuario - Usuário autenticado
 * @returns {Object} histórico e status de carregamento
 */
export function useHistoricoCompras(usuario) {
  // ==============================
  // ESTADOS
  // ==============================

  // Armazena lista de compras realizadas
  const [historico, setHistorico] = useState([]);

  // Controla estado de carregamento
  const [carregando, setCarregando] = useState(true);

  // ==============================
  // CARREGAR HISTÓRICO
  // ==============================
  useEffect(() => {
    // Se não houver usuário logado
    if (!usuario) {
      setHistorico([]);
      setCarregando(false);
      return;
    }

    /**
     * Busca compras do usuário no Firestore
     */
    const carregarHistorico = async () => {
      try {
        // Inicia carregamento
        setCarregando(true);

        // Referência da coleção:
        // users/{uid}/compras
        const comprasRef = collection(db, "users", usuario.uid, "compras");

        // Ordena por data (mais recente primeiro)
        const consulta = query(comprasRef, orderBy("data", "desc"));

        // Executa consulta
        const snapshot = await getDocs(consulta);

        // Converte documentos em array de objetos
        const compras = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        // Atualiza estado
        setHistorico(compras);
      } catch (erro) {
        console.error("Erro ao carregar histórico de compras:", erro);
      } finally {
        // Finaliza carregamento
        setCarregando(false);
      }
    };

    // Executa carregamento
    carregarHistorico();
  }, [usuario]);

  // ==============================
  // RETORNO DO HOOK
  // ==============================
  return {
    historico,
    carregando,
  };
}
