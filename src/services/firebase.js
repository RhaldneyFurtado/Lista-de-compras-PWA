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

const firebaseConfig = {
  apiKey: "AIzaSyBN-jgFWi10Onb0atB7ty24IhfRSMMxulU",
  authDomain: "lista-de-compras-pwa-64fac.firebaseapp.com",
  projectId: "lista-de-compras-pwa-64fac",
  storageBucket: "lista-de-compras-pwa-64fac.appspot.com",
  messagingSenderId: "922020197463",
  appId: "1:922020197463:web:41e9aa3c04bf76c7941f12",
};

console.log(
  "Firebase API Key carregada:",
  firebaseConfig.apiKey ? "Sim" : "Nao",
);

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  const recaptchaKey = "6LcPX80sAAAAADDR6FC6ZFr_Wb_-bdwCbCD1tnfr";
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

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const db = getFirestore(app);
