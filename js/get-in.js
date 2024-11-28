// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu5mjCSdDSK7atBnhGjUdJrdwh96BtEic",
    authDomain: "chatwebapplication-1b801.firebaseapp.com",
    databaseURL: "https://chatwebapplication-1b801-default-rtdb.firebaseio.com",
    projectId: "chatwebapplication-1b801",
    storageBucket: "chatwebapplication-1b801.appspot.com",
    messagingSenderId: "176027818031",
    appId: "1:176027818031:web:b98797388831e2d2184eda",
    measurementId: "G-7T5QV8T8SD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.database();

// Sign-Up Function
function signUp(email, password, username) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.ref(`users/${user.uid}`).set({ username, email });
            alert("Sign-up successful!");
            window.location.href = "/main.html"; // Redirect to the main app
        })
        .catch((error) => {
            alert("Error signing up: " + error.message);
        });
}

document.getElementById("signUpButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("name").value; // Changed to "name" to match your HTML
    signUp(email, password, username);
});

// Log-In Function
function logIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "/main.html"; // Redirect to the main app
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
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in:", user);
        // Optionally redirect to the main app if already logged in
        // window.location.href = "/main.html";
    } else {
        console.log("No user is logged in.");
    }
});
