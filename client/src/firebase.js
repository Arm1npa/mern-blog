// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-55e36.firebaseapp.com",
  projectId: "mern-blog-55e36",
  storageBucket: "mern-blog-55e36.appspot.com",
  messagingSenderId: "729806306092",
  appId: "1:729806306092:web:4e478a9d461f137f220a89",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
