//Estructuras de datos

//Arrays
let miPrimerArray = []
let miArray2 = new Array(3)

console.log(Array.isArray(miArray2) + " " + Array.isArray(miPrimerArray))

miPrimerArray = [1]
console.log(miPrimerArray)
console.log(miArray2)

//Push y pop

miPrimerArray = [1,3,4,5,6,9]

miPrimerArray.push("Sos")
miPrimerArray.push("una")
miPrimerArray.push("sapa")

console.log(miPrimerArray)
console.log(miPrimerArray.join(" "))

console.log(miPrimerArray.pop())
miPrimerArray.pop()
console.log(miPrimerArray)


//shift y unshift
console.log(miPrimerArray.shift())
console.log(miPrimerArray)

miPrimerArray.unshift("elemento1","elemento2")
console.log(miPrimerArray)

//length
let longitudMiPrimer = miPrimerArray.length
console.log(longitudMiPrimer)

//Clear
miPrimerArray = []
console.log(miPrimerArray)

//slice

miPrimerArray = [1,2,3,4,5,6,"Pedazo de pancracio"]
let miSegundoArray = miPrimerArray.slice(1,5)
console.log(miSegundoArray)

//splice

console.log(miPrimerArray)
miPrimerArray.splice(1,4,4)
console.log(miPrimerArray)