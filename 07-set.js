//Set

//Declaración e Inicialización

miPrimerSet = new Set([1,1,2,2,3,3,4,5])
miPrimerSet.add(10)
console.log(miPrimerSet)

//Operaciones con set add y delete

miPrimerSet.add("pamelachu")
console.log(miPrimerSet)
miPrimerSet.delete(4)
console.log(miPrimerSet)

let borrarUltimo = [...miPrimerSet].pop()
console.log(miPrimerSet.delete(11))
console.log(miPrimerSet.delete(borrarUltimo))
console.log(miPrimerSet)

//Has

console.log(miPrimerSet.has(1))
console.log(miPrimerSet.has(11))

//size
console.log(miPrimerSet.size)

//Convertir set a array

let arraySet = Array.from(miPrimerSet)
let arraySetConPuntos = [...miPrimerSet]

console.log(arraySet)
console.log(arraySetConPuntos)