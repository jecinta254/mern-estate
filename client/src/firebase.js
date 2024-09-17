// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-47a56.firebaseapp.com",
  projectId: "mern-estate-47a56",
  storageBucket: "mern-estate-47a56.appspot.com",
  messagingSenderId: "310729956370",
  appId: "1:310729956370:web:21a3509354eaf380c84ccb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);