// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH4euv3BILlJ1reLb-9wt9pwdWvyu2FAU",
  authDomain: "junk-book.firebaseapp.com",
  projectId: "junk-book",
  storageBucket: "junk-book.appspot.com",
  messagingSenderId: "456500744817",
  appId: "1:456500744817:web:baea9cc58a3711008681d0",
  measurementId: "G-5SPQ9P1375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);