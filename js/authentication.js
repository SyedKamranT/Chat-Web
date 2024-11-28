// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

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


// Initialize Firebase App and Database
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// Function to send a message
export const sendMessage = (chatId, senderId, message) => {
  const messageRef = push(ref(db, `chats/${chatId}/messages`));
  set(messageRef, {
    senderId,
    message,
    timestamp: Date.now(),
  })
    .then(() => console.log("Message sent successfully"))
    .catch((error) => console.error("Error sending message:", error));
};

// Function to fetch and display chat messages
export const displayChatMessages = (chatId) => {
  const messagesRef = ref(db, `chats/${chatId}/messages`);
  const messageContainer = document.getElementById("chat-window");

  if (!messageContainer) {
    console.error("Message container not found in the DOM.");
    return;
  }

  // Listen for message updates
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    messageContainer.innerHTML = ""; // Clear previous messages

    if (data) {
      Object.values(data).forEach((msg) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add(
          "chat-message",
          msg.senderId === "user123" ? "sent" : "received" // Adjust styling dynamically
        );
        messageElement.innerHTML = `
          <div class="message-bubble">
            <strong>${msg.senderId}</strong>: ${msg.message}
          </div>`;
        messageContainer.appendChild(messageElement);
      });

      // Scroll to the latest message
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  });
};

// Example usage
// Replace these values with dynamic ones based on your app's state
const chatId = "chat1";
const senderId = "user123";
displayChatMessages(chatId);
sendMessage(chatId, senderId, "Hello, World!");
