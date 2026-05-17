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
  base: "/Lista-de-compras-PWA/",

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      // ==============================
      // PWA MELHORADO (SEM CACHE PRESO)
      // ==============================
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],

        cleanupOutdatedCaches: true,

        //  FORÇA NÃO USAR CACHE ANTIGO DE JS
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination === "script" ||
              request.destination === "style",

            handler: "NetworkFirst",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 0, // nunca reutiliza versão antiga
              },
            },
          },
        ],
      },

      // ==============================
      // SERVICE WORKER MAIS AGRESSIVO
      // ==============================
      devOptions: {
        enabled: true,
        type: "module",
      },

      // 🔥 IMPORTANTE: evita segurar versão antiga
      injectRegister: "auto",

      manifest: {
        name: "Lista de Compras Inteligente",
        short_name: "Compras",
        description: "Organize suas compras de forma simples e rápida",
        theme_color: "#10b981",
        background_color: "#ffffff",
        display: "standalone",

        start_url: "/Lista-de-compras-PWA/",
        scope: "/Lista-de-compras-PWA/",

        icons: [
          {
            src: "/Lista-de-compras-PWA/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Lista-de-compras-PWA/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/Lista-de-compras-PWA/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],

  server: {
    host: true,
    port: 5173,
    open: true,
  },

  build: {
    sourcemap: false,
    outDir: "dist",
    //  ajuda contra cache antigo em deploy
    assetsInlineLimit: 0,
  },
});
