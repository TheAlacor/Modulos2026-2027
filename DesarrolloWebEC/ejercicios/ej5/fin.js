function sumarPares(numeros) {
  let total = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      total += numeros[i];
    }
  }
  
  return total;
}

// Prueba de ejecución:
const misNumeros = [2, 7, 4, 11, 8];
console.log("Resultado obtenido:", sumarPares(misNumeros)); 
// Resultado esperado: 14 (2 + 4 + 8)