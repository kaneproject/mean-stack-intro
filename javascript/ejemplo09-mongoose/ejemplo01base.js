// carga del modulo
var mongoose = require("mongoose");
// conectar a la base de datos
mongoose.connect("mongodb://localhost/test");
// Genero el modelo
var Libro = mongoose.model("Libro",{
    titulo: String,
    autor: String,
    paginas: Number  
});
var esdla = new Libro(
    {titulo:"El señor de los arillos",
    autor:"JJ",
    paginas:3500});
esdla.save((error)=>{
    if(error){
        console.error("Error al guardar: ",error)
    }else{
        console.log("Pelicula guardada " + esdla._id)
    }
});
