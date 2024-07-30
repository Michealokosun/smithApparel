import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0XycION0pj_1e6M0aguihAxhBO8K_znQ",
  authDomain: "smithapparel-4e646.firebaseapp.com",
  projectId: "smithapparel-4e646",
  storageBucket: "smithapparel-4e646.appspot.com",
  messagingSenderId: "552655719428",
  appId: "1:552655719428:web:958baeccea1974a34e3951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithPopUp = () => signInWithPopup(auth, provider);
export const createusedocumentfromauth = async (authdata) => {
  const userref = doc(db, "users", authdata.uid);
  const usersnapshot = await getDoc(userref);
  // CHECK IF USER EXISTS
  if (!usersnapshot.exists()) {
    // if user does not exist
    const { displayName, email } = authdata;
    const createdAt = new Date();

    // crate user in the db

    try {
      await setDoc(userref, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
      console.log("error creating user ", error.message);
    }
  }

  return userref;
};
