//switch con texto

let tipo = 'bicicleta'

switch (tipo) {
    case "bicicleta":
    case "patineta":
        console.log(`Vehículo sin motor`)
        break
    case "moto":
    case "carro":
    case "bus":
    case "camión":
        console.log(`Vehículo con motor`)
        break   
    default:
        console.log(`Tipo desconocido`.red)
        break
}