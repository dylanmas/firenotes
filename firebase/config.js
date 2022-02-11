import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA1kbPtg35IStMGKflGZLAgAh8fVQKGgXg",
  authDomain: "fire-notes-adced.firebaseapp.com",
  projectId: "fire-notes-adced",
  storageBucket: "fire-notes-adced.appspot.com",
  messagingSenderId: "611904892550",
  appId: "1:611904892550:web:968a5241e29f1b5fbc2b07",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {
  app,
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged

};
