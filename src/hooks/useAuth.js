// ==============================
// HOOK DE AUTENTICAÇÃO GOOGLE
// ==============================

import { useState, useEffect } from "react";

// ==============================
// FIREBASE AUTH
// ==============================
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// ==============================
// FIRESTORE
// ==============================
import { doc, setDoc } from "firebase/firestore";

// ==============================
// CONFIGURAÇÕES FIREBASE
// ==============================
import { auth, db, googleProvider } from "../services/firebase";

export function useAuth() {
  // ==============================
  // ESTADO DO USUÁRIO LOGADO
  // ==============================
  const [usuario, setUsuario] = useState(null);

  // ==============================
  // SALVAR/ATUALIZAR USUÁRIO
  // NO FIRESTORE
  // ==============================
  const salvarUsuarioFirestore = async (user) => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          nome: user.displayName || "Usuário",
          email: user.email || "",
          foto: user.photoURL || "",
          ultimoLogin: new Date().toISOString(),
        },
        { merge: true },
      );
    } catch (error) {
      console.error("Erro ao salvar usuário no Firestore:", error);
    }
  };

  // ==============================
  // MONITOR DE AUTENTICAÇÃO
  // ==============================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Salva dados no Firestore
        await salvarUsuarioFirestore(user);

        // Atualiza estado local
        setUsuario(user);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ==============================
  // LOGIN COM GOOGLE
  // ==============================
  const entrarComGoogle = async () => {
    try {
      const resultado = await signInWithPopup(auth, googleProvider);

      await salvarUsuarioFirestore(resultado.user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  // ==============================
  // LOGOUT
  // ==============================
  const sair = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return {
    usuario,
    entrarComGoogle,
    sair,
  };
}
