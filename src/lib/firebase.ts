import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdNY8FB8QMw-8RAm-yJdlaxwjyyDjVgGE",
  authDomain: "shanzsterrr.firebaseapp.com",
  projectId: "shanzsterrr",
  storageBucket: "shanzsterrr.firebasestorage.app",
  messagingSenderId: "30947114938",
  appId: "1:30947114938:web:613f91baa13ca246482783",
  measurementId: "G-2ET56FZLS8",
};

export const firebaseApp: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const firebaseAnalyticsPromise: Promise<Analytics | null> =
  typeof window === "undefined"
    ? Promise.resolve(null)
    : isSupported().then((supported) => {
        if (!supported) return null;
        return getAnalytics(firebaseApp);
      });
