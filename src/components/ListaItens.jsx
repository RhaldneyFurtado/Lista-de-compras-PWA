// Lista de todos os itens
export default function ListaItens({ itens, aoRemover, aoAlternarComprado }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Lista de itens */}
      {itens.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-3">
          {/* Lado esquerdo */}
          <div className="flex flex-col">
            {/* Checkbox + nome */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.comprado}
                onChange={() => aoAlternarComprado(item.id)}
              />

              <span
                className={item.comprado ? "line-through text-gray-400" : ""}
              >
                {item.nome}
              </span>
            </div>

            {/* Quantidade e preço */}
            <div className="text-sm text-gray-500 ml-6">
              {item.quantidade > 0 && <span>Qtd: {item.quantidade}</span>}

              {item.precoUnitario > 0 && (
                <span className="ml-2">
                  Preço: R$ {Number(item.precoUnitario).toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Botão remover */}
          <button onClick={() => aoRemover(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
