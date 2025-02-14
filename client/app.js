// Connect to server
const socket = new WebSocket('wss://localhost:443');

// Connection opened 
socket.addEventListener('open', () => {
  console.log('Connected to server!');
});

// Handle incoming messages
socket.addEventListener('message', ({ data }) => {
  const messages = document.getElementById('messages');
  messages.innerHTML += `<div>${data}</div>`;
});

// Send message when button clicked
document.querySelector('button').addEventListener('click', () => {
  const input = document.querySelector('input');
  socket.send(input.value);
  input.value = '';
});