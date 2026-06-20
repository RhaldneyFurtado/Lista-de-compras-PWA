import { DollarSign, Package, CheckCircle, Clock } from "lucide-react";
import { formatarMoeda } from "../utils/formatadores";

export default function ResumoTotal({ totais }) {
  const { total = 0, quantidadeItens = 0, itensComprados = 0 } = totais || {};
  const progresso =
    quantidadeItens > 0 ? (itensComprados / quantidadeItens) * 100 : 0;

  return (
    <div className="rounded-xl shadow-md p-4 mt-4 bg-white dark:bg-slate-800">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-lg p-3 col-span-2 md:col-span-1 bg-emerald-50 dark:bg-slate-700">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300 mb-1">
            <DollarSign size={18} />
            <span className="text-sm font-medium">Total</span>
          </div>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-200">
            {formatarMoeda(total)}
          </p>
          <p className="text-xs text-emerald-500 dark:text-emerald-300 mt-1">
            Valor total da compra
          </p>
        </div>
        <div className="rounded-lg p-3 bg-blue-50 dark:bg-slate-700">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-300 mb-1">
            <Package size={18} />
            <span className="text-sm font-medium">Itens</span>
          </div>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-200">
            {quantidadeItens}
          </p>
        </div>
        <div className="rounded-lg p-3 bg-green-50 dark:bg-slate-700">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-300 mb-1">
            <CheckCircle size={18} />
            <span className="text-sm font-medium">Comprados</span>
          </div>
          <p className="text-2xl font-bold text-green-700 dark:text-green-200">
            {itensComprados}
          </p>
        </div>
        <div className="rounded-lg p-3 bg-orange-50 dark:bg-slate-700">
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-300 mb-1">
            <Clock size={18} />
            <span className="text-sm font-medium">Restantes</span>
          </div>
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-200">
            {quantidadeItens - itensComprados}
          </p>
        </div>
      </div>
      {quantidadeItens > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progresso</span>
            <span>{Math.round(progresso)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
            <div
              className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {itensComprados} de {quantidadeItens} itens
          </p>
        </div>
      )}
    </div>
  );
}
