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
        // arquivos cacheados
        globPatterns: [
          "**/*.{js,css,ico,png,svg}",
        ],

        // remove caches antigos
        cleanupOutdatedCaches: true,

        // assume imediatamente o controle
        clientsClaim: true,

        // evita waiting state
        skipWaiting: true,

        // ==============================
        // CACHE HTML (REDE PRIMEIRO)
        // ==============================
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination ===
              "document",

            handler: "NetworkFirst",

            options: {
              cacheName: "html-cache",
            },
          },
        ],
      },

      // ==============================
      // MANIFESTO DO PWA
      // ==============================
      manifest: {
        name: "Lista de Compras Inteligente",

        short_name: "Compras",

        description:
          "Organize suas compras de forma simples e rápida",

        theme_color: "#10b981",

        background_color: "#ffffff",

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
    // reduz exposição do source
    sourcemap: false,

    outDir: "dist",
  },
});
