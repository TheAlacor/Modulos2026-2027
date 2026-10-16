let texto = "123", texto2 = "3.14",texto3 = "abc";

let num = Number(texto);
let dec = parseInt(texto2);
let float = parseFloat(texto3);

console.log(num  + "," + dec + "," + float);

let numero = 1 / 0;


function esEntero(num4) {
    if(!Number.isInteger(numero)) {
        console.log(numero + " No es un numero entero");
    }
    else
        console.log(numero + " Es un numero entero");
}

esEntero(numero);

function esNumero(numero) {
    if(Number.isNaN(numero)) {
        console.log(numero + " No es un numero");
    }
    else
        console.log(numero + " Es un numero");
}

esNumero(numero); 

function esInfinito(numero) {
    if(!Number.isFinite(numero)) {
        console.log("el resultado es infinito"); 
    }
    else
        console.log("El resultado no es infinito");
}
console.log(numero);
esInfinito(numero);