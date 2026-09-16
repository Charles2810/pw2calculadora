/*
 * OPERACIÓN FACTORIAL
 * -------------------
 * Calcula el factorial de un número entero no negativo.
 *
 * Ejemplos:
 * 5! = 5 × 4 × 3 × 2 × 1 = 120
 * 0! = 1
 *
 * Esta función se integra con la calculadora principal
 * utilizando las variables:
 *   - expresion
 *   - pantalla
 *   - actualizarPantalla()
 */

function factorial() {

  // Comprobar que exista un valor en la calculadora
  if (expresion === '') {
    return;
  }

  const numero = Number(expresion);

  // Validar que el valor sea realmente un número
  if (!Number.isFinite(numero)) {
    mostrarErrorFactorial();
    return;
  }

  // El factorial solo está definido aquí para enteros >= 0
  if (!Number.isInteger(numero) || numero < 0) {
    mostrarErrorFactorial();
    return;
  }

  /*
   * 170! es aproximadamente el factorial más grande
   * que puede manejar Number sin llegar a Infinity.
   */
  if (numero > 170) {
    mostrarErrorFactorial();
    return;
  }

  let resultado = 1;

  // Calcular n! = 1 × 2 × 3 × ... × n
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  // Guardar el resultado en la expresión principal
  expresion = String(resultado);

  // Mostrar el resultado utilizando la función
  // original de la calculadora
  actualizarPantalla();
}


/*
 * Manejo de errores específico del factorial.
 */
function mostrarErrorFactorial() {
  pantalla.textContent = 'Error';
  expresion = '';
}
