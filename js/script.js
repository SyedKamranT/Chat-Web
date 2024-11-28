import { sendMessage, displayChatMessages } from "./chat-fetch.js";

// Initialize chat
const chatId = "chat1"; // Example chat ID
const senderId = "user123"; // Replace with dynamic user ID

displayChatMessages(chatId);

document.getElementById("send-button").addEventListener("click", () => {
    const message = document.getElementById("message-input").value.trim();
    if (message) {
        sendMessage(chatId, senderId, message);
        document.getElementById("message-input").value = ""; // Clear input
    }
});


const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value.trim();
    if (userMessage === '') return;

    const userMessageBubble = document.createElement('div');
    userMessageBubble.className = 'chat-message sent';
    userMessageBubble.innerHTML = `
        <div class="message-bubble">${userMessage}</div>`;
    chatWindow.appendChild(userMessageBubble);

    messageInput.value = '';

});


















//display messages at the center

