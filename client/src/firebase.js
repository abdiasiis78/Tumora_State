
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tumorastate.firebaseapp.com",
  projectId: "tumorastate",
  storageBucket: "tumorastate.appspot.com",
  messagingSenderId: "378658270604",
  appId: "1:378658270604:web:fefea107228acd2b09faa9",
  measurementId: "G-QT8HNVJSTL"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
