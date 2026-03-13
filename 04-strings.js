//Strings

let myName= "Luis"
let saludo = "Hola hermosa mi nombre es "
console.log(saludo + myName)

//longitud
console.log(myName.length)

//acceso a caracteres
console.log(saludo[0])

//Métodos comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("nombre"))
console.log(saludo.includes("Hola"))
console.log(saludo.slice(0,10))
console.log(saludo.replace("hermosa","perra"))

//Template Literals
let menssage = `Hola este texto tiene un salto de línea
como la perra que sos`
console.log(menssage)

console.log(`Esta es una interpolación con ${myName} junto con ${saludo}`)