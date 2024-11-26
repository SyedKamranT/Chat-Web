// script.js

const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value.trim();
    if (userMessage === '') return;

    // Add User Message to Chat
    const userMessageBubble = document.createElement('div');
    userMessageBubble.className = 'chat-message sent';
    userMessageBubble.innerHTML = `
        <div class="message-bubble">${userMessage}</div>`;
    chatWindow.appendChild(userMessageBubble);

    // Clear Input Field
    messageInput.value = '';

    // // Simulate Assistant Response
    // setTimeout(() => {
    //     const assistantMessageBubble = document.createElement('div');
    //     assistantMessageBubble.className = 'chat-message received';
    //     assistantMessageBubble.innerHTML = `
    //         <div class="message-bubble">I'm glad to hear that! How can I assist you today?</div>`;
    //     chatWindow.appendChild(assistantMessageBubble);

    //     // Scroll to Bottom
    //     chatWindow.scrollTop = chatWindow.scrollHeight;
    // }, 1000);
});
