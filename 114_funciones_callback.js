//funcion tipo callback
function imprimir(mensaje) {
  console.log(mensaje);
}

function sumapr(opt1, opt2, funcionCallback_) {
  let res = opt1 + opt2;
  funcionCallback_(res);
}
sumapr(5, 3, imprimir);

//funciones Set inteval: imprime cada tiempo 
function reloj() {
  let fecha = new Date();
  console.log(fecha.getHours + ":" + fecha.getMinutes + ":" + fecha.getSeconds);
}

setInterval(reloj, 1000);//imprime la funcion reloj cada 1s 

//llamadas asincronas con uso setTimeout
function mifuncioncallback() {
  console.log("saludo asincrono despues de 3 segg");
}

setTimeout(mifuncioncallback, 3000); //3000ms=3s
setTimeout(() => console.log("saludo asinro 4 s"), 4000);
