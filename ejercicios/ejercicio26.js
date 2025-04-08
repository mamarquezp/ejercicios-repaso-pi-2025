// acumulador en while

const numeros = [10, 15, 20, 25, 30, 5]
let suma = 0
let indice = 0

while (suma < 100) {
suma += numeros[indice]
console.log(numeros[indice])
indice++    
}

console.log(`====================`)
console.log(`La suma fue de: ${suma}`)