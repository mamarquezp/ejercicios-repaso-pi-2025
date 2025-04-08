//operadores aritméticos y porcentaje
require('colours')

let precioOriginal = 200
let descuento = 20 // porcentaje
let precioFinal = precioOriginal - (precioOriginal * (descuento/100))

console.log(`=> Precio original: Q.${precioOriginal.toFixed(2)}`.red + ` Precio de promoción (${descuento}% de descuento): Q.${precioFinal.toFixed(2)}`.green)