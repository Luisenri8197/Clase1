//Operadores

//operadores aritméticos

console.log(5 + 2) // suma
console.log(5 - 2) // resta
console.log(5 * 2) // multiplicación
console.log(5 / 2) // división

console.log(5 % 2) //MOD - Residuo
console.log(5 ** 2) // Exponencial

let a = 5
let b = 10

a++ //incremento
console.log(a)

b-- //decremento
console.log(b)


//Operadores de asignación
let myVariable = 2
console.log(myVariable)
myVariable +=2
console.log(myVariable)

//Y así con todas las operaciones ariméticas

//Operadores comparación <> == === != !== !===

//Peculiaridades JS
console.log(0 == false)
console.log(1 == true)
//Truthy Values
// Todos los números positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
//Booleanos true

//Falsy Values
//0 , 0n, Null, Undefined, NaN, False, Cadenas string vacías

//Operadores Comparación

console.log(5>2 && 6>3) //and
console.log(5>10 || 9>10) //or
console.log(5 != 5) //Not

//Operadores ternarios
const isRaining = false

isRaining ? console.log("El que lo lea se la come"): console.log("El que no le guste comersela pues se la termina comiendo")