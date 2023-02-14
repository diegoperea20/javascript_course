const ingresos = [
  new Ingreso("salario", 2100.0),
  new Ingreso("venta coche", 1500),
];

const egresos = [new Egreso("Renta departamnto", 900), new Egreso("Ropa", 400)];

function cargarApp() {
  cargarCabecero();
  cargarIngresos();
  cargarEngresos();
}
function totalIngresos() {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
}
function totalEgresos() {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
}

function cargarCabecero() {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}
/*para darle formato a la moneda o valor */
function formatoMoneda(valor) {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}
/*para darle formato al porcentaje */
function formatoPorcentaje(valor) {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
}

function cargarIngresos() {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

function crearIngresoHTML(ingreso) {
  let ingresosHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-outline" onclick="eliminarIngreso(${
            ingreso.id
          })"></ion-icon>
        </button>
      </div>
    </div>
  </div> 
    
    `;
  /*este codigo es automatizado por lo que este se borra:
    <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">Salario</div>
            <div class="derecha limpiarEstilos">
              <div class="elemento_valor">+ 2,200.00</div>
              <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
    
    
    */

  return ingresosHTML;
}

function cargarEngresos() {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

function crearEgresoHTML(egreso) {
  let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(
          egreso.valor / totalEgresos()
        )}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${
                  egreso.id
                })"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;

  /*  <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">Renta departamento</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- 900.00</div>
                        <div class="elemento_porcentaje">21%</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>*/
  return egresoHTML;
}

function eliminarIngreso(id) {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
}

function eliminarEgreso(id) {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEngresos();
}

/*Agregar dato */
function agregarDato() {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, Number(valor.value)));
      cargarCabecero();
      cargarEngresos();
    }
  }
}
