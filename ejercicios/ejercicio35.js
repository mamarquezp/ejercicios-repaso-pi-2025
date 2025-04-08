//lógica con índices

const numeros = [1, 2, 3, 4, 5]
const numerosInvertidos= []

for (let index = 0; index < numeros.length; index++) {
    numerosInvertidos[numeros.length-1-index] = numeros[index]    
}

console.log(numeros)
console.log(numerosInvertidos)