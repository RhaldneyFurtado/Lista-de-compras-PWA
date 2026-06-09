// ==============================
// COMPONENTE - LISTA DE ITENS
// ==============================

import { Trash2 } from "lucide-react";
import { ItemFeira } from "./ItemFeira";

export default function ListaItens({
  itens,
  modo,
  aoRemover,
  aoAtualizar,
  aoAlternarComprado,
}) {
  if (!itens.length) {
    return (
      <div className="rounded-lg bg-white dark:bg-slate-800 p-6 text-center shadow">
        <p className="text-gray-500 dark:text-gray-300">
          Nenhum item adicionado ainda.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {itens.map((item) => (
        <div key={item.id}>
          {/* FEIRA */}
          {modo === "feira" ? (
            <ItemFeira
              item={item}
              onAtualizar={aoAtualizar}
              onRemover={aoRemover}
              onToggleComprado={aoAlternarComprado}
            />
          ) : (
            /* PLANEJAMENTO */
            <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                {/* ESQUERDA */}
                <div className="flex flex-1 items-center gap-3">
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
                          ? "text-gray-400 dark:text-gray-500 line-through"
                          : "text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {item.nome}
                    </p>
                  </div>

                  <div className="ml-6 flex items-center gap-2">
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                      Quantidade:
                    </label>

                    <input
                      type="text"
                      inputMode="numeric"
                      value={item.quantidade}
                      onChange={(e) => {
                        const valor = e.target.value;
                        // Permite apenas números
                        if (valor === "" || /^\d+$/.test(valor)) {
                          aoAtualizar(item.id, {
                            quantidade: valor === "" ? "" : Number(valor),
                          });
                        }
                      }}
                      onBlur={(e) => {
                        const valor = Number(e.target.value);
                        if (!valor || valor < 1) {
                          aoAtualizar(item.id, { quantidade: 1 });
                        }
                      }}
                      className="w-20 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* REMOVER */}
                <button
                  onClick={() => aoRemover(item.id)}
                  className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-slate-700 hover:text-red-700"
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
