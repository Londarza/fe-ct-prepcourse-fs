function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  let dateObject = new Date(fecha);
  
  // Verificamos si la fecha es válida
  // Si el valor de la fecha es un número finito y la fecha obtenida es diferente al valor especial "Invalid Date"
  return !isNaN(dateObject.getTime()) && dateObject instanceof Date;

}

module.exports = esFechaValida;