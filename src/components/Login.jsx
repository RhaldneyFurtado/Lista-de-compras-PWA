// ==============================
// COMPONENTE - LOGIN
// ==============================

import { User } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { usuario, entrarComGoogle, sair } = useAuth();

  // ==============================
  // USUÁRIO LOGADO
  // ==============================
  if (usuario) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
          {usuario.photoURL ? (
            <img
              src={usuario.photoURL}
              alt="Usuario"
              className="mx-auto h-20 w-20 rounded-full border-4 border-emerald-500 object-cover"
            />
          ) : (
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-100 text-emerald-600">
              <User size={40} />
            </div>
          )}
          <h2 className="mt-4 text-lg font-bold text-gray-800">
            {usuario.displayName}
          </h2>
          <p className="text-sm text-gray-500">Bem-vindo de volta</p>
          <button
            onClick={sair}
            className="mt-6 w-full rounded-xl bg-red-500 py-2 text-white transition hover:bg-red-600"
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
        {/* Ícone do carrinho ajustado com BASE_URL para funcionar perfeitamente no GitHub Pages */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 p-2">
          <img
            src={`${import.meta.env.BASE_URL}pwa-192x192.png`}
            alt="Ícone do App"
            className="h-full w-full object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Lista de Compras</h1>
        <p className="mt-2 text-sm text-gray-500">
          Organize suas compras com facilidade
        </p>

        <button
          onClick={entrarComGoogle}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border bg-white py-2 font-medium text-gray-700 shadow transition hover:bg-gray-50"
        >
          {/* Logo oficial colorida do Google via CDN oficial */}
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
