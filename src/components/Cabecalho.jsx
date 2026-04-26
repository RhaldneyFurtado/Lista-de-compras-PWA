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
  const temaSeguro = tema ?? "claro";

  return (
    <header className="bg-emerald-600 text-white shadow-lg">

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
          <div className="flex items-center gap-3 justify-end sm:ml-auto">

            {/* TEMA */}
            <button
              onClick={() => {
                const novo =
                  temaSeguro === "escuro" ? "claro" : "escuro";

                aoDefinirTema(novo);
              }}
              className="rounded-lg bg-emerald-700 p-2 hover:bg-emerald-800"
              title="Tema"
            >
              {temaSeguro === "escuro" ? "☀️" : "🌙"}
            </button>

            {/* USUÁRIO */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700">
              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  alt="Usuário"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={20} />
              )}
            </div>

            {/* LOGOUT */}
            <button
              onClick={aoLogout}
              className="rounded-lg bg-emerald-700 p-2 hover:bg-emerald-800"
            >
              <LogOut size={20} />
            </button>

            {/* LIMPAR */}
            <button
              onClick={aoLimpar}
              className="rounded-lg bg-emerald-700 p-2 hover:bg-emerald-800"
            >
              <Trash2 size={20} />
            </button>

          </div>

        </div>

        {/* INPUT */}
        <input
          type="text"
          value={estabelecimento}
          onChange={(e) => aoDefinirEstabelecimento(e.target.value)}
          placeholder="Nome do mercado..."
          className="w-full rounded-lg bg-emerald-700 px-3 py-2 text-white"
        />

      </div>
    </header>
  );
}