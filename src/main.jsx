import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Busca o elemento root no HTML
const container = document.getElementById("root");

// Validação (evita erro silencioso se o root não existir)
if (!container) {
  throw new Error("Elemento #root não encontrado no index.html");
}

// Cria a raiz da aplicação React
const root = ReactDOM.createRoot(container);

// Renderiza a aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
