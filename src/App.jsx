// ==============================
// IMPORTAÇÕES
// ==============================
import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import { useListaFirestore } from "./hooks/useListaFirestore";
import { useHistoricoCompras } from "./hooks/useHistoricoCompras";

import { signOut } from "firebase/auth";
import { auth, db } from "./services/firebase";

import { doc, setDoc } from "firebase/firestore";

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

  const itens = lista?.itens || [];

  // ==============================
  // TEMA
  // ==============================
  useEffect(() => {
    if (!lista?.tema) return;
    setTema(lista.tema);
  }, [lista?.tema]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      tema === "escuro"
    );
  }, [tema]);

  // ==============================
  // LOGOUT
  // ==============================
  const fazerLogout = async () => {
    await signOut(auth);
  };

  // ==============================
  // FINALIZAR COMPRA
  // ==============================
  const finalizarCompra = async () => {
    if (!itens.length) return;

    const total = itens.reduce(
      (acc, item) =>
        acc +
        (item.quantidade || 0) * (item.precoUnitario || 0),
      0
    );

    const id =
      (typeof crypto !== "undefined" &&
        crypto.randomUUID &&
        crypto.randomUUID()) ||
      Math.random().toString(36).substring(2);

    const compra = {
      id,
      estabelecimento: lista.estabelecimento,
      itens,
      total,
      data: new Date().toISOString(),
    };

    await setDoc(
      doc(db, "users", usuario.uid, "compras", id),
      compra
    );

    await setDoc(
      doc(db, "users", usuario.uid, "lista", "dados"),
      {
        modo: "planejamento",
        estabelecimento: "",
        tema,
        itens: [],
      }
    );

    setLista({
      modo: "planejamento",
      estabelecimento: "",
      tema,
      itens: [],
    });

    setAba("historico");
  };

  // ==============================
  // FUNÇÕES LISTA
  // ==============================
  const removerItem = (id) => {
    setLista((prev) => ({
      ...prev,
      itens: prev.itens.filter((i) => i.id !== id),
    }));
  };

  const atualizarItem = (id, dados) => {
    setLista((prev) => ({
      ...prev,
      itens: prev.itens.map((i) =>
        i.id === id ? { ...i, ...dados } : i
      ),
    }));
  };

  const alternarComprado = (id) => {
    setLista((prev) => ({
      ...prev,
      itens: prev.itens.map((i) =>
        i.id === id
          ? { ...i, comprado: !i.comprado }
          : i
      ),
    }));
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

  if (!usuario || !lista) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando lista...</p>
      </div>
    );
  }

  // normalização do modo (CORREÇÃO DO BOTÃO)
  const modoNormalizado = (lista.modo || "")
    .trim()
    .toLowerCase();

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">

      <Cabecalho
        usuario={usuario}
        estabelecimento={lista.estabelecimento || ""}
        aoDefinirEstabelecimento={(valor) =>
          setLista((prev) => ({
            ...prev,
            estabelecimento: valor,
          }))
        }
        aoLimpar={() =>
          setLista((prev) => ({
            ...prev,
            itens: [],
          }))
        }
        aoLogout={fazerLogout}
        tema={tema}
        aoDefinirTema={(valor) => {
          setTema(valor);
          setLista((prev) => ({
            ...prev,
            tema: valor,
          }));
        }}
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">

        {/* ABAS */}
        <div className="flex gap-2">
          <button
            onClick={() => setAba("compras")}
            className={`flex-1 rounded-lg p-3 font-semibold ${
              aba === "compras"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700 dark:bg-slate-800 dark:text-white"
            }`}
          >
            Compras
          </button>

          <button
            onClick={() => setAba("historico")}
            className={`flex-1 rounded-lg p-3 font-semibold ${
              aba === "historico"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700 dark:bg-slate-800 dark:text-white"
            }`}
          >
            Histórico
          </button>
        </div>

        {/* COMPRAS */}
        {aba === "compras" && (
          <>
            <AlternarModo
              modo={lista.modo}
              aoAlternar={(modo) =>
                setLista((prev) => ({ ...prev, modo }))
              }
            />

            <FormAdicionar
              aoAdicionar={(dados) =>
                setLista((prev) => ({
                  ...prev,
                  itens: [
                    ...prev.itens,
                    {
                      id:
                        (typeof crypto !== "undefined" &&
                          crypto.randomUUID &&
                          crypto.randomUUID()) ||
                        Math.random().toString(36).substring(2),
                      nome: dados.nome,
                      quantidade: dados.quantidade,
                      precoUnitario: 0,
                      comprado: false,
                    },
                  ],
                }))
              }
            />

            <ListaItens
              itens={itens}
              modo={lista.modo}
              aoRemover={removerItem}
              aoAtualizar={atualizarItem}
              aoAlternarComprado={alternarComprado}
            />

            <ResumoTotal
              totais={{
                total: itens.reduce(
                  (acc, item) =>
                    acc +
                    (item.quantidade || 0) *
                      (item.precoUnitario || 0),
                  0
                ),
                quantidadeItens: itens.length,
                itensComprados: itens.filter(
                  (item) => item.comprado
                ).length,
              }}
            />

            {/* BOTÃO FINALIZAR COMPRA (CORRIGIDO) */}
            {modoNormalizado === "feira" && itens.length > 0 && (
              <button
                onClick={finalizarCompra}
                className="w-full rounded-lg bg-emerald-600 p-3 text-white font-semibold"
              >
                Finalizar compra
              </button>
            )}
          </>
        )}

        {/* HISTÓRICO */}
        {aba === "historico" && (
          <Historico
            historico={historico}
            carregando={carregando}
            deletarCompra={deletarCompra}
          />
        )}

      </main>
    </div>
  );
}

export default App;
