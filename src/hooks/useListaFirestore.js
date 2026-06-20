import { useState, useEffect, useRef } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export function useListaFirestore(usuario) {
  const [lista, setLista] = useState(null);
  const [loading, setLoading] = useState(true);
  const listaRef = useRef(null);
  const uid = usuario?.uid;

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
          const listaCarregada = {
            modo: String(data.modo || "planejamento").toLowerCase(),
            estabelecimento: data.estabelecimento || "",
            tema: data.tema || "claro",
            itens: (data.itens || []).map((item) => ({
              ...item,
              precoUnitario: Number(item.precoUnitario || 0),
              quantidade: Number(item.quantidade || 1),
            })),
          };
          setLista(listaCarregada);
          listaRef.current = listaCarregada;
        } else {
          const listaPadrao = {
            modo: "planejamento",
            estabelecimento: "",
            tema: "claro",
            itens: [],
          };
          setLista(listaPadrao);
          listaRef.current = listaPadrao;
        }
      } catch (error) {
        console.error(error);
        if (!ativo) return;
        const listaPadrao = {
          modo: "planejamento",
          estabelecimento: "",
          tema: "claro",
          itens: [],
        };
        setLista(listaPadrao);
        listaRef.current = listaPadrao;
      } finally {
        if (ativo) setLoading(false);
      }
    };
    carregar();
    return () => {
      ativo = false;
    };
  }, [uid]);

  useEffect(() => {
    if (!uid || !lista || loading) return;
    if (JSON.stringify(listaRef.current) === JSON.stringify(lista)) return;
    const timeout = setTimeout(async () => {
      try {
        await setDoc(doc(db, "users", uid, "lista", "dados"), {
          modo: lista.modo,
          estabelecimento: lista.estabelecimento,
          itens: lista.itens,
          tema: lista.tema || "claro",
        });
        listaRef.current = lista;
      } catch (error) {
        console.error(error);
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [lista, uid, loading]);

  return { lista, setLista, loading };
}
