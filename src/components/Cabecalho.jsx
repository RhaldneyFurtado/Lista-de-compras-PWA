// ==============================
// IMPORTAÇÕES
// ==============================
import { ShoppingCart, Trash2, LogOut, User } from "lucide-react";

// ==============================
// CABEÇALHO
// ==============================
export default function Cabecalho({
  estabelecimento,
  aoDefinirEstabelecimento,
  aoLimpar,
  usuario,
  aoLogout,
  tema,
  aoDefinirTema,
}) {
  const temaAtual = tema || "claro";

  return (
    <header className="bg-emerald-600 text-white shadow-lg">

      {/* ============================== */}
      {/* BOTÃO TEMA (GARANTIDO VISÍVEL) */}
      {/* ============================== */}
      <button
        onClick={() =>
          aoDefinirTema(temaAtual === "escuro" ? "claro" : "escuro")
        }
        className="fixed top-3 left-3 z-50 bg-emerald-800 p-3 rounded-full shadow-lg"
        title="Alternar tema"
      >
        {temaAtual === "escuro" ? "☀️" : "🌙"}
      </button>

      <div className="mx-auto max-w-4xl px-4 py-4">

        {/* TOPO */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white p-2">
              <ShoppingCart className="text-emerald-600" size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Lista de Compras</h1>
              <p className="text-sm text-emerald-100">
                Organize suas compras
              </p>
            </div>
          </div>

          {/* AÇÕES */}
          <div className="flex items-center gap-3">

            {/* USUÁRIO */}
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-700 overflow-hidden">
              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={20} />
              )}
            </div>

            {/* LOGOUT */}
            <button onClick={aoLogout}>
              <LogOut size={20} />
            </button>

            {/* LIMPAR */}
            <button onClick={aoLimpar}>
              <Trash2 size={20} />
            </button>

          </div>

        </div>

        {/* INPUT */}
        <input
          value={estabelecimento}
          onChange={(e) => aoDefinirEstabelecimento(e.target.value)}
          placeholder="Nome do mercado..."
          className="w-full rounded-lg bg-emerald-700 px-3 py-2 text-white"
        />

      </div>
    </header>
  );
}