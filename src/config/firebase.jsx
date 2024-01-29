import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFZf-K88O3SnSS6DPyY2a_Zj0HRqCjJBY",
    authDomain: "olxclone-ea47d.firebaseapp.com",
    projectId: "olxclone-ea47d",
    storageBucket: "olxclone-ea47d.appspot.com",
    messagingSenderId: "532674861035",
    appId: "1:532674861035:web:9e6a879a9233a35521ebae",
    measurementId: "G-6KWER8GTR1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
