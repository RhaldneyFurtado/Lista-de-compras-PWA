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

  // ==============================
  // ALTERAR TEMA (SEGURO)
  // ==============================
  const handleToggleTema = () => {
    const novo = temaSeguro === "escuro" ? "claro" : "escuro";

    if (aoDefinirTema) {
      aoDefinirTema(novo);
    }
  };

  return (
    <header className="w-full bg-emerald-600 text-white shadow-lg">

      {/* ============================== */}
      {/* CONTAINER */}
      {/* ============================== */}
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">

        {/* ============================== */}
        {/* LOGO + TÍTULO */}
        {/* ============================== */}
        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-emerald-700 p-3 shadow-md">
            <ShoppingCart className="text-white" size={30} />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Lista de Compras
            </h1>

            <p className="text-xs sm:text-sm text-emerald-100">
              Organize suas compras
            </p>
          </div>

        </div>

        {/* ============================== */}
        {/* AÇÕES */}
        {/* ============================== */}
        <div className="flex items-center gap-3">

          {/* TEMA */}
          <button
            onClick={handleToggleTema}
            className="rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition"
            title="Tema"
          >
            {temaSeguro === "escuro" ? "☀️" : "🌙"}
          </button>

          {/* USUÁRIO */}
          <div className="h-10 w-10 rounded-full overflow-hidden bg-emerald-700 flex items-center justify-center border-2 border-white">

            {usuario?.photoURL ? (
              <img
                src={usuario.photoURL}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
                alt="Usuário"
              />
            ) : (
              <User size={18} />
            )}

          </div>

          {/* LOGOUT */}
          <button
            onClick={aoLogout}
            className="rounded-xl bg-emerald-700 p-3 hover:bg-emerald-800 transition"
            title="Sair
