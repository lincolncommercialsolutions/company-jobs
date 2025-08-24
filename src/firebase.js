import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // <- make sure this is imported

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDIAZN7PbGTCTBcZW3BIvCL_hfXiZ1lU",
  authDomain: "lcs--opportunities.firebaseapp.com",
  projectId: "lcs--opportunities",
  storageBucket: "lcs--opportunities.firebasestorage.app",
  messagingSenderId: "798580348702",
  appId: "1:798580348702:web:7b5197ef805c6978255b0f",
  measurementId: "G-Z80MMDWX9Q"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);   // <- export storage so ApplyForm can use it
