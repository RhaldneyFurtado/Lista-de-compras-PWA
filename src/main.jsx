// ==============================
// PONTO DE ENTRADA PRINCIPAL
// ==============================

import "./registerSW"; // Inicializa o registro do Service Worker do PWA
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Busca a div principal no index.html
const container = document.getElementById("root");
if (!container) throw new Error("Elemento #root nao encontrado no index.html");

// Inicializa a renderização da aplicação React
const root = ReactDOM.createRoot(container);
root.render(<App />);
