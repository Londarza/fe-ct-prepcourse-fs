function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let filtrado =  arrayOfStrings.filter((i )=> i.startsWith('a'));
   return filtrado
}

module.exports = filter;

