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
console.log("Inicio de ejemplos JS con Arrays")
console.log("Adios mundo cruel!");