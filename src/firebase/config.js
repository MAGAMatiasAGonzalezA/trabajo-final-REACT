import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfgjqIBXCaCUP0IcEB2PWRpt0EyMkeCOQ",
    authDomain: "miproyectoreact-d542c.firebaseapp.com",
    projectId: "miproyectoreact-d542c",
    storageBucket: "miproyectoreact-d542c.firebasestorage.app",
    messagingSenderId: "879755280809",
    appId: "1:879755280809:web:8920cae542255c0d3b84b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };