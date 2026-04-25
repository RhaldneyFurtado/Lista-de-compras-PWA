// ==============================
// TELA DE LOGIN (GOOGLE MODERNA)
// ==============================

import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { usuario, entrarComGoogle, sair } = useAuth();

  // ==============================
  // SE JÁ LOGADO
  // ==============================
  if (usuario) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
          {/* FOTO */}
          <img
            src={usuario.photoURL}
            alt="Usuário"
            className="w-20 h-20 rounded-full mx-auto border-4 border-emerald-500"
          />

          {/* NOME */}
          <h2 className="mt-4 text-lg font-bold text-gray-800">
            {usuario.displayName}
          </h2>

          <p className="text-sm text-gray-500">Bem-vindo de volta 👋</p>

          {/* BOTÃO SAIR */}
          <button
            onClick={sair}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  // ==============================
  // TELA DE LOGIN
  // ==============================
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
        {/* ÍCONE / LOGO */}
        <div className="text-5xl mb-4">🛒</div>

        {/* TÍTULO */}
        <h1 className="text-2xl font-bold text-gray-800">Lista de Compras</h1>

        <p className="text-sm text-gray-500 mt-2">
          Organize suas compras com facilidade
        </p>

        {/* BOTÃO GOOGLE */}
        <button
          onClick={entrarComGoogle}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-white border hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-xl shadow transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
