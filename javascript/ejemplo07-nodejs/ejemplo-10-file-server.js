var http = require("http");
var fs = require("fs");

var server = http.createServer(enviarImagen);
function enviarImagen(request,response){
    response.writeHead(200,{'content-type':'image/png'});
    fs.createReadStream("imagen.png").pipe(response);
}

server.listen(8888);