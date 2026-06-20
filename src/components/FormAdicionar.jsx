import { useState } from "react";
import { capitalizarTexto } from "../utils/formatadores";

export default function FormAdicionar({ aoAdicionar }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const nomeLimpo = nome.trim().slice(0, 80);
    const quantidadeSegura = Math.max(
      1,
      Math.min(999, Number(quantidade) || 1),
    );
    if (!nomeLimpo) return;
    aoAdicionar({
      nome: capitalizarTexto(nomeLimpo),
      quantidade: quantidadeSegura,
    });
    setNome("");
    setQuantidade(1);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        maxLength={80}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Produto"
        className="flex-1 rounded border p-2"
      />
      <input
        type="number"
        min="1"
        max="999"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="w-20 rounded border p-2"
      />
      <button className="rounded bg-green-500 px-4 text-white">+</button>
    </form>
  );
}
