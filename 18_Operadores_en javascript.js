let a = 3,
  b = 2;
let z = a + b;
console.log("resulatdo de la suma: " + z);

z = a - b;
console.log("resulatado de la resta: " + z);

z = z * b; // la operacin se hace de izquierda a derecha
console.log("resusltado de la multiplicacio:" + z);

z = a / b;
console.log("resulatd de la dicvision:" + z);

z = a % b;
console.log("resultado del residuo:" + z);

z = a ** b;
console.log("resulatdo exponente:" + z);

a += 5; //a=a+5
console.log(a);

a -= 5; //a=a-5
console.log(a);

//INCREMENTO Y DECREMENTO

let ai = 3,
  bi = 2;
let zi = ai + bi;

//PREincremento
zi = ++ai;
console.log(ai);
console.log(zi);

//Posincremento
zi = bi++; // se incrementa despues  b
console.log(bi);
console.log(zi);

//Decremento
zi = --ai;
console.log(ai);
console.log(zi);

//Posdecremento
zi = bi--; // se decrementa despues  b
console.log(bi);
console.log(zi);
