// ==============================
// IMPORTAÇÕES PRINCIPAIS DO VITE
// ==============================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// ==============================
// CONFIGURAÇÃO PRINCIPAL
// ==============================
export default defineConfig({
  // ==============================
  // BASE DO GITHUB PAGES
  // ==============================
  base: "/Lista-de-compras-PWA/",

  // ==============================
  // PLUGINS
  // ==============================
  plugins: [
    react(),

    VitePWA({
      // ==============================
      // ATUALIZAÇÃO DO PWA
      // ==============================
      registerType: "autoUpdate",

      // ==============================
      // WORKBOX (CACHE CONTROLADO)
      // ==============================
      workbox: {
        // ==============================
        // ARQUIVOS CACHEADOS
        // ==============================
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg}",
        ],

        // ==============================
        // LIMPA CACHE ANTIGO
        // ==============================
        cleanupOutdatedCaches: true,

        // ==============================
        // NOVO SERVICE WORKER
        // ASSUME CONTROLE IMEDIATAMENTE
        // ==============================
        clientsClaim: true,

        // ==============================
        // EVITA WAITING STATE
        // ==============================
        skipWaiting: true,
      },

      // ==============================
      // MANIFESTO DO PWA
      // ==============================
      manifest: {
        // ==============================
        // INFORMAÇÕES DO APP
        // ==============================
        name: "Lista de Compras Inteligente",

        short_name: "Compras",

        description:
          "Organize suas compras de forma simples e rápida",

        // ==============================
        // CORES
        // ==============================
        theme_color: "#10b981",

        background_color: "#ffffff",

        // ==============================
        // MODO DE EXIBIÇÃO
        // ==============================
        display: "standalone",

        // ==============================
        // URL INICIAL
        // ==============================
        start_url:
          "/Lista-de-compras-PWA/",

        // ==============================
        // ESCOPO DO APP
        // ==============================
        scope:
          "/Lista-de-compras-PWA/",

        // ==============================
        // ÍCONES
        // ==============================
        icons: [
          {
            src:
              "/Lista-de-compras-PWA/pwa-192x192.png",

            sizes: "192x192",

            type: "image/png",
          },

          {
            src:
              "/Lista-de-compras-PWA/pwa-512x512.png",

            sizes: "512x512",

            type: "image/png",
          },

          {
            src:
              "/Lista-de-compras-PWA/maskable-icon-512x512.png",

            sizes: "512x512",

            type: "image/png",

            purpose: "maskable",
          },
        ],
      },

      // ==============================
      // DEV (TESTE LOCAL)
      // ==============================
      devOptions: {
        enabled: true,
      },
    }),
  ],

  // ==============================
  // SERVIDOR LOCAL
  // ==============================
  server: {
    host: true,
    port: 5173,
    open: true,
  },

  // ==============================
  // BUILD FINAL
  // ==============================
  build: {
    // ==============================
    // DESATIVA SOURCE MAP
    // ==============================
    sourcemap: false,

    // ==============================
    // PASTA FINAL DO BUILD
    // ==============================
    outDir: "dist",
  },
});
