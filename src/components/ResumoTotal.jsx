import { DollarSign, Package, CheckCircle, Clock } from "lucide-react";

import { formatarMoeda } from "../utils/formatadores";

/**
 * Componente de resumo da lista de compras
 * Mostra totais, progresso e estatísticas gerais
 */
export default function ResumoTotal({ totais, modo }) {
  // ==============================
  // DESESTRUTURAÇÃO SEGURA
  // ==============================
  const { total = 0, quantidadeItens = 0, itensComprados = 0 } = totais || {};

  // ==============================
  // CÁLCULO DE PROGRESSO (%)
  // ==============================
  const progresso =
    quantidadeItens > 0 ? (itensComprados / quantidadeItens) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-4">
      {/* ================= GRID DE ESTATÍSTICAS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* 💰 TOTAL */}
        <div className="bg-emerald-50 rounded-lg p-3 col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <DollarSign size={18} />
            <span className="text-sm font-medium">Total</span>
          </div>

          <p className="text-2xl font-bold text-emerald-700">
            {/* total já vem em reais (convertido no hook) */}
            {formatarMoeda(total)}
          </p>

          <p className="text-xs text-emerald-500 mt-1">Valor total da compra</p>
        </div>

        {/* 📦 ITENS */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Package size={18} />
            <span className="text-sm font-medium">Itens</span>
          </div>

          <p className="text-2xl font-bold text-blue-700">{quantidadeItens}</p>
        </div>

        {/* ✅ COMPRADOS */}
        <div className="bg-green-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-green-600 mb-1">
            <CheckCircle size={18} />
            <span className="text-sm font-medium">Comprados</span>
          </div>

          <p className="text-2xl font-bold text-green-700">{itensComprados}</p>
        </div>

        {/* ⏳ RESTANTES (corrigido cálculo) */}
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-orange-600 mb-1">
            <Clock size={18} />
            <span className="text-sm font-medium">Restantes</span>
          </div>

          <p className="text-2xl font-bold text-orange-700">
            {quantidadeItens - itensComprados}
          </p>
        </div>
      </div>

      {/* ================= PROGRESSO ================= */}
      {quantidadeItens > 0 && (
        <div className="mt-4">
          {/* texto */}
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso</span>
            <span>{Math.round(progresso)}%</span>
          </div>

          {/* barra */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>

          {/* resumo */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            {itensComprados} de {quantidadeItens} itens
          </p>
        </div>
      )}
    </div>
  );
}
