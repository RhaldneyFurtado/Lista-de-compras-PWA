import { ShoppingCart, Trash2, LogOut, User } from "lucide-react";

export default function Cabecalho({
  estabelecimento,
  aoDefinirEstabelecimento,
  aoLimpar,
  usuario,
  aoLogout,
  tema,
  aoDefinirTema,
}) {
  return (
    <header className="bg-emerald-600 text-white shadow-lg">

      <div className="mx-auto max-w-4xl px-4 py-4">

        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

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

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                aoDefinirTema(tema === "escuro" ? "claro" : "escuro")
              }
              className="rounded-lg bg-emerald-700 p-2"
            >
              {tema === "escuro" ? "☀️" : "🌙"}
            </button>

            <div className="h-10 w-10 rounded-full bg-emerald-700 flex items-center justify-center">
              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  className="h-full w-full rounded-full"
                />
              ) : (
                <User size={20} />
              )}
            </div>

            <button onClick={aoLogout}>
              <LogOut size={20} />
            </button>

            <button onClick={aoLimpar}>
              <Trash2 size={20} />
            </button>

          </div>

        </div>

        <input
          value={estabelecimento}
          onChange={(e) => aoDefinirEstabelecimento(e.target.value)}
          placeholder="Nome do mercado..."
          className="w-full rounded-lg bg-emerald-700 px-3 py-2"
        />

      </div>
    </header>
  );
}