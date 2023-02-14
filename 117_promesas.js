//en promesas se utiliza callback n la funciones

let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Resoluesto correcto");
  else rechazar("se produjo un error");
});

//then y catch
miPromesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error))

let promesa = new Promise((resolver) => {
  //console.log('inicio promesa)

  setTimeout(() => resolver("saludos con promesa y timeout"), 3000);
  //conosle.log('finde promesa')
});

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
  return "saludos con promesas y async";
}
miFuncionConPromesa().then((valor) => console.log(valor));

//async con await
async function funcionconawait() {
  let miPromesa = new Promise((resolver) => {
    resolver("promesa ccon await");
  });
  console.log(await miPromesa);
}

funcionconawait();

//promesas,await,async y setimeout
async function funconConTodo() {
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("promesa con await y timeout"), 3000);
  });
  console.log(await miPromesa);
  console.log("fin funcion");
}

funconConTodo();
