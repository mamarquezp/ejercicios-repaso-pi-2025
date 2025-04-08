//do...while con condición
require('colours')
const readline = require ('readline-sync')

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
let respuesta = 0
let intentos = 0

//console.log(`El número secreto es: ${NUMERO_SECRETO}`) //descomentar para debug

do {
respuesta = readline.questionInt ("Ingrese un numero entre el 1 y 100: ".magenta)
intentos ++
} while (respuesta!==NUMERO_SECRETO)

console.log(`¡Adivinaste!`.green)
console.log(`El número secreto era: ${NUMERO_SECRETO}`.blue)
console.log(`Lo adivinaste en: ${intentos} intentos`)