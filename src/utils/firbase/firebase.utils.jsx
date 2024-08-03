import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  query,
  getDocs,
  collection,
} from "firebase/firestore";
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

//// -----------SIGN UP WITH EMAIL AND PASSWOD FUNCTION -----------
export const createAuthWithPasswordAndEmail = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

/// SIGN IN WITH EMAIL AND PASSOWOD FUNCTION
export const signinWithPasswordAndEmail = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

///////// ---------------- SIGNS OUT THE USER
export const Signout = async () => signOut(auth);

////////// LISTENS FOR THE AUTHENTICATION CHANGE OF THE USER ----------
export const onAuthstatechange = async (callback) =>
  onAuthStateChanged(auth, callback);

///
///
/// ************* ADD DOCUMENTTO DATABASE ********************

export const addcollectionanddocument = async (collectionkey, objectToAdd) => {
  const collectionref = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docref = doc(collectionref, object.title.toLowerCase());
    batch.set(docref, object);
  });

  batch.commit();
  console.log("successful");
};

// *************  GE DOCUMENT FROM DB ********

export const getDocumentFromDb = async () => {
  const docref = collection(db, "collections");
  const q = query(docref);
  const docsSnapshot = await getDocs(q);

  const datas = docsSnapshot.docs.reduce((acc, snapshot) => {
    const { title, items } = snapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
  return datas;
};
