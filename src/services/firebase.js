// ==============================
// FIREBASE CONFIGURAÇÃO CENTRAL
// ==============================

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ==============================
// CONFIG FIREBASE (SEU PROJETO)
// ==============================

const firebaseConfig = {
  apiKey: "AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",
  authDomain: "lista-de-compras-pwa-64fac.firebaseapp.com",
  projectId: "lista-de-compras-pwa-64fac",
  storageBucket: "lista-de-compras-pwa-64fac.appspot.com",
  messagingSenderId: "922020197463",
  appId: "1:922020197463:web:41e9aa3c04bf76c7941f12",
};

// ==============================
// INICIALIZA FIREBASE
// ==============================

const app = initializeApp(firebaseConfig);

// ==============================
// EXPORTS PADRÃO (IMPORTANTE)
// ==============================

// Autenticação
export const auth = getAuth(app);

// Provedor Google
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);
