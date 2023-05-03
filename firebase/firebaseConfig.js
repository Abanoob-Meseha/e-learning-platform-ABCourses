// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


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
export const auth = getAuth();

// create user with email and password native provider
export const signup_Email_password = async (email , password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth , email , password)
}

export const db = getFirestore();
// create a user document 
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// signin with email and password
export const signin_Email_Password = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);