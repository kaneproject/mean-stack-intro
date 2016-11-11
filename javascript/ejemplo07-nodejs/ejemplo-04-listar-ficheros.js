let fs = require("fs");
let path = require("path");
let directorio = process.argv[2];// path del directorio
let extension = process.argv[3];// extension a buscar
if(process.argv.length < 4){
    console.log("USAGE: ");
    return 0;
}
fs.readdir(directorio,operarConResultados);
function operarConResultados(error,ficheros){
    if(error){
        console.error("Que habrá pasado!",error);
    }else{
        console.log("Funciones normales");
        ficheros.forEach(operacionPorFichero)
    }
}
function operacionPorFichero(fichero){
    
    if(path.extname(fichero)==extension){
        console.log("Normal"+fichero);
    }
}
fs.readdir(directorio,(error,ficheros)=>{
    if(error){
        console.error("Que habrá pasado!",error);
    }else{
        console.log("Expresiones Lambda");
        ficheros.forEach(
            (fichero)=>{
                if(path.extname(fichero)==extension){
                    console.log("Lambda" + fichero);
                }
            })
    }
})