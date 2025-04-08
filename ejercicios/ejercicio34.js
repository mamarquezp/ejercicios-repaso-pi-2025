//matriz + anidado

const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

for (let i = 0; i < notas.length; i++) {
    let suma = 0
    for (let j = 0; j < notas[i].length; j++) {
        suma += notas[i][j]
    }
    console.log(`El promedio del estudiante ${i+1} es: ${(suma/notas[i].length).toFixed(2)}`)
}