// Importa dois ícones da biblioteca lucide-react
// Trash2 = ícone de lixeira (remover)
// GripVertical = ícone de "arrastar" (reorganizar item)
import { Trash2, GripVertical } from "lucide-react";

// Cria e exporta o componente funcional chamado ItemPlanejamento
// Ele recebe duas propriedades (props):
// - item: dados do item (nome, id, etc.)
// - onRemover: função que remove o item
export function ItemPlanejamento({ item, onRemover }) {
  // Início do retorno do componente (o que será renderizado na tela)
  return (
    // Container principal do item
    // classes Tailwind:
    // - item-enter: animação de entrada (definida no projeto)
    // - bg-white: fundo branco
    // - rounded-lg: bordas arredondadas
    // - shadow-sm: sombra leve
    // - border border-gray-200: borda cinza clara
    // - p-4: espaçamento interno
    // - flex items-center: alinhamento em linha centralizado
    // - gap-3: espaço entre elementos
    // - hover:shadow-md: sombra maior ao passar o mouse
    // - transition-shadow: animação suave da sombra
    <div className="item-enter bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
      // Ícone de "arrastar" (serve para indicar que o item pode ser
      reorganizado)
      <GripVertical className="text-gray-400" size={20} />
      // Mostra o nome do item // flex-1: ocupa todo espaço disponível //
      text-gray-800: texto cinza escuro // font-medium: fonte com peso médio
      <span className="flex-1 text-gray-800 font-medium">{item.nome}</span>
      // Botão de remover item
      <button
        // Quando clicar, chama a função onRemover passando o ID do item
        onClick={() => onRemover(item.id)}
        // Estilos do botão:
        // text-red-500: texto vermelho
        // hover:text-red-700: vermelho mais forte ao passar mouse
        // hover:bg-red-50: fundo levemente vermelho ao passar mouse
        // p-2: espaçamento interno
        // rounded-lg: bordas arredondadas
        // transition-colors: transição suave de cores
        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
        // Tooltip quando o mouse passa em cima
        title="Remover item"
      >
        // Ícone de lixeira dentro do botão
        <Trash2 size={18} />
      </button>
    </div>
  );
}
