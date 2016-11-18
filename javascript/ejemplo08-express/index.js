var express = require("express");
var app = express();
function evaluaElVerboHttp(request,response){
    response.send("Ruta: " + request.originalUrl + 
    " Verbo :" + request.method)
}
app.get("/",
    (request,response)=>{
        console.log("Acceso a la peticion ",request);
        response.send("Respuesta recibida!");
    }
);
app.post("/",evaluaElVerboHttp);
app.put("/",evaluaElVerboHttp);
app.delete("/",evaluaElVerboHttp);
app.all("/paratodos",evaluaElVerboHttp);
app.all("/iniciofin",evaluaElVerboHttp);
app.get("/clientes/:idCliente?*/facturas/:idFactura",
    (request,response)=>{
        response.send("Resultados : \n\tCliente: " + 
        request.params.idCliente + " \n\tFactura: " + 
        request.params.idFactura + "\n" +
         JSON.stringify(request.params));
    }
);
app.get("/save/:fichero.:extension",(request,response)=>{
    response.send("Ahora genero un fichero de tipo : " + 
    request.params.extension);
});
function funcionIntermedia(request,response,next){
    console.log("Ejecutado a las: "  + new Date());
   /* db.analytics.update(
        {url:request.originalUrl},
        {$set:{hits:{$inc:1}}},
        true);
    {"url":"/","hits":2318}
    {"url":"/clientes",hits:52323}*/
    next();
}
function funcionIntermediaFin(request,response,next){
    console.log("Ejecutado a las: "  + new Date());
    //if(noAutenticado){
        response.send("fin");
        
    //}else{
    //    next()
    //}
}
app.get("/concatenado",[
    funcionIntermedia,
    funcionIntermediaFin,
    funcionIntermedia,
    (request,response)=>{
        response.send("Enviado");
    }]);

app.route("/rutaconjunta")
    .get(evaluaElVerboHttp)
    .post(evaluaElVerboHttp)
    .put(evaluaElVerboHttp)
    .delete(evaluaElVerboHttp);
var  router = express.Router();
router.use(funcionIntermedia);
router.get("/conrouter",evaluaElVerboHttp)
router.post("/conrouterpost",evaluaElVerboHttp)
app.use("/cosacuca",router);

var routerRest = express.Router();
routerRest.route("/coches")
    .get((request,response)=>{
        response.json([{_id:1,marca:"opel",modelo:"corsa"},
                    {_id:2,marca:"audi",modelo:"a4"}]);
    })
    .post((request,response)=>{
        // Recoger la informacion del body para crear un 
        // nuevo coche
        /*request.body.marca
        request.body.modelo*/
        response.json({message:"insertado"})
    });
    // localhost:8080/concesionario/coches/idCoche
routerRest.route("/coches/:alias")
    .get((request,response)=>{
        // TODO: obtener el coche a partir de su idCoche
        response.json({_id:1,marca:"opel",modelo:"corsa"})
    })
    .delete((request,response)=>{
        response.json({message:"borrado"});
    })
    .put((request,response)=>{
        //TODO: Obtener el id y del body obtener marca y modelo
        response.json({message:"actualizado"});
    });
app.use("/",routerRest);
app.listen(8080);
console.log("Servidor iniciado");
/* 
    Response permite:
     download() end() json() jsonp() redirect() render() 
     send() sendFile() sendStatus()
*/






