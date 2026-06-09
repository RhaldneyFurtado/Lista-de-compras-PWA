import { ShoppingCart } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { usuario, entrarComGoogle, sair } = useAuth();

  if (usuario) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
          <img
            src={usuario.photoURL}
            alt="Usuário"
            className="mx-auto h-20 w-20 rounded-full border-4 border-emerald-500"
          />

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-green-700 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <ShoppingCart size={30} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Lista de Compras</h1>

        <p className="mt-2 text-sm text-gray-500">
          Organize suas compras com facilidade
        </p>

        <button
          onClick={entrarComGoogle}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border bg-white py-2 font-medium text-gray-700 shadow transition hover:bg-gray-50"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="h-5 w-5"
            alt="Google"
          />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
