function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = array.filter((e)=>{
    if (e % 2 == 0) {
      return e
    }
  })
  return pares
}
;
module.exports = filtrarNumerosPares;
