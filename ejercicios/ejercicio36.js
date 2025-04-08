//función con parámetro, sin retorno

const readline = require ('readline-sync')

const saludar=(nombre) => console.log(`Hola, ${nombre}. Bienvenido a la clase de programación`)

const nombre = readline.question ("Ingrese su nombre: ")
saludar(nombre)