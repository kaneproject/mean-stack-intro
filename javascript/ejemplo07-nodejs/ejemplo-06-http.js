let http = require("http");

http.get("http://www.google.es/jkasdfhjkl",(respuesta)=>{
    respuesta.setEncoding("utf8");
    respuesta.on("data",console.log);
    respuesta.on("error",console.error);
}).on("error",console.error);