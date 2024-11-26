import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase Auth and Database
const auth = getAuth();
const db = getDatabase();



//sign-up function

function signUp(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created user
        const user = userCredential.user;
  
        // Store additional user info in the database
        set(ref(db, `users/${user.uid}`), {
          username: username,
          email: email,
        });
  
        console.log("User signed up successfully:", user);
        alert("Sign-up successful!");
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        alert("Error signing up: " + error.message);
      });
  }
  
  // Example usage
  document.getElementById("signUpButton").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    signUp(email, password, username);
  });

  

  // Login function

  function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        console.log("User logged in successfully:", user);
        alert("Login successful!");
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        alert("Error logging in: " + error.message);
      });
  }
  
  // Example usage
  document.getElementById("logInButton").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    logIn(email, password);
  });

  

  //checking if a user is already logged in or not

  import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
  } else {
    console.log("No user is logged in.");
  }
});
