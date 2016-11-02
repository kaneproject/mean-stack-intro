let variable = 2018;
//variable = 'texto';
var otraVariable = 7;
otraVariable = 14;
var miCumpleanios = { dia: 3, mes: 11, anio: 1978 };
console.log("El dia de mi cumple es : " + miCumpleanios.dia);
console.log("Antes de cumplir años : " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("Despues de cumplir años : " + miCumpleanios.anio);
function cumplirAnios(fechaDeCumpleanios) {
    fechaDeCumpleanios.anio++;
}
// Definiciones de clases
class Persona {
    // Metodo constructor
    constructor(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify() {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}
// Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre = "Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/
// Con metodo constructor
let ruben = new Persona("Ruben", "Gomez", "Garcia");
let luis = new Persona("Luis", "Perez", "Garcia");
let alberto = new Persona("Alberto", "Gomez", "Gonzalez");
console.log(ruben.stringify());
console.log(luis.stringify());
console.log(alberto.stringify());
// Herencia!
class Ciudadano extends Persona {
    constructor(nombre, apellido1, apellido2, identidad) {
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    /*constructor(identidad :string){
        super(null,null,null);
        this.identidad = identidad;
    }*/
    stringify() {
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("Ruben", "Gomez", "Garcia", "1");
console.log(ciudadanoKane.stringify());
var otraPersona = ciudadanoKane;
console.log(otraPersona.stringify());
class SerVivo {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
SerVivo.totalDeSeresVivos = 0;
let pez = new SerVivo("marino");
let pez2 = new SerVivo("marino");
let pez3 = new SerVivo("marino");
let tigre = new SerVivo("terrestre");
let leon = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);
class Padre {
    dameElAlmacenProtegido() {
        return this.almacenProtegido;
    }
}
let padre = new Padre();
padre.almacenPublico = 77;
class HijoDePadre extends Padre {
    constructor(otroValor) {
        super();
        this.almacenPublico = 33;
        this.almacenProtegido = otroValor;
    }
}
let hijoDePadre = new HijoDePadre(22);
let hijoDePadre2 = new HijoDePadre(23);
hijoDePadre.almacenPublico;
hijoDePadre.dameElAlmacenProtegido();
class Ser {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
Ser.totalDeSeres = 0;
class Politico extends Ser {
    constructor() {
        super("cucaracha");
    }
    desplazamiento() {
        return "En coche oficial";
    }
    alimentarse() {
        return "Dame dinero en sobres!";
    }
}
//let ser1: Ser = new Ser(); Esto no se puede!
let politico = new Politico();
class MiClaseAbstracta {
}
class SerDos {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
        if (!SerDos.instance) {
            SerDos.instance = this;
        }
        return SerDos.instance;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
SerDos.totalDeSeres = 0;
//SerDos.instanceOf();
//let serDos = new SerDos();
let otra = "otra";
let funcionAnonimaClasica = function (uno, dos) {
    return uno + dos;
};
let funcionLambda = (uno, dos) => {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3 : " + funcionLambda(1, 3));
//# sourceMappingURL=app.js.map