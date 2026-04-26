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
// FUNÇÃO AUXILIAR
// ==============================
function capitalizarTexto(texto) {
  if (!texto) return "";

  return texto
    .trim()
    .toLowerCase()
    .replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}

// ==============================
// APP
// ==============================
function App() {
  const { usuario, loading } = useAuth();

  const firestore = useListaFirestore(usuario);
  const lista = firestore?.lista;
  const setLista = firestore?.setLista;

  const { historico, carregando, deletarCompra } =
    useHistoricoCompras(usuario);

  const [aba, setAba] = useState("compras");

  // ==============================
  // TEMA LOCAL (OBRIGATÓRIO PARA NÃO QUEBRAR UI)
  // ==============================
  const [tema, setTema] = useState("claro");

  // sincroniza com firestore
  useEffect(() => {
    if (lista?.tema) {
      setTema(lista.tema);
    }
  }, [lista?.tema]);

  // aplica no body
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
      tema: lista.tema ?? "claro",
      itens: [],
    });

    setLista({
      modo: "planejamento",
      estabelecimento: "",
      tema: lista.tema ?? "claro",
      itens: [],
    });

    setAba("historico");
  };

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="min-h-screen bg-gray-50">

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

        // ==============================
        // TEMA (FIX DEFINITIVO)
        // ==============================
        tema={tema}
        aoDefinirTema={(v) => {
          setTema(v);
          setLista((p) => ({ ...p, tema: v }));
        }}
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">

        {/* NAVEGAÇÃO */}
        <div className="flex gap-2">

          <button
            onClick={() => setAba("compras")}
            className={`flex-1 p-3 rounded-lg font-semibold ${
              aba === "compras"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Compras
          </button>

          <button
            onClick={() => setAba("historico")}
            className={`flex-1 p-3 rounded-lg font-semibold ${
              aba === "historico"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Histórico
          </button>

        </div>

        {/* CONTEÚDO */}
        {aba === "compras" && (
          <>
            <AlternarModo
              modo={lista.modo}
              aoAlternar={(m) =>
                setLista((p) => ({ ...p, modo: m }))
              }
            />

            <FormAdicionar
              aoAdicionar={(d) =>
                setLista((p) => ({
                  ...p,
                  itens: [
                    ...p.itens,
                    {
                      id: Date.now().toString(),
                      nome: capitalizarTexto(d.nome),
                      quantidade: d.quantidade,
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
              aoAtualizar={(id, d) =>
                setLista((p) => ({
                  ...p,
                  itens: p.itens.map((i) =>
                    i.id === id ? { ...i, ...d } : i
                  ),
                }))
              }
              aoRemover={(id) =>
                setLista((p) => ({
                  ...p,
                  itens: p.itens.filter((i) => i.id !== id),
                }))
              }
              aoAlternarComprado={(id) =>
                setLista((p) => ({
                  ...p,
                  itens: p.itens.map((i) =>
                    i.id === id
                      ? { ...i, comprado: !i.comprado }
                      : i
                  ),
                }))
              }
            />

            <ResumoTotal
              totais={{
                total: itens.reduce(
                  (a, i) =>
                    a + (i.quantidade || 0) * (i.precoUnitario || 0),
                  0
                ),
                quantidadeItens: itens.length,
                itensComprados: itens.filter((i) => i.comprado).length,
              }}
            />

            {itens.length > 0 && (
              <button
                onClick={finalizarCompra}
                className="w-full bg-emerald-600 text-white p-4 rounded-lg"
              >
                Finalizar Compra
              </button>
            )}
          </>
        )}

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