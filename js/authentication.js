// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5mjCSdDSK7atBnhGjUdJrdwh96BtEic",
  authDomain: "chatwebapplication-1b801.firebaseapp.com",
  databaseURL: "https://chatwebapplication-1b801-default-rtdb.firebaseio.com",
  projectId: "chatwebapplication-1b801",
  storageBucket: "chatwebapplication-1b801.firebasestorage.app",
  messagingSenderId: "176027818031",
  appId: "1:176027818031:web:b98797388831e2d2184eda",
  measurementId: "G-7T5QV8T8SD"
};

// Initialize Firebase App and Authentication
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Function to sign up user
export const signUpUser = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed up:", user);
        
        // You can save additional data like 'name' in Firebase Realtime Database if needed.
        // Example: save user name under /users/{userId} in Firebase DB.
    } catch (error) {
        throw new Error("Sign Up Failed: " + error.message);
    }
};

// Function to log in user
export const logInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
    } catch (error) {
        throw new Error("Login Failed: " + error.message);
    }
};
