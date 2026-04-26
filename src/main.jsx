// ==============================
// MAIN REACT ENTRADA DA APLICAÇÃO
// ==============================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ==============================
// ELEMENTO ROOT
// ==============================
const container = document.getElementById("root");

// Validação do root
if (!container) {
  throw new Error("Elemento #root não encontrado no index.html");
}

// ==============================
// CRIAÇÃO DA RAIZ REACT
// ==============================
const root = ReactDOM.createRoot(container);

// ==============================
// RENDER DA APLICAÇÃO
// ==============================
// 🔥 REMOVIDO StrictMode para evitar duplicação de hooks no Firebase
root.render(<App />);
