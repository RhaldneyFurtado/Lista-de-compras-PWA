// ==============================
// CONFIGURAÇÃO DO VITE E PWA
// ==============================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Exportação da configuração principal do Vite
export default defineConfig({
  plugins: [
    react(),
    // Configuração do plugin PWA
    VitePWA({
      registerType: "autoUpdate", // Atualiza o Service Worker automaticamente quando houver nova versão
      devOptions: {
        enabled: false, // Mantém desativado no localhost para não poluir o ambiente local
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        cleanupOutdatedCaches: true, // Limpa caches antigos de builds anteriores automaticamente
      },
      // Definição do manifesto gerado automaticamente pelo Vite PWA
      manifest: {
        name: "Lista de Compras",
        short_name: "Compras",
        description: "Aplicativo PWA para gerenciamento de listas de compras",
        theme_color: "#10b981",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/Lista-de-compras-PWA/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  // Configuração do servidor de desenvolvimento local
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
  // Otimizações de empacotamento para a build de produção
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          firebase: ["firebase/app", "firebase/auth", "firebase/firestore"],
        },
      },
    },
  },
  // Caminho base para publicação no GitHub Pages
  base: "/Lista-de-compras-PWA/",
});
