// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIcTcV3uX0l0P_zuRfg8GjN7tI6ytk3h4",
  authDomain: "duolibras-fc79a.firebaseapp.com",
  projectId: "duolibras-fc79a",
  storageBucket: "duolibras-fc79a.firebasestorage.app",
  messagingSenderId: "347084829144",
  appId: "1:347084829144:web:fd702e758ae4e10eb682ad",
  measurementId: "G-7XTRM0Q276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
