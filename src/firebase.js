import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
 } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";




const firebaseConfig = {
  apiKey: "AIzaSyDhBMDU3rpZXXGLSyWXyYtcwaNNfHbLJgE",
  authDomain: "luanvan200399.firebaseapp.com",
  databaseURL:
    "https://luanvan200399-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luanvan200399",
  storageBucket: "luanvan200399.appspot.com",
  messagingSenderId: "768442659528",
  appId: "1:768442659528:web:4bcca5417d7abc722febfd",
  measurementId: "G-KPB4LLYHK3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export {db, auth};
