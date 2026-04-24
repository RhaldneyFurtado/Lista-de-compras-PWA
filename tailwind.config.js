/** @type {import('tailwindcss').Config} */
module.exports = {
  // Arquivos que o Tailwind vai escanear
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Tema do Tailwind
  theme: {
    extend: {
      // Aqui você pode customizar cores, fontes, etc
      colors: {
        primaria: "#10b981", // verde principal do app
      },
    },
  },

  // Plugins do Tailwind (se precisar futuramente)
  plugins: [],
};
