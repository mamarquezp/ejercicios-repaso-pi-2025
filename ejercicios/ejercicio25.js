//do...while
require('colours')
const readline = require('readline-sync')
let opcion = ''
do {
    console.log(`**************** Menu ****************`)
    console.log(`A - Saludo`)
    console.log(`B - Saludo personalizado`)
    console.log(`3 - Salir`)
    console.log(`**************************************`)
    opcion = readline.question("Ingrese su opcion: ")
    if (opcion != "3") {
        switch (opcion.toLocaleLowerCase()) {
            case "a":
                console.log(`\nBienvenid@\n`.green)                
                break
            case "b":
                const nombre = readline.question("Ingrese su nombre: ")
                console.log(`\nBienvenid@ ${nombre}!\n`.green)
                break
            default:
                console.log(`\nOpción seleccionada no válida\n`.red)
                break
        }
    }
} while (opcion != 3)