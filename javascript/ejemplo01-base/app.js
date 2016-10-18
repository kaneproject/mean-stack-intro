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
function testConArrays(){
    let mi_array = new Array();
    mi_array[0]=7;
    mi_array[1]="valor";
    mi_array[mi_array.length-1];
    let mi_otro_array = [];
    let otro =  ["uno",2,new Date()];
    // Arrays asociativos
    let array_asociativo = new Array();
    array_asociativo['uno'] = 1;
    console.log(array_asociativo['uno']);
    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";
    persona.pruebaDeArgumentos = pruebaDeArgumentos;
    persona.pruebaDeArgumentos();
    console.log("Nombre completo = " + persona.nombre  +" " +persona.apellido1) 
    
}
console.log("Adios mundo cruel!");
function MiClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
    
}
MiClase.prototype.miMetodo = function () {
        return this.clave1 + "-" +this.clave2;
    };
var miObjeto = new MiClase("uno","dos");
console.log("EL valor de la clave 1 es "+miObjeto.clave1);
console.log("Mi objeto tiene : " + miObjeto.miMetodo())

Array.prototype.contiene = function (objeto){
    for(let i = 0; i < this.length ; i++){
        let elementoActual = this[i];
        if(elementoActual == objeto ){
            return true;
        }
    }
    return false;
}
let mi_array_de_prueba = [1,2,3,7,10];
console.log(mi_array_de_prueba.contiene(3));

/texto a validar/.test("si hay texto a validar entonces true");

let mi_info = [{uno:1,dos:2,tres:{uno:1,dos:2,tres:3}},{uno:1,dos:2,tres:3}];
mi_info[0].tres.tres;
var resultado = eval(a)












