// ==============================
// LISTA DO USUÁRIO NO FIRESTORE
// ==============================

import { useState, useEffect } from "react";

import { db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// ==============================
// HOOK LISTA POR USUÁRIO
// ==============================
export function useListaFirestore(usuario) {
  const [lista, setLista] = useState(null);
  const [loading, setLoading] = useState(true);

  const uid = usuario?.uid;

  // ==============================
  // CARREGAR LISTA
  // ==============================
  useEffect(() => {
    if (!uid) return;

    const carregar = async () => {
      setLoading(true);

      try {
        const ref = doc(db, "users", uid, "lista", "dados");
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          setLista({
            // ==============================
            // MODO
            // ==============================
            modo: String(data.modo || "planejamento")
              .toLowerCase()
              .trim(),

            // ==============================
            // ESTABELECIMENTO
            // ==============================
            estabelecimento: data.estabelecimento || "",

            // ==============================
            // TEMA (NOVO)
            // ==============================
            tema: data.tema || "claro",

            // ==============================
            // ITENS
            // ==============================
            itens: (data.itens || []).map((item) => ({
              ...item,
              precoUnitario: Number(item.precoUnitario || 0),
              quantidade: Number(item.quantidade || 1),
            })),
          });
        } else {
          setLista({
            modo: "planejamento",
            estabelecimento: "",
            tema: "claro",
            itens: [],
          });
        }
      } catch (error) {
        console.error("Erro ao carregar lista:", error);

        setLista({
          modo: "planejamento",
          estabelecimento: "",
          tema: "claro",
          itens: [],
        });
      } finally {
        setLoading(false);
      }
    };

    carregar();
  }, [uid]);

  // ==============================
  // SALVAR LISTA
  // ==============================
  useEffect(() => {
    if (!uid || !lista || loading) return;

    const timeout = setTimeout(async () => {
      try {
        const ref = doc(db, "users", uid, "lista", "dados");

        await setDoc(ref, {
          ...lista,
          modo: String(lista.modo || "planejamento")
            .toLowerCase()
            .trim(),
        });
      } catch (error) {
        console.error("Erro ao salvar lista:", error);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [lista, uid, loading]);

  // ==============================
  // EXPORT
  // ==============================
  return {
    lista,
    setLista,
    loading,
  };
}