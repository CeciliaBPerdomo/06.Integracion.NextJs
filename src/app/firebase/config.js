// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" // Luego de crear la bd en firestore
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidhwrySVcFBPqjl7Wrhg7LpVScDwFfaw",
  authDomain: "coder-nextjs.firebaseapp.com",
  projectId: "coder-nextjs",
  storageBucket: "coder-nextjs.appspot.com",
  messagingSenderId: "191677628387",
  appId: "1:191677628387:web:38b139854d084741d1ead6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) // Luego de crear la bd en firestore
export const storage = getStorage(app)

// export { db };
/* 
Pasos para crear la base de datos: 
Reglas -- cambiar a un a;o
Colecciones
*/