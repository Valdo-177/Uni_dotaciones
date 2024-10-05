// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklAuJO1m8JiYaQIGEJN9IGS28NyyPRbE",
  authDomain: "unidotaciones-f49fc.firebaseapp.com",
  projectId: "unidotaciones-f49fc",
  storageBucket: "unidotaciones-f49fc.appspot.com",
  messagingSenderId: "718018928962",
  appId: "1:718018928962:web:7ccd3089f388ca21e8a8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const collectionRef = collection(db, "Productos");
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "imagesDB");

export {
    collection,
    addDoc,
    updateDoc,
    doc,
    db,
    collectionRef,
    storageRef,
    imagesRef,
    storage,
  };