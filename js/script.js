

  

  




































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

