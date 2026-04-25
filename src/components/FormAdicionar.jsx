import { useState } from "react";

// Formulário de planejamento
export default function FormAdicionar({ aoAdicionar }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome.trim()) return;

    aoAdicionar({
      nome,
      quantidade,
    });

    setNome("");
    setQuantidade(1);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      {/* Nome */}
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Produto"
        className="flex-1 border p-2 rounded"
      />

      {/* Quantidade */}
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="w-20 border p-2 rounded"
      />

      <button className="bg-green-500 text-white px-4 rounded">+</button>
    </form>
  );
}
