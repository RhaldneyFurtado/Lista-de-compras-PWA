// ==============================
// Importações principais do Vite
// ==============================
import { defineConfig } from "vite"; // Função que define a configuração do Vite
import react from "@vitejs/plugin-react"; // Plugin para suporte ao React
import { VitePWA } from "vite-plugin-pwa"; // Plugin para transformar o app em PWA

// ==============================
// CONFIGURAÇÃO PRINCIPAL
// ==============================
export default defineConfig({
  // ==============================
  // Base obrigatória no GitHub Pages
  // ==============================
  base: "/Lista-de-compras-PWA/", // Caminho do repositório no GitHub Pages

  // ==============================
  // PLUGINS DO PROJETO
  // ==============================
  plugins: [
    // React funcionando no Vite
    react(),

    // ==============================
    // CONFIGURAÇÃO DO PWA
    // ==============================
    VitePWA({
      // ==============================
      // ATUALIZAÇÃO DO SERVICE WORKER
      // ==============================
      registerType: "prompt",
      // 👉 Em vez de autoUpdate:
      // mostra atualização e evita cache preso (mais confiável no GitHub Pages)

      // ==============================
      // WORKBOX (CACHE DO PWA)
      // ==============================
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],

        // 🔥 força o novo service worker assumir imediatamente
        skipWaiting: true,
        clientsClaim: true,
      },

      // ==============================
      // MANIFESTO DO PWA (INSTALAÇÃO)
      // ==============================
      manifest: {
        // Nome completo do app
        name: "Lista de Compras Inteligente",

        // Nome curto (aparece no ícone do celular)
        short_name: "Compras",

        // Descrição do app
        description: "Organize suas compras de forma simples e offline",

        // Cor da barra do navegador no mobile
        theme_color: "#10b981",

        // Cor de fundo ao abrir o app
        background_color: "#ffffff",

        // Modo de exibição como app nativo
        display: "standalone",

        // URL inicial do app (IMPORTANTE no GitHub Pages)
        start_url: "/Lista-de-compras-PWA/",

        // ==============================
        // ÍCONES DO APP (INSTALAÇÃO NO CELULAR)
        // ==============================
        icons: [
          {
            // Ícone padrão 192x192
            src: "/Lista-de-compras-PWA/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            // Ícone grande 512x512
            src: "/Lista-de-compras-PWA/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },

          {
            // Ícone adaptável (Android moderno)
            src: "/Lista-de-compras-PWA/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      // ==============================
      // CONFIGURAÇÃO DE DESENVOLVIMENTO
      // ==============================
      devOptions: {
        enabled: true, // permite testar PWA localmente no dev
      },
    }),
  ],

  // ==============================
  // SERVIDOR LOCAL (DEV)
  // ==============================
  server: {
    host: true, // permite acessar pelo celular na mesma rede
    port: 5173, // porta padrão do Vite
    open: true, // abre o navegador automaticamente
  },

  // ==============================
  // BUILD DE PRODUÇÃO
  // ==============================
  build: {
    sourcemap: true, // ajuda a debugar erros em produção
    outDir: "dist", // pasta final do build
  },
});
