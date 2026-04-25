import { defineConfig } from "vite"; // Função de configuração do Vite
import react from "@vitejs/plugin-react"; // Plugin React
import { VitePWA } from "vite-plugin-pwa"; // Plugin PWA

export default defineConfig({
  base: "/Lista-de-compras-PWA/", // ESSENCIAL para GitHub Pages funcionar (caminho do repositório)

  plugins: [
    react(), // Ativa suporte ao React

    VitePWA({
      registerType: "autoUpdate", // Atualiza automaticamente o service worker

      // Estratégia de cache (Workbox)
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },

      // Manifesto do app (PWA)
      manifest: {
        name: "Lista de Compras Inteligente",
        short_name: "Compras",
        description: "Organize suas compras de forma simples e offline",
        theme_color: "#10b981",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/Lista-de-compras-PWA/", //ATUALIZADO com o base para GitHub Pages

        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      // ESSENCIAL PRA FUNCIONAR EM DEV
      devOptions: {
        enabled: true,
      },
    }),
  ],

  server: {
    host: true, // Permite acessar pelo celular (mesma rede)
    port: 5173,
    open: true, // Abre no navegador automaticamente
  },

  build: {
    sourcemap: true, // Ajuda a debugar produção
    outDir: "dist", // Pasta de saída do build (padrão do Vite)
  },
});
