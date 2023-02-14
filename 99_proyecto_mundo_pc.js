class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }
  get marca() {
    return this._marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }
  get idRaton() {
    return this._idRaton;
  }
  toString() {
    return (
      "idRaton:" +
      this._idRaton +
      ", " +
      "tipoEntrada:" +
      this._tipoEntrada +
      " ," +
      "marca:" +
      this._marca
    );
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }
  get idTeclado() {
    return this._idTeclado;
  }
  toString() {
    return (
      "idTeclado:" +
      this._idTeclado +
      " ," +
      "TipoEntrada:" +
      this._tipoEntrada +
      " , " +
      "marca:" +
      this._marca
    );
  }
}

class Monitor {
  static contadorMonitor = 0;
  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitor;
    this._marca = marca;
    this._tamaño = tamaño;
  }
  get idMonitor() {
    return this._idMonitor;
  }
  get marca() {
    return this._marca;
  }
  get tamaño() {
    return this._tamaño;
  }
  toString() {
    return (
      "idMonitor:" +
      this._idMonitor +
      " ," +
      "marca:" +
      this._marca +
      " ," +
      "tamaño:" +
      this._tamaño
    );
  }
}

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, monitor, raton, teclado) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }
  toString() {
    return (
      "idComputadora:" +
      this._idComputadora +
      " , " +
      this._nombre +
      "\n" +
      this._monitor +
      "\n" +
      this._raton +
      "\n" +
      this._teclado
    );
  }
}

class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += "\n" + computadora;
    }
    console.log(
      "Orden:" + this._idOrden + " " + "Computadoras:" + computadorasOrden
    );
  }
}

//imprime raton
let raton1 = new Raton("usb", "hp");
console.log(raton1.toString());

let raton2 = new Raton("usb", "hp");
console.log(raton2.toString());

//imprime teclado
let teclado1 = new Teclado("bluetoh", "msi");
console.log(teclado1.toString());

let teclado2 = new Teclado("bluetoh", "msi");
console.log(teclado2.toString());

//imprime  Monitor
let monitor1 = new Monitor("hp", 67);
console.log(monitor1.toString());

let monitor2 = new Monitor("dell", 67);
console.log(monitor2.toString());

//imprime computadora
let computadora1 = new Computadora("hp", monitor1, raton1, teclado1);
console.log(computadora1.toString());

let computadora2 = new Computadora("hp", monitor2, raton2, teclado2);
console.log(computadora2.toString());

//imprime orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);//se agrega a la factura 
orden1.mostrarOrden();
