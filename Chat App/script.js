const socket = new WebSocket('ws://localhost:8080');
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const usernameInput = document.getElementById('username-input');
const joinButton = document.getElementById('join-button');
const messageArea = document.getElementById('message-area');

let username = '';

joinButton.addEventListener('click', () => {
    const inputUsername = usernameInput.value.trim();
    if (inputUsername !== '') {
        username = inputUsername;
        socket.send(JSON.stringify({ type: 'join', username }));
        usernameInput.disabled = true;
        joinButton.disabled = true;
        messageArea.style.display = 'flex';
    }
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.send(JSON.stringify({ type: 'message', message }));
        messageInput.value = '';
    }
});

messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

socket.addEventListener('open', () => {
    console.log('WebSocket connection established');
});

socket.addEventListener('message', (event) => {
    const { message, username: sender } = JSON.parse(event.data);
    displayMessage(message, sender);
});

socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});

function displayMessage(message, sender = 'Server') {
    const messageItem = document.createElement('li');
    messageItem.classList.add('message');
    if (sender === username) {
        messageItem.classList.add('self');
    } else {
        messageItem.classList.add('other');
    }
    messageItem.textContent = `${sender}: ${message}`;
    messageList.appendChild(messageItem);
    messageList.scrollTop = messageList.scrollHeight; // Scroll to the bottom
}
