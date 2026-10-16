let columnas = prompt("Introduce el numero de columnas:");
let alto = prompt("Introduce los pixeles de altura:");
let ancho = prompt("Introduce los pixeles de anchura:");

let par = 0;

document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

// 1. Inicialización
let i = 1; 

// 2. Condición en el while
while (i <= columnas) {
    if (par == i % 2) {
        document.write('<td width="' + ancho + '" style="background-color: black;">&nbsp;</td>');
    } else {
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    }

    // 3. Incremento (imprescindible para que no se quede colgado)
    i++; 
}

document.write('</tr>');
document.write('</table>');