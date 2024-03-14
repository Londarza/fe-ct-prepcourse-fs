function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let marcaTiempoActual = Date.now();
  let fechaActual = new Date(marcaTiempoActual).getFullYear();

  let anioNacimiento = new Date(fechaNacimiento)
  let mayoria = fechaActual - anioNacimiento.getFullYear()

  // Mostramos la fecha actual
  if (mayoria >= 18) { return true }
  else { return false }
}

module.exports = esMayorDeEdad;

console.log(esMayorDeEdad('07/08/2000'));