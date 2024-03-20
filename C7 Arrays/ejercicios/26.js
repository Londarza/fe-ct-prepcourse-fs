function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let multiplo = secuencia.find(element => element % n === 0)
  return multiplo
}
console.log(encontrarPrimerMultiploDeN(7,[1, 2, 3, 4, 5, 6, 7, 8, 9]));
module.exports = encontrarPrimerMultiploDeN;