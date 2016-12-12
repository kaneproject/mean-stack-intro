var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sockets = [];
io.origins('http://localhost:4200');
// Por defecto tenemos ya namespace
// http://localhost:3000/chat/socket.io
var chat = io.of("/chat");
chat.on('connection',(socket)=>{
    console.log("Cliente conectado!!");
    sockets.push(socket);
    socket.on('mando-un-mensaje',(mensaje)=>{
        console.log("Mensaje recibido : ",mensaje);
         
        mensaje.user = socket.id;
        if(sockets.length > 3){
            sockets[3].emit('mando-un-mensaje',{user:"tu mismo",content:"Solo para ti"});
        }
        socket.emit('mando-un-mensaje',mensaje); // yo 
        
        chat.emit('mando-un-mensaje',mensaje);// a todos
        //socket.broadcast.emit('mando-un-mensaje',mensaje);// todos menos yo!  
    });
});
chat.on('disconnect',(socket)=>{
    console.log("Cliente desconectado!!")
});
http.listen(3000,()=>{
    console.log("Iniciado en *:3000");
})