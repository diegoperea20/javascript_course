function mostrarReloj() {
  let fecha = new Date();
  let hr = fecha.getHours();
  let min = fecha.getMinutes();
  let seg = fecha.getSeconds();
  document.getElementById("hora").innerHTML = hr + ":" + min + ":" + seg;

  /*Para la fecha */
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = diaSemana + " ," + dia + " " + mes;
  document.getElementById("fecha").innerHTML = fechaTexto;

  /*cambiar borde cada segundo
  document.getElementById("contenedor").classList.toggle("animar");*/
}
/*Para que se muestre mas bonito*/
function formatoHora(hora) {
  if (hora < 10) {
    hora = "0" + hora;
    return hora;
  }
}

/*Para que se muestre cada segundo set interval*/
setInterval(mostrarReloj, 100);
