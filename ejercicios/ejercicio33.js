//modificación con for

let notas = [60, 70, 80]

console.log(`Notas iniciales`)
console.log(notas)

for (let index = 0; index < notas.length; index++) {
    notas[index] = notas[index] + 5    
}

console.log(`Notas modificadas`)
console.log(notas)