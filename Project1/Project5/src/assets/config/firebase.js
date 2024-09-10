// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS1vbI_IrBQE_De2IvZ2ud4DcPhax0eMs",
  authDomain: "contacts-app-93f87.firebaseapp.com",
  projectId: "contacts-app-93f87",
  storageBucket: "contacts-app-93f87.appspot.com",
  messagingSenderId: "539809639217",
  appId: "1:539809639217:web:96434205a965cae58a9e10",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
