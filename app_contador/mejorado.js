/*FORMA FACIL EASY */
const contador = document.getElementById("contar");

let numero = 0;

function sumaa(){
  numero=numero+1;
  contador.innerHTML = numero;
}

function restaa(){
  if (numero == 0) {} 
  else {
    numero=numero-1;
    contador.innerHTML = numero;
  }
}

function reset(){
    numero=0;
    contador.innerHTML = numero;
}


  
