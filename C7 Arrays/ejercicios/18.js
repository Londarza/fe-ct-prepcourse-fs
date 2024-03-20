function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let total = 0
  for (let i = 0; i < resultadosTest.length; i++) {
    const element = resultadosTest[i];
    total += element
    
  }
  return total/ resultadosTest.length
}
console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94]));
module.exports = promedioResultadosTest;
