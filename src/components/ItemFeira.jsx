// ==============================
// COMPONENTE - ITEM FEIRA
// ==============================

import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

/**
 * Componente responsável por exibir
 * e controlar um item no modo Feira.
 *
 * Funcionalidades:
 * - Marcar como comprado
 * - Alterar quantidade
 * - Digitar preço livremente
 * - Formatar preço ao sair do campo
 * - Exibir total em tempo real
 * - Remover item
 */
export function ItemFeira({ item, onAtualizar, onRemover, onToggleComprado }) {
  // ==============================
  // ESTADOS LOCAIS
  // ==============================

  // Quantidade do item
  const [quantidade, setQuantidade] = useState(item.quantidade || 1);

  // Valor digitado no campo de preço
  const [precoInput, setPrecoInput] = useState(
    item.precoUnitario ? item.precoUnitario.toFixed(2).replace(".", ",") : "",
  );

  // ==============================
  // SINCRONIZAÇÃO COM FIRESTORE
  // ==============================
  useEffect(() => {
    setQuantidade(item.quantidade || 1);

    setPrecoInput(
      item.precoUnitario ? item.precoUnitario.toFixed(2).replace(".", ",") : "",
    );
  }, [item.quantidade, item.precoUnitario]);

  // ==============================
  // ALTERAR QUANTIDADE
  // ==============================
  const handleQuantidadeChange = (e) => {
    const novaQuantidade = Number(e.target.value) || 1;

    setQuantidade(novaQuantidade);

    // Atualiza imediatamente
    onAtualizar(item.id, {
      quantidade: novaQuantidade,
    });
  };

  // ==============================
  // DIGITAÇÃO LIVRE DO PREÇO
  // ==============================
  const handlePrecoChange = (e) => {
    setPrecoInput(e.target.value);
  };

  // ==============================
  // SALVAR PREÇO AO SAIR DO CAMPO
  // ==============================
  const handleBlur = () => {
    // Converte formato brasileiro para número
    const valorNumerico = parseFloat(
      precoInput.replace(/\./g, "").replace(",", "."),
    );

    const precoFinal = isNaN(valorNumerico) ? 0 : valorNumerico;

    // Salva no estado principal
    onAtualizar(item.id, {
      precoUnitario: precoFinal,
    });

    // Reaplica formatação
    setPrecoInput(
      precoFinal > 0 ? precoFinal.toFixed(2).replace(".", ",") : "",
    );
  };

  // ==============================
  // CÁLCULO DO TOTAL
  // ==============================
  const precoEmReais =
    parseFloat(precoInput.replace(/\./g, "").replace(",", ".")) || 0;

  const totalItem = quantidade * precoEmReais;

  // ==============================
  // RENDERIZAÇÃO
  // ==============================
  return (
    <div
      className={`rounded-lg border p-4 shadow-sm transition-all ${
        item.comprado
          ? "border-emerald-300 bg-emerald-50"
          : "border-gray-200 bg-white hover:shadow-md"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
        {/* CHECKBOX */}
        <input
          type="checkbox"
          checked={item.comprado}
          onChange={() => onToggleComprado(item.id)}
          className="h-5 w-5 accent-emerald-500"
        />

        {/* NOME DO PRODUTO */}
        <span
          className={`min-w-[120px] flex-1 font-medium ${
            item.comprado ? "text-emerald-700 line-through" : "text-gray-800"
          }`}
        >
          {item.nome}
        </span>

        {/* CAMPOS EDITÁVEIS */}
        <div className="flex flex-wrap items-center gap-2">
          {/* QUANTIDADE */}
          <div className="flex items-center gap-1">
            <label className="text-xs text-gray-500">Qtd:</label>

            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={handleQuantidadeChange}
              className="w-16 rounded border border-gray-300 px-2 py-1 text-center focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <span className="text-gray-400">×</span>

          {/* PREÇO UNITÁRIO */}
          <div className="flex items-center gap-1">
            <span className="text-gray-500">R$</span>

            <input
              type="text"
              inputMode="decimal"
              value={precoInput}
              onChange={handlePrecoChange}
              onBlur={handleBlur}
              placeholder="0,00"
              className="w-24 rounded border border-gray-300 px-2 py-1 text-right focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* TOTAL DO ITEM */}
        <div className="min-w-[110px] rounded-lg bg-emerald-50 px-3 py-2 text-right">
          <span className="block text-xs text-gray-500">Total</span>

          <span
            className={`text-lg font-bold ${
              item.comprado ? "text-emerald-600" : "text-emerald-500"
            }`}
          >
            R$ {totalItem.toFixed(2).replace(".", ",")}
          </span>
        </div>

        {/* BOTÃO REMOVER */}
        <button
          onClick={() => onRemover(item.id)}
          className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
          title="Remover item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
