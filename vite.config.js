import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import fs from "fs";
import process from "node:process";

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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  if (mode === "development") {
    console.log(
      "VITE_FIREBASE_API_KEY:",
      env.VITE_FIREBASE_API_KEY ? "Carregada" : "Ausente",
    );
    console.log(
      "VITE_RECAPTCHA_SITE_KEY:",
      env.VITE_RECAPTCHA_SITE_KEY ? "Carregada" : "Ausente",
    );
  }

  return {
    base: "/Lista-de-compras-PWA/",
    define: {
      __APP_VERSION__: JSON.stringify(
        JSON.parse(fs.readFileSync("./package.json", "utf-8")).version,
      ),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    plugins: [
      react(),
      generateVersionFile,
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
        },
        devOptions: { enabled: true },
        manifest: {
          name: "Lista de Compras Inteligente",
          short_name: "Compras",
          description: "Organize suas compras de forma simples e rapida",
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
    server: { host: true, port: 5173, open: true },
    build: { sourcemap: false, outDir: "dist", assetsInlineLimit: 0 },
  };
});
