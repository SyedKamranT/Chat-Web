import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const auth = getAuth();

// Populate profile info
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("profile-name").innerText = user.displayName || "User";
        document.getElementById("profile-email").innerText = user.email;
    } else {
        window.location.href = "login.html"; // Redirect to login if no user is logged in
    }
});

// Logout functionality
document.getElementById("logout-button").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            alert("You have been logged out.");
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Error logging out: ", error.message);
        });
});
