console.log("aplicacion caluladora");
function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado))
    resultado=' No incluye numeros la operación'
  document.getElementById("resultado").innerHTML = "Resultado es:" + resultado;
}
