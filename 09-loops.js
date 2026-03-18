//loops o bucles

// for

for (let i = 1; i <= 5 ; i++){
  console.log(`Hola número ${i}`)
}

let mySecondMap = new Map([
  ["nombre","ricardo"],
  ["apellido","kotatzio"],
  ["edad",45],
  ["comida","jirafas"]
])

const numbers = ["Diego","camilo","lizeth","comida","tu","madre","por si acaso"]

lengNumbers = numbers.length

for (let i = 0; i < lengNumbers; i++){
    console.log(`presento el siguiente valor en el indice ${i} el cual corresponde al string ${numbers[i]}`)
}

//while

let i = 0;
while(i<lengNumbers){
    console.log(`presento el siguiente valor en el indice ${i} el cual corresponde al string ${numbers[i]}`);
    i++;
}

//do while
i = 10
do {
    console.log(`presento el siguiente valor en el indice ${i} el cual corresponde al string ${numbers[i]}`);
    i++;

} while(i<lengNumbers)

//for of

for (const [clave, valor] of mySecondMap){
    console.log(`la clave ${clave} corresponde al valor ${valor}`)
}

let myString = "Comida de la buena";
i = 1
for(let valor of myString){    
    console.log(`Letra número ${i} es ${valor}`)
  i++;
}

//buenas prácticas

//uso del break y continue
for (let i = 0; i < lengNumbers; i++){
    if(i === 2){
        console.log("Salto linea");
        continue;
    }else if (i === 5){
        console.log("y aqui termina la mondá")
        break;
    }
    console.log(`presento el siguiente valor en el indice ${i} el cual corresponde al string ${numbers[i]}`)
}