// ==============================
// FIREBASE CONFIGURAÇÃO CENTRAL
// ==============================

import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ==============================
// CONFIG FIREBASE
// ==============================

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lista-de-compras-pwa-64fac.firebaseapp.com",
  projectId: "lista-de-compras-pwa-64fac",
  storageBucket: "lista-de-compras-pwa-64fac.appspot.com",
  messagingSenderId: "922020197463",
  appId: "1:922020197463:web:41e9aa3c04bf76c7941f12",
};

// ==============================
// INIT FIREBASE
// ==============================

const app = initializeApp(firebaseConfig);

// ==============================
// APP CHECK (PROTEÇÃO)
// ==============================

if (typeof window !== "undefined" && import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(
      import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

// ==============================
// AUTH
// ==============================

export const auth = getAuth(app);

// 🔥 PERSISTÊNCIA DO LOGIN (EVITA SUMIR USUÁRIO)
setPersistence(auth, browserLocalPersistence);

// 🔥 GOOGLE PROVIDER (FORÇA ESCOLHA DE CONTA)
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// ==============================
// FIRESTORE
// ==============================

export const db = getFirestore(app);
