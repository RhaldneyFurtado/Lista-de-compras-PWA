// ==============================
// IMPORTA ÍCONES
// ==============================
import { ListTodo, ShoppingCart } from "lucide-react";

// ==============================
// COMPONENTE - ALTERAR MODO
// ==============================
export default function AlternarModo({
  modo,
  aoAlternar,
}) {
  return (
    // ==============================
    // CONTAINER PRINCIPAL
    // ==============================
    <div className="rounded-xl shadow-md p-2 mb-4 bg-white dark:bg-slate-800">

      {/* ============================== */}
      {/* BOTÕES */}
      {/* ============================== */}
      <div className="flex gap-2">

        {/* ============================== */}
        {/* MODO PLANEJAMENTO */}
        {/* ============================== */}
        <button
          onClick={() => aoAlternar("planejamento")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            modo === "planejamento"
              ? "bg-emerald-500 text-white shadow-md"
              : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"
          }`}
        >
          <ListTodo size={20} />
          <span>Planejamento</span>
        </button>

        {/* ============================== */}
        {/* MODO FEIRA */}
        {/* ============================== */}
        <button
          onClick={() => aoAlternar("feira")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            modo === "feira"
              ? "bg-emerald-500 text-white shadow-md"
              : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"
          }`}
        >
          <ShoppingCart size={20} />
          <span>Na Feira</span>
        </button>

      </div>

    </div>
  );
}
