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

export const setDocs = async (uid, data) => {
  try {
    const docRef = doc(db, "users", `${uid}`);
    const colRef = collection(docRef, "notes");
    await setDoc(doc(colRef, "note2"), {
      note: data,
    });
    console.log("Note set Successfully");
  } catch (err) {
    console.log(err);
  }
};

export const fetchNotes = async (uid) => {
  try {
    const docRef = doc(db, "users", `${uid}`);
    const colRef = collection(docRef, "notes");
    const snapshot = await getDocs(colRef);
    let docArray = [];
    snapshot.forEach((doc) => {
      docArray.push(doc.data());
    });
    return docArray;
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
