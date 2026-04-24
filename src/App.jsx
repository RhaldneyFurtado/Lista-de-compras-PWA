// Hook principal que controla TODO o estado da aplicação
import { useListaCompras } from "./hooks/useListaCompras";

// Componentes da interface
import Cabecalho from "./components/Cabecalho";
import AlternarModo from "./components/AlternarModo";
import FormAdicionar from "./components/FormAdicionar";
import ListaItens from "./components/ListaItens";
import ResumoTotal from "./components/ResumoTotal";

// Componente principal da aplicação
function App() {
  // Desestruturação de todos os estados e funções do hook
  const {
    modo, // Modo atual: "planejamento" ou "feira"
    itens, // Lista de itens
    estabelecimento, // Nome do mercado/local
    alternarModo, // Alterna entre os modos
    adicionarItemPlanejamento, // Adiciona item no modo planejamento
    atualizarItemFeira, // Atualiza item no modo feira
    removerItem, // Remove item da lista
    alternarComprado, // Marca/desmarca item como comprado
    limparLista, // Limpa toda a lista
    definirEstabelecimento, // Define nome do local
    totais, // Totais calculados (quantidade, valor, etc.)
  } = useListaCompras();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ================= CABEÇALHO ================= */}
      <Cabecalho
        estabelecimento={estabelecimento}
        aoDefinirEstabelecimento={definirEstabelecimento}
        aoLimpar={limparLista}
      />

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Alternador entre Planejamento e Feira */}
        <AlternarModo modo={modo} aoAlternar={alternarModo} />

        {/* Formulário para adicionar itens */}
        <FormAdicionar aoAdicionar={adicionarItemPlanejamento} modo={modo} />

        {/* Lista de itens */}
        <ListaItens
          itens={itens}
          modo={modo}
          aoRemover={removerItem}
          aoAtualizar={atualizarItemFeira}
          aoAlternarComprado={alternarComprado}
        />

        {/* Resumo só aparece se houver itens */}
        {itens.length > 0 && <ResumoTotal totais={totais} modo={modo} />}
      </main>
    </div>
  );
}

// Exporta o componente principal
export default App;
