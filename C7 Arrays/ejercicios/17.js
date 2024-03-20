function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let total = 0
  for (let i = 0; i < arrayOfNums.length; i++) {
    const element = arrayOfNums[i];
   
    total += element
    
  }
  return total
  
}

module.exports = agregarNumeros;
