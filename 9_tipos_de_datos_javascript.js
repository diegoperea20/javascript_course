//tipo de dato string
var nombre = "carlos";
console.log(typeof nombre);

//tipo de dato numerico
var numero = 1000;
console.log(numero);

//tipo objeto
var objeto = {
  nombre: "juan",
  apellido: "perez",
  telefono: "56787654",
};

console.log(objeto);

//tipo de dato booleano
var bandera = true;
console.log(typeof bandera);

//tipo de funciones
function mifuncion() {}
console.log(typeof mifuncion);

//tip de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

//tipo undefined
var x;
console.log(typeof x);

//null=ausencia de valor
var y = null;
console.log(typeof y);

//arrays tipo
var autos = ["bmw", "audi", "volvo"];
console.log(autos);
console.log(typeof autos);

//cadena vacia
var z = "";
console.log(typeof z);
