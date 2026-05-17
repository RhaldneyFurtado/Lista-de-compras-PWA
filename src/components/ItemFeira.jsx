// ==============================
// COMPONENTE - ITEM FEIRA
// ==============================

import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export function ItemFeira({
  item,
  onAtualizar,
  onRemover,
  onToggleComprado,
}) {
  // ==============================
  // ESTADOS
  // ==============================
  const [quantidade, setQuantidade] = useState(item.quantidade || 1);
  const [precoInput, setPrecoInput] = useState("");

  // ==============================
  // SINCRONIZAÇÃO SEGURA
  // ==============================
  useEffect(() => {
    setQuantidade(item.quantidade || 1);

    setPrecoInput(
      item.precoUnitario != null
        ? String(Math.round(item.precoUnitario * 100))
        : ""
    );
  }, [item.quantidade, item.precoUnitario]);

  // ==============================
  // FORMATAÇÃO
  // ==============================
  const formatarVisor = (valor) => {
    const numero = Number(valor || 0);

    return (numero / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  };

  // ==============================
  // PREÇO
  // ==============================
  const handlePrecoChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setPrecoInput(valor);
  };

  const handlePrecoBlur = () => {
    const centavos = Number(precoInput || 0);

    onAtualizar(item.id || item._id, {
      precoUnitario: centavos / 100,
    });
  };

  // ==============================
  // QUANTIDADE
  // ==============================
  const handleQuantidadeChange = (e) => {
    const valor = Number(e.target.value);

    setQuantidade(valor);

    onAtualizar(item.id || item._id, {
      quantidade: valor || 1,
    });
  };

  // ==============================
  // TOTAL
  // ==============================
  const precoReais = Number(precoInput || 0) / 100;

  const totalItem = quantidade * precoReais;

  const totalFormatado = totalItem.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">

        {/* CHECKBOX */}
        <input
          type="checkbox"
          checked={item.comprado}
          onChange={() =>
            onToggleComprado(item.id || item._id)
          }
          className="h-5 w-5 accent-emerald-500"
        />

        {/* NOME */}
        <span className="flex-1 font-medium text-gray-800 dark:text-gray-100">
          {item.nome}
        </span>

        {/* QUANTIDADE + PREÇO */}
        <div className="flex items-center gap-2">

          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={handleQuantidadeChange}
            className="w-16 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-center text-gray-900 dark:text-white"
          />

          <span className="text-gray-600 dark:text-gray-300">×</span>

          <span className="text-gray-600 dark:text-gray-300">R$</span>

          <input
            type="text"
            inputMode="numeric"
            value={
              precoInput ? formatarVisor(precoInput) : ""
            }
            onChange={handlePrecoChange}
            onBlur={handlePrecoBlur}
            className="w-24 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right text-gray-900 dark:text-white"
            placeholder="0,00"
          />
        </div>

        {/* TOTAL */}
        <div className="min-w-[110px] text-right">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Total
          </span>

          <span className="font-bold text-gray-900 dark:text-white">
            R$ {totalFormatado}
          </span>
        </div>

        {/* LIXEIRA */}
        <button
          onClick={() =>
            onRemover(item.id || item._id)
          }
          className="text-red-500 hover:text-red-700 p-2"
          title="Remover item"
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}
