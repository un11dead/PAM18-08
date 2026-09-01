// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebas0e/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1COWijQwcmGm4kcTo4onQuQhkUCNC9tc",
  authDomain: "loginfirebase-e0c10.firebaseapp.com",
  projectId: "loginfirebase-e0c10",
  storageBucket: "loginfirebase-e0c10.firebasestorage.app",
  messagingSenderId: "300305013988",
  appId: "1:300305013988:web:4b83e1536b2d2dcfa960f1",
  measurementId: "G-9Z6M65XMYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);