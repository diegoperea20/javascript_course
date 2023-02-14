let x = 10;


let persona = {
  nombre: "juan",
  apellido: "perez",
  email: "random@gmail.com",
  edad: 30,
  idioma: "es",
  nombreCompleto: function () {
    return this.nombre + "  " + this.apellido;
  },
  get otraforma() {
    return this.nombre + " " + this.apellido;
  },
  //forma con set
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
};
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);
console.log(persona.otraforma);

//forma de set
console.log(persona.lang);
persona.lang = "es";
console.log(persona.idioma);

//agregar una propiedad en un objeto
persona.tel = "77363767383";

//eliminar una propiedad en un objeto
delete persona.tel;

//formas d eimprimir objeto en navegador web
console.log(persona.nombre + "," + persona.apellido);
// con for in :)
//for in
for (propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

//otra forma
let personaArray = Object.values(persona);
console.log(personaArray);
//otra forma
let personaString = JSON.stringify(persona);
console.log(personaString);

/*forma antigua de hacer objetos 
let persona2 = new Object();
persona2.nombre='carlos'
persona2.apellido='ramirez'
persona2.tel=543254*/
