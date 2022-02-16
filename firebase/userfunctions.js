import { getDoc } from "firebase/firestore";
import { Provider } from "react-redux";
import { collection, addDoc,setDoc, db, doc} from "./config";


 export const fetchUser = async (uid) => {
     try {
         const docRef = doc(db, "users", `${uid}`);
        const docData = await getDoc(docRef);
        console.log(docData.data())
     } catch (err) {
         console.log(err)
     }
 }

export const addUser = async (user) => {
    const {displayName, email, uid} = user;
    console.log(user)
    try {
       await setDoc(doc(db, "users", `${uid}`), {
           uid: uid,
           name: displayName || "",
           email: email
       })
    } catch (err) {
        console.log(err)
    }
}

