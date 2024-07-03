function calculadora(um, dois, operacao) {
  switch (operacao) {
    case "+":
      return um + dois;
    case "-":
      return um - dois;
    case "*":
      return um * dois;
    case "/":
      return um / dois;
    default:
      return "Operação inválida";
  }
}

var um = parseFloat(prompt("Digite o primeiro número: "));
var dois = parseFloat(prompt("Digite o segundo número: "));
var operacao = prompt("Digite a operação desejada: ");

console.log(`Calculando: ${um} ${operacao} ${dois}`);

var resultado = calculadora(um, dois, operacao);
console.log("Resultado:", resultado);