const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'join') {
            broadcast(`${data.username} joined the chat`, data.username);
        } else if (data.type === 'message') {
            broadcast(data.message, data.username);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

function broadcast(message, username) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ message, username }));
        }
    });
}
