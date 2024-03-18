function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let resultado = 0
  for (let i = 0; i <= n; i++) {
    resultado = resultado+i
    
  }
  return resultado
}
console.log(sumarHastaN(3));
module.exports = sumarHastaN;
