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

  // ==============================
  // TEMA LOCAL
  // ==============================
  const [tema, setTema] = useState("claro");

  // ==============================
  // SINCRONIZA TEMA DA LISTA
  // ==============================
  useEffect(() => {
    if (!lista) return;

    if (lista.tema) {
      setTema(lista.tema);
    }
  }, [lista]);

  // ==============================
  // APLICA TEMA NO DOM (TAILWIND CORRETO)
  // ==============================
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", tema === "escuro");
  }, [tema]);

  // ==============================
  // LOGOUT
  // ==============================
  const fazerLogout = async () => {
    await signOut(auth);
  };

  // ==============================
  // LOADING AUTH
  // ==============================
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  // ==============================
  // USUÁRIO NÃO LOGADO
  // ==============================
  if (!usuario) {
    return <Login />;
  }

  // ==============================
  // LOADING LISTA
  // ==============================
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
      (acc, item) =>
        acc + (item.quantidade || 0) * (item.precoUnitario || 0),
      0
    );

    const id = crypto.randomUUID();

    const compra = {
      id,
      estabelecimento: lista.estabelecimento,
      itens,
      total,
      data: new Date().toISOString(),
    };

    const { doc, setDoc } = await import("firebase/firestore");
    const { db } = await import("./services/firebase");

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

        {/* ABA COMPRAS */}
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
                      id: crypto.randomUUID(),
                      nome: dados.nome,
                      quantidade: dados.quantidade,
                      precoUnitario: 0,
                      comprado: false,
                    },
                  ],
                }))
              }
            />

            <ListaItens itens={itens} />

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
          </>
        )}

        {/* ABA HISTÓRICO */}
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
