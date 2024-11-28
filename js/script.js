import { sendMessage, displayChatMessages } from "./authentication.js";

const chatId = "chat1";
const senderId = "user123";

displayChatMessages(chatId);

document.getElementById("send-button").addEventListener("click", () => {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();

  if (message) {
    sendMessage(chatId, senderId, message);
    messageInput.value = ""; // Clear the input field after sending
  }
});


// Optional: Add "Enter" key functionality to send messages
document.getElementById("message-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("send-button").click();
    }
});
