import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCulOrxIkH9ionzaAGb09YkBaLsqC7ncOQ",
  authDomain: "home-sweet-home-aa5dc.firebaseapp.com",
  projectId: "home-sweet-home-aa5dc",
  storageBucket: "home-sweet-home-aa5dc.appspot.com",
  messagingSenderId: "30077750377",
  appId: "1:30077750377:web:79b3e872109bd4cbdb26f8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
