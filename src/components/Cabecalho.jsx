// Importa dois ícones da biblioteca lucide-react
// Trash2 = ícone de lixeira (remover)
// GripVertical = ícone de "arrastar" (reorganizar item)
import { ShoppingCart, Trash2 } from "lucide-react";

// Componente de topo da aplicação
export default function Cabecalho({
  estabelecimento,
  aoDefinirEstabelecimento,
  aoLimpar,
}) {
  return (
    <header className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* TÍTULO E BOTÃO LIMPAR */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo + Nome */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <ShoppingCart className="text-emerald-600" size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Lista de Compras</h1>
              <p className="text-emerald-100 text-sm">Organize suas compras</p>
            </div>
          </div>

          {/* Botão limpar lista */}
          <button
            onClick={aoLimpar}
            className="bg-emerald-700 hover:bg-emerald-800 p-2 rounded-lg"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* INPUT DO ESTABELECIMENTO */}
        <input
          type="text"
          value={estabelecimento}
          onChange={(e) => aoDefinirEstabelecimento(e.target.value)}
          placeholder="Nome do mercado..."
          className="w-full bg-emerald-700 px-3 py-2 rounded-lg text-white"
        />
      </div>
    </header>
  );
}
