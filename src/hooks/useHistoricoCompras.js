// ==============================
// HOOK - HISTÓRICO DE COMPRAS
// ==============================

import { useState, useEffect } from "react";

import { db } from "../services/firebase";

import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

// ==============================
// HOOK
// ==============================
export function useHistoricoCompras(usuario) {
  const [historico, setHistorico] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const uid = usuario?.uid;

  // ==============================
  // CARREGAR HISTÓRICO
  // ==============================
  useEffect(() => {
    if (!uid) {
      setHistorico([]);
      setCarregando(false);
      return;
    }

    const carregar = async () => {
      try {
        setCarregando(true);

        const ref = collection(db, "users", uid, "compras");
        const q = query(ref, orderBy("data", "desc"));

        const snap = await getDocs(q);

        const lista = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        setHistorico(lista);
      } catch (error) {
        console.error("Erro histórico:", error);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, [uid]);

  // ==============================
  // DELETAR COMPRA (CORRIGIDO)
  // ==============================
  const deletarCompra = async (id) => {
    try {
      await deleteDoc(doc(db, "users", uid, "compras", id));

      setHistorico((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar compra:", error);
    }
  };

  return {
    historico,
    carregando,
    deletarCompra,
  };
}
