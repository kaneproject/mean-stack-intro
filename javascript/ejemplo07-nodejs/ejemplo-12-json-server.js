var http = require("http");
var url = require("url");

var server = http.createServer(
    (request,response)=>{
        var miUrl = url.parse(request.url,true);
        console.log("URL: ",miUrl.path);
        if(/^\/clientes\/[0-9]{3,5}$/.test(request.url)){
            response.writeHead(200,{'content-type':"application/json"});
            response.end(JSON.stringify([{"nombre":"Ruben"}]));
        }else{
            response.writeHead(501);
            response.end();
        }
    }
    


);
server.listen(8080);
console.log("Servidor iniciado");
