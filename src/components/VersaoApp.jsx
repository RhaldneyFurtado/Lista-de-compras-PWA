/**
 * Componente que mostra a versão do app
 * Útil para debug e confirmação de deploys
 */
export default function VersaoApp() {
  const versao = __APP_VERSION__ || "dev";
  const buildTime = __BUILD_TIME__
    ? new Date(__BUILD_TIME__).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "dev";

  return (
    <div
      title={`Versão ${versao} - ${buildTime}`}
      className="text-xs text-gray-400 dark:text-gray-500 cursor-help"
    >
      v{versao}
    </div>
  );
}
