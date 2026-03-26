//Funciones

function myFirstFunction() {
  console.log("Hola Mundo con función")
}

for (let i=0; i < 3; i++){
  myFirstFunction();
}

//Función con parámetros

function msgConText(nombre) {
  console.log(`Hola ${nombre} que linda perra eres`)
}

let primerNombre = "Kmila"
msgConText(primerNombre);

//Función anónima

const llamada = function (name){
    console.log(`Hola ${name} que linda zuripanta eres`)
}

llamada("Yuritza");

//Funciones flecha

const llamada2 = (name) => {
    console.log(`Hola ${name} hij@ de perra`)
}
llamada2("Gus");

const llamada3 = (name) => console.log(`Hola ${name} comeme el huevo`)

llamada3("Fede");

//Parámetros

function sum(a, b){
  console.log(a + b)
}
sum(5, 9)

function defaultSum(a = 0, b = 0){
  console.log(a + b)
}

defaultSum();
defaultSum(4);
defaultSum(4, 10, 2);

//Retorno de valores

function mult(a, b){
    return a * b;
}

console.log(mult(5, 10));

//Funciones anidadas

function extern () {
    console.log("función externa")    
    function intern() {
        console.log("función interna")
    }
    intern();
}

extern();

//Funciones de orden superior

function applyFunct(func, param){
    func(param)
}

applyFunct(llamada3, "Función de orden superior");

//Foreach

myArray = [1,2,3,4,5,6]

myArray.forEach((value) => console.log(value));

//Funciona con set y map