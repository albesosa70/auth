// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD7A41M9zxirtguBPiuBqlBG68SshUTHs",
  authDomain: "geeks-firebase-auth-4122a.firebaseapp.com",
  projectId: "geeks-firebase-auth-4122a",
  storageBucket: "geeks-firebase-auth-4122a.appspot.com",
  messagingSenderId: "69045434273",
  appId: "1:69045434273:web:54d2632e154f0085dbbde0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);