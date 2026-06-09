// ==============================
// HOOK - HISTÓRICO DE COMPRAS
// ==============================

import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

/**
 * Hook responsável pelo histórico de compras
 */
export function useHistoricoCompras(usuario) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // ==============================
  // CARREGAR HISTÓRICO (ESTÁVEL)
  // ==============================
  useEffect(() => {
    if (!usuario?.uid) return;

    const carregar = async () => {
      try {
        setCarregando(true);

        const ref = collection(db, "users", usuario.uid, "compras");
        const snap = await getDocs(ref);

        const lista = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        // ordenação segura (sem depender de orderBy)
        lista.sort((a, b) => new Date(b.data) - new Date(a.data));

        setHistorico(lista);
      } catch (error) {
        console.error("Erro histórico:", error);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, [usuario?.uid]);

  // ==============================
  // DELETAR COMPRA
  // ==============================
  const deletarCompra = async (id) => {
    try {
      await deleteDoc(doc(db, "users", usuario.uid, "compras", id));

      setHistorico((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar compra:", error);
    }
  };

  const adicionarCompraLocal = (compra) => {
    setHistorico((prev) =>
      [compra, ...prev].sort((a, b) => new Date(b.data) - new Date(a.data))
    );
  };

  return {
    historico,
    carregando,
    deletarCompra,
    adicionarCompraLocal,
  };
}
