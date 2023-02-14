//use strict : es para usar modo estricto
"use strict";
try {
  x = 10;
} catch (error) {
  console.log(error);
}
console.log("continuamos.....");
//finally es igul a catch
/*finally{
    console.log('termina rvision de errores');
}*/

//throw tira el error

let resultado = "hola";
try {
  if (isNaN(resultado)) throw "no es un numero";
  else if (resultado === "") throw "es una cadena vacia";
  else if (resultado >= 0) throw "valor positivo";
  else if (resultado > 0) throw "valor negativo";
} catch (errorr) {
  console.log(errorr);
  //console.log(errorr.name);
  //console.log(errorr.message);
}

