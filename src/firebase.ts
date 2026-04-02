import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //   // COPY this from your Firebase Console
  apiKey: "AIzaSyBf4sc0_QurLjNrGM2EI6OxMtD9bG3Bn-g",
  authDomain: "beverageshop-ec537.firebaseapp.com",
  projectId: "beverageshop-ec537",
  storageBucket: "beverageshop-ec537.firebasestorage.app",
  messagingSenderId: "337470522840",
  appId: "1:337470522840:web:148b1e9931052bc0f65ead",
  measurementId: "G-BEYPC7PY1G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
