// ==============================
// COMPONENTE - HISTÓRICO DE COMPRAS
// ==============================

/**
 * Exibe o histórico de compras realizadas pelo usuário
 *
 * @param {Array} historico - Lista de compras
 * @param {boolean} carregando - Estado de carregamento
 */
function Historico({ historico, carregando }) {
  // ==============================
  // ESTADO DE CARREGAMENTO
  // ==============================
  if (carregando) {
    return <div className="mt-6 p-4 text-center">Carregando histórico...</div>;
  }

  // ==============================
  // SEM COMPRAS REGISTRADAS
  // ==============================
  if (!historico.length) {
    return (
      <div className="mt-6 rounded-xl bg-white p-4 text-center shadow">
        <h2 className="mb-2 text-xl font-bold">Histórico de Compras</h2>

        <p className="text-gray-500">Nenhuma compra finalizada ainda.</p>
      </div>
    );
  }

  // ==============================
  // LISTA DE COMPRAS
  // ==============================
  return (
    <section className="mt-6">
      {/* Título */}
      <h2 className="mb-4 text-2xl font-bold">Histórico de Compras</h2>

      {/* Lista */}
      <div className="space-y-4">
        {historico.map((compra) => (
          <div key={compra.id} className="rounded-xl bg-white p-4 shadow">
            {/* Cabeçalho da compra */}
            <div className="mb-2 flex items-start justify-between">
              <div>
                {/* Nome do estabelecimento */}
                <h3 className="text-lg font-semibold">
                  {compra.estabelecimento}
                </h3>

                {/* Data da compra */}
                <p className="text-sm text-gray-500">
                  {new Date(compra.data).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Valor total */}
              <span className="text-lg font-bold text-green-600">
                R$ {Number(compra.total || 0).toFixed(2)}
              </span>
            </div>

            {/* Quantidade de itens */}
            <p className="text-sm text-gray-600">
              {compra.itens?.length || 0} item(ns)
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Historico;
