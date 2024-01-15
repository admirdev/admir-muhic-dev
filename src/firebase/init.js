import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgGR_B3AorxVOX3eCix1sujLcPhZ-Hs8w",
    authDomain: "admir-muhic-dev.firebaseapp.com",
    projectId: "admir-muhic-dev",
    storageBucket: "admir-muhic-dev.appspot.com",
    messagingSenderId: "618484095186",
    appId: "1:618484095186:web:6208d1f88d8da6f1b7b50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();
export default db