import { ListTodo, ShoppingCart } from "lucide-react";
// Importa ícones da biblioteca

// Componente para alternar entre modos da aplicação
export default function AlternarModo({
  modo, // Estado atual (planejamento ou feira)
  aoAlternar, // Função para mudar o modo
}) {
  return (
    // Container principal com estilo de card
    <div className="bg-white rounded-xl shadow-md p-2 mb-4">
      {/* Container dos botões */}
      <div className="flex gap-2">
        {/* Botão modo planejamento */}
        <button
          onClick={() => aoAlternar("planejamento")}
          // Define modo como planejamento ao clicar

          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            modo === "planejamento"
              ? "bg-emerald-500 text-white shadow-md" // Estilo ativo
              : "bg-gray-100 text-gray-600 hover:bg-gray-200" // Estilo inativo
          }`}
        >
          <ListTodo size={20} /> {/* Ícone */}
          <span>Planejamento</span> {/* Texto */}
        </button>

        {/* Botão modo feira */}
        <button
          onClick={() => aoAlternar("feira")}
          // Define modo como feira ao clicar

          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            modo === "feira"
              ? "bg-emerald-500 text-white shadow-md" // Estilo ativo
              : "bg-gray-100 text-gray-600 hover:bg-gray-200" // Estilo inativo
          }`}
        >
          <ShoppingCart size={20} /> {/* Ícone */}
          <span>Na Feira</span> {/* Texto */}
        </button>
      </div>
    </div>
  );
}
