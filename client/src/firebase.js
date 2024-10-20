// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-196d4.firebaseapp.com",
  projectId: "blog-196d4",
  storageBucket: "blog-196d4.appspot.com",
  messagingSenderId: "378500758330",
  appId: "1:378500758330:web:5527f844c2e236d2016e03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
