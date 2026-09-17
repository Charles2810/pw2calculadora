/*
 * OPERACIÓN POTENCIACIÓN (xʸ)
 * ---------------------------
 * Autor: Eduar Heredia
 * Materia: Programación Web 2
 *
 * Permite elevar un número base a un exponente (xʸ).
 * Ejemplos:
 *   - 2 ^ 3 = 8
 *   - 5 ^ 2 = 25
 *   - 4 ^ 0.5 = 2
 *   - 10 ^ 0 = 1
 *
 * Integración modular:
 * Se auto-registra en el sistema dinámico de la calculadora principal
 * sin modificar ni sobreescribir el núcleo base de la aplicación.
 */

(function () {
  'use strict';

  const operacionPotenciacion = {
    id: 'potenciacion',
    nombre: 'Potenciación',
    autor: 'Eduar Heredia',
    simboloBoton: 'xʸ',
    simboloPantalla: '^',
    tokenOperador: '**',
    tipo: 'binario',
    
    // Función de cálculo directo
    calcular: function (base, exponente) {
      const b = Number(base);
      const e = Number(exponente);
      if (!Number.isFinite(b) || !Number.isFinite(e)) {
        throw new Error('Operación inválida');
      }
      return Math.pow(b, e);
    },

    // Formateador para mostrar el operador visual en pantalla
    formatearPantalla: function (textoExpresion) {
      return textoExpresion.replace(/\*\*/g, '^');
    }
  };

  // Registro dinámico en el objeto global Calculadora si está disponible
  if (typeof window !== 'undefined' && window.Calculadora) {
    window.Calculadora.registrarOperacion(operacionPotenciacion);
  }

  // Exportación para compatibilidad
  if (typeof window !== 'undefined') {
    window.operacionPotenciacion = operacionPotenciacion;
  }
})();
