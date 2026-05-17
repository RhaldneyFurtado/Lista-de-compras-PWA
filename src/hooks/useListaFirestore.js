// ==============================
// LISTA FIRESTORE
// ==============================

import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// ==============================
// HOOK LISTA
// ==============================
export function useListaFirestore(usuario) {
  const [lista, setLista] = useState(null);
  const [loading, setLoading] = useState(true);

  const uid = usuario?.uid;

  // ==============================
  // CARREGAR
  // ==============================
  useEffect(() => {
    let ativo = true;

    if (!uid) {
      setLista({
        modo: "planejamento",
        estabelecimento: "",
        tema: "claro",
        itens: [],
      });
      setLoading(false);
      return;
    }

    const carregar = async () => {
      try {
        const ref = doc(db, "users", uid, "lista", "dados");
        const snap = await getDoc(ref);

        if (!ativo) return;

        if (snap.exists()) {
          const data = snap.data();

          setLista({
            modo: String(data.modo || "planejamento").toLowerCase(),
            estabelecimento: data.estabelecimento || "",
            tema: data.tema || "claro",
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
      } catch (err) {
        console.error(err);

        if (!ativo) return;

        setLista({
          modo: "planejamento",
          estabelecimento: "",
          tema: "claro",
          itens: [],
        });
      } finally {
        if (ativo) setLoading(false);
      }
    };

    carregar();

    return () => {
      ativo = false;
    };
  }, [uid]);

  // ==============================
  // SALVAR
  // ==============================
  useEffect(() => {
    if (!uid || !lista || loading) return;

    const timeout = setTimeout(async () => {
      try {
        await setDoc(doc(db, "users", uid, "lista", "dados"), {
          modo: lista.modo,
          estabelecimento: lista.estabelecimento,
          itens: lista.itens,
          tema: lista.tema || "claro",
        });
      } catch (err) {
        console.error(err);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [lista, uid, loading]);

  return { lista, setLista, loading };
}
