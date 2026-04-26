// ==============================
// IMPORTAÇÕES
// ==============================
import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import { useListaFirestore } from "./hooks/useListaFirestore";
import { useHistoricoCompras } from "./hooks/useHistoricoCompras";

import { signOut } from "firebase/auth";
import { auth } from "./services/firebase";

import Cabecalho from "./components/Cabecalho";
import AlternarModo from "./components/AlternarModo";
import FormAdicionar from "./components/FormAdicionar";
import ListaItens from "./components/ListaItens";
import ResumoTotal from "./components/ResumoTotal";
import Login from "./components/Login";
import Historico from "./components/Historico";

// ==============================
// APP
// ==============================
function App() {
  const { usuario, loading } = useAuth();

  const { lista, setLista } = useListaFirestore(usuario);

  const { historico, carregando, deletarCompra } =
    useHistoricoCompras(usuario);

  const [aba, setAba] = useState("compras");

  const [tema, setTema] = useState("claro");

  // ==============================
  // SINCRONIZA TEMA
  // ==============================
  useEffect(() => {
    if (lista?.tema) setTema(lista.tema);
  }, [lista?.tema]);

  useEffect(() => {
    document.body.classList.remove("tema-claro", "tema-escuro");
    document.body.classList.add(
      tema === "escuro" ? "tema-escuro" : "tema-claro"
    );
  }, [tema]);

  // ==============================
  // LOGOUT
  // ==============================
  const fazerLogout = async () => {
    await signOut(auth);
  };

  // ==============================
  // LOADING
  // ==============================
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!usuario) return <Login />;

  if (!lista || !setLista) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando lista...</p>
      </div>
    );
  }

  const itens = lista.itens || [];

  // ==============================
  // FINALIZAR COMPRA
  // ==============================
  const finalizarCompra = async () => {
    if (!itens.length) return;

    const total = itens.reduce(
      (acc, i) => acc + (i.quantidade || 0) * (i.precoUnitario || 0),
      0
    );

    const id = Date.now().toString();

    const compra = {
      id,
      estabelecimento: lista.estabelecimento,
      itens,
      total,
      data: new Date().toISOString(),
    };

    const { doc, setDoc } = await import("firebase/firestore");
    const { db } = await import("./services/firebase");

    await setDoc(doc(db, "users", usuario.uid, "compras", id), compra);

    await setDoc(doc(db, "users", usuario.uid, "lista", "dados"), {
      modo: "planejamento",
      estabelecimento: "",
      tema,
      itens: [],
    });

    setLista({
      modo: "planejamento",
      estabelecimento: "",
      tema,
      itens: [],
    });

    setAba("historico");
  };

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔥 TESTE VISUAL CRÍTICO */}
      <div style={{ background: "yellow", padding: 10, fontWeight: "bold" }}>
        APP RENDERIZANDO CORRETAMENTE
      </div>

      <Cabecalho
        usuario={usuario}
        estabelecimento={lista.estabelecimento || ""}
        aoDefinirEstabelecimento={(v) =>
          setLista((p) => ({ ...p, estabelecimento: v }))
        }
        aoLimpar={() =>
          setLista((p) => ({ ...p, itens: [] }))
        }
        aoLogout={fazerLogout}
        tema={tema}
        aoDefinirTema={setTema}
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">

        <div className="flex gap-2">

          <button
            onClick={() => setAba("compras")}
            className={`flex