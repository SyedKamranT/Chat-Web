import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const db = getDatabase();

// Sign-Up Function
function signUp(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, `users/${user.uid}`), { username, email });
            alert("Sign-up successful!");
        })
        .catch((error) => {
            alert("Error signing up: " + error.message);
        });
}

document.getElementById("signUpButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    signUp(email, password, username);
});

// Log-In Function
function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
        })
        .catch((error) => {
            alert("Error logging in: " + error.message);
        });
}

document.getElementById("logInButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    logIn(email, password);
});

// User State Check
onAuthStateChanged(auth, (user) => {
    if (user) console.log("User is logged in:", user);
});
