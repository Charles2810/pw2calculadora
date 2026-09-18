/*
 * OPERACIÓN PORCENTAJE
 * --------------------
 * Calcula el porcentaje del valor mostrado en la calculadora.
 *
 * Ejemplos:
 * 50% = 0.5
 * 25% = 0.25
 * 100% = 1
 *
 * Se integra con las variables y funciones
 * existentes de la calculadora principal.
 */

function porcentaje() {

  // Comprobar que exista un valor
  if (expresion === '') {
    return;
  }

  const numero = Number(expresion);

  // Validar que sea un número válido
  if (!Number.isFinite(numero)) {
    mostrarErrorPorcentaje();
    return;
  }

  // Calcular el porcentaje
  const resultado = numero / 100;

  // Guardar el resultado
  expresion = String(resultado);

  // Mostrarlo en la pantalla de la calculadora
  actualizarPantalla();
}


/*
 * Manejo de errores de la operación porcentaje.
 */
function mostrarErrorPorcentaje() {
  pantalla.textContent = 'Error';
  expresion = '';
}
