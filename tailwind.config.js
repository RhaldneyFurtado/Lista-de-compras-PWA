/** @type {import('tailwindcss').Config} */
module.exports = {
  // ativa dark mode por classe
  darkMode: "class",

  // Arquivos que o Tailwind vai escanear
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primaria: "#10b981", // verde principal do app
      },
    },
  },

  plugins: [],
};
