// ==============================
// IMPORTAÇÕES PRINCIPAIS DO VITE
// ==============================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import fs from "fs";

// ==============================
// PLUGIN CUSTOMIZADO - GERAR VERSION.JSON
// ==============================
const generateVersionFile = {
  name: "generate-version-file",
  generateBundle() {
    const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
    const versionData = {
      version: packageJson.version,
      buildTime: new Date().toISOString(),
    };

    this.emitFile({
      type: "asset",
      fileName: "version.json",
      source: JSON.stringify(versionData, null, 2),
    });
  },
};

// ==============================
// CONFIGURAÇÃO PRINCIPAL
// ==============================
export default defineConfig({
  // ==============================
  // BASE (GITHUB PAGES)
  // ==============================
  base: "/Lista-de-compras-PWA/",

  // ==============================
  // INJETAR VERSÃO NO BUILD
  // ==============================
  define: {
    __APP_VERSION__: JSON.stringify(
      JSON.parse(fs.readFileSync("./package.json", "utf-8")).version,
    ),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  // ==============================
  // PLUGINS
  // ==============================
  plugins: [
    react(),
    generateVersionFile,

    VitePWA({
      // ==============================
      // AUTO UPDATE (SEM CACHE PRESO)
      // ==============================
      registerType: "autoUpdate",

      injectRegister: "auto",

      // ==============================
      // WORKBOX (CONFIG ESTÁVEL)
      // ==============================
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],

        cleanupOutdatedCaches: true,

        clientsClaim: true,
        skipWaiting: true,
      },

      // ==============================
      // DEV OPTIONS (SÓ DESENVOLVIMENTO)
      // ==============================
      devOptions: {
        enabled: true,
      },

      // ==============================
      // MANIFESTO PWA
      // ==============================
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

  // ==============================
  // SERVER (DEV)
  // ==============================
  server: {
    host: true,
    port: 5173,
    open: true,
  },

  // ==============================
  // BUILD
  // ==============================
  build: {
    sourcemap: false,
    outDir: "dist",
    assetsInlineLimit: 0,
  },
});
