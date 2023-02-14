class Empleado {
  constructor(nombre, sueldo) {
    //para simplificar codigo no poner :this._nombre
    //ES una buen ractica siempre poner  this._nombre segun el profe
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
  obtenerDetalles() {
    return "Empleado: nombre:" + this.nombre + " " + "sueldo:" + this.sueldo;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }
  //sobreescritura de metodos
  obtenerDetalles() {
    return (
      "Gerente:" + super.obtenerDetalles() + " " + "depto:" + this.departamento
    );
  }
}

//funcion con polimorfismo
function imprimir(tipo) {
  console.log(tipo.obtenerDetalles());
  //instanceof: se utiliza para comarar el tipo de clase
  if (tipo instanceof Gerente) {
    console.log("Es un objeto de tipo Gerente");
  }
  else if(tipo instanceof Empleado){
    console.log("Es un objeto de tipo Empleado");
  }
}

let empleado1 = new Empleado("jaun", 8765);
let gerente1 = new Gerente("german", 765, "sistemas");
console.log(gerente1);
console.log(gerente1.obtenerDetalles());

//imprimir con polimorfismo
imprimir(empleado1);
imprimir(gerente1);
