//map()

function agregarIVA(producto){
    const productosConIVA = producto.map((producto) => {
        producto.precio = (producto.precio * 1.12).toFixed(2)
        return producto
})
    return productosConIVA
}

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]

const precioIva = agregarIVA(productos)
console.log(precioIva)
