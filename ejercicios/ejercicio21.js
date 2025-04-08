//switch + strings
require('colours')

let opcion = 'editar'

switch (opcion) {
    case "ver":
        console.log(`Mostrando perfil`)
        break
    case "editar":
        console.log(`Editando datos`)
        break
    case "salir":
        console.log(`Saliendo del sistema`)
        break   
    default:
        console.log(`Opción no válida`.red)
        break
}