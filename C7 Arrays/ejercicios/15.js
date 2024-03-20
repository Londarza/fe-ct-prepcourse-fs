function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0;
  }
  const indiceMayor = array.findIndex(function(elemento, indice) {
    return elemento === Math.max(...array);
  });

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
