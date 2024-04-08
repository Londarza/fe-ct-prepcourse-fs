/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arrayDePares = [];
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      arrayDePares.push([clave, objeto[clave]]);
    }
  }
  return arrayDePares;
}


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let contadorLetras = {}
  let stringOrdenado = string.split("").sort().join("")
  for (let i = 0; i < stringOrdenado.length; i++) {
    const element = stringOrdenado[i];
    if (contadorLetras.hasOwnProperty(element)) {
      contadorLetras[element]++
    }else{
      contadorLetras[element] = 1
    }
  }
  return contadorLetras
}


function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
   let mayus = ''
   let minus = ''
   for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element === element.toUpperCase()) {
      mayus += element
    }else{
      minus += element
    }
   }
   return mayus + minus
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let fraseArray = frase.split(" ")
  let invertir = fraseArray.map((i)=>{
    return i.split('').reverse().join('')
  })
  let final = invertir.join(' ')
  return final
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroString = numero.toString()
  let numeroReverse = numeroString.split('').reverse().join('')
  if (numeroString == numeroReverse) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let toArray = string.split('')
  let NuevoArray = []
  for (let i = 0; i < toArray.length; i++) {
    const element = toArray[i];
    if (element !== "a" && element !=="b" && element !=="c") {
      NuevoArray.push(element)
    }
    
  }
  return NuevoArray
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let arrayOrdenado = arrayOfStrings.sort((a, b) => a.length - b.length)
  return arrayOrdenado
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let array3 = []
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    let busqueda = array2.find((num)=>{return num == element})
    if (busqueda) {
      array3.push(busqueda)
    }
  } 
  return array3
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
