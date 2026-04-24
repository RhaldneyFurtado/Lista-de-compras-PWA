import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

/**
 * Componente para cada item no modo Feira
 * Permite: marcar como comprado, alterar quantidade, preço com vírgula automática
 * Mostra total em tempo real (sem precisar marcar como comprado)
 */
export function ItemFeira({ item, onAtualizar, onRemover, onToggleComprado }) {
  // Estados locais para controle dos inputs
  const [quantidade, setQuantidade] = useState(item.quantidade || 1);
  const [precoInput, setPrecoInput] = useState("");

  /**
   * Formata valor em centavos para exibição com vírgula
   * Ex: 450 → "4,50" | 4500 → "45,00"
   */
  const formatarPrecoExibicao = (valor) => {
    if (!valor || valor === 0) return "";
    const reais = Math.floor(valor / 100);
    const centavos = valor % 100;
    return `${reais},${centavos.toString().padStart(2, "0")}`;
  };

  /**
   * Converte string do input para número de centavos
   * Remove tudo que não é dígito
   */
  const converterInputParaCentavos = (input) => {
    const apenasNumeros = input.replace(/\D/g, "");
    return parseInt(apenasNumeros, 10) || 0;
  };

  // Inicializa o input quando o componente monta (só uma vez)
  useEffect(() => {
    if (item.precoUnitario > 0) {
      const centavos = Math.round(item.precoUnitario * 100);
      setPrecoInput(formatarPrecoExibicao(centavos));
    }
  }, []); // ← Array vazio = só executa na montagem!

  /**
   * Atualiza o item no pai quando usuário PARA de digitar (blur)
   * Ou quando muda a quantidade
   * Isso evita loop infinito de re-renderizações!
   */
  const handleBlur = () => {
    const precoEmReais = converterInputParaCentavos(precoInput) / 100;
    onAtualizar(item.id, {
      quantidade: Number(quantidade),
      precoUnitario: precoEmReais,
    });
  };

  // Atualiza quantidade imediatamente (número é simples)
  const handleQuantidadeChange = (e) => {
    const novaQuantidade = e.target.value;
    setQuantidade(novaQuantidade);
    // Atualiza imediatamente pois é só um número
    onAtualizar(item.id, {
      quantidade: Number(novaQuantidade),
      precoUnitario: converterInputParaCentavos(precoInput) / 100,
    });
  };

  // Handler para mudança no preço (só atualiza estado local)
  const handlePrecoChange = (e) => {
    const input = e.target.value;
    const centavos = converterInputParaCentavos(input);
    setPrecoInput(formatarPrecoExibicao(centavos));
  };

  // Calcula total em tempo real para exibição (não afeta o pai)
  const precoEmReais = converterInputParaCentavos(precoInput) / 100;
  const totalItem = quantidade * precoEmReais;

  return (
    <div
      className={`item-enter rounded-lg shadow-sm border p-4 transition-all ${
        item.comprado
          ? "bg-emerald-50 border-emerald-300"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        {/* Checkbox para marcar como comprado */}
        <input
          type="checkbox"
          checked={item.comprado}
          onChange={() => onToggleComprado(item.id)}
          className="checkbox-custom"
        />

        {/* Nome do produto */}
        <span
          className={`flex-1 font-medium min-w-[120px] ${
            item.comprado ? "text-emerald-700 line-through" : "text-gray-800"
          }`}
        >
          {item.nome}
        </span>

        {/* Campos de quantidade e preço */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Quantidade */}
          <div className="flex items-center gap-1">
            <label className="text-xs text-gray-500">Qtd:</label>
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={handleQuantidadeChange}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <span className="text-gray-400">×</span>

          {/* Preço com máscara automática */}
          <div className="flex items-center gap-1">
            <span className="text-gray-500">R$</span>
            <input
              type="text"
              value={precoInput}
              onChange={handlePrecoChange}
              onBlur={handleBlur} // ← Só atualiza no pai quando sai do campo!
              placeholder="0,00"
              className="w-24 px-2 py-1 border border-gray-300 rounded text-right focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Total do item - APARECE SEMPRE! */}
        <div className="min-w-[100px] text-right bg-emerald-50 px-3 py-1 rounded-lg">
          <span className="text-xs text-gray-500 block">Total</span>
          <span
            className={`font-bold text-lg ${
              item.comprado ? "text-emerald-600" : "text-emerald-500"
            }`}
          >
            R$ {totalItem.toFixed(2).replace(".", ",")}
          </span>
        </div>

        {/* Botão remover */}
        <button
          onClick={() => onRemover(item.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
          title="Remover item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
