// ==============================
// IMPORTAÇÕES
// ==============================

import { useState } from "react";

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

function capitalizarTexto(texto) {
  if (!texto) return "";
  return texto.trim().toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}

function App() {
  const { usuario, loading } = useAuth();

  const firestore = useListaFirestore(usuario);
  const lista = firestore?.lista;
  const setLista = firestore?.setLista;

  const { historico, carregando, deletarCompra } =
    useHistoricoCompras(usuario);

  const [aba, setAba] = useState("compras");

  if (loading) return <p>Carregando...</p>;
  if (!usuario) return <Login />;
  if (!lista || !setLista) return <p>Carregando lista...</p>;

  const itens = lista.itens || [];

  const fazerLogout = async () => {
    await signOut(auth);
  };

  const finalizarCompra = async () => {
    if (!itens.length) return;

    const total = itens.reduce(
      (acc, i) => acc + i.quantidade * i.precoUnitario,
      0,
    );

    const compraId = Date.now().toString();

    const compra = {
      id: compraId,
      estabelecimento: lista.estabelecimento,
      itens,
      total,
      data: new Date().toISOString(),
    };

    const { doc, setDoc } = await import("firebase/firestore");
    const { db } = await import("./services/firebase");

    await setDoc(doc(db, "users", usuario.uid, "compras", compraId), compra);

    await setDoc(doc(db, "users", usuario.uid, "lista", "dados"), {
      modo: "planejamento",
      estabelecimento: "",
      itens: [],
    });

    setLista({
      modo: "planejamento",
      estabelecimento: "",
      itens: [],
    });

    setAba("historico");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Cabecalho
        usuario={usuario}
        estabelecimento={lista.estabelecimento || ""}
        aoDefinirEstabelecimento={(v) =>
          setLista((p) => ({ ...p, estabelecimento: v }))
        }
        aoLimpar={() => setLista((p) => ({ ...p, itens: [] }))}
        aoLogout={fazerLogout}
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        <div className="flex gap-2">
          <button onClick={() => setAba("compras")}>Compras</button>
          <button onClick={() => setAba("historico")}>Histórico</button>
        </div>

        {aba === "compras" && (
          <>
            <FormAdicionar
              aoAdicionar={(dados) =>
                setLista((p) => ({
                  ...p,
                  itens: [
                    ...p.itens,
                    {
                      id: Date.now().toString(),
                      nome: capitalizarTexto(dados.nome),
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
              aoAtualizar={(id, dados) =>
                setLista((p) => ({
                  ...p,
                  itens: p.itens.map((i) =>
                    i.id === id ? { ...i, ...dados } : i,
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
                    i.id === id ? { ...i, comprado: !i.comprado } : i,
                  ),
                }))
              }
            />

            <ResumoTotal
              totais={{
                total: itens.reduce(
                  (a, i) => a + i.quantidade * i.precoUnitario,
                  0,
                ),
                quantidadeItens: itens.length,
                itensComprados: itens.filter((i) => i.comprado).length,
              }}
            />

            <button onClick={finalizarCompra}>
              Finalizar Compra
            </button>
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