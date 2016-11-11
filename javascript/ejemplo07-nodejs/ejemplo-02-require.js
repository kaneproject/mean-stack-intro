let fs = require('fs')
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
let numeroDeFilas = contenido.toString().split('\n').length;
console.log("Fichero: " + fichero +"\nLineas " + numeroDeFilas);