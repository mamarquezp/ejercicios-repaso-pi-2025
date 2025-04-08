//doble condición
require('colours')
const readline = require ('readline-sync')

let usuario = 'admin'
let contrasena = '1234'

const usuarioIngresado = readline.question ("Ingrese su usuario: ")
const contrasenaIngresada = readline.question ("Ingrese su contrasena: ")

if(usuarioIngresado==usuario && contrasena == contrasenaIngresada){
    console.log(`Acceso permitido`.green)
}else {
    console.log(`Datos incorrectos`.red)

}