// ==============================
// LISTA FIRESTORE POR USUÁRIO
// ==============================

import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export function useListaFirestore(usuario) {
  const [lista, setLista] = useState(null);

  const uid = usuario?.uid;

  // ==============================
  // CARREGAR DADOS
  // ==============================
  useEffect(() => {
    if (!uid) return;

    const carregar = async () => {
      const ref = doc(db, "users", uid, "lista", "dados");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setLista(snap.data());
      } else {
        setLista({
          modo: "planejamento",
          itens: [],
        });
      }
    };

    carregar();
  }, [uid]);

  // ==============================
  // SALVAR AUTOMÁTICO
  // ==============================
  useEffect(() => {
    if (!uid || !lista) return;

    const salvar = async () => {
      const ref = doc(db, "users", uid, "lista", "dados");
      await setDoc(ref, lista);
    };

    salvar();
  }, [lista, uid]);

  return {
    lista,
    setLista,
  };
}
