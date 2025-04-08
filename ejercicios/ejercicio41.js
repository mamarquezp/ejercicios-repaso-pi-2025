/*lógica con bucle dentro de función
Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.
Ejemplo: "a7d3g8" si la longitud es 6.
(No necesitas usar caracteres especiales).*/


const letrasPermitidas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const generarContraseña = (longitud) => {
    const claveTemporal = []
    while (claveTemporal.length < longitud) {
        let caracterGenerado = ""
        let letraNumero = (Math.random() < 0.5) //modificado para que no aproxime y sea más cercano al 50/50
        if (letraNumero) {
            caracterGenerado = Math.floor(Math.random() * 10)
        } else {
            caracterGenerado = letrasPermitidas[Math.floor(Math.random() * letrasPermitidas.length)]            
            let minusculaMayuscula = (Math.random() < 0.5)  //mismo caso que en letraNumero         
            if (minusculaMayuscula) {
                caracterGenerado = caracterGenerado.toUpperCase()
            }
        }

        claveTemporal.push(caracterGenerado)
    }
    return claveTemporal.join("")//corregido para que no muestre las , de separación
}

console.log(`La clave temporal generada es ${generarContraseña(6)}`)