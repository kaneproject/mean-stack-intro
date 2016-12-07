var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.origins('http://localhost:4200');
// Por defecto tenemos ya namespace
// http://localhost:3000/socket.io
io.on('connection',(socket)=>{
    console.log("Cliente conectado!!");
    io.on('mando-un-mensaje',(mensaje)=>{
        console.log("Mensaje recibido : " + mensaje);  
        //socket.emit('mando-un-mensaje',mensaje); // yo 
        io.emit('mando-un-mensaje',mensaje);// a todos
        //socket.broadcast.emit('mando-un-mensaje',mensaje);// todos menos yo!  
    });
});
io.on('disconnect',(socket)=>{
    console.log("Cliente desconectado!!")
});
http.listen(3000,()=>{
    console.log("Iniciado en *:3000");
})