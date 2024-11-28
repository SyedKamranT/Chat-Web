// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);