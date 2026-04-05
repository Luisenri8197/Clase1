//Exportación de módulos

import { add, PI, nombre, circulo } from "./16-modulos.js"

import resta from "./16-modulos.js"

//Funciones

console.log(add(4, 6))

//Import por default

console.log(resta(6, 8))

//Propiedades

console.log(PI)
console.log(nombre)

//importar Clases

let circulo1 = new circulo(10)
console.log(circulo1.radio)
console.log(circulo1.area().toFixed(2))