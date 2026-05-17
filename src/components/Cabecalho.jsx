// ==============================
// IMPORTA ÍCONES
// ==============================
import { ShoppingCart, Trash2, LogOut, User } from "lucide-react";

// ==============================
// COMPONENTE - CABEÇALHO
// ==============================
export default function Cabecalho({
  usuario,
  aoLimpar,
  aoLogout,
  tema,
  aoDefinirTema,
}) {
  const temaSeguro = tema || "claro";

  return (
    <header className="w-full bg-emerald-600 text-white shadow-lg relative">

      {/* ============================== */}
      {/* BOTÃO TEMA */}
      {/* ============================== */}
      <button
        onClick={() => {
          const novo = temaSeguro === "escuro" ? "claro" : "escuro";
          aoDefinirTema?.(novo);
        }}
        className={`absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full p-3 transition-all duration-300 ${
          temaSeguro === "escuro"
            ? "bg-slate-800 rotate-180"
            : "bg-emerald-800"
        }`}
        title="Tema"
      >
        {temaSeguro === "escuro" ? "☀️" : "🌙"}
      </button>

      {/* ============================== */}
      {/* CONTAINER */}
      {/* ============================== */}
      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* ============================== */}
        {/* LINHA 1 - LOGO */}
        {/* ============================== */}
        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-emerald-700 p-3 shadow-md">
            <ShoppingCart className="text-white" size={30} />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              Lista de Compras
            </h1>

            <p className="text-xs sm:text-sm text-emerald-100">
              Organize suas compras
            </p>
          </div>

        </div>

        {/* ============================== */}
        {/* LINHA 2 - AÇÕES (DIREITA COLADA) */}
        {/* ============================== */}
        <div className="flex justify-end mt-4">

          <div className="flex items-center gap-3">

            {/* USUÁRIO */}
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-emerald-700 flex items-center justify-center border-2 border-white">

              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={18} />
              )}

            </div>

            {/* LOGOUT */}
            <button
              onClick={aoLogout}
              className="rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition"
              title="Sair"
            >
              <LogOut size={20} />
            </button>

            {/* LIMPAR */}
            <button
              onClick={aoLimpar}
              className="rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition"
              title="Limpar lista"
            >
              <Trash2 size={20} />
            </button>

          </div>
        </div>

      </div>
    </header>
  );
}
