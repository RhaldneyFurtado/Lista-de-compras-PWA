// Lista de todos os itens
export default function ListaItens({ itens, aoRemover, aoAlternarComprado }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Percorre todos os itens */}
      {itens.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          {/* Lado esquerdo */}
          <div className="flex items-center gap-2">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => aoAlternarComprado(item.id)}
            />

            {/* Nome do item */}
            <span className={item.comprado ? "line-through text-gray-400" : ""}>
              {item.nome}
            </span>
          </div>

          {/* Botão remover */}
          <button onClick={() => aoRemover(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
