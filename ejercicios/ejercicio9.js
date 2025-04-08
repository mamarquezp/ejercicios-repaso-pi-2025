//operadores de comparación
require('colours')

let numeroA = 15
let numeroB = 20

if (numeroA > numeroB){
    console.log(`El numeroA `+`${numeroA}`.blue+` es mayor al numeroB ${numeroB}`)
}else if (numeroA == numeroB){
    console.log(`El numeroA `+`${numeroA}`.blue +` es igual al numeroB `+`${numeroB}`.blue)
}else if (numeroA < numeroB){
    console.log(`El numeroA ${numeroA} es menor al numeroB `+`${numeroB}`.blue)
} else{
    console.log(`No se pueden comparar los tipos ${typeof(numeroA)} y ${typeof(numeroB)}, ambos deben ser números.`.red)
}