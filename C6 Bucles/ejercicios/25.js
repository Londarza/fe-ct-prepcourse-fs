function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   let invertido = ''
   let largo = string.length -1
   for (let i = largo; i >= 0 ; i--) {
      invertido += string[i]
   }
   if (string == invertido) {
    return true  
   }else{return false}
}

module.exports = esPalindromo;
