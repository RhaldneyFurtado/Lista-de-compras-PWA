// ==============================
// IMPORTAÇÕES
// ==============================
import { useState, useEffect } from "react";

import { useAuth } from "./hooks/useAuth";
import { useListaFirestore } from "./hooks/useListaFirestore";
import { useHistoricoCompras } from "./hooks/useHistoricoCompras";

import { signOut } from "firebase/auth";
import { auth } from "./services/firebase";

import Cabecalho from "./components/Cabecalho";
import AlternarModo from "./components/AlternarModo";
import FormAdicionar from "./components/FormAdicionar";
import ListaItens from "./components/ListaItens";
import ResumoTotal from "./components/ResumoTotal";
import Login from "./components/Login";
import Historico from "./components/Historico";

// ==============================
// FUNÇÃO AUXILIAR
// ==============================
function capitalizarTexto(texto) {
  if (!texto) return "";

  return texto
    .trim()
    .toLowerCase()
    .replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}

// ==============================
// APP
// ==============================
function App() {
  const { usuario, loading } = useAuth();

  const { lista, setLista } = useListaFirestore(usuario);

  const { historico, carregando, deletarCompra } =
    useHistoricoCompras(usuario);

  const [aba, setAba] = useState("compras");

  // ==============================
  // TEMA LOCAL CONTROLADO
  // ==============================
  const [tema, setTema] = useState("claro");

  // sincroniza Firestore → estado local
  useEffect(() => {
    if (lista?.tema === "claro" || lista?.tema === "escuro") {
      setTema(lista.tema);
    }
  }, [lista?.tema]);

  // aplica tema no body
  useEffect(() => {
    document.body.classList.remove("tema-claro", "tema-escuro");
    document.body.classList.add(
      tema === "escuro" ? "tema-escuro" : "tema-claro"
    );
  }, [tema]);

  // ==============================
  // LOGOUT
  // ==============================
  const