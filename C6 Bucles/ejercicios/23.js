function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let limite = 0
  do { num += 5; limite ++
    
  } while (limite < 8);
  return num
}
console.log(doWhile(1));
module.exports = doWhile;