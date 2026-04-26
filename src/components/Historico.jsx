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
  // ESTADO - COMPRA ABERTA
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
    <div className="space-y-4 mt-6">
      {historico.map((compra) => {
        const total = Number(compra.total || 0);

        return (
          <div key={compra.id} className="bg-white p-4 rounded-xl shadow">
            {/* ============================== */}
            {/* CABEÇALHO DA COMPRA */}
            {/* ============================== */}
            <div className="flex justify-between items-start">
              {/* ÁREA CLICÁVEL */}
              <div
                className="cursor-pointer flex-1"
                onClick={() =>
                  setCompraAberta(compraAberta === compra.id ? null : compra.id)
                }
              >
                <h3 className="font-bold">{compra.estabelecimento}</h3>

                <p className="text-sm text-gray-500">
                  {new Date(compra.data).toLocaleDateString("pt-BR")}
                </p>

                <p className="font-bold text-green-600">
                  R$ {total.toFixed(2)}
                </p>

                {/* ============================== */}
                {/* 🔥 MENSAGEM RESTAURADA */}
                {/* ============================== */}
                <p className="text-xs text-gray-400 mt-1">
                  Clique para ver os detalhes
                </p>
              </div>

              {/* ============================== */}
              {/* BOTÃO EXCLUIR */}
              {/* ============================== */}
              <button
                onClick={() => deletarCompra(compra.id)}
                className="text-red-500 hover:text-red-700"
                title="Excluir compra"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* ============================== */}
            {/* DETALHES DA COMPRA */}
            {/* ============================== */}
            {compraAberta === compra.id && (
              <div className="mt-3 border-t pt-3 space-y-2">
                {/* CABEÇALHO ITENS */}
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>Item</span>
                  <span>Total</span>
                </div>

                {/* ITENS */}
                {compra.itens?.map((item) => {
                  const subtotal =
                    Number(item.quantidade || 0) *
                    Number(item.precoUnitario || 0);

                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.quantidade}x {item.nome}
                      </span>

                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                  );
                })}

                {/* TOTAL FINAL */}
                <div className="border-t pt-2 flex justify-between font-bold">
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
