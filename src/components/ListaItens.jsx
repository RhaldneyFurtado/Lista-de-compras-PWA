// ==============================
// COMPONENTE - LISTA DE ITENS
// ==============================

import { Trash2 } from "lucide-react";
import { ItemFeira } from "./ItemFeira";

/**
 * Componente responsável por renderizar
 * todos os itens da lista de compras.
 *
 * Modos:
 * - Planejamento
 * - Feira
 */
export default function ListaItens({
  itens,
  modo,
  aoRemover,
  aoAtualizar,
  aoAlternarComprado,
}) {
  // ==============================
  // LISTA VAZIA
  // ==============================
  if (!itens.length) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow">
        <p className="text-gray-500">Nenhum item adicionado ainda.</p>
      </div>
    );
  }

  // ==============================
  // RENDERIZAÇÃO
  // ==============================
  return (
    <div className="space-y-4">
      {itens.map((item) => (
        <div key={item.id}>
          {/* MODO FEIRA */}
          {modo === "feira" ? (
            <ItemFeira
              item={item}
              onAtualizar={aoAtualizar}
              onRemover={aoRemover}
              onToggleComprado={aoAlternarComprado}
            />
          ) : (
            /* MODO PLANEJAMENTO */
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                {/* LADO ESQUERDO */}
                <div className="flex flex-1 items-center gap-3">
                  {/* CHECKBOX + NOME AGRUPADOS */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.comprado}
                      onChange={() => aoAlternarComprado(item.id)}
                      className="h-5 w-5 accent-emerald-500"
                    />

                    <p
                      className={`font-medium ${
                        item.comprado
                          ? "text-gray-400 line-through"
                          : "text-gray-800"
                      }`}
                    >
                      {item.nome}
                    </p>
                  </div>

                  {/* QUANTIDADE */}
                  <div className="ml-6 flex items-center gap-2">
                    <label className="text-sm text-gray-500">Quantidade:</label>

                    <input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) =>
                        aoAtualizar(item.id, {
                          quantidade: Number(e.target.value) || 1,
                        })
                      }
                      className="w-20 rounded border border-gray-300 px-2 py-1 text-center focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* BOTÃO REMOVER */}
                <button
                  onClick={() => aoRemover(item.id)}
                  className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
                  title="Remover item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
