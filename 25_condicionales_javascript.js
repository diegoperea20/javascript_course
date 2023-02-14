let a = 10;
if (a % 2 == 0) {
  console.log("Es un numero par");
} else {
  console.log("Esun numero impar");
}

let vacaciones = false,
  disDescanso = false;

if (vacaciones || disDescanso) {
  console.log("niceee");
} else {
  console.log("no nice");
}

//operador ternario funcina como un if pero en una sola linea

let resultado = 3 > 2 ? "verdadero" : "falso";
console.log(resultado);

let numerito = 9;
result = numerito % 2 == 0 ? "numero par" : "numero inpar";
console.log(result);

//convertir string a number

let esNumero = "10";

let edad = Number(esNumero);
console.log(typeof edad);
console.log(edad);
// cuando es NaN
let k = "10xfgf";
let edadd = Number(k);
console.log(typeof edadd);
console.log(edadd);

if (isNaN(edadd)) {
  console.log("no es un nummero");
}

//utilizano switch case

let cosa = 3;
let numeroTexto = "valor desconocido";

switch (cosa) {
  case 1:
    numeroTexto = "numero uno";
    break;
  case 2:
    numeroTexto = "numero dos";
    break;
  case 3:
    numeroTexto = "numero tres";
    break;
  case 4:
    numeroTexto = "numero cuatro";
    break;
  case 5:
    numeroTexto = "numero cinco";
    break;
  default:
    numeroTexto = "caso no encontrado";
    break;
}
console.log(numeroTexto);

//ciclo while
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}

// ciclo do while
let contado1 = 0;
do {
  console.log(contado1);
  contado1++;
} while (contado1 < 3);
console.log("fin del ciclo");

//ciclo for
for (let contador = 0; contador < 3; contador++) {
  console.log(contador);
}
console.log("fincilco for ");
