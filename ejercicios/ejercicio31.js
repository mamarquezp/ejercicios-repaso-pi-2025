//condición dentro de for

const numeros = [2, 7, 10, 15, 22, 33]
let contador = 0

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index]%2 == 0) {
        contador ++ 
    }   
}

console.log(`Hay ${contador} números pares`)