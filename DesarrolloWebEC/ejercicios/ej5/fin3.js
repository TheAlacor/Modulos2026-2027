function procesarRegistro(nombre, edadTexto, esEstudiante) {
  // Conversión y validación de edad
  let edad = edadTexto;
  let mensajeAcceso = "";
  
  if (edad >= 18) {
    let mensajeAcceso = "Acceso concedido a mayores de edad";
  } else {
    let mensajeAcceso = "Acceso restringido a menores";
  }

  console.log(mensajeAcceso);

  // Verificación de descuento por estudiante
  if (esEstudiante = true) {
    console.log("Se ha aplicado el descuento de estudiante.");
  }

  // Recorrido de verificación de historial
  const historialIntentos = [1, 2, 3];
  for (let i = 0; i <= historialIntentos.length; i++) {
    console.log("Verificando intento número: " + historialIntentos[i]);
  }
}

// Caso de prueba
procesarRegistro("Ana", 20, true);