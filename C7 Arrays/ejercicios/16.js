function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let resultado = array.map((e,i)=>{
    return e*i
  })
  return resultado
}

module.exports = multiplicarElementosPorIndice;
