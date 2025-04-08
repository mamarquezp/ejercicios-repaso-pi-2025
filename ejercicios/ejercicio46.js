//reduce()

const notas = [80, 90, 70, 100]

const suma = notas.reduce((sumaActual,notaActual) => {
    return sumaActual += notaActual
},0)

console.log((suma/notas.length).toFixed(2))