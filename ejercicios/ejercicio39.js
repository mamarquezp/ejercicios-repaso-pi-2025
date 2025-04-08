/* función con arreglo como parámetro
Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números ingresados por el usuario 
según un menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta 
que ya no desee ingresar más números y que muestre la suma.
Utiliza push para ingresar cada número dado por el usuario*/
const readline = require ('readline-sync')
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

const numeros = []
let suma = 0
let controlBucle = true

const sumarArreglo = (arreglo) => {
    for (const numero of arreglo){
        suma += numero
    }
}

const agregarNumeros = async () => {
console.log(`Bienvenido al programa para realizar sumas`)
do {
    const numeroIngresado = readline.questionFloat ("Ingrese un numero: ")
    numeros.push(numeroIngresado)
    const nuevoNumeroConfirmacion = await prompt([{
        type: 'list',
        name: 'opt',
        message: '¿Desea sumar otro número?',
        choices: ['Si', 'No']
    }])

    controlBucle = nuevoNumeroConfirmacion.opt.toLowerCase() === 'Si'.toLowerCase()
} while (controlBucle)
    sumarArreglo(numeros)
    console.log(`La suma total fue: ${suma}`)
}

agregarNumeros()