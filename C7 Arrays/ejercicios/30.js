function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const vistos = [];

  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    if (vistos.includes(num)) {
      return num; 
    }
    vistos.push(num);
  }

  return undefined; 
}

module.exports = encontrarElementoRepetido;