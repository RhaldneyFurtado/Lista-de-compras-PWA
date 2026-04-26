// ==============================
// COMPONENTE - ITEM FEIRA
// ==============================

import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export function ItemFeira({ item, onAtualizar, onRemover, onToggleComprado }) {
  // ==============================
  // ESTADOS
  // ==============================
  const [quantidade, setQuantidade] = useState(item.quantidade || 1);
  const [precoInput, setPrecoInput] = useState("");

  // ==============================
  // SINCRONIZAÇÃO
  // ==============================
  useEffect(() => {
    setQuantidade(item.quantidade || 1);

    if (item.precoUnitario !== undefined && item.precoUnitario !== null) {
      setPrecoInput(String(Math.round(item.precoUnitario * 100)));
    } else {
      setPrecoInput("");
    }
  }, [item]);

  // ==============================
  // QUANTIDADE
  // ==============================
  const handleQuantidadeChange = (e) => {
    const valor = e.target.value;

    if (valor === "") {
      setQuantidade("");
      return;
    }

    const novaQuantidade = Math.max(1, parseInt(valor, 10));

    setQuantidade(novaQuantidade);

    onAtualizar(item.id, {
      quantidade: novaQuantidade,
    });
  };

  // ==============================
  // PREÇO
  // ==============================
  const handlePrecoChange = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setPrecoInput(valor);
  };

  const handleBlur = () => {
    const centavos = Number(precoInput || 0);

    onAtualizar(item.id, {
      precoUnitario: centavos / 100,
    });
  };

  // ==============================
  // TOTAL
  // ==============================
  const totalItem =
    Number(quantidade || 0) * (Number(precoInput || 0) / 100);

  const totalFormatado = totalItem.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  // ==============================
  // RENDER
  // ==============================
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">

        {/* CHECKBOX */}
        <input
          type="checkbox"
          checked={item.comprado}
          onChange={() => onToggleComprado(item.id)}
          className="h-5 w-5 accent-emerald-500"
        />

        {/* NOME */}
        <span className="flex-1 font-medium">{item.nome}</span>

        {/* QUANTIDADE + PREÇO */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={handleQuantidadeChange}
            className="w-16 rounded border px-2 py-1 text-center"
          />

          <span>×</span>

          <span>R$</span>

          <input
            type="text"
            inputMode="numeric"
            value={precoInput}
            onChange={handlePrecoChange}
            onBlur={handleBlur}
            className="w-24 rounded border px-2 py-1 text-right"
            placeholder="0,00"
          />
        </div>

        {/* TOTAL */}
        <div className="min-w-[110px] text-right">
          <span className="block text-xs text-gray-500">Total</span>
          <span className="font-bold">R$ {totalFormatado}</span>
        </div>

        {/* REMOVER */}
        <button onClick={() => onRemover(item.id)} className="text-red-500">
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}