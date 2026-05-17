// ==============================
// COMPONENTE - HISTÓRICO DE COMPRAS
// ==============================

import { useState } from "react";
import { Trash2 } from "lucide-react";

function Historico({ historico, carregando, deletarCompra }) {
  const [compraAberta, setCompraAberta] = useState(null);

  if (carregando) {
    return (
      <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
        Carregando histórico...
      </div>
    );
  }

  if (!historico?.length) {
    return (
      <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
        Nenhuma compra encontrada
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">

      {historico.map((compra) => {
        const total = Number(compra.total || 0);

        return (
          <div
            key={compra.id}
            className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow"
          >

            {/* CABEÇALHO */}
            <div className="flex items-start justify-between">

              <div
                className="flex-1 cursor-pointer"
                onClick={() =>
                  setCompraAberta(
                    compraAberta === compra.id ? null : compra.id
                  )
                }
              >
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {compra.estabelecimento}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(compra.data).toLocaleDateString("pt-BR")}
                </p>

                <p className="font-bold text-green-600 dark:text-green-400">
                  R$ {total.toFixed(2)}
                </p>

                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                  Clique para ver os detalhes
                </p>
              </div>

              <button
                onClick={() => deletarCompra(compra.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>

            </div>

            {/* DETALHES */}
            {compraAberta === compra.id && (
              <div className="mt-3 space-y-2 border-t border-gray-200 dark:border-slate-700 pt-3">

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Item</span>
                  <span>Total</span>
                </div>

                {compra.itens?.map((item) => {
                  const subtotal =
                    Number(item.quantidade || 0) *
                    Number(item.precoUnitario || 0);

                  return (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm text-gray-700 dark:text-gray-200"
                    >
                      <span>
                        {item.quantidade}x {item.nome}
                      </span>

                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                  );
                })}

                <div className="flex justify-between border-t border-gray-200 dark:border-slate-700 pt-2 font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}

export default Historico;
