// ==============================
// COMPONENTE - HISTÓRICO DE COMPRAS
// ==============================

import { useState } from "react";
import { Trash2 } from "lucide-react";

/**
 * Histórico de compras no formato de "nota de mercado"
 */
function Historico({ historico, carregando, deletarCompra }) {
  // ==============================
  // ESTADO
  // ==============================
  const [compraAberta, setCompraAberta] = useState(null);

  // ==============================
  // CARREGANDO
  // ==============================
  if (carregando) {
    return (
      <div className="mt-6 text-center text-gray-600">
        Carregando histórico...
      </div>
    );
  }

  // ==============================
  // VAZIO
  // ==============================
  if (!historico?.length) {
    return (
      <div className="mt-6 text-center text-gray-500">
        Nenhuma compra encontrada
      </div>
    );
  }

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="mt-6 space-y-4">
      {historico.map((compra) => {
        const total = Number(compra.total || 0);

        return (
          <div key={compra.id} className="rounded-xl bg-white p-4 shadow">

            {/* CABEÇALHO */}
            <div className="flex items-start justify-between">

              {/* INFO CLICK */}
              <div
                className="flex-1 cursor-pointer"
                onClick={() =>
                  setCompraAberta(
                    compraAberta === compra.id ? null : compra.id
                  )
                }
              >
                <h3 className="font-bold">{compra.estabelecimento}</h3>

                <p className="text-sm text-gray-500">
                  {new Date(compra.data).toLocaleDateString("pt-BR")}
                </p>

                <p className="font-bold text-green-600">
                  R$ {total.toFixed(2)}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Clique para ver os detalhes
                </p>
              </div>

              {/* LIXEIRA */}
              <button
                onClick={() => deletarCompra(compra.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* DETALHES */}
            {compraAberta === compra.id && (
              <div className="mt-3 space-y-2 border-t pt-3">

                {/* HEADER */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Item</span>
                  <span>Total</span>
                </div>

                {/* ITENS */}
                {compra.itens?.map((item) => {
                  const subtotal =
                    Number(item.quantidade || 0) *
                    Number(item.precoUnitario || 0);

                  return (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <span>
                        {item.quantidade}x {item.nome}
                      </span>

                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                  );
                })}

                {/* TOTAL */}
                <div className="flex justify-between border-t pt-2 font-bold">
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