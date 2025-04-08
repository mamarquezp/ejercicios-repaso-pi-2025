//búsqueda en arreglo

const nombres = ['Ana', 'Carlos', 'Pedro', 'Lucía']
let nombreEncontrado = false

for (const nombre of nombres){
    if (nombre === "Lucía"){
        nombreEncontrado=true
    }
}

if (nombreEncontrado) {
    console.log(`Nombre encontrado`)
} else {
    console.log(`Nombre no encontrado`)
}