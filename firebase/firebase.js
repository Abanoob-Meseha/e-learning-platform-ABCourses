// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEHmcWVW-9HMs5SOuJn0jmd3gir6191uo",
  authDomain: "abcourses-8dd97.firebaseapp.com",
  projectId: "abcourses-8dd97",
  storageBucket: "abcourses-8dd97.appspot.com",
  messagingSenderId: "713829417479",
  appId: "1:713829417479:web:a323fcaee47165fd4ba0a2",
  measurementId: "G-DHJY7Q7QQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);