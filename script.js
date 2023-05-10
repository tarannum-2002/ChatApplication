
const socket = io('http://localhost:3000');

// socket.on('connect', () => {
//     console.log('Connected to server');
//     socket.emit('message', 'Hello from client!');
// });

// socket.on('message', (data) => {
//     console.log(`Received message from server: ${data}`);
// });

// socket.on('disconnect', () => {
//     console.log('Disconnected from server');
// });

const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")
const messageContainer = document.getElementById("message-container")


//asks name on the prompt
//whateve name is given is broadcasted to everyone using emit function

// 3 events form sever

const name = prompt('What is your name?');
appendMessage('You joined');
socket.emit('new-user', name)
//1. chat-message event
socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

//2.user-connected
socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})

//user-disconnected

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})


messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = '';
})

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}
