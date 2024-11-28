
import { getDatabase, ref, set, push, onValue } from "firebase/database";

// Initialize Firebase Database
const db = getDatabase(firebaseApp);
// Reference to chats
const chatsRef = ref(db, 'chats');
const sendMessage = (chatId, senderId, message) => {
    const messageRef = push(ref(db, `chats/${chatId}/messages`));
    set(messageRef, {
      senderId,
      message,
      timestamp: Date.now(),
    });
  };
  
  import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DATABASE_URL",
};

const firebaseApp = initializeApp(firebaseConfig);

  // Example usage
  sendMessage('chat1', 'user123', 'Hello, World!');

  const getMessages = (chatId) => {
    const messagesRef = ref(db, `chats/${chatId}/messages`);
    onValue(messagesRef, (snapshot) => {
      const messages = snapshot.val();
      console.log(messages);
    });
  };
  
  // Example usage
  getMessages('chat1');


  import { getDatabase, ref, onValue } from "firebase/database";

// Function to fetch and display chat messages
function displayChatMessages(chatId) {
  const db = getDatabase();
  const messagesRef = ref(db, `chats/${chatId}/messages`);

  // Reference the container where messages will be displayed
  const messageContainer = document.getElementById("chat-window");

  // Listen for updates to messages
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();

    // Clear existing messages
    messageContainer.innerHTML = "";

    // Populate new messages
    if (data) {
      Object.values(data).forEach((msg) => {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${msg.senderId}</strong>: ${msg.message}`;
        messageContainer.appendChild(messageElement);
      });
    }
  });
}

// Example usage
const chatId = "chat1"; // Replace with the desired chat ID
displayChatMessages(chatId);
