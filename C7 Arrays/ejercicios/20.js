function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element !== array[0]) {
     return false 
    }
    
  }
  return true
}

module.exports = todosIguales;
