console.log("Hola mundo!");
variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global"
mi_funcion_con_var();
mi_funcion_con_let();
function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local"
    for(var i = 0;i < 10;i++){
        console.log("Valor de i "+i);
    }
    console.log("valor de i al final "+i);
}
function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local"
    for(let i = 0;i < 10;i++){
        console.log("Valor de i "+i);
    }
    //TODO: Buscar una condicion para evaluar si la variable existe
    //console.log("valor de i al final "+i);
}
console.log("Tipos de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Siete";
// Referencia 0x23467182
var  fechaDeEstreno = new Date();//2016
// Referencia 0x23467182
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("Fecha de estreno" + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
function cambiarYear(fecha){
    //TODO: Asegurarse que lo que llega es de tipo fechaº
    fecha.setFullYear(2011);
    console.log("Fecha de la funcion" + fecha.getFullYear());
}
console.log("Fecha de la funcion" + otraFecha.getFullYear());
console.log("Fecha de estreno" + fechaDeEstreno.getFullYear());
console.log("Resultado typeOf numerico "+ typeof tipoDeDatoNumerico);
console.log("Resultado typeOf cadena "+ typeof tipoDeDatoCadena);
console.log("Resultado de un new Date()" + typeof fechaDeEstreno);
pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);
    console.log("Valor almacenado"+ numero.valueOf());
    console.log("Valor almacenado"+ numero.toFixed()); 
    console.log("Valor almacenado"+ numero.toFixed(4));
    
}
console.log("Referencias");
function pruebaDeArgumentos(argumento1){
    console.log("Numero de parametros enviados " + arguments.length);
    console.log("Numero de argumentos esperado " + arguments.callee.length);
    for(let i=0;i < arguments.length;i++){
        console.log("Posicion : " + i +" valor : " +arguments[i]);
    }
}
pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("hola",7,25,"otro",new Date());
console.log("Inicio de ejemplos JS con Arrays");
console.log("Adios mundo cruel!");














