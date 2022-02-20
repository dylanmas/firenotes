import { getDoc } from "firebase/firestore";
import { Provider } from "react-redux";
import { collection, addDoc, setDoc, db, doc, getDocs } from "./config";

export const fetchUser = async (uid) => {
  try {
    const docRef = doc(db, "users", `${uid}`);
    const docData = await getDoc(docRef);
    return docData.data();
  } catch (err) {
    console.log(err);
  }
};

export const addNotes = (uid, data) => {
  try {
    const docRef = doc(db, "users", `${uid}`);
    const colRef = collection(docRef, "notes");
    addDoc(colRef, {
      note: data,
    });
    console.log("Note Added Successfully");
  } catch (err) {
    console.log(err);
  }
};

export const fetchNotes = async (uid) => {
  try {
    const docRef = doc(db, "users", `${uid}`);
    const colRef = collection(docRef, "notes");
    const snapshot = await getDocs(colRef);
    return snapshot;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (user) => {
  const { displayName, email, uid } = user;
  console.log(user);
  try {
    await setDoc(doc(db, "users", `${uid}`), {
      uid: uid,
      name: displayName || "",
      email: email,
    });
  } catch (err) {
    console.log(err);
  }
};
