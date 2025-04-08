/*lógica dentro de función
Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."
Si es así, muestra "Correo válido", si no, "Correo inválido".
Solicita un correo al usuario.*/
require('colours')
const readline = require ('readline-sync')

let email = []
let arroba = false
let punto = false

const validarCorreo = (correo) => {
    for(let caracter of correo){
        if (caracter === "@"){
            arroba=true
        } else if (caracter === "."){
            punto=true
        }
    }
    return arroba && punto ? console.log(`Correo válido`.green) : console.log(`Correo inválido`.red)
}

const correoIngresado = readline.question ("Ingrese un correo electronico: ")
email = Array.from(correoIngresado)
validarCorreo(email)