// ==============================
// IMPORTAÇÕES
// ==============================
import { useState } from "react";

// ==============================
// COMPONENTE - FORMULÁRIO ADICIONAR
// ==============================

export default function FormAdicionar({ aoAdicionar }) {
  // ==============================
  // ESTADOS DO FORMULÁRIO
  // ==============================
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  // ==============================
  // SUBMIT DO FORMULÁRIO
  // ==============================
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

  // ==============================
  // RENDERIZAÇÃO
  // ==============================
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      {/* ============================== */}
      {/* INPUT - NOME DO PRODUTO */}
      {/* ============================== */}
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Produto"
        className="flex-1 border p-2 rounded"
      />

      {/* ============================== */}
      {/* INPUT - QUANTIDADE */}
      {/* ============================== */}
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="w-20 border p-2 rounded"
      />

      {/* ============================== */}
      {/* BOTÃO ADICIONAR */}
      {/* ============================== */}
      <button className="bg-green-500 text-white px-4 rounded">+</button>
    </form>
  );
}
