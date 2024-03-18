function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let invertido = ''
   let largo = texto.length -1
   for (let i = largo; i >= 0 ; i--) {
      invertido += texto[i]
   }
   return invertido
}
module.exports = invertirTexto;
