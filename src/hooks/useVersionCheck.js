import { useEffect } from "react";

export function useVersionCheck() {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const response = await fetch("/Lista-de-compras-PWA/version.json", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const serverData = await response.json();
        const currentVersion =
          typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";
        if (serverData.version !== currentVersion && currentVersion !== "dev") {
          console.log(
            `Nova versao detectada: ${currentVersion} -> ${serverData.version}`,
          );
          if ("caches" in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
              cacheNames.map((cacheName) => caches.delete(cacheName)),
            );
            console.log("Cache limpo");
          }
          if ("serviceWorker" in navigator) {
            const registrations =
              await navigator.serviceWorker.getRegistrations();
            await Promise.all(
              registrations.map((registration) => registration.unregister()),
            );
            console.log("Service Workers desregistrados");
          }
          window.location.reload(true);
        }
      } catch (error) {
        console.log("Verificacao de versao: ignorado em dev");
      }
    };
    checkVersion();
    const interval = setInterval(checkVersion, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
}
