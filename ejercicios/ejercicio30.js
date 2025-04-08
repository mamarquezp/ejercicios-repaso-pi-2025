//acumulador

const numeros = [5, 10, 15, 20]
let acumulador = 0

for (let index = 0; index < numeros.length; index++) {
    acumulador += numeros[index]    
}

console.log(`La suma fue ${acumulador}`)