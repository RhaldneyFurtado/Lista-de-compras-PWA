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

    // ==============================
    // SANITIZAÇÃO E VALIDAÇÃO
    // ==============================
    const nomeLimpo = nome.trim().slice(0, 80);

    const quantidadeSegura = Math.max(
      1,
      Math.min(999, Number(quantidade) || 1),
    );

    // impede submit vazio
    if (!nomeLimpo) return;

    // ==============================
    // ENVIA ITEM
    // ==============================
    aoAdicionar({
      nome: nomeLimpo,
      quantidade: quantidadeSegura,
    });

    // ==============================
    // RESET FORM
    // ==============================
    setNome("");
    setQuantidade(1);
  }

  // ==============================
  // RENDERIZAÇÃO
  // ==============================
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">

      {/* INPUT - NOME PRODUTO */}
      <input
        type="text"
        maxLength={80}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Produto"
        className="flex-1 rounded border p-2"
      />

      {/* INPUT - QUANTIDADE */}
      <input
        type="number"
        min="1"
        max="999"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="w-20 rounded border p-2"
      />

      {/* BOTÃO ADICIONAR */}
      <button className="rounded bg-green-500 px-4 text-white">
        +
      </button>
    </form>
  );
}
