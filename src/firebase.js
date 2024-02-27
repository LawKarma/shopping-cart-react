// Import the functions you need from the SDKs you need
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);