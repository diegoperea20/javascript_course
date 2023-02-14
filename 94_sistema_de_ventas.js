class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idProducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  toString() {
    return (
      "idProducto:" +
      this._idProducto +
      ", " +
      "Nombre:" +
      this._nombre +
      " ," +
      "Precio:$" +
      this._precio
    );
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    //this._contadorProductosAgregados = 0;
  }
  get idOrden() {
    return this._idOrden;
  }
  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      //this._productos[this._contadorProductosAgregados++] = producto;
    } else {
      console.log("Nos peude agregar mas productos");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio; //totalVenta=totalVenta+producto.precio
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this._productos) {
      productoOrden += '\n'+producto.toString() + " ";
    }
    console.log(
      "Orden:" +
        this.idOrden +
        " " +
        "Total:" +
        this.calcularTotal() +
        "," +
        "Productos:" +
        productoOrden
    );
  }
}

// imprime clase producto
let producto1 = new Producto("Pantalon",200);
//console.log(producto1.toString());

let producto2 = new Producto("Camisa",100);
//console.log(producto2.toString());

//orden
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
