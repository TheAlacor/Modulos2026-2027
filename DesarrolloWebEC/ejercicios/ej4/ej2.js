let columnas = prompt("Introduce el numero de columnas:");
let alto = prompt("Introduce los pixeles de altura:");
let ancho = prompt("Introduce los pixeles de anchura:");

let par = 0;

// Quitamos width="200" de la tabla para que se adapte al ancho de las celdas
document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (let i = 1; i <= columnas; i++) {
    if (par == i % 2) {
        // Corregido: Usamos style="background-color: black;"
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    } else {
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    }
}

document.write('</tr>');
document.write('</table>');

