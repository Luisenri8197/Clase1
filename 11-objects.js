//Objetos

//Sintaxis

let persona = {
    nombre: "Luis",
    apellido: "Ordonez",
    edad: 36,
    alias: "Kike"
}

console.log(`Hola ${persona.nombre} ${persona.apellido} tienes ${persona.edad} años te dicen ${persona.alias} y eres una perra`);

//notación corchetes

console.log(persona["nombre"]);

//Modificaciones

persona.nombre = "Lupita";
console.log(persona.nombre);

console.log(typeof(persona.edad));
persona.edad = "35";
console.log(typeof(persona.edad));

//Eliminar propiedades

delete persona.alias;
console.log(persona);

//Añadir propiedades

persona.email = "luisenrique@gmail.com";
persona.edad = 35
console.log(persona);

//Métodos

let personaAparte = {
    nombre: "Luis",
    apellido: "Ordonez",
    edad: 36,
    alias: "Kike",
    email: "luisenriqueto@gmail.com",

    caminar: function() {
        console.log(`El señor ${persona.apellido} camina como cagao`);
    }
}

personaAparte.caminar();

//Anidar objetos

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

console.log(typeof(personaAnidada.trabajo));
personaAnidada.trabajo.trabajar()

//iteración
console.log("--------Aqui arranca iteración-------")

for (let value in personaAnidada){
    console.log(value + ": " + personaAnidada[value]);
}

//funciones como objetos

function personaObjeto(nombre, edad){ //Debe ser una clase alv
    this.nombre = nombre;
    this.edad = edad;
}

let personaFuncion = new personaObjeto("Luis", 45);
console.log(personaFuncion);
console.log(typeof(personaFuncion));