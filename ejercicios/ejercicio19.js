// condiciones múltiples + operadores
require('colours')

let num1 = 12
let num2 = 3
let operacion = '+'

if (operacion == '+'){
    console.log(`El resultado de la suma es: `+`${num1} + ${num2} = ${num1+num2}`.blue)
}else if (operacion == '-'){
    console.log(`El resultado de la resta es: `+`${num1} - ${num2} = ${num1-num2}`.blue)
}else if (operacion == '*'){
    console.log(`El resultado de la multiplicación es: `+`${num1} * ${num2} = ${num1*num2}`.blue)
}else if (operacion == '/'){
    console.log(`El resultado de la división es: `+`${num1} / ${num2} = ${num1/num2}`.blue)
}