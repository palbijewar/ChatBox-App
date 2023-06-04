const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const {formatMessage} = require('./utils/messages');
const {userJoin,getCurrentUser,userLeft,getRoomUsers} = require('./utils/users');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));

const botName = 'chatBox bot';

//run when clients connect
io.on('connection', socket => {
    socket.on('joinRoom', ({username,room})=>{
        const user = userJoin(socket.id,username,room);
        socket.join(user.room);

        socket.emit('message', formatMessage(botName,`welcome to chatBox ${user.username}`));
        //broadcast when user connects
            socket.broadcast.emit(user.room,'message',formatMessage(`${user.username} joined the chat`));
        //send users room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users: getRoomUsers(user.room)
        });
        

    });
    
    //listen for chat message
    socket.on('chatMessage', msg =>{
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message',formatMessage(user.username,msg));
    })
    //message when user leaves the chat 
    socket.on('disconnect',()=>{
        const user = userLeft(socket.id);
        if(user){
            io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`));
            io.to(user.room).emit('roomUsers',{
                room:user.room,
                users: getRoomUsers(user.room)
            });
        }   
    });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT ,()=>{
    console.log(`server runing on PORT ${PORT}`);   
})