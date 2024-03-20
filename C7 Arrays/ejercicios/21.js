function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let nuevoArray = []
  let ene = false
  let mar =  false
  let nov = false
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element == "Enero") {
      nuevoArray.push(element)
      ene = true
    } else if(element == "Marzo") {
      nuevoArray.push(element)
      mar = true
    }else if (element == "Noviembre"){
      nuevoArray.push(element)
      nov = true
    }
    
  }
  if (ene && mar && nov) {
    return nuevoArray
  }else{ return "No se encontraron los meses pedidos"}
}

module.exports = mesesDelAño;
