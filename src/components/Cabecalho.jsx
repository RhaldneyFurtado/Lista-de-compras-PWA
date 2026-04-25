// ==============================
// IMPORTA ÍCONES
// ==============================
import { ShoppingCart, Trash2, LogOut, User } from "lucide-react";

// ==============================
// COMPONENTE - CABEÇALHO
// ==============================
export default function Cabecalho({
  estabelecimento,
  aoDefinirEstabelecimento,
  aoLimpar,
  usuario,
  aoLogout,
}) {
  return (
    <header className="bg-emerald-600 text-white shadow-lg">
      <div className="mx-auto max-w-4xl px-4 py-4">
        {/* TOPO */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white p-2">
              <ShoppingCart className="text-emerald-600" size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">Lista de Compras</h1>
              <p className="text-sm text-emerald-100">Organize suas compras</p>
            </div>
          </div>

          {/* USUÁRIO */}
          <div className="flex items-center gap-3">
            {/* FOTO OU ÍCONE */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700">
              {usuario?.photoURL ? (
                <img
                  src={usuario.photoURL}
                  alt={usuario?.displayName || "Usuário"}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User size={20} />
              )}
            </div>

            {/* NOME */}
            <div className="hidden sm:block">
              <p className="max-w-[160px] truncate text-sm font-medium">
                {usuario?.displayName || "Usuário"}
              </p>
              <p className="text-xs text-emerald-100">Conectado</p>
            </div>

            {/* SAIR */}
            <button
              onClick={aoLogout}
              className="rounded-lg bg-emerald-700 p-2 transition-colors hover:bg-emerald-800"
              title="Sair"
            >
              <LogOut size={20} />
            </button>

            {/* LIMPAR */}
            <button
              onClick={aoLimpar}
              className="rounded-lg bg-emerald-700 p-2 transition-colors hover:bg-emerald-800"
              title="Limpar lista"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {/* ESTABELECIMENTO */}
        <input
          type="text"
          value={estabelecimento}
          onChange={(e) => aoDefinirEstabelecimento(e.target.value)}
          placeholder="Nome do mercado..."
          className="w-full rounded-lg bg-emerald-700 px-3 py-2 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>
    </header>
  );
}
