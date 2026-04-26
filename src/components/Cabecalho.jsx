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
  tema,
  aoDefinirTema,
}) {
  return (
    <header className="bg-emerald-600 text-white shadow-lg relative">

      {/* ============================== */}
      {/* BOTÃO TEMA (FIXO NA TELA) */}
      {/* ============================== */}
      <button
        onClick={() =>
          aoDefinirTema(tema === "escuro" ? "claro" : "escuro")
        }
        className="
          fixed top-4 left-4
          z-50
          rounded-full
          bg-emerald-800
          p-3
          shadow-lg
          hover:bg-emerald-900
        "
        title="Alternar tema"
      >
        {tema === "escuro" ? "☀️" : "🌙"}
      </button>

      <div className="mx-auto max-w-4xl px-4 py-4">

        {/* ============================== */}
        {/* TOPO */}
        {/* ============================== */}
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
          <div className="flex items-center gap-3 sm:ml-auto justify-end">

            {/* USUÁRIO */}
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-emerald-700 shrink-0">
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
              className="rounded