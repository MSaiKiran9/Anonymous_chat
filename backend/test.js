const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",  // Allow all origins
    methods: ["GET", "POST"]  // Allow GET and POST methods
  }
});

let messages = [];

io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Send the existing messages to the new client
    socket.emit('chat messages', messages);

    socket.on('chat message', (msg) => {
        // Add the new message to our array
        messages.push(msg);
        // Broadcast the new message to all clients
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4001, () => console.log('Listening on port 4001'));
