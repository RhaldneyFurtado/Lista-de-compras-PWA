// ==============================
// HOOK DE AUTENTICAÇÃO GOOGLE
// ==============================

import { useState, useEffect } from "react";

import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { auth, db, googleProvider } from "../services/firebase";

export function useAuth() {
  // ==============================
  // ESTADOS
  // ==============================
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==============================
  // SALVAR USUÁRIO
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
      console.error("Erro ao salvar usuário:", error);
    }
  };

  // ==============================
  // LISTENER AUTH (FONTE ÚNICA)
  // ==============================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUsuario(user || null);

      if (user) {
        await salvarUsuarioFirestore(user);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ==============================
  // LOGIN GOOGLE
  // ==============================
  const entrarComGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erro login Google:", error);
    }
  };

  // ==============================
  // LOGOUT
  // ==============================
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
