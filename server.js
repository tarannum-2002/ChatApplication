// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer();
// const io = new Server(httpServer, {
//     cors: {
//         origin: "*"
//     }
// });

// io.on('connection', (socket) => {
//     console.log('Client connected');

//     socket.on('message', (data) => {
//         console.log(`Received message from client: ${data}`);
//         socket.emit('message', `Server received message: ${data}`);
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

//list of users identified by their socked.id which is unique

const io = require('socket.io')(3000);
const users = {}




// ...


io.on('connection', socket => {
    console.log("new client")
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name)  //connected users name is broadcasted to everyone
    })

    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message',
            { message, name: users[socket.id] }) //emit messages to everyone 
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])  //disconncted emit message to add 
        delete users[socket.id]
    })
});
