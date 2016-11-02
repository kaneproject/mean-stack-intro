let variable = 2018;
//variable = 'texto';
var otraVariable :number = 7;
otraVariable = 14;
//otraVariable = '16'; 

// Tipos
interface Tiempo {
    dia: number;
    mes: number;
    anio: number;
}
var miCumpleanios :Tiempo = {dia:3,mes:11,anio:1978};
console.log("El dia de mi cumple es : " + miCumpleanios.dia);
console.log("Antes de cumplir años : " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("Despues de cumplir años : " + miCumpleanios.anio);
function cumplirAnios(fechaDeCumpleanios :Tiempo):void{
    fechaDeCumpleanios.anio++;
}

// Definiciones de clases

class Persona {
    // Definicion de atributos
    nombre :string;
    apellido1 :string;
    apellido2 :string;
    // Metodo constructor
    constructor(nombre :string, apellido1 :string, apellido2 :string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
    
}

// Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre = "Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/
// Con metodo constructor
let ruben = new Persona( "Ruben","Gomez","Garcia");
let luis = new Persona("Luis","Perez","Garcia");
let alberto = new Persona("Alberto","Gomez","Gonzalez");
console.log(ruben.stringify());
console.log(luis.stringify());
console.log(alberto.stringify());

// Herencia!
class Ciudadano extends Persona {
    identidad: string;
    constructor(nombre :string,apellido1 :string, apellido2 :string, identidad :string){
        super(nombre,apellido1,apellido2);
        this.identidad = identidad;
    }
    /*constructor(identidad :string){
        super(null,null,null);
        this.identidad = identidad;
    }*/
    stringify(): string{
        return super.stringify() + " " + this.identidad;
    }
    
}
var ciudadanoKane = new Ciudadano("Ruben","Gomez","Garcia","1");
console.log(ciudadanoKane.stringify());
var otraPersona: Persona = ciudadanoKane;
console.log(otraPersona.stringify());

class SerVivo {
    static totalDeSeresVivos: number = 0;
    clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos +=1;
    }
    stringify(): string{
        return "Clasificacion: " + this.clasificacion;
    }
}

let pez: SerVivo = new SerVivo("marino");
let pez2: SerVivo = new SerVivo("marino");
let pez3: SerVivo = new SerVivo("marino");
let tigre: SerVivo = new SerVivo("terrestre");
let leon: SerVivo = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);

class Padre {
    public almacenPublico: number;
    protected almacenProtegido: number;
    private almacenPrivado: number;
    dameElAlmacenProtegido(){
        return this.almacenProtegido;
    }
}
let padre = new Padre();
padre.almacenPublico = 77;

class HijoDePadre extends Padre {
    constructor(otroValor: number){
        super();
        this.almacenPublico = 33;
        this.almacenProtegido = otroValor;
    }
}
let hijoDePadre = new HijoDePadre(22);
let hijoDePadre2 = new HijoDePadre(23);
hijoDePadre.almacenPublico;
hijoDePadre.dameElAlmacenProtegido();

abstract class Ser {
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        Ser.totalDeSeres +=1;
    }
    stringify(): string{
        return "Clasificacion: " + this.clasificacion;
    }
    abstract desplazamiento(): string;
    abstract alimentarse(): string;
    //abstract valorParaOrdenar(): number;
}
class Politico extends Ser{
    constructor(){
        super("cucaracha");
    }
    desplazamiento(): string{
        return "En coche oficial";
    }
    alimentarse(): string{
        return "Dame dinero en sobres!";
    }
}
//let ser1: Ser = new Ser(); Esto no se puede!
let politico: Politico = new Politico();

abstract class MiClaseAbstracta{
    
}

class SerDos {
    private static instance: SerDos;
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    private constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        Ser.totalDeSeres +=1;
        if(!SerDos.instance){
            SerDos.instance = this;
        }
        return SerDos.instance;
    }
    stringify(): string{
        return "Clasificacion: " + this.clasificacion;
    }
    /*static instanceOf():SerDos{
        
    }*/

}
//SerDos.instanceOf();
//let serDos = new SerDos();
let otra = "otra";
let funcionAnonimaClasica = function (uno,dos){
    return uno + dos;
}

let funcionLambda = (uno: number,dos: number) =>{
    return uno + dos;
}
console.log("Resultado de sumar 1 y 3 : "+funcionLambda(1,3));
