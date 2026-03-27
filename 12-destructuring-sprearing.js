//Destructuración

let objeto1 = {
    nombre: "Luis",
    apellido: "Ordonez",
    alias: "kike",
    edad: 45
}

//Sintaxys en arrays

let myArray = ["valor1", 35, "valor3", "valor4"]

let [myValue1, myValue2] = myArray
console.log(myValue1 + " " + myValue2)
console.log(typeof(myValue1))
console.log(typeof(myValue2))

// Sintaxis arrays con valores predeterminados

let [myValue3, myValue4, myValue5, myValue6, myValue7 = 0] = myArray
console.log(myValue3 + " " + myValue4  + " " + myValue7)

//Ignorar elementos del array

let [myValue8, , , myValue11, myValue12 = 0] = myArray
console.log(myValue8 + " " + myValue11 + " " + myValue12)

//Destructuración Objetos

let {nombre, edad, alias} = objeto1
console.log(nombre + " " + edad  + " " + alias)

//Sintaxis con nuevos nombres de variables

let {nombre: nombre1, edad: edad1, alias: alias1} = objeto1
console.log(nombre1 + " " + edad1  + " " + alias1)

//Destructuración de objetos anidados

let personaAnidada = {
    nombre: "Luis",
    apellido: "Ordonez",
    edad: 36,
    alias: "Kike",
    email: "luisenriqueto@gmail.com",

    caminar: function() {
        console.log(`El señor ${personaAparte.alias} camina como cagao`);
    },

    trabajo: {
        nombre: "Diseñador",
        exp: 5,
        cargo: "Queleimporta sapo",
        trabajar: function() {
            console.log(`El señor ${this.nombre} trabaja como cagao`);
        }
    }
}

let {nombre: nombre2, trabajo:{nombre: nombreTrabajo}} = personaAnidada
console.log(nombre2)
console.log(nombreTrabajo)

//Propagación (...)

//Sintaxis arrays

let mySecArray = ["primer","segundo","tercero","cuarto","quinto"]

let myThirdArray = [...mySecArray]

let myFourthArray = [...mySecArray, "sexto", "septimo"]

console.log(mySecArray)
console.log(myThirdArray)
console.log(myFourthArray)

//Comninación de arrays

let myFifthArray = [...myFourthArray, ...myThirdArray]
console.log(myFifthArray)

//Sintaxis objetos

let persona1 = {...personaAnidada}
console.log(persona1)