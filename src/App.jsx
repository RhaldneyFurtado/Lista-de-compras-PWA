// Hook principal da aplicação
import { useListaCompras } from "./hooks/useListaCompras";

// Componentes
import Cabecalho from "./components/Cabecalho";
import FormAdicionar from "./components/FormAdicionar";
import ListaItens from "./components/ListaItens";
import ResumoTotal from "./components/ResumoTotal";

function App() {
  const {
    itens,
    adicionarItemPlanejamento,
    removerItem,
    alternarComprado,
    totais,
  } = useListaCompras();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho simples (sem dependência de modo ainda) */}
      <Cabecalho />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Formulário */}
        <FormAdicionar aoAdicionar={adicionarItemPlanejamento} />

        {/* Lista */}
        <ListaItens
          itens={itens}
          aoRemover={removerItem}
          aoAlternarComprado={alternarComprado}
        />

        {/* Resumo */}
        {itens.length > 0 && <ResumoTotal totais={totais} />}
      </main>
    </div>
  );
}

export default App;
