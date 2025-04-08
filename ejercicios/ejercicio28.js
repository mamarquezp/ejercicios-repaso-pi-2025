//verificación en do...while
require('colours')
const readline = require ('readline-sync')

const CONTRASENA_CORRECTA = 'claveSegura'
let contrasenaIngresada = ""
let intentos = -1

do {
contrasenaIngresada = readline.question("Ingrese su contrasena: ".magenta)
console.log(`Contraseña incorrecta`.red)
intentos ++
console.clear()
} while (contrasenaIngresada!==CONTRASENA_CORRECTA)

console.log(`¡Acceso permitido`.green)
console.log(`Se hizo ${intentos} intentos incorrectos`.red)