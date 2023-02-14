// arreglos

// let autos =new Array('bmw','mercedes benz ','volvo')  forma antigua

const autos = ["bmw", "mercedes benz ", "volvo"];
console.log(autos);
console.log(autos[0]);

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
//remplazar en la lista
autos[1] = "cambio";
console.log(autos);

//agregar en la lista
autos.push("audi");
console.log(autos);

console.log(Array.isArray(autos));

//----------------------------FUNCIONES-------------------------------
function miFincion(a, b) {
  console.log("suma:" + (a + b));
}

miFincion(2, 3);

//declaracion funcion de tipo de expresion
let x = function (a, b) {
  return a + b;
};
resultado = x(1, 2);
console.log(resultado);
//funcion tipo self  invoking (no puede ser llamada)
(function (a, b) {
  console.log("ejecutando la funcion   " + (a + b));
})(3, 4);
// funcion de tipo flecha
const sumartipoflecha = (a, b) => a + b;
holaa = sumartipoflecha(3, 5);
console.log(holaa);

//cambio por referencia
const persona = {
  nombre: "juan",
  apellido: "perez",
};
function cambiarValorObjeto(p1) {
  p1.nombre = "carlos";
  p1.apellido = "lara";
}

cambiarValorObjeto(persona);
console.log(persona);
