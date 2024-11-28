import { sendMessage, displayChatMessages } from "./chat-fetch.js";

// Initialize Chat
const chatId = "chat1"; // Example chat ID, replace with dynamic chat ID based on user or context
const senderId = "user123"; // Replace with the currently logged-in user's ID

// Fetch and display chat messages in real-time
displayChatMessages(chatId);

// Event listener for sending messages
document.getElementById("send-button").addEventListener("click", () => {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message) {
        sendMessage(chatId, senderId, message); // Send the message to Firebase
        messageInput.value = ""; // Clear the input field after sending
    }
});

// Optional: Add "Enter" key functionality to send messages
document.getElementById("message-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("send-button").click();
    }
});
