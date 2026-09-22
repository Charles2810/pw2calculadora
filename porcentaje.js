/*
 * OPERACIÓN PORCENTAJE
 * --------------------
 * Convierte el valor actual de la calculadora
 * a su equivalente porcentual dividiéndolo entre 100.
 *
 * Ejemplos:
 * 50% = 0.5
 * 25% = 0.25
 * 100% = 1
 *
 * Esta función se integra con la calculadora principal
 * utilizando las variables:
 *   - expresion
 *   - pantalla
 *   - historial
 *   - actualizarPantalla()
 */

function porcentaje() {

  // Comprobar que exista un valor en la calculadora
  if (expresion === '') {
    return;
  }

  // Convertir la expresión actual a número
  const numero = Number(expresion);

  // Verificar que sea un número válido
  if (!Number.isFinite(numero)) {
    mostrarErrorPorcentaje();
    return;
  }

  // Calcular el porcentaje
  const resultado = numero / 100;

  // Mostrar la operación realizada en el historial
  if (historial) {
    historial.textContent = numero + '% =';
  }

  // Guardar el resultado en la expresión principal
  expresion = String(resultado);

  // Actualizar la pantalla de la calculadora
  actualizarPantalla();
}


/*
 * Manejo de errores específico del porcentaje.
 */
function mostrarErrorPorcentaje() {
  if (historial) {
    historial.textContent = '';
  }

  pantalla.textContent = 'Error';
  expresion = '';
}