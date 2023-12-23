const express = require('express');

const app = express();
const server = app.listen(3000, () => {
    console.log('server running at 3000...');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('socket.io connected on ', socket.id);
    socket.on('disconnect', () => {
        console.log('socket.io disconnected ', socket.id);
    });
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('receive', data);
    });

});

