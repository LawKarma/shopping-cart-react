// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/performance';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCcUqOXGr3opfalAFLiBTNYjHn69TR7NA",
  authDomain: "eqoflotte-2befc.firebaseapp.com",
  projectId: "eqoflotte-2befc",
  storageBucket: "eqoflotte-2befc.appspot.com",
  messagingSenderId: "971964917354",
  appId: "1:971964917354:web:e63a4c2799239de3a10c13",
  measurementId: "G-XRFX2Y4SH0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // si déjà initialisé, utiliser cette instance
}
export const db = firebase.firestore();
export const auth = firebase.auth();

firebase.initializeApp(firebaseConfig);

export default firebase;

