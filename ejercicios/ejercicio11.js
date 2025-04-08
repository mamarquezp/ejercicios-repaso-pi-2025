//operadores lógicos &&
require('colours')

let edad = 22
let tieneLicencia = true

if (edad >=18 && tieneLicencia){
    console.log(`Si puede conducir.`.green)
} else{
    console.log(`No puede conducir.`.red)
}