// ==============================
// IMPORTA ÍCONES
// ==============================
import {
  ShoppingCart,
  Trash2,
  LogOut,
  User,
} from "lucide-react";

// ==============================
// COMPONENTE - CABEÇALHO
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
  const temaSeguro = tema || "claro";

  return (
    <header className="w-full bg-emerald-600 text-white shadow-lg">

      {/* ============================== */}
      {/* CONTAINER FULL WIDTH */}
      {/* ============================== */}
      <div className="w-full px-4 pt-6 pb-6">

        {/* ============================== */}
        {/* TOPO */}
        {/* ============================== */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* ============================== */}
          {/* LOGO */}
          {/* ============================== */}
          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-emerald-700 p-3 shadow-md">
              <ShoppingCart
                className="text-white"
                size={30}
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold leading-tight">
                Lista de Compras
              </h1>

              <p className="text-sm text-emerald-100">
                Organize suas compras
              </p>
            </div>
          </div>

          {/* ============================== */}
          {/* AÇÕES */}
          {/* ============================== */}
          <div className="flex items-center justify-end gap-3 sm:ml-auto">

            {/* TEMA */}
            <button
              onClick={() => {
                const novo =
                  temaSeguro === "escuro"
                    ? "claro"
                    : "escuro";

                aoDefinirTema?.(novo);
              }}
              className="rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800"
              title="Tema"
            >
              {temaSeguro === "escuro"
                ? "☀️"
                : "🌙"}
            </button>

            {/* USUÁRIO */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700 shadow">

              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  alt="Usuário"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={22} />
              )}
            </div>

            {/* LOGOUT */}
            <button
              onClick={aoLogout}
              className="rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800"
              title="Sair"
            >
              <LogOut size={20} />
            </button>

            {/* LIMPAR */}
            <button
              onClick={aoLimpar}
              className="rounded-xl bg-emerald-700 p-3 transition hover:bg-emerald-800"
              title="Limpar lista"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {/* ============================== */}
        {/* INPUT MERCADO */}
        {/* ============================== */}
        <input
          type="text"
          value={estabelecimento}
          onChange={(e) =>
            aoDefinirEstabelecimento(
              e.target.value
            )
          }
          placeholder="Nome do mercado..."
          className="
            w-full
            rounded-2xl
            border
            border-emerald-500
            bg-emerald-700
            px-4
            py-4
            text-white
            placeholder-emerald-200
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-300
          "
        />

      </div>
    </header>
  );
}
