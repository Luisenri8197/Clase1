//console

//log

console.log("Hola mundo")

//Error

console.error("Este es un msg de error")
//console.error("Error de conexión: ", new Error("Conexión fallida."))

//warn

console.warn("Este mensaje es una advertencia")

//info

console.info("Este es un info")

//table

let myObj1 = {
    nombre: "Luis",
    apellido: "Ordonez",
    edad: 45,
    alias: "Comeqks"
}

let datos = [
    ["luis",40],
    ["carlos",30],
    ["pepito",20]
]
let datos1 = [
    { nombre: "Luis", edad: 40},
    { nombre: "carlos", edad: 30},
    { nombre: "Lex luttor", edad: 20}
]

console.table(myObj1)
console.table(datos)
console.table(datos1)

//group

console.group("Usuario:")
console.log("Nombre: Luis")
console.log("Apellido: Ordonez")
console.log("Edad: 45")
console.groupEnd()

console.log("Final fuera de group")

//time

console.time("Tiempo de ejecución")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución")

//assert
let i = 10
console.assert(i >= 18, "El usuario debe ser mayor de edad")

//count

console.count("Click")

console.count("Click")

console.countReset("Click")

console.count("click")

//trace


// function funcA(){
//     funcB();
// }

// function funcB(){
//     console.trace("Seguimiento de la ejecución")
// }

// funcA();


// console.clear()