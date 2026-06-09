/**
 * Hook para verificar atualizações de versão
 * Se detectar versão nova, força atualização completa
 */
import { useEffect } from "react";

export function useVersionCheck() {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        // Busca versão atual do servidor (sem cache)
        const response = await fetch("/Lista-de-compras-PWA/version.json", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const serverData = await response.json();
        const currentVersion = __APP_VERSION__;

        // Se versão mudou, forçar atualização
        if (serverData.version !== currentVersion) {
          console.log(
            `🚀 Nova versão detectada: ${currentVersion} → ${serverData.version}`,
          );

          // 1. Limpar todos os caches
          if ("caches" in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
              cacheNames.map((cacheName) => caches.delete(cacheName)),
            );
            console.log("✅ Cache limpo");
          }

          // 2. Desregistrar Service Workers
          if ("serviceWorker" in navigator) {
            const registrations =
              await navigator.serviceWorker.getRegistrations();
            await Promise.all(
              registrations.map((registration) => registration.unregister()),
            );
            console.log("✅ Service Workers desregistrados");
          }

          // 3. Limpar localStorage se necessário
          // (opcional - descomente se quiser resetar dados do usuário)
          // localStorage.clear();

          // 4. Forçar reload completo
          window.location.reload(true);
        }
      } catch (error) {
        console.error("Erro ao verificar versão:", error);
      }
    };

    // Verificar ao montar
    checkVersion();

    // Verificar a cada 5 minutos
    const interval = setInterval(checkVersion, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);
}
