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
      {/* BOTÃO TEMA (TOPO DIREITO) */}
      {/* ============================== */}
      <button
        onClick={() => {
          const novo = temaSeguro === "escuro" ? "claro" : "escuro";
          aoDefinirTema?.(novo);
        }}
        className={`absolute top-3 right-3 sm:top-4 sm:right-4
          rounded-full p-3 transition-all duration-300
          ${temaSeguro === "escuro"
            ? "bg-slate-800 rotate-180"
            : "bg-emerald-800"
          }`}
        title="Tema"
      >
        {temaSeguro === "escuro" ? "☀️" : "🌙"}
      </button>

      {/* ============================== */}
      {/* LINHA 1 - LOGO */}
      {/* ============================== */}
      <div className="max-w-6xl mx-auto flex items-center gap-3 px-4 pt-6 pb-2">

        <div className="rounded-2xl bg-emerald-700 p-3 shadow-md">
          <ShoppingCart className="text-white" size={30} />
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Lista de Compras
          </h1>

          <p className="text-xs sm:text-sm text-emerald-100">
            Organize suas compras
          </p>
        </div>

      </div>

      {/* ============================== */}
      {/* LINHA 2 - AÇÕES (COLADO NA DIREITA) */}
      {/* ============================== */}
      <div className="w-full flex justify-end px-0 pr-0 pb-4">

        <div className="flex items-center gap-3 mr-0 pr-2 sm:pr-4">

          {/* USUÁRIO */}
          <div className="h-10 w-10 rounded-full overflow-hidden bg-emerald-700 flex items-center justify-center border-2 border-white">

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
    </header>
  );
}
