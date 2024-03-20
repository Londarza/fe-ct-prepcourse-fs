function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let nuevoArray=[]

  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 !== 0) {
      continue
    }else{nuevoArray.push(element)}
  }
  return nuevoArray.length
}
console.log(contarParesConContinue([1,2,4,5,2,6]));
module.exports = contarParesConContinue;
