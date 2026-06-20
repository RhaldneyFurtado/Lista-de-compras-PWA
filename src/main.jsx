import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Elemento #root nao encontrado no index.html");
const root = ReactDOM.createRoot(container);
root.render(<App />);
