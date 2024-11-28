import { authenticateUser } from "./authentication";

document.getElementById("logInButton").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    authenticateUser(email, password); // This function should handle authentication
  } else {
    alert("Please fill in both email and password");
  }
});

document.getElementById("signup-button").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name && email && password) {
    registerUser(name, email, password); // This function should handle user registration
  } else {
    alert("Please fill in all fields");
  }
});
