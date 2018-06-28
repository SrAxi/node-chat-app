const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

/* EVENTS */
const NEW_MESSAGE = 'newMessage';
const CREATE_MESSAGE = 'createMessage';

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit(NEW_MESSAGE, generateMessage('Admin', 'Welcome to the Chat App'));

    socket.broadcast.emit(NEW_MESSAGE, generateMessage('Admin', 'New user joined'));

    socket.on(CREATE_MESSAGE, (message, callback) => {
        console.log('createMessage', message);
        io.emit(NEW_MESSAGE, generateMessage(message.from, message.text));

        callback('This comes from the Server!');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('createLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

console.log(publicPath);