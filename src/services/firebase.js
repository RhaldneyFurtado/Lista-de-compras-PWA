// ==============================
// CONFIGURAÇÃO DO FIREBASE
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

// Credenciais dinâmicas carregadas via variáveis de ambiente (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Log de verificação do carregamento das variáveis no ambiente
console.log(
  "Firebase API Key carregada:",
  firebaseConfig.apiKey ? "Sim" : "Nao",
);

// Inicializa a aplicação principal do Firebase
const app = initializeApp(firebaseConfig);

// Identificação do ambiente de execução local (localhost ou IP local)
const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

// Configuração do App Check para proteção contra abusos (Desativado em ambiente local/preview)
if (typeof window !== "undefined" && !import.meta.env.DEV && !isLocalhost) {
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (recaptchaKey) {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(recaptchaKey),
      isTokenAutoRefreshEnabled: true,
    });
    console.log("App Check inicializado com ReCaptcha Enterprise");
  } else {
    console.warn("ReCaptcha Site Key nao configurada - App Check desativado");
  }
}

// Configuração do serviço de Autenticação
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// Provedor de login via Google
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Instância do banco de dados Firestore
export const db = getFirestore(app);
