// Importa estado do React
import { useState } from "react";

// Formulário para adicionar novos itens
export default function FormAdicionar({ aoAdicionar }) {
  // Estado do nome
  const [nome, setNome] = useState("");

  // Estado da quantidade
  const [quantidade, setQuantidade] = useState(1);

  // Estado do preço unitário
  const [precoUnitario, setPrecoUnitario] = useState("");

  // Função ao enviar formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Evita envio vazio
    if (!nome.trim()) return;

    // Envia objeto completo para o hook
    aoAdicionar({
      nome: nome.trim(),
      quantidade: Number(quantidade),
      precoUnitario: Number(precoUnitario),
    });

    // Limpa campos
    setNome("");
    setQuantidade(1);
    setPrecoUnitario("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2 flex-wrap">
      {/* Nome do item */}
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do item"
        className="flex-1 border rounded-lg px-3 py-2"
      />

      {/* Quantidade */}
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        placeholder="Qtd"
        min="1"
        className="w-20 border rounded-lg px-3 py-2"
      />

      {/* Preço unitário */}
      <input
        type="number"
        value={precoUnitario}
        onChange={(e) => setPrecoUnitario(e.target.value)}
        placeholder="Preço"
        step="0.01"
        min="0"
        className="w-28 border rounded-lg px-3 py-2"
      />

      {/* Botão adicionar */}
      <button className="bg-emerald-500 text-white px-4 rounded-lg">
        Adicionar
      </button>
    </form>
  );
}
