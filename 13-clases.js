//Clases

class Persona {
    constructor(nombre, apellido, edad, alias){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.alias = alias
    }

}

//Sintaxis

let persona1 = new Persona("Luis","Ordonez",45,"Kike")
console.log(persona1)
console.log(typeof(persona1))

//Valores por defecto

class PersonaEstardar {
    constructor(nombre="Nada", apellido = "TuMamitaLaMocha", edad=0, alias = "Kellym"){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.alias = alias
    }

}

let persona2 = new PersonaEstardar()
console.log(persona2.apellido)

persona2.alias = "El Mencho"
console.log(persona2.alias)

//Funciones en clases

class PersonaCamina {
    constructor(nombre="Nada", apellido = "TuMamitaLaMocha", edad=0, alias = "Kellym"){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.alias = alias
    }
    caminar(){
        console.log(`El perro de ${this.nombre} ${this.apellido} le gusta correr con un tubo en el... y eso que tiene ${this.edad} años cha lok ese ${this.alias} `)
    }
}

let persona3 = new PersonaCamina("Sacarías", "Piedras del Rio", 35, "Mencho")

persona3.caminar()

//Propiedades privadas

class PersonaPrivada {
    #numBank 
    constructor(nombre="Nada", apellido = "TuMamitaLaMocha", edad=0, alias = "Kellym", numBank = 0){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.alias = alias
        this.#numBank = numBank
    }
    caminar(){
        console.log(`pagaste con tu numero ${this.numBank} bitch`)
    }
}

let persona4 = new PersonaPrivada("Sacarías", "Piedras del Rio", 35, "Mencho", 6478489)

console.log(persona4.numBank) // no se puede acceder

//Getters y Setters

class PersonaGet {
    #nombre
    #apellido
    #edad
    #alias
    constructor(nombre = "Nada", apellido = "TuMamitaLaMocha", edad, alias = "Kellym"){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#edad = edad
        this.#alias = alias
    }
    get nombre(){
        return this.#nombre
    }

    set apellido(nuevoApellido){
        this.#apellido = nuevoApellido
    }
}

let persona5 = new PersonaGet("Sacarías", "Piedras del Rio", 35, "Mencho")

console.log(persona5)
console.log(persona5.nombre)
persona5.nombre = "Pedro"
console.log(persona5.nombre)
console.log(persona5.apellido)
persona5.apellido = "Larraote"
console.log(persona5.apellido)


//Herencia de clases

class animal{
    constructor(nombre){
        this.nombre = nombre
    }
    sonido(){
        console.log(`El ${this.nombre} hace un sonido de culo`)
    }
}

let animal1 = new animal("Pez")
animal1.sonido()

class Perro extends animal {

    constructor(nombre, tamano){
        super(nombre)
        this.tamano = tamano
    }
    correr (){
        console.log(`El ${this.nombre} corre alv durísimo`)
    }
    sonido(){
        console.log("Ouff")
    }
}

let myPerro = new Perro("El perro Lucas")
myPerro.correr()
myPerro.sonido()
let myPerro2 = new Perro("Lucas",10)
console.log(myPerro2)

//Métodos estáticos

class OperacionesMatematicas {
    static suma(a ,b){
        return a + b
    }
}

console.log(OperacionesMatematicas.suma(5, 10))