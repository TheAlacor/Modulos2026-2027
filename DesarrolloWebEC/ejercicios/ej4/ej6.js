let numero = prompt("jugador 1, introduce un numero para que lo adivinen:");
let adivinado;

do {
    adivinado = prompt("jugador 2, adivina el numero:");

    if (numero > adivinado) {
        console.log("El numero es mayor, intenta de nuevo");
    } 
    else if (numero < adivinado) { // Corregido: adivinado (con 'i')
        console.log("El numero es menor, intenta de nuevo");
    }

} while (numero != adivinado); // Se repite MIENTRAS no sean iguales

// Una vez que sale del bucle, significa que lo ha adivinado
console.log("¡El numero es igual, has ganado!");