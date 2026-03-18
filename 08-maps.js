//maps

//maps o diccionario

//Declaración

let myFirstMap = new Map()

console.log(myFirstMap);

//Incialización

myFirstMap = new Map([
  ["name", "Luis Enrique"],
  ["correo", "luisenri@gmail.com"],
  ["edad", 45]
])

console.log(myFirstMap)

//Metodos y Propiedades

//Set

myFirstMap.set("alias","kikelon")
console.log(myFirstMap)

//Actualizar con set
myFirstMap.set("correo","kikelon@gmail.com")
console.log(myFirstMap)

//Get

console.log(myFirstMap.get("edad"))

//comprobar si una clave existe - has

console.log(myFirstMap.has("prueba1"))
console.log(myFirstMap.has("edad"))

//keys
console.log(myFirstMap.keys())

//size
console.log(myFirstMap.size)

//entries

console.log(myFirstMap.entries())

//delete

myFirstMap.delete("alias")
console.log(myFirstMap)

//Clear

myFirstMap.clear()
console.log(myFirstMap)

