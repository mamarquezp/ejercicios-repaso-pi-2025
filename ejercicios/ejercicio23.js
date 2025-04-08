//agrupación de casos
require('colours')

let mes = 'abril'
let dias = 0

switch (mes) {
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        dias = 30
        break
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        dias = 31
        break
    case "febrero":
        dias = 28
        break
    default:
        console.log(`Mes no válido`.red)
        break
}

if (dias !== 0) {
    console.log(`El mes tiene ${dias} días`)
}