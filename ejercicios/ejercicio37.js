// función con retorno
const readline = require ('readline-sync')

const calcularAreaTriangulo = (base,altura) => {
    return (base*altura)/2
}

const baseIngresada = readline.questionFloat ("Ingrese el valor de la base: ")
const alturaIngresada = readline.questionFloat ("Ingrese el valor de la altura: ")

console.log(`El valor del área es: ${calcularAreaTriangulo(baseIngresada,alturaIngresada)} unidades cuadradas`)