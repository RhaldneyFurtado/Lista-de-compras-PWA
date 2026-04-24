//Importa um hook de estado do react
import { useState } from "react";

// Formulário para adicionar novos itens
export default function FormAdicionar({ aoAdicionar }) {
  // Estado local do input
  const [nome, setNome] = useState("");

  // Função ao enviar formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) return; // Evita item vazio

    aoAdicionar(nome); // Envia para o hook
    setNome(""); // Limpa input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      {/* Input do nome */}
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Adicionar item..."
        className="flex-1 border rounded-lg px-3 py-2"
      />

      {/* Botão adicionar */}
      <button className="bg-emerald-500 text-white px-4 rounded-lg">
        Adicionar
      </button>
    </form>
  );
}
