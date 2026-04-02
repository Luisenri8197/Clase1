//Excepción

//let myObject
//console.log(myObject.email)

//Capturar errores

let myObject

try{
    console.log(myObject.email)
    console.log("Finaliza la Ejecución")
}catch{
    console.log("Se ha producido un error")
}

//Ejemplo 2

let myObject2

try{
    console.log(myObject2.email)
    console.log("Finaliza la Ejecución")
}catch (error){
    console.log("Se ha producido un error: ", error.message)
}

//Bloque Finally

let myObject3

try{
    //console.log(myObject3.email)
    console.log("Finaliza la Ejecución")
} catch (error){
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código se ejecuta a la vrg")
}

//Lanzamiento de errores

//throw new Error("Se ha producido un error alv")

function sum(a, b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        return a + b;        
    }
    
    throw new Error("No se pueden operar dichos valores")
}

try {
    console.log(sum("vrg", 2))
    console.log(sum(3, "2"))
    console.log(sum("vrg", "2"))
} catch (error) {
    console.log("Se he producido un error: ", error.message)
}