const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');

// HTTPS server
const server = https.createServer({
  cert: fs.readFileSync('./certs/server.crt'),
  key: fs.readFileSync('./certs/server.key')
});

// WebSocket server
const wss = new WebSocket.Server({ server });

// Connection handler
wss.on('connection', (ws) => {
  console.log('New client connected!');

  // Handle messages from client
  ws.on('message', (message) => {
    console.log('Received:', message.toString());

    // Display messages to all connected clients (needs work)
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(443, () => {
  console.log('Server running on wss://localhost:443');
});