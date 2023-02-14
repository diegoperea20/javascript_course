/*
class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
}
let persona1 = new Persona("juan", "perez");
console.log(persona1);
*/

//forma con get
class Persona {
  //variable estatica
  static contadorObejorspe = 0; //atributo de nuestra clase puede cambiar

  static get MAX_OBJ() {
    //metodo estatico con constatnte estatico
    return 5;
  }

  email = "valor default email"; //atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorObejorspe < Persona.MAX_OBJ) {
      this.idpersona = ++Persona.contadorObejorspe;
    } else {
      console.log("se ha superado en numero de objetos permitidos");
    }
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this.idpersona + " " + this._nombre + " " + this._apellido;
  }
  toString() {
    //se aplica poliformismo(multiples foras en tiempo de ejecucion)
    return this.nombreCompleto();
  }

  //metodo estatico solo se puede en la clase no objetos

  static saludar() {
    console.log("saludos desde static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

//herencia

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ",  " + this._departamento;
  }
}

let persona1 = new Persona("juan", "perez");
console.log(persona1);
console.log(persona1.nombre);

let empleado1 = new Empleado("maria", "hwasa", "sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//imprimiendo metodo estatico
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//imprimiendo variable estatica
console.log(Persona.contadorObejorspe);
console.log(Empleado.contadorObejorspe);

//imprimiendo variable de objeto
console.log(persona1.email);
console.log(empleado1.email);

//Imprimiendo con el ID
console.log(persona1.toString());
console.log(empleado1.toString());

//imprimiendo metodo  estatico
console.log(Persona.MAX_OBJ);

//imprimiedo funcionamiento if
let persona2 = new Persona("mdjhdh", "dss");
let persona3 = new Persona("mdjhdh", "dss");
let persona4 = new Persona("mdjhdh", "dss");
let persona5 = new Persona("mdjhdh", "dss"); // se muestra en consola

console.log(persona4.toString());
console.log(persona5.toString())//cumple con el if :)
