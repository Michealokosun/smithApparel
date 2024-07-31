import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//
//
//
const firebaseConfig = {
  apiKey: "AIzaSyD0XycION0pj_1e6M0aguihAxhBO8K_znQ",
  authDomain: "smithapparel-4e646.firebaseapp.com",
  projectId: "smithapparel-4e646",
  storageBucket: "smithapparel-4e646.appspot.com",
  messagingSenderId: "552655719428",
  appId: "1:552655719428:web:958baeccea1974a34e3951",
};

// Initialize Firebase
//
//
export const app = initializeApp(firebaseConfig);
//
//
const db = getFirestore();
//
//
//
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});
//
//
//
export const auth = getAuth();
//

export const signInWithPopUp = () => signInWithPopup(auth, googleprovider);
//
//
export const createusedocumentfromauth = async (authdata, additionaldata) => {
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
        ...additionaldata,
      });
    } catch (error) {
      console.log(error);
      console.log("error creating user ", error.message);
    }
  }

  return userref;
};

export const createAuthWithPasswordAndEmail = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signinWithPasswordAndEmail = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
