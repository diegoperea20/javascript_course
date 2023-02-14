//Funcion constructor de objetos de ti´po persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
//activa propiedaad nueva sin escribir en el constructor
//Persona.prototype.tel = "54554454";

let padre = new Persona("juan", "perez", "coreeo@gmail.com");
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona("lau", "quintero", "kshjshj@gmail.com");
console.log(madre);

//-------------------USO DE CALL----------------------------------
let personita1 = {
  nombre_cute: "dahyun",
  apellido_cute: "kim",
  nobreCuteComp: function (tituloo, telefonoo) {
    return (
      tituloo +
      ": " +
      this.nombre_cute +
      " " +
      this.apellido_cute +
      "," +
      telefonoo
    );
  },
};

let personita2 = {
  nombre_cute: "jyho",
  apellido_cute: "kimi",
};

//uso de call nomre completo

console.log(personita1.nobreCuteComp("gg", "543"));

console.log(personita1.nobreCuteComp.call(personita2, "ING", "875644343"));

//uso de apply
let arreglo = ["ing", "345678"];
console.log(personita1.nobreCuteComp.apply(personita2, arreglo));
