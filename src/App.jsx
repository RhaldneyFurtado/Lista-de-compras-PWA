// ==============================
// IMPORTAÇÕES
// ==============================

// Hook de autenticação personalizado
import { useAuth } from "./hooks/useAuth";

// Função de logout do Firebase
import { signOut } from "firebase/auth";
import { auth } from "./services/firebase";

// Hook personalizado para integração com Firestore
import { useListaFirestore } from "./hooks/useListaFirestore";

// Funções do Firestore
import { doc, setDoc } from "firebase/firestore";
import { db } from "./services/firebase";

// Componentes da aplicação
import Cabecalho from "./components/Cabecalho";
import AlternarModo from "./components/AlternarModo";
import FormAdicionar from "./components/FormAdicionar";
import ListaItens from "./components/ListaItens";
import ResumoTotal from "./components/ResumoTotal";
import Login from "./components/Login";

// ==============================
// FUNÇÃO AUXILIAR
// Capitaliza a primeira letra de cada palavra
// Ex.: "café" → "Café"
// ==============================
function capitalizarTexto(texto) {
  if (!texto) return "";

  return texto
    .trim()
    .toLowerCase()
    .replace(/(^|\s)\S/g, (letra) => letra.toUpperCase());
}

function App() {
  // ==============================
  // USUÁRIO AUTENTICADO
  // ==============================
  const { usuario } = useAuth();

  // ==============================
  // DADOS DA LISTA NO FIRESTORE
  // ==============================
  const firestore = useListaFirestore(usuario);

  const lista = firestore?.lista;
  const setLista = firestore?.setLista;

  // ==============================
  // TELA DE LOGIN
  // ==============================
  if (!usuario) {
    return <Login />;
  }

  // ==============================
  // TELA DE CARREGAMENTO
  // ==============================
  if (!lista || !setLista) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Carregando sua lista...</p>
      </div>
    );
  }

  // ==============================
  // LISTA DE ITENS
  // ==============================
  const itens = lista.itens || [];

  // ==============================
  // LOGOUT
  // ==============================
  const fazerLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  // ==============================
  // FINALIZAR COMPRA
  // Salva no histórico e limpa a lista
  // ==============================
  const finalizarCompra = async () => {
    if (!usuario || itens.length === 0) return;

    const compraId = Date.now().toString();

    const compra = {
      estabelecimento: lista.estabelecimento || "Não informado",
      itens: lista.itens,
      total: itens.reduce(
        (acumulador, item) => acumulador + item.quantidade * item.precoUnitario,
        0,
      ),
      data: new Date().toISOString(),
    };

    try {
      // Salva a compra no histórico do usuário
      await setDoc(doc(db, "users", usuario.uid, "compras", compraId), compra);

      // Limpa a lista após finalizar
      setLista({
        modo: "planejamento",
        estabelecimento: "",
        itens: [],
      });
    } catch (error) {
      console.error("Erro ao finalizar compra:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CABEÇALHO */}
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
      />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        {/* ALTERNA ENTRE OS MODOS */}
        <AlternarModo
          modo={lista.modo}
          aoAlternar={(modo) =>
            setLista((prev) => ({
              ...prev,
              modo,
            }))
          }
        />

        {/* FORMULÁRIO DE ADIÇÃO */}
        <FormAdicionar
          aoAdicionar={(dados) =>
            setLista((prev) => ({
              ...prev,
              itens: [
                ...prev.itens,
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

        {/* LISTA DE ITENS */}
        <ListaItens
          itens={itens}
          modo={lista.modo}
          aoAtualizar={(id, dadosAtualizados) =>
            setLista((prev) => ({
              ...prev,
              itens: prev.itens.map((item) =>
                item.id === id ? { ...item, ...dadosAtualizados } : item,
              ),
            }))
          }
          aoRemover={(id) =>
            setLista((prev) => ({
              ...prev,
              itens: prev.itens.filter((item) => item.id !== id),
            }))
          }
          aoAlternarComprado={(id) =>
            setLista((prev) => ({
              ...prev,
              itens: prev.itens.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      comprado: !item.comprado,
                    }
                  : item,
              ),
            }))
          }
        />

        {/* RESUMO DA COMPRA */}
        <ResumoTotal
          totais={{
            total: itens.reduce(
              (acumulador, item) =>
                acumulador + item.quantidade * item.precoUnitario,
              0,
            ),
            quantidadeItens: itens.length,
            itensComprados: itens.filter((item) => item.comprado).length,
          }}
          modo={lista.modo}
        />

        {/* BOTÃO FINALIZAR COMPRA */}
        {itens.length > 0 && (
          <button
            onClick={finalizarCompra}
            className="w-full rounded-lg bg-emerald-600 p-4 font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Finalizar Compra
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
