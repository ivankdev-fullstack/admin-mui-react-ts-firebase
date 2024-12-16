import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuvaDo2Dh6teQMCQt0Bjc6UkbDSb2L3Vw",
  authDomain: "admin-api-daba5.firebaseapp.com",
  projectId: "admin-api-daba5",
  storageBucket: "admin-api-daba5.firebasestorage.app",
  messagingSenderId: "219641684153",
  appId: "1:219641684153:web:b73f476653d1a5cce97b68",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
