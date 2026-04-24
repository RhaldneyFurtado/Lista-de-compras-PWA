// Configuração do ESLint para projeto React + Vite

module.exports = {
  root: true, // Define como raiz (não herda configs externas)

  env: {
    browser: true, // Código roda no navegador
    es2020: true, // Suporte ES2020
    node: true, // Permite uso de Node (vite config, etc)
  },

  extends: [
    "eslint:recommended", // Regras padrão recomendadas
    "plugin:react-hooks/recommended", // Regras para hooks do React
  ],

  parserOptions: {
    ecmaVersion: "latest", // JS moderno
    sourceType: "module", // Usa import/export
  },

  settings: {
    react: {
      version: "detect", // Detecta versão automaticamente
    },
  },

  plugins: [
    "react-hooks",
    "react-refresh", // Para Vite (hot reload)
  ],

  rules: {
    // 🔹 Permite variáveis não usadas se começarem com _
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // 🔹 React Refresh (Vite)
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // 🔹 Desliga necessidade de importar React (React 17+)
    "react/react-in-jsx-scope": "off",
  },
};
