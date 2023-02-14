class Persona {
  static contadorDePersonas = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorDePersonas;
  }
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  get edad() {
    return this._edad;
  }
  toString() {
    return (
      this._idPersona +
      " " +
      this._nombre +
      " " +
      this._apellido +
      " " +
      this._edad
    );
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  toString() {
    return super.toString() + " " + this._idEmpleado + " " + this._sueldo;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }
  get idCliente() {
    return this._idCliente;
  }
  get fechaRegistro() {
    return this._fechaRegistro;
  }
  toString() {
    return super.toString() + " " + 'cliente:'+this._idCliente + " " + this._fechaRegistro;
  }
}

//Prueba clase Persona
let persona1 = new Persona("juan", "pipo", 89);
console.log(persona1.toString());

let persona2 = new Persona("di", "rf", 7);
console.log(persona2.toString());

let empleado1 = new Empleado("karla", "gomez", "7", 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado("samu", "arci", "7", 9000);
console.log(empleado2.toString());

let cliente1 = new Cliente("miguel", "cervantes", 30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("miguelo", "cervanteso", 80, new Date());
console.log(cliente2.toString());