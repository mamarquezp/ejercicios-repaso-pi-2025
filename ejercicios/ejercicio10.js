//operador módulo %
require('colours')

let numero = 9

if (numero % 2 != 0){
    console.log(`El número ${numero} es impar`.red)
}else {
    console.log(`El número ${numero} es par`.green)
}