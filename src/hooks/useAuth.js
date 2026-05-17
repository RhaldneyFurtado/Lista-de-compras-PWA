// ==============================
// HOOK DE AUTENTICAÇÃO GOOGLE
// ==============================

import { useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../services/firebase";

// ==============================
// HOOK AUTH
// ==============================
export function useAuth() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

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
        { merge: true }
      );
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  useEffect(() => {
    let ativo = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!ativo) return;

      setUsuario(user || null);

      const processar = async () => {
        if (!user) {
          setLoading(false);
          return;
        }

        try {
          await salvarUsuarioFirestore(user);
        } catch (e) {
          console.error(e);
        }

        if (ativo) setLoading(false);
      };

      processar();
    });

    return () => {
      ativo = false;
      unsubscribe();
    };
  }, []);

  const entrarComGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erro login Google:", error);
    }
  };

  const sair = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro logout:", error);
    }
  };

  return {
    usuario,
    loading,
    entrarComGoogle,
    sair,
  };
}
