function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length > 5) {
      return element
    }
    
  }
}
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']));
module.exports = obtenerPrimerStringLargo;
