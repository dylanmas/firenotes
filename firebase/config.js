import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1kbPtg35IStMGKflGZLAgAh8fVQKGgXg",
  authDomain: "fire-notes-adced.firebaseapp.com",
  projectId: "fire-notes-adced",
  storageBucket: "fire-notes-adced.appspot.com",
  messagingSenderId: "611904892550",
  appId: "1:611904892550:web:968a5241e29f1b5fbc2b07",
};

const app = initializeApp(firebaseConfig);

export {
  app,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
