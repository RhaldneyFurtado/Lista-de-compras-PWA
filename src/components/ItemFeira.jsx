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
  // SINCRONIZAÇÃO SEGURA
  // ==============================
  useEffect(() => {
    if (item.quantidade !== undefined) {
      setQuantidade(item.quantidade);
    }

    if (item.precoUnitario !== undefined && item.precoUnitario !== null) {
      setPrecoInput(String(Math.round(item.precoUnitario * 100)));
    }
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

    onAtualizar(item.id, {
      precoUnitario: centavos / 100,
    });
  };

  // ==============================
  // QUANTIDADE (CORRIGIDO)
  // ==============================
  const handleQuantidadeChange = (e) => {
    const valor = Number(e.target.value);

    setQuantidade(valor);

    onAtualizar(item.id, {
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
    <div className="rounded-lg border p-4 shadow-sm transition-all">
      <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">

        <input
          type="checkbox"
          checked={item.comprado}
          onChange={() => onToggleComprado(item.id)}
          className="h-5 w-5 accent-emerald-500"
        />

        <span className="flex-1 font-medium">{item.nome}</span>

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
            value={precoInput ? formatarVisor(precoInput) : ""}
            onChange={handlePrecoChange}
            onBlur={handlePrecoBlur}
            className="w-24 rounded border px-2 py-1 text-right"
            placeholder="0,00"
          />

        </div>

        <div className="min-w-[110px] text-right">
          <span className="block text-xs text-gray-500">Total</span>
          <span className="font-bold">R$ {totalFormatado}</span>
        </div>

        <button onClick={() => onRemover(item.id)} className="text-red-500">
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}