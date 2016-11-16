var http = require("http");
var fs = require("fs");

var server = http.createServer(enviarImagen);
function enviarImagen(request,response){
    response.writeHead(200,{'content-type':'image/png'});
    fs.createReadStream("imagen.png").pipe(response);
}

/*let variable1 = new Object();
variable1.nombre = "ruben";
variable1 = new Object();
console.log("Nombre" + variable1.nombre);

class Pelicula {
    titulo;
    autor;
    static numeroDePeliculasCreadas = 0;
    constructor(tituloExterno,autorExterno){
        this.titulo = tituloExterno;
        this.autor = autorExterno;
        Pelicula.numeroDePeliculasCreadas++;
    }
    tituloYAutor(){
        return this.titulo + " " + this.autor;
    }
}
Pelicula.numeroDePeliculasCreadas = 7;
var pelicula = new Pelicula("titulo","autor");
//Pelicula.tituloYAutor();
function cambiaTitulo(peli){
    let otro = peli;
    otro.titulo = "Cambiado";
}
cambiaTitulo(pelicula)
console.log(pelicula.titulo);
var numero = 7;
function incrementar(numerillo){
    numerillo++;
    return numerillo;
}
numero = incrementar(numero);
console.log(numero);
class Otra{
    titulo = 7;
}
class CalculadoraQueSoloSuma{
    sumar(a,b){
        return a + b;
    }
}
class CalculadoraQueResta{
    restar(a,b){
        return a - b;
    }
}

class CalculadoraQueSumaYResta extends CalculadoraQueSoloSuma implements EsteSabeSumar{

}

interface IVideoclubDAO {
    agregarPelicula(pelicula);
    actualizarPelicula(pelicula);
    borrarPelicula(pelicula);
}
class VideoclubMemoryDAO implements IVideoclubDAO{
    agregarPelicula(pelicula){}
    actualizarPelicula(pelicula){}
    borrarPelicula(pelicula){}
}
class VideoclubWSDAO implements IVideoclubDAO{
   agregarPelicula(pelicula){}
    actualizarPelicula(pelicula){}
    borrarPelicula(pelicula){}
}


var miDAO: VideoclubWSDAO;
miDAO.agregarPelicula()*/


//new Otra().autor = "algo";
server.listen(8888);