export function add(a, b){
    return a + b;
}

//console.log(add(3, 6))

//Propiedades

export const PI = 3.14;
export let nombre = "Luis";

//Exportación por defecto

export default function restar(a, b){
    return a - b
}

//Exportar clases

export class circulo {
    constructor(radio){
        this.radio = radio
    }
    area(){
        return Math.PI * Math.pow(this.radio, 2);
    }
}