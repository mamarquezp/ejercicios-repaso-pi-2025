//switch + números
require('colours')

let numeroDia = 3

switch (numeroDia) {
    case 1:
        console.log(`Lunes`)
        break
    case 2:
        console.log(`Martes`)
        break
    case 3:
        console.log(`Miércoles`)
        break
    case 4:
        console.log(`Jueves`)
        break
    case 5:
        console.log(`Viernes`)
        break
    default:
        console.log(`Día inválido`.red)
        break
}